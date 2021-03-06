import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { ErrorBoundary } from '@/Components/ErrorBoundary/ErrorBoundary';

afterEach(cleanup);

describe('ErrorBoundary for Class  test', () => {
  it('Render ErrorMsgComponent Fallback if error', () => {
    const WrappedComponent = () => {
      throw new Error('Error!');
    };

    render(
      <ErrorBoundary>
        <WrappedComponent />
      </ErrorBoundary>
    );

    expect(screen.getAllByTestId('error-component').length).toBe(1);
    expect(screen.queryAllByTestId('no-error-component').length).toBe(0);
  });

  it('Render children if have no error', () => {
    const WrappedComponent = () => <div data-testid="no-error-component">No Error</div>;
    render(
      <ErrorBoundary>
        <WrappedComponent />
      </ErrorBoundary>
    );
    expect(screen.queryAllByTestId('error-component').length).toBe(0);
    expect(screen.getAllByTestId('no-error-component').length).toBe(1);
  });
});
