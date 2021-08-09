import React, { Component } from 'react';

type Props = {};

type State = {
  timerLoadUser: number;
  intervalId: NodeJS.Timer | null;
};

export class TimerLastLoadUser extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      timerLoadUser: 0,
      intervalId: null,
    };
  }

  componentDidMount(): void {
    const intervalId: NodeJS.Timer = setInterval(
      () => this.setState((prevState) => ({ timerLoadUser: prevState.timerLoadUser + 1 })),
      1000
    );
    this.setState({
      intervalId,
    });
  }

  componentWillUnmount(): void {
    clearInterval(this.state.intervalId as NodeJS.Timeout);
  }

  render(): JSX.Element {
    const { timerLoadUser } = this.state;
    return <div>Последнее время загрузки погльзователей: {timerLoadUser} сек. назад</div>;
  }
}
