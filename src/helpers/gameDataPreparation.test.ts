import { getDataGrid } from './gameDataPreparation';

describe('Grid Generator', () => {
  describe('Grid create data', () => {
    it('2x2', () => {
      expect(getDataGrid(2, 2)).toStrictEqual([
        [false, false],
        [false, false],
      ]);
    });
  });

  it('6x6', () => {
    expect(getDataGrid(6, 6)).toStrictEqual([
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
    ]);
  });

  describe('Grid eroor create data', () => {
    it(`rows = 6, cols = 0`, () => {
      expect(() => getDataGrid(6, 0)).toThrow(
        Error('Неверно переданы кол-во ячеек для создания игровой сетки.')
      );
    });

    it(`rows = 0, cols = 6`, () => {
      expect(() => getDataGrid(0, 6)).toThrow(
        Error('Неверно переданы кол-во ячеек для создания игровой сетки.')
      );
    });

    it(`rows = 0, cols = 0`, () => {
      expect(() => getDataGrid(0, 0)).toThrow(
        Error('Неверно переданы кол-во ячеек для создания игровой сетки.')
      );
    });
  });
});
