(function () {
    const fs = require('fs');

    async function main() {
        const file = ''
        const stats = fs.statSync(file);
        const fileSizeInBytes = stats.size;

        for (let i = 0; i < fileSizeInBytes; i = i + 7) {
            const data = await new Promise((resolve, reject) => {
                let data;

                // read from i to i+6
                const stream = fs.createReadStream(file, { start: i, end: i + 6 });

                stream.on('data', chunk => {
                    data = data + chunk;
                });

                stream.on('end', () => {
                    resolve(Data);
                });

                stream.on('error', reject);
            });

            fs.appendFileSync(`${file}.temp`, data);
        }
        // remove original file
        try {
            fs.unlinkSync(file)
        } catch (err) {
            console.error(err)
        }

        // rename new
        try {
            fs.renameSync(`${file}.temp`, file);
        } catch (err) {
            console.error(err)
        }
    }

    await main();
})();
