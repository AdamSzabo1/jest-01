

describe('filterEven', () => {

    beforeEach(() => {
        jest.resetModules();
    });

    test('Can filter [6, 8, 10]', () => {

        jest.doMock('./divideNums', () => ({
            ...jest.requireActual('./divideNums'),
            divideNums: jest.fn( () => ([1, 0]) ) 
        }));

        const { divideNums } = require('./divideNums');
        const { filterEven } = require('./filterEven');

        const result = filterEven([6, 8, 10]);

        expect(result).toStrictEqual([6, 8, 10]);
        expect(divideNums).toHaveBeenCalledTimes(3);
    });

    test('Can filter [3, 5, 7]', () => {

        jest.doMock('./divideNums', () => ({
            ...jest.requireActual('./divideNums'),
            divideNums: () => ([1, 1])
        }));

        const { divideNums } = require('./divideNums');
        const { filterEven } = require('./filterEven');

        console.log( divideNums(8, 3) );

        const result = filterEven([3, 5, 7]);

        expect(result).toStrictEqual([]);
    });

    test('should throw if argument isn\'t an array', () => {

        const { filterEven } = require('./filterEven');

        expect( () => { filterEven(5) } ).toThrow();
    });

    test('should throw if argument array contains non-number', () => {

        const { filterEven } = require('./filterEven');

        expect( () => { filterEven([ 4, 6, "5", 2 ]) } ).toThrow();
    });

});
