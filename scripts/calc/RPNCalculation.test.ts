import {rpnCalculation} from './RPNCalculation';

describe('Обратная польская запись - калькулятор', () => {
  it(`((2+2) / 2) * 5`, () => {
    expect(rpnCalculation.cacl('((2+2) / 2) * 5')).toBe(10);
  });

  it(`2 2 + 2 / 5 *`, () => {
    expect(rpnCalculation.cacl('2 2 + 2 / 5 *')).toBe(10);
  });

  it(`((2 + 3) + (5 ^ 3)) / 5`, () => {
    expect(rpnCalculation.cacl('((2 + 3) + (5 ^ 3)) / 5')).toBe(26);
  });

  it(`2 3 + 5 3 ^ + 5 /`, () => {
    expect(rpnCalculation.cacl('2 3 + 5 3 ^ + 5 /')).toBe(26);
  });

  it(`2 + 3 * 5`, () => {
    expect(rpnCalculation.cacl('2 + 3 * 5')).toBe(17);
  });

  it(`sin 30 + sin 30`, () => {
    expect(rpnCalculation.cacl('sin 30 + sin 30')).toBe(1);
  });

  it(`30 sin 30 sin +`, () => {
    expect(rpnCalculation.cacl('30 sin 30 sin +')).toBe(1);
  });

  it(`sin(30) + sin(30)`, () => {
    expect(rpnCalculation.cacl('sin(30) + sin(30)')).toBe(1);
  });

  it(`(sin(30) + sin(30)) + ((3 ^ 2) / 3)`, () => {
    expect(rpnCalculation.cacl('(sin(30) + sin(30)) + ((3 ^ 2) / 3)')).toBe(4);
  });

  it(`fac(3)`, () => {
    expect(rpnCalculation.cacl('fac(3)')).toBe(6);
  });

  it(`fac 3`, () => {
    expect(rpnCalculation.cacl('fac 3')).toBe(6);
  });

  it(`3 fac`, () => {
    expect(rpnCalculation.cacl('fac 3')).toBe(6);
  });

  it(`fib(8)`, () => {
    expect(rpnCalculation.cacl('fib(8)')).toBe(21);
  });

  it(`fib(8) + ((5 +1 ) * 2)`, () => {
    expect(rpnCalculation.cacl('fib(8) + ((5 +1 ) * 2)')).toBe(33);
  });
});

describe('Обратная польская запись - калькулятор, обработка ошибок', () => {
  it(`cosinus 30`, () => {
    expect(() => rpnCalculation.cacl('cosinus 30')).toThrow(
        Error('Несоответствующие скобки или оператор'),
    );
  });

  it(`(2 + 3) % 2`, () => {
    expect(() => rpnCalculation.cacl('(2 + 3) % 2')).toThrow(
        Error('Несоответствующие скобки или оператор'),
    );
  });
});
