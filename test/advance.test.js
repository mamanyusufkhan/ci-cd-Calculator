const calculator = require("../src/advance");

describe('Power', () => {
    var BVAdata = [
        [1, 2, 1],
        [4, 5, 1024],
        [3, 12, 531441],
        [4, 6, 4096]
    ]
    describe.each(BVAdata)('BVA: pow(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.pow(a, b)}`, () =>{
            expect(calculator.pow(a, b)).toBe(expected);
        });
    });

    var DTdata = [
        [0, 89, 0],
        [-17, 2, 289],
        [65, 2, 4225],
        [-78, 1, -78]
    ]
    describe.each(DTdata)('DT: pow(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.pow(a, b)}`, () =>{
            expect(calculator.pow(a, b)).toBe(expected);
        });
    });
});

describe('Modulo', () => {
    var BVAdata = [
        [1, 2, 1],
        [4, 5, 4],
        [3, 12, 3],
        [4, 6, 4]
    ]
    describe.each(BVAdata)('BVA: modulo(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.modulo(a, b)}`, () =>{
            expect(calculator.modulo(a, b)).toBe(expected);
        });
    });

    var DTdata = [
        [0, 89, 0],
        [-17, -35, -17],
        [65, -12, 5],
        [-78, 24, -6]
    ]
    describe.each(DTdata)('DT: modulo(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.modulo(a, b)}`, () =>{
            expect(calculator.modulo(a, b)).toBe(expected);
        });
    });
});

