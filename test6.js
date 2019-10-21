(function () {
    const https = require('https');
    const fs = require('fs');

    function main() {
        const url = `https://www.sap.com/belgique/index.html`;

        https.get(url, response => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                data = String(data).replace(new RegExp('SAP', 'g'), 'Odoo');

                fs.writeFile("./index_replaced.html", data, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                });
            });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    }

    main();
})();
