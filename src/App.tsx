import React from 'react';
import cn from 'classnames';
import { GridBlock } from './Components/Grid/GridBlock';
import { InfoGenerators } from './Components/InfoGenerators';

export const App = ({}): JSX.Element => {
  const rows = 30;
  const cols = 50;

  return (
    <div className={cn('app')}>
      <GridBlock rows={rows} cols={cols} />
      <InfoGenerators count={0} />
    </div>
  );
};
