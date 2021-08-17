import React from 'react';
import cn from 'classnames';
import css from '@/assets/scss/app.module.scss';
import { TitleBlockText } from '@/Components/TitleBlockText';
import { GameArea } from '@/Components/GameArea';

export class App extends React.Component {
  render(): JSX.Element {
    let {} = this.props;
    return (
      <div className={cn(css.app)}>
        <TitleBlockText label={'The Game of Life'} size={24} />
        <GameArea />
      </div>
    );
  }
}
