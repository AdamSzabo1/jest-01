const { divideNums } = require("./divideNums");

function filterEven(numbers) {

    if ( !Array.isArray(numbers) ) throw new Error('Argument must be an array!');

    if (!numbers.every(item => typeof item === 'number')) {
        throw new Error('Argument must be an array of numbers');
    }

    const evenNumbers = numbers.filter((item) => {

        const [, remainder] = divideNums(item, 2);

        return remainder === 0;
    });

    return evenNumbers;
}

module.exports = {
    filterEven
}
