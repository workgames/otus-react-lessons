import { SizeArea } from '@/components/Grid/types.game';

/**
 *
 * @param {number} rows
 * @param {number} cols
 * @returns boolean[][]
 */
export const getDataGrid = (rows: number, cols: number): boolean[][] => {
  if (rows <= 0 || cols <= 0) {
    throw Error('Неверно переданы кол-во ячеек для создания игровой сетки.');
  }

  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(false));
};

export const arrayClone = <T>(array: Array<T>): Array<T> => {
  return JSON.parse(JSON.stringify(array));
};

export const seedGameArea = (rows: number, cols: number, data: boolean[][]): boolean[][] => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (Math.floor(Math.random() * 4) === 1) {
        data[i][j] = true;
      }
    }
  }
  return data;
};

export const getCountOnCell = (data: boolean[][]): number => {
  let count = 0;
  data.forEach((rows) => {
    count += rows.reduce((acc, value) => {
      return value ? acc + 1 : acc;
    }, 0);
  });
  return count;
};

export const getSizeArea = (size: string): SizeArea => {
  const sizeArea = size.split('x');
  return {
    rows: +sizeArea[0],
    cols: +sizeArea[1],
  };
};
