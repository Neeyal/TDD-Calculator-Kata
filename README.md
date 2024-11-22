
# TDD-Calculator-Kata 🎉

This project implements a **String Calculator** using the principles of **Test-Driven Development (TDD)**. The task involves progressively building a calculator that handles a variety of input formats and follows specified rules while maintaining clean, test-driven code.

---

## 📝 Features

- **Basic Arithmetic**: Add numbers from a string input.
- **Flexible Input Handling**:
  - Supports comma `,` and newline `
` as delimiters.
  - Custom single or multi-character delimiters.
  - Handles multiple custom delimiters.
- **Validation**:
  - Throws exceptions for negative numbers.
  - Ignores numbers greater than 1000.
- Fully tested with **Jest** to ensure correctness.

---

## 🚀 How to Use

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Neeyal/TDD-Calculator-Kata
   cd TDD-Calculator-Kata
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

### Usage

Run the calculator with different string inputs:

```javascript
const StringCalculator = require('./stringCalculator')

// Examples:
console.log(new StringCalculator().add(""))           // Output: 0
console.log(new StringCalculator().add("1"))          // Output: 1
console.log(new StringCalculator().add("1,2"))        // Output: 3
console.log(new StringCalculator().add("1,2,3"))      // Output: 6
console.log(new StringCalculator().add("//;1;2"))     // Output: 3
```

---

### Run Tests

This project is fully test-driven. To run all tests:

```bash
npm test
```

---

## 📚 Project Structure

```plaintext
.
├── __tests__/
│   └── stringCalculator.test.js  # Test cases for the calculator
├── stringCalculator.js           # Calculator logic
├── package.json                  # Project dependencies and scripts
├── README.md                     # Project documentation
└── .gitignore                    # Ignored files
```

---

## 🧪 Test Cases

The implementation passes the following scenarios:

1. **Empty string**: Returns `0`.
2. **Single number**: Returns the number itself.
3. **Two numbers**: Returns their sum.
4. **Unknown number of inputs**: Handles multiple numbers.
5. **Newline delimiter**: Supports `
` as a delimiter.
6. **Custom delimiters**: Handles user-defined delimiters.
7. **Negative numbers**: Throws exceptions with the message:
   - `"Negatives not allowed: -1, -3"`
8. **Ignore large numbers**: Numbers > 1000 are ignored.
9. **Delimiters of any length**: Supports delimiters like `//[***]
1***2***3`.
10. **Multiple delimiters**: Handles inputs like `//[*][%]
1*2%3`.

---

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Jest**: Testing framework for JavaScript.
- **Git**: Version control for tracking changes.

---

## 📖 TDD Process

### Development Process:

1. Write the simplest failing test.
2. Implement just enough code to make the test pass.
3. Refactor the code for readability and efficiency.
4. Repeat.

### Commit History:

1. Set up boilerplate.
2. Handle empty string input.
3. Handle single and multiple numbers.
4. Support delimiters and handle edge cases.
5. Refactor and optimize.

---

## 🌟 Example Inputs and Outputs

| Input                         | Output          | Notes                             |
|-------------------------------|-----------------|-----------------------------------|
| `""`                          | `0`             | Empty string returns 0            |
| `"1"`                         | `1`             | Single number                     |
| `"1,2"`                       | `3`             | Two numbers summed                |
| `"1
2,3"`                    | `6`             | Newline as delimiter              |
| `"//;
1;2"`                  | `3`             | Custom delimiter                  |
| `"//[***]
1***2***3"`         | `6`             | Multi-character delimiter         |
| `"//[*][%]
1*2%3"`           | `6`             | Multiple delimiters               |
| `"1,1001"`                    | `1`             | Ignore numbers > 1000             |
| `"1,-2,3"`                    | Exception       | `"Negatives not allowed: -2"`    |

---

## 📂 Repository

Check the code on GitHub: [String Calculator TDD](https://github.com/Neeyal/TDD-Calculator-Kata)
