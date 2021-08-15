import React, { Component } from 'react';

type Props = {};

type State = {
  timerLoadUser: number;
};

export class TimerLastLoadUser extends Component<Props, State> {
  intervalId: NodeJS.Timer | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      timerLoadUser: 0,
    };
  }

  componentDidMount(): void {
    this.intervalId = setInterval(
      () => this.setState((prevState) => ({ timerLoadUser: prevState.timerLoadUser + 1 })),
      1000
    );
  }

  componentWillUnmount(): void {
    clearInterval(this.intervalId as NodeJS.Timeout);
  }

  render(): JSX.Element {
    const { timerLoadUser } = this.state;
    return <div>Последнее время загрузки погльзователей: {timerLoadUser} сек. назад</div>;
  }
}
