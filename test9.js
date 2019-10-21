(function () {

    function main() {
        const alphabet = Array.from({ length: (122-97) + 1 }, (v, k) => k + 97)
            .map(value => String.fromCharCode(value).toUpperCase());

        console.log(alphabet);
    }

    main();
})();
