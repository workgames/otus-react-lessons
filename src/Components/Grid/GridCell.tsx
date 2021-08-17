import React from 'react';
import cn from 'classnames';
import './grid-cell.style.scss';

type GridCellProps = {
  /**
   * Класс
   */
  className: string;

  /**
   * Индефикатор ячейки
   */
  cellId: string;

  /**
   * Строка
   */
  row: number;
  /**
   * Колнка
   */
  col: number;
  /**
   * Optional click handler
   */
  onSelect: (row: number, col: number) => void;
};

export const GridCell = ({ className, cellId, row, col, onSelect }: GridCellProps): JSX.Element => {
  const selectCell = (): void => {
    onSelect(row, col);
  };

  return (
    <div data-testid={'cell'} id={cellId} className={cn('cell', className)} onClick={selectCell} />
  );
};
