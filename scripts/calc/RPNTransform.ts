import { mathematicalFormulasFunc, mathOperatorsIds, mathOperatorsPriorities, scalarFunc, trigonomenticFunc } from "./operators";

class RPNTransform {

  isValid(val: string): boolean {
    return !isNaN(parseFloat(val)) || this.isOperator(val);
  }

  private leftAssoc(operator: string): boolean {
    return operator !== "^";
  }

  private priority(operator: string): number {
    return mathOperatorsPriorities[operator] || 0;
  }

  private isOperator(operator: string): boolean {
    return !!mathOperatorsPriorities[operator];
  }

  isPostfix(expr: string): boolean {
    let patt = new RegExp("[(]");

    if (patt.test(expr)) {
      return false;
    }

    const arr = expr.split(' ');

    if (isNaN(parseFloat(arr[0])) && !mathOperatorsPriorities[arr[0]] ) {
      return false;
    }

    

    if (!isNaN(parseFloat(arr[0])) && (trigonomenticFunc[arr[1]] || mathematicalFormulasFunc[arr[1]])) {
      return true;
    }

    if (!isNaN(parseFloat(arr[0])) && scalarFunc[arr[1]]) {
      return false;
    }

    if (trigonomenticFunc[arr[0]] || mathematicalFormulasFunc[arr[0]]) {
      return false;
    }

    return true;
  }

  toPostfix(expr: string): string {
    let i = 0;

    const nextToken = (): string => {
      while (i < expr.length && expr[i] == " ") {
          i++;
      }

      if (i == expr.length) {
          return "";
      }

      let b = "";
      
      while (
        i < expr.length &&
        expr[i] != " " &&
        expr[i] != "(" &&
        expr[i] != ")" &&
        !this.isOperator(expr[i])
      ) {
        b += expr[i++];
      }

      if (b != "") {
        return b;
      }

      return expr[i++];
    };

    let S: Array<string> = [];
    let O: Array<string | undefined> = [];
    let tok: string;
    let prevTok: string = '';

    while ((tok = nextToken()) != "") {
      if (this.isOperator(tok) && this.isOperator(prevTok)) {
        if (mathOperatorsIds[tok] === mathOperatorsIds[prevTok]) {
          throw new Error("Ввели несколько операторов подряд");
        }
      }
      prevTok = tok;
      if (tok == "(") {
        S.push(tok);
      } else if (tok == ")") {

        while (S.length > 0 && S[S.length - 1] != "(") {
          O.push(S.pop());
        }

        if (S.length == 0) {
          throw new Error("Несоответствующие скобки или оператор");
        }

        S.pop();
      } else if (this.isOperator(tok)) {

        while (
          S.length > 0 &&
          this.isOperator(S[S.length - 1]) &&
          ((this.leftAssoc(tok) &&
            this.priority(tok) <= this.priority(S[S.length - 1])) ||
            (!this.leftAssoc(tok) &&
              this.priority(tok) < this.priority(S[S.length - 1])))
        )
        O.push(S.pop());
        S.push(tok);
      } else {
        O.push(tok);
      }
    }

    while (S.length > 0) {
      if (!this.isOperator(S[S.length - 1])) {
        throw new Error("Несоответствующие скобки или оператор");
      }
      O.push(S.pop());
    }
    if (O.length == 0) {
      throw new Error("Ошибка ввода");
    }

    let s = "";
    for (let i = 0; i < O.length; i++) {
      if (!this.isValid(O[i] as string)) {
        throw new Error("Несоответствующие скобки или оператор");
      }
      if (i != 0) s += " ";
      s += O[i];
    }
    return s;
  }
}

export const rpnTransform = new RPNTransform();
