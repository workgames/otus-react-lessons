import {allTypesFunc} from './operators';
import {rpnTransform} from './RPNTransform';

/**
 * Класс для рачета
 */
class RPNCalculation {
  /**
   * Проверка на число
   * @param val
   * @returns
   */
  isNumeric(val: string): boolean {
    return !isNaN(parseFloat(val));
  }

  /**
   *
   * @param exp
   * @returns
   */
  cacl(exp: string): number {
    const resultStack: Array<string | number> = [];

    let expression = exp;
    if (!rpnTransform.isPostfix(exp)) {
      expression = rpnTransform.toPostfix(exp);
    }

    const postfix: Array<string> = expression.split(' ');
    for (let i = 0; i < postfix.length; i++) {
      if (this.isNumeric(postfix[i])) {
        resultStack.push(postfix[i]);
      } else {
        const a = resultStack.pop() as string;

        const func = allTypesFunc[postfix[i]];
        if (typeof func === 'function') {
          if (func.length === 1) {
            resultStack.push(func(parseInt(a)));
          } else {
            const b = resultStack.pop() as string;
            resultStack.push(func(parseFloat(b), parseFloat(a)));
          }
        }
      }
    }

    if (resultStack.length > 1) {
      throw new Error('Ошибка расчета');
    } else {
      return resultStack.pop() as number;
    }
  }
}

export const rpnCalculation = new RPNCalculation();

