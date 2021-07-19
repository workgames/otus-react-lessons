import React, { ReactElement, useState } from 'react';
import cn from 'classnames';
import './grid-block.style.scss';
import { GridCell } from './GridCell';
import { getDataGrid } from '@/helpers/gameDataPreparation';

type TGridBlockProps = {
  /**
   * Кол-во строк
   */
  rows: number;
  /**
   * Кол-во колонок
   */
  cols: number;
};

export const GridBlock = ({ rows, cols }: TGridBlockProps): JSX.Element => {
  const [selectCell, setSelectCell] = useState({ row: 0, col: 0 });

  const width = cols * 20;

  const selectCellHandler = (row: number, col: number): void => {
    setSelectCell({ row, col });
  };

  const gridData = getDataGrid(rows, cols);

  const rowsArr: Array<ReactElement> = [];
  let cellCalss = '';

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cellId = i + '_' + j;
      cellCalss = gridData[i][j] ? 'on' : 'off';
      rowsArr.push(
        <GridCell
          onSelect={selectCellHandler}
          row={i}
          col={j}
          cellId={cellId}
          key={cellId}
          className={cellCalss}
        />
      );
    }
  }

  return (
    <div>
      <div className={cn('gridBlock')} style={{ width: width }}>
        {rowsArr}
      </div>
      <div>Выбрана ячейка: {`row: ${selectCell.row + 1}, col: ${selectCell.col + 1}`}</div>
    </div>
  );
};
