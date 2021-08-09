import React from 'react';
import cn from 'classnames';
import { MainPageUsers } from '@/Components/Users/MainPageUsers';
import { ErrorBoundaryClass } from '@/Components/ErrorBoundary/ErrorBoundaryClass';

export const App = ({}): JSX.Element => {
  return (
    <div className={cn('app')}>
      <ErrorBoundaryClass>
        <MainPageUsers />
      </ErrorBoundaryClass>
    </div>
  );
};
