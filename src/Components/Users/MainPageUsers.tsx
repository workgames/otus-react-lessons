import React, { Component } from 'react';
import { UserList } from '@/Components/Users/UserList';
import { Button } from '@/Components/Button';

type Props = {};

type State = {
  isViewUserList: boolean;
};

export class MainPageUsers extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isViewUserList: false,
    };
  }

  viewUserListHandler = (): void => {
    this.setState((prevState: State) => ({
      isViewUserList: !prevState.isViewUserList,
    }));
  };

  render(): JSX.Element {
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
