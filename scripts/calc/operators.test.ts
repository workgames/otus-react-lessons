import { plus, fac, fib, minus, mult, div, pow, sin, cos, tg, ctg } from './operators';
import faker from 'faker';

describe('Стандартные математические опреации', () => {
  const a = faker.datatype.number({ min: 5, max: 150 });
  const b = faker.datatype.number({ min: 5, max: 350 });

  const resultOfSum = a + b;
  it(`Операция сложения: ${a} + ${b} = ${resultOfSum}`, () => {
    expect(plus(a, b)).toBe(resultOfSum);
  });

  const resultOfMinus = a - b;
  it(`Операция вычитания: ${a} - ${b} = ${resultOfMinus}`, () => {
    expect(minus(a, b)).toBe(resultOfMinus);
  });

  const resultOfMult = a * b;
  it(`Операция умножения: ${a} * ${b} = ${resultOfMult}`, () => {
    expect(mult(a, b)).toBe(resultOfMult);
  });

  const resultOfDiv = a / b;
  it(`Операция деления: ${a} / ${b} = ${resultOfDiv}`, () => {
    expect(div(a, b)).toBe(resultOfDiv);
  });

  const power = 2;
  const resultOfPow = Math.pow(a, power);
  it(`Операция возведения в степень: ${a} ^ ${power} = ${resultOfPow}`, () => {
    expect(pow(a, power)).toBe(resultOfPow);
  });
});

describe('Математичесике функции', () => {
  it(`Факториал 3`, () => {
    expect(fac(3)).toBe(6);
  });
  it(`Фибоначи 8`, () => {
    expect(fib(8)).toBe(21);
  });
});

describe('Тригометрические функции', () => {
  it('sin 30', () => {
    expect(sin(30)).toBe(0.5);
  });

  it('sin 0', () => {
    expect(sin(0)).toBe(0);
  });

  it('cos 60', () => {
    expect(cos(60)).toBe(0.5);
  });

  it('cos 0', () => {
    expect(cos(0)).toBe(1);
  });

  it('tg 60', () => {
    expect(tg(60)).toBe(1.73);
  });

  it('tg 0', () => {
    expect(tg(0)).toBe(0);
  });

  it('ctg 90', () => {
    expect(ctg(90)).toBe(0);
  });

  it('ctg 1', () => {
    expect(ctg(1)).toBe(50);
  });
});
