import React from 'react';
import cn from 'classnames';
import { MainPageUsers } from '@/Components/Users/MainPageUsers';
import { ErrorBoundaryClass } from '@/Components/ErrorBoundary/ErrorBoundaryClass';

type Props = {};

export const App = ({}: Props): JSX.Element => {
  return (
    <div className={cn('app')}>
      <ErrorBoundaryClass>
        <MainPageUsers />
      </ErrorBoundaryClass>
    </div>
  );
};
