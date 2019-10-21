(function() {
    function sumOfIntegers(list) {
        return list.reduce((acc, current) => {
            const convert = Number(current);
            if (!Number.isNaN(convert) && Number.isInteger(convert)) {
                return acc + convert;
            } else {
                return acc;
            }
        }, 0);
    }

    function main() {
        const list = [
            'a',
            'sjdkhsdjkhsd',
            '3',
            4.16,
            '7.5',
            4
        ];

        console.log(sumOfIntegers(list)); // should be 7 with the example above
    }

    main();

})();
