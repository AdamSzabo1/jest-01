

describe.only('filterEven', () => {

    beforeEach(() => {
        jest.resetModules();
    });

    test.skip('Can filter [1, 2, 4]', () => {

        const result = filterEven([1, 2, 4]);

        expect(result).toStrictEqual([2, 4]);
    });

    test('Can filter [6, 8, 10]', () => {

        jest.doMock('./divideNums', () => ({
            ...jest.requireActual('./divideNums'),
            divideNums: () => ([1, 0])
        }));

        const { filterEven } = require('./filterEven');

        const result = filterEven([6, 8, 10]);

        expect(result).toStrictEqual([6, 8, 10]);
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

});
