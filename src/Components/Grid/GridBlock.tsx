import React, { ReactElement } from 'react';
import cn from 'classnames';
import './grid-block.style.scss';
import { GridCell } from './GridCell';

type TCellSelected = {
  row: number;
  col: number;
};

export type GridBlockProps = {
  /**
   * Кол-во строк
   */
  rows: number;
  /**
   * Кол-во колонок
   */
  cols: number;

  onSelectCell: (row: number, col: number) => void;

  gridData: boolean[][];

  selectCell: TCellSelected;
};

export const GridBlock = ({
  rows,
  cols,
  onSelectCell,
  gridData,
  selectCell,
}: GridBlockProps): JSX.Element => {
  const width = cols * 20;
  const rowsArr: ReactElement[] = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cellId = i + '_' + j;
      const cellClass = gridData[i][j] ? 'on' : 'off';
      rowsArr.push(
        <GridCell
          onSelect={() => onSelectCell(i, j)}
          row={i}
          col={j}
          cellId={cellId}
          key={cellId}
          className={cellClass}
        />
      );
    }
  }

  return (
    <div>
      <div className={cn('gridBlock')} style={{ width: width }}>
        {rowsArr}
      </div>
      <div style={{ marginTop: '10px' }}>
        Последняя выбранная ячейка: {`row: ${selectCell.row + 1}, col: ${selectCell.col + 1}`}
      </div>
    </div>
  );
};
