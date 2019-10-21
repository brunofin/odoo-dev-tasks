(function () {
    function sumOfIntegers(iterator, current, acc) {
        if (current) {
            const convert = Number(current);

            if (!Number.isNaN(convert) && Number.isInteger(convert)) {
                acc = acc + convert;
            }

            return sumOfIntegers(iterator, iterator.next().value, acc);
        } else {
            return acc;
        }
    }

    function main() {
        const list = [
            'a',
            'sjdkhsdjkhsd',
            '3',
            4.16,
            '7.5',
            4
        ].values();

        console.log(sumOfIntegers(list, list.next().value, 0)); // should be 7 with the example above
    }

    main();

})();
