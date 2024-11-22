const add = require('../stringCalculator')

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
      expect(add('')).toBe(0)
    });

    test('should return the number itself for a single number', () => {
        expect(add('1')).toBe(1);
        expect(add('42')).toBe(42);
    });

    test('should return the sum of two numbers', () => {
        expect(add('1,2')).toBe(3);
        expect(add('10,20')).toBe(30);
    });

    test('should return the sum of multiple numbers', () => {
        expect(add('1,2,3,4')).toBe(10);
        expect(add('5,15,25')).toBe(45);
    });

    test('should handle newlines between numbers', () => {
        expect(add('1\n2,3')).toBe(6);
        expect(add('4\n5\n6')).toBe(15);
    });

    test('should support custom delimiters', () => {
        expect(add('//;\n1;2;3')).toBe(6);
        expect(add('//|\n4|5|6')).toBe(15);
    });

    test('should throw an error for negative numbers', () => {
        expect(() => add('1,-2')).toThrow('negatives not allowed: -2');
    });

    test('should throw an error for multiple negative numbers', () => {
        expect(() => add('1,-2,-3')).toThrow('negatives not allowed: -2, -3');
    });
})