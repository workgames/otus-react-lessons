export type TTrigonomenticOperator = "sin" | "cos" | "tg" | "ctg";
export type TMathematicalFormulasOperator = "fac" | "fib";
export type TScalarOperator = "*" | "/" | "+" | "-" | "^";

export type TMathOperator =
  | TScalarOperator
  | TTrigonomenticOperator
  | TMathematicalFormulasOperator;

export type TFunction = (value: number) => number;
export type TScalarFunc = (a: number, b: number) => number;

export const fac: TFunction = (value: number) => value ? value * fac(value - 1) : 1;
export const fib: TFunction = (value: number) => {
  if (value < 2) {
    return value;
  }
  return fib(value - 1) + fib(value - 2);
};

const convertToRadians: TFunction = (value:number) => value * (Math.PI / 180);

export const sin: TFunction = (value: number) => parseFloat(Math.sin(convertToRadians(value)).toFixed(2));
export const cos: TFunction = (value: number) => parseFloat(Math.cos(convertToRadians(value)).toFixed(2));
export const tg: TFunction = (value: number) => parseFloat(Math.tan(convertToRadians(value)).toFixed(2));
export const ctg: TFunction = (value: number) => parseFloat((cos(value) / sin(value)).toFixed(2));

export const mult: TScalarFunc = (a: number, b: number) => a * b;
export const div: TScalarFunc = (a: number, b: number) => a / b;
export const plus: TScalarFunc = (a: number, b: number) => a + b;
export const minus: TScalarFunc = (a: number, b: number) => a - b;
export const pow: TScalarFunc = (a: number, b: number) => Math.pow(a, b);

export const trigonomenticFunc: {
  [key in TTrigonomenticOperator]: TFunction;
} = {
  sin,
  cos,
  tg,
  ctg,
};

export const mathematicalFormulasFunc: {
  [key in TMathematicalFormulasOperator]: TFunction;
} = {
  fac,
  fib
};

export const scalarFunc: {
  [key in TScalarOperator]: TScalarFunc;
} = {
  "*": mult,
  "/": div,
  "+": plus,
  "-": minus,
  "^": pow,
};

export const allTypesFunc: {
  [key in TMathOperator]: TScalarFunc | TFunction 
} = {
  ...scalarFunc,
  ...mathematicalFormulasFunc,
  ...trigonomenticFunc
}

export const mathOperatorsPriorities: {
  [key in TMathOperator]: number;
} = {
  "^": 3,
  fac: 2,
  fib: 2,
  sin: 2,
  cos: 2,
  tg: 2,
  ctg: 2,
  "*": 2,
  "/": 2,
  "+": 1,
  "-": 1,
};


export const mathOperatorsIds: {
  [key in TMathOperator]: number;
} = {
  fac: 3,
  fib: 3,
  sin: 2,
  cos: 2,
  tg: 2,
  ctg: 2,
  "^": 1,
  "*": 1,
  "/": 1,
  "+": 1,
  "-": 1,
};