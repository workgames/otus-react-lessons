import React, { Component } from 'react';
import { Button } from '@/Components/Button';
import { fetchUserInfo } from '@/api/api';

type Props = {
  userId: number;
  onClickBack?: () => void;
};

type UserInfoModel = {
  id: number;
  name: string;
  username: string;
  phone: string;
  website: number;
};

type State = {
  isLoading: boolean;
  userInfo: UserInfoModel | null;
};

export class UserInfo extends Component<Props, State> {
  state: State = { isLoading: true, userInfo: null };

  async componentDidMount() {
    const { userId } = this.props;
    const response = await fetchUserInfo(userId);
    this.setState({
      isLoading: false,
      userInfo: response,
    });
  }

  render(): JSX.Element {
    const { isLoading, userInfo } = this.state;
    const { onClickBack } = this.props;

    if (isLoading) {
      return <div>Идеть загрузка загрузка пользователя</div>;
    }

    if (!userInfo) {
      return <div>Нет данных</div>;
    }

    return (
      <div data-testid={'user-info'}>
        <div>
          <h1>Данные о пользователе: {userInfo.name}</h1>
          <div>ID: {userInfo.id}</div>
          <div>Name: {userInfo.name}</div>
          <div>UserName: {userInfo.username}</div>
          <div>UserPhone: {userInfo.phone}</div>
        </div>

        <div>
          <Button label={'Вернуться к списку'} onClick={onClickBack} />
        </div>
      </div>
    );
  }
}
