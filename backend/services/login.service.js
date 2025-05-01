// Import the db connection file
const connection = require('../config/db.config');

//A function to check if the user exists in the database
async function logIn(employeeData) {
    try {
        console.log("Inside login service");
        console.log(employeeData);
        const sql = `SELECT * FROM add_employee WHERE email = '${employeeData.email}' AND password = '${employeeData.password}'`;
        const result = await connection.query(sql);
        console.log(result);

        // Check if the result is not empty
        if (result.length > 0) {
            return result;
        } else {
            return null;
        }
} catch (err) {
        console.error("Error in login service:", err);
    }
}

// Export the logIn function
module.exports = {
    logIn,
};