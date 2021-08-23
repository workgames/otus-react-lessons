import React, { Component } from 'react';
import { UserList } from '@/Components/Users/UserList';
import { Button } from '@/Components/Button';

type Props = {};

type State = {
  isViewUserList: boolean;
};

export class MainPageUsers extends Component<Props, State> {
  state = { isViewUserList: false };

  viewUserListHandler = () => {
    this.setState((prevState: State) => ({
      isViewUserList: !prevState.isViewUserList,
    }));
  };

  render() {
    const { isViewUserList } = this.state;

    if (isViewUserList) {
      return <UserList onClickBack={this.viewUserListHandler} />;
    }

    return (
      <div>
        <Button onClick={this.viewUserListHandler} label={'Загрузка списка пользователей'} />
      </div>
    );
  }
}
