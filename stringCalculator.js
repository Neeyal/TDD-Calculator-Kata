class StringCalculator {
    constructor() {
      this.delimiters = [',', '\n', ';']
    }
  
    add(numbers) {
      if (!numbers) return 0
      this.negativeNumbers = []
  
      if (this._hasCustomDelimiter(numbers)) {
        numbers = this._extractCustomDelimiter(numbers)
      }
  
      const numArray = this._parseNumbers(numbers)
      this._checkForNegatives(numArray)
  
      return this._sum(numArray)
    }
  
    _hasCustomDelimiter(numbers) {
      return numbers.startsWith('//')
    }
  
    _extractCustomDelimiter(numbers) {
      const delimiterSection = numbers.split('\n')[0]
      const delimiters = this._getDelimiters(delimiterSection)
      numbers = numbers.slice(delimiterSection.length + 1)
  
      let regex = new RegExp('[' + delimiters.join('') + ']')
      return numbers.split(regex).join(',')
    }
  
    _getDelimiters(delimiterSection) {
      return delimiterSection.slice(2).split('][').map(d => d.replace(/[\[\]]/g, ''))
    }
  
    _parseNumbers(numbers) {
      return numbers.split(/[,\n;]/).map(Number).filter(num => num <= 1000)
    }
  
    _checkForNegatives(numArray) {
      numArray.forEach(num => {
        if (num < 0) this.negativeNumbers.push(num)
      })
  
      if (this.negativeNumbers.length > 0) {
        throw new Error('negatives not allowed: ' + this.negativeNumbers.join(', '))
      }
    }
  
    _sum(numArray) {
      return numArray.reduce((a, b) => a + b, 0)
    }
  }
  
  module.exports = StringCalculator
    