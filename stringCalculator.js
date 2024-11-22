function add(numbers) {
    if (!numbers) return 0 // Empty string case

    if (numbers.startsWith('//')) {
        const delimiter = numbers[2];
        numbers = numbers.slice(4);
        return numbers.split(delimiter).map(Number).reduce((a, b) => a + b, 0);
    }

    const negativeNumbers = [];
    const numArray = numbers.split(/[,\n;]/).map(Number).filter(num => num <= 1000);

    numArray.forEach(num => {
        if (num < 0) negativeNumbers.push(num);
    });

    if (negativeNumbers.length > 0) {
        throw new Error('negatives not allowed: ' + negativeNumbers.join(', '));
    }

    return numArray.reduce((a, b) => a + b, 0);
}

module.exports = add