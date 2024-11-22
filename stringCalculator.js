function add(numbers) {
    if (!numbers) return 0;  // Empty string case

    const negativeNumbers = [];

    if (numbers.startsWith('//')) {
        const delimiterSection = numbers.split('\n')[0];
        const delimiters = delimiterSection.slice(2).split('][').map(d => d.replace(/[\[\]]/g, ''));
        numbers = numbers.slice(delimiterSection.length + 1);
        
        let regex = new RegExp('[' + delimiters.join('') + ']');
        numbers = numbers.split(regex).join(',');
    }

    const numArray = numbers.split(/[,\n;]/).map(Number).filter(num => num <= 1000);

    numArray.forEach(num => {
        if (num < 0) negativeNumbers.push(num);
    });

    if (negativeNumbers.length > 0) {
        throw new Error('negatives not allowed: ' + negativeNumbers.join(', '));
    }

    return numArray.reduce((a, b) => a + b, 0);
}

module.exports = add;
