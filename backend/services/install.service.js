// Import th db connection file
const connection = require('../config/db.config');

// Import the fs module to read files
const fs = require('fs');

// A function to install the application directly from the API
async function installDirectFromApi() {
    try {
        let queries = [];
        let finalMessage = {};
        console.log("Installing DB directlty from the API");

        //Query to create the database
        const queryfile = __dirname + '/sql/initial-query.sql';
        console.log(queryfile);
        let templine = '';
        const lines = await fs.readFileSync(queryfile, 'utf-8').split('\n');
        const executed = await new Promise((resolve, reject) => {
            lines.forEach((line) => {
                if (line.trim().startsWith('--') || line.trim() === '') {
                    return
                }
                templine += line;
                if (line.trim().endsWith(';')) {
                    const sqlQuery = templine.trim();
                    queries.push(sqlQuery);
                    templine = '';
                }
            });
            resolve("Queries are added to the list");
        });
        for (let i = 0; i < queries.length; i++) {
            try {
                console.log(queries);
                const result = await connection.query(queries[i]);
                console.log("Table created successfully:");
            } catch (err) {
                finalMessage.message = "Not all tables are created successfully" + err;
                }
            }
            console.log(finalMessage);
            if (!finalMessage.message) {
                console.log("here");
                finalMessage.message = "All tables are created successfully";
            }
            return finalMessage;
        }
    catch (error) {
        console.error("Error installing the application:", error);
        return false;
    }
} 

// Export the installDirectFromApi function
module.exports = {
    installDirectFromApi,
};