const { divideNums } = require("./divideNums");

function filterEven(numbers) {

    if ( !Array.isArray(numbers) ) throw new Error('Argument must be an array!');

    const evenNumbers = numbers.filter((item, index) => {

        const [, remainder] = divideNums(item, 2);

        return remainder === 0;
    });

    return evenNumbers;
}

module.exports = {
    filterEven
}
