const StringCalculator = require('../stringCalculator')

describe('String Calculator', () => {
  let calculator

  beforeEach(() => {
    calculator = new StringCalculator()
  })

  test('should return 0 for an empty string', () => {
    expect(calculator.add('')).toBe(0)
  })

  test('should return the number itself for a single number', () => {
    expect(calculator.add('1')).toBe(1)
    expect(calculator.add('42')).toBe(42)
  })

  test('should return the sum of two numbers', () => {
    expect(calculator.add('1,2')).toBe(3)
    expect(calculator.add('10,20')).toBe(30)
  })

  test('should return the sum of multiple numbers', () => {
    expect(calculator.add('1,2,3,4')).toBe(10)
    expect(calculator.add('5,15,25')).toBe(45)
  })

  test('should handle newlines between numbers', () => {
    expect(calculator.add('1\n2,3')).toBe(6)
    expect(calculator.add('4\n5\n6')).toBe(15)
  })

  test('should support custom delimiters', () => {
    expect(calculator.add('//;\n1;2;3')).toBe(6)
    expect(calculator.add('//|\n4|5|6')).toBe(15)
  })

  test('should support custom delimiters with special case *', () => {
    expect(calculator.add('//*\n4*5*6')).toBe(120)
  })

  test('should throw an error for negative numbers', () => {
    expect(() => calculator.add('1,-2')).toThrow('negatives not allowed: -2')
  })

  test('should throw an error for multiple negative numbers', () => {
    expect(() => calculator.add('1,-2,-3')).toThrow('negatives not allowed: -2, -3')
  })

  test('should ignore numbers greater than 1000', () => {
    expect(calculator.add('1001,2')).toBe(2)
  })

  test('should support multiple delimiters', () => {
    expect(calculator.add('//[;][+]\n1;2;3')).toBe(6)
  })

  test('should support delimiters of any length', () => {
    expect(calculator.add('//[***]\n1***2***3')).toBe(6)
  })

  test('should support delimiters with different characters', () => {
    expect(calculator.add('//[;][%]\n1;2%3')).toBe(6)
  })
})
