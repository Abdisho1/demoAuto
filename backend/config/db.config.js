// Import the mysql2 module
const mysql = require('mysql2/promise');

// Define a connection parameter to the database
const dbConfig = {
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST
};

// Create the connection to the database
const connection = mysql.createPool(dbConfig);

//Create an async function to connect to the database
async function query( sql, params) {
    const [rows] = await connection.execute(sql, params);
    return rows;
}

// Export the query function to use it in other files
module.exports = { query }; 
