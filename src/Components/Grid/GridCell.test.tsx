import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { GridCell } from '@/Components/Grid/GridCell';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

describe('Grid Cell', () => {
  it('Вывод ячейки и нажатие на нее, а также проверка клсаа', () => {
    const onClick = jest.fn();
    const { container, getByTestId } = render(
      <GridCell cellId="1_1" onSelect={onClick} className="off" col={1} row={1} />
    );
    const cell = getByTestId('cell');

    expect(cell).toBeInTheDocument();
    userEvent.click(cell);
    expect(onClick).toHaveBeenCalled();
    onClick(1, 1);
    expect(onClick).toHaveBeenCalledWith(1, 1);
    expect(container.firstChild).toHaveClass('off');
    expect(container.firstChild).toHaveAttribute('id', '1_1');
  });
});
