import React from 'react';
import { MainPageUsers } from '@/Components/Users/MainPageUsers';
import { ErrorBoundary } from '@/Components/ErrorBoundary/ErrorBoundary';

type Props = {};

export const App = ({}: Props) => {
  return (
    <div className="app">
      <ErrorBoundary>
        <MainPageUsers />
      </ErrorBoundary>
    </div>
  );
};
