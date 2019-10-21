(function () {
    function isMultipleOf(value, multiple) {
        return (value % multiple === 0);
    }

    const valueHandlers = {
        matchers: [{
            legalMatches: [3],
            illegalMatches: [7],
            handler: () => {
                console.log('Open');
            }
        }, {
            legalMatches: [7],
            illegalMatches: [3],
            handler: () => {
                console.log('Source');
            }
        }, {
            legalMatches: [3, 7],
            illegalMatches: [],
            handler: () => {
                console.log('OpenSource');
            }
        }],
        nonMatchers: [
            value => console.log(value)
        ]
    };

    function rangeScanner(range, compare, handlers) {
        range.forEach(value => {
            const matches = handlers.matchers.filter(matcher => {
                return matcher.legalMatches.every(legalMatch => compare(value, legalMatch)) &&
                    matcher.illegalMatches.every(illegalMatch => !compare(value, illegalMatch));
            });

            matches.forEach(match => match.handler(value));

            if (matches.length === 0) {
                handlers.nonMatchers.forEach(nonMatcher => nonMatcher(value));
            }
        });
    }

    function main() {
        const range = Array.from({ length: 99 }, (v, k) => k + 1);

        rangeScanner(range, isMultipleOf, valueHandlers);
    }

    main();

})();
