import React from 'react';
import css from '@/assets/scss/app.module.scss';
import { TitleBlockText } from '@/Components/TitleBlockText';
import { GameArea } from '@/Components/GameArea';

export class App extends React.Component {
  render() {
    return (
      <div className={css.app}>
        <TitleBlockText label="The Game of Life" size={24} />
        <GameArea />
      </div>
    );
  }
}
