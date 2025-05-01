// Import the db connection file
const connection = require('../config/db.config');

// A function to add a new employee to the database
async function addEmployee(employeeData) {
    try {
        const sql = `INSERT INTO add_employee (first_name, last_name, email, password) VALUES ('${employeeData.first_name}', '${employeeData.last_name}', '${employeeData.email}', '${employeeData.password}')`;
        const result = await connection.query(sql);
        console.log(result);

        // Check if the result is not empty
        if (result.insertId) {
            const insertId = result.insertId;
            return insertId;
        } else {
            return null;
        }
    } catch (err) {
        console.error("Error in employee service:", err);
        return null;
    }
}

// Export the addEmployee function
module.exports = {
    addEmployee,
};