import { arrayClone, getCountOnCell, getDataGrid, getSizeArea } from './gameDataPreparation';

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

  it('Count cell', () => {
    const count = getCountOnCell([
      [false, false, false, false, false, false],
      [false, true, false, false, true, true],
      [false, false, false, false, false, false],
      [false, true, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
    ]);
    expect(count).toBe(4);
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

describe('Game Area data', () => {
  it('return size area from label', () => {
    const size = getSizeArea('20x30');
    expect(size).toStrictEqual({ rows: 20, cols: 30 });
  });

  it('return array clone data area ', () => {
    const area = getDataGrid(3, 3);
    const areaClone = arrayClone(area);

    expect(areaClone).toStrictEqual(area);
  });
});
