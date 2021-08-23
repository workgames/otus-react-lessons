import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { GridBlock, GridBlockProps } from '@/Components/Grid/GridBlock';
import userEvent from '@testing-library/user-event';
import { arrayClone, getDataGrid, seedGameArea } from '@/helpers/gameDataPreparation';

afterEach(cleanup);

const rows = 6;
const cols = 6;

const props: GridBlockProps = {
  gridData: getDataGrid(rows, cols),
  onSelectCell: jest.fn(),
  selectCell: { row: 1, col: 1 },
  cols,
  rows,
};

describe('Grid Block Area', () => {
  it('Grid Area Cell', () => {
    const { getAllByTestId } = render(<GridBlock {...props} />);
    const cells = getAllByTestId('cell');
    expect(cells).toHaveLength(rows * cols);
    userEvent.click(cells[2]);
    expect(props.onSelectCell).toHaveBeenCalled();
  });

  it('Grid Area cell seed', () => {
    const { container } = render(
      <GridBlock {...props} gridData={seedGameArea(rows, cols, arrayClone(props.gridData))} />
    );
    expect(container.querySelectorAll('.on').length > 0).toBeTruthy();
  });
});
