import React from 'react';
import cn from 'classnames';
import './grid-cell.style.scss';

type TGridCell = {
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

export const GridCell = ({ className, cellId, row, col, onSelect }: TGridCell): JSX.Element => {
  return (
    <div id={cellId} className={cn('cell', className)} onClick={() => onSelect(row, col)}></div>
  );
};
