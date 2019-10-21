(function () {
    let secret;
    let operations = 0;
    const maxOperations = 50;

    function verify(guess) {
        operations++;

        if (guess < secret) {
            return -1;
        } else if (guess > secret) {
            return 1;
        } else {
            return 0;
        }
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function guesser(min, max) {
        const number = getRandomInt(min, max);

        const direction = verify(number);

        if (operations >= maxOperations) {
            console.log(`I could not guess your number. The closest I got was: ${number} and the secret was ${secret}.`);
            return false;
        }

        if (direction < 0) {
            return guesser(number, max);
        } else if (direction > 0) {
            return guesser(min, number);
        } else {
            console.log(`Was your number ${number}? (Secret: ${secret}, Operations: ${operations})`);
            return true;
        }

    }

    function main() {
        const min = 1,
            max = 1000000;

        secret = getRandomInt(min, max);

        guesser(min, max);
    };

    main();

})();
