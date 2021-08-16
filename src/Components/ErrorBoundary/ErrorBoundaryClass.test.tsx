import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { ErrorBoundaryClass } from '@/Components/ErrorBoundary/ErrorBoundaryClass';

afterEach(cleanup);

describe('ErrorBoundary for Class  test', () => {
  it('Render ErrorMsgComponent Fallback if error', () => {
    const WrappedComponent = () => {
      throw new Error('Error!');
    };

    render(
      <ErrorBoundaryClass>
        <WrappedComponent />
      </ErrorBoundaryClass>
    );

    expect(screen.getAllByTestId('error-component').length).toBe(1);
    expect(screen.queryAllByTestId('no-error-component').length).toBe(0);
  });

  it('Render children if have no error', () => {
    const WrappedComponent = () => <div data-testid="no-error-component">No Error</div>;
    render(
      <ErrorBoundaryClass>
        <WrappedComponent />
      </ErrorBoundaryClass>
    );
    expect(screen.queryAllByTestId('error-component').length).toBe(0);
    expect(screen.getAllByTestId('no-error-component').length).toBe(1);
  });
});
