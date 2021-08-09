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

  async componentDidMount(): Promise<void> {
    const userList = await this.fetchUserList(this.state.countUserList);
    this.setState({
      isLoading: false,
      userList,
    });
  }

  async componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): Promise<void> {
    if (prevState.countUserList !== this.state.countUserList && this.state.countUserList <= 10) {
      this.setState({ isLoading: true });
      const userList = await this.fetchUserList(this.state.countUserList);
      this.setState({
        isLoading: false,
        userList,
      });
    }
  }

  fetchUserList = async (count: number): Promise<UserListModel[]> => {
    const data = await fetchUserList();
    return data?.slice(0, count);
  };

  viewUserInfoHandler = (idUser: number): void => {
    this.setState({ userId: idUser });
  };

  clickBackUserListHandler = (): void => {
    this.setState({ userId: 0 });
  };

  loadUserMoreHandler = (): void => {
    this.setState((prevState: State) => ({
      countUserList: prevState.countUserList + 1,
    }));
  };

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): boolean {
    if (nextState.countUserList > 10) {
      return false;
    }
    return true;
  }

  render(): JSX.Element {
    const { isLoading, userList, userId } = this.state;
    const { onClickBack } = this.props;

    if (isLoading) {
      return <div>Идеть загрузка списка пользователей</div>;
    }

    return userId ? (
      <UserInfo userId={userId} onClickBack={this.clickBackUserListHandler} />
    ) : (
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
