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
