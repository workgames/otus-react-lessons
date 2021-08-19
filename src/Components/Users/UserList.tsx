import React, { Component } from 'react';
import { Button } from '@/Components/Button';
import { UserInfo } from '@/Components/Users/UserInfo';
import { TimerLastLoadUser } from '@/Components/Users/TimerLastLoadUser';
import { fetchUserList } from '@/api/api';

type Props = {
  onClickBack?: () => void;
};

type UserListModel = {
  id: number;
  name: string;
  username: string;
};

type State = {
  isLoading: boolean;
  countUserList: number;
  userList: UserListModel[] | null;
  userId: number;
};

export class UserList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: true,
      userList: null,
      userId: 0,
      countUserList: 2,
    };
  }

  async componentDidMount() {
    await this.fetchUserList(this.state.countUserList);
  }

  async componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    if (prevState.countUserList !== this.state.countUserList && this.state.countUserList <= 10) {
      this.setState({ isLoading: true });
      await this.fetchUserList(this.state.countUserList);
    }
  }

  fetchUserList = async (count: number) => {
    const data = await fetchUserList();
    this.setState({
      isLoading: false,
      userList: data?.slice(0, count),
    });
  };

  viewUserInfoHandler = (idUser: number) => {
    this.setState({ userId: idUser });
  };

  clickBackUserListHandler = () => {
    this.setState({ userId: 0 });
  };

  loadUserMoreHandler = () => {
    this.setState((prevState: State) => ({
      countUserList: prevState.countUserList + 1,
    }));
  };

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): boolean {
    return !(nextState.countUserList > 10);
  }

  render() {
    const { isLoading, userList, userId } = this.state;
    const { onClickBack } = this.props;

    if (isLoading) {
      return <div>Идеть загрузка списка пользователей</div>;
    }

    if (userId) {
      return <UserInfo userId={userId} onClickBack={this.clickBackUserListHandler} />;
    }

    return (
      <div data-testid={'user-list'}>
        <h1>Список пользователей</h1>
        <TimerLastLoadUser />
        <div>
          <Button label={'Вернуться назад'} onClick={onClickBack} />
          <Button label={'Загрузить еще'} onClick={this.loadUserMoreHandler} />
        </div>
        <br />
        <div>
          {userList?.map((item: UserListModel) => {
            return (
              <div data-testid={'user-item'} key={item.id}>
                <div>
                  <div>ID: {item.id}</div>
                  <div>Name: {item.name}</div>
                  <div>UserName: {item.username}</div>
                  <div>
                    <Button
                      label={'Данные о пользователе'}
                      onClick={() => this.viewUserInfoHandler(item.id)}
                    />
                  </div>
                </div>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
