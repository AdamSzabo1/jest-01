
function divideNums(numA, numB) {

    if (typeof numA !== 'number' || typeof numB !== 'number') {
        throw new Error('Invalid Argument Exception');
    }

    if (numB === 0) throw new Error('numB cannot be 0');

    const result = Math.floor(numA / numB);
    let remainder = numA % numB;

    remainder = remainder === -0 ? 0 : remainder;

    return [result, remainder];
}

module.exports = {
    divideNums
}
