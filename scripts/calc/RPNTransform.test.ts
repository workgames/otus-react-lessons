import { rpnTransform } from "./RPNTransform";

describe("Обратная польская запись - конвертор, валидная обработка", () => {
    it(`((2+2) / 2) * 5`, () => {
      expect(rpnTransform.toPostfix('((2+2) / 2) * 5')).toBe('2 2 + 2 / 5 *');
    });

    it(`2+4*3^2`, () => {
        expect(rpnTransform.toPostfix('2+4*3^2')).toBe('2 4 3 2 ^ * +');
    });

    it(`sin (2) + cos (2)`, () => {
        expect(rpnTransform.toPostfix('sin (2) + cos (2)')).toBe('2 sin 2 cos +');
    });

    it(`sin (2) + cos (2) + 20`, () => {
        expect(rpnTransform.toPostfix('sin (2) + cos (2) + 20')).toBe('2 sin 2 cos + 20 +');
    });

    it(`sin 2 + cos 2`, () => {
        expect(rpnTransform.toPostfix('sin 2 + cos 2')).toBe('2 sin 2 cos +');
    });
});

describe("Обратная польская запись - конвертор, обработка ошибок", () => {
    it(`((2+2) / 2 * 5`, () => {
      expect(() => rpnTransform.toPostfix('((2+2) / 2 * 5')).toThrow(Error("Несоответствующие скобки или оператор"));
    });

    it(`((2+2) / 2) % 5`, () => {
        expect(() => rpnTransform.toPostfix('((2+2) / 2) % 5')).toThrow(Error("Несоответствующие скобки или оператор"));
    });

    it(`2 ++ 2`, () => {
        expect(() => rpnTransform.toPostfix('2 ++ 2')).toThrow(Error("Ввели несколько операторов подряд"));
    });

    it(`sin sin 30`, () => {
        expect(() => rpnTransform.toPostfix('sin sin 30')).toThrow(Error("Ввели несколько операторов подряд"));
    });
});

describe("Обратная польская запись - проверка на принадлежность что запись польская", () => {
    it(`((2+2) / 2) - 5`, () => {
        expect(rpnTransform.isPostfix('((2+2) / 2) - 5')).toBe(false);
    });

    it(`2 + 4 * 3 ^ 2`, () => {
        expect(rpnTransform.isPostfix('2 + 4 * 3 ^ 2')).toBe(false);
    });

    it(`2 4 3 2 ^ * +`, () => {
        expect(rpnTransform.isPostfix('2 4 3 2 ^ * +')).toBe(true);
    });

    it(`2 sin 2 cos +`, () => {
        expect(rpnTransform.isPostfix('2 sin 2 cos +')).toBe(true);
    });

    it(`sin 2`, () => {
        expect(rpnTransform.isPostfix('sin 2')).toBe(false);
    });

    it(`fib 3`, () => {
        expect(rpnTransform.isPostfix('fib 3')).toBe(false);
    });

});