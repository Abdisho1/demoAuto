// Import the employee service
const employeeService = require('../services/employee.service');

async function addEmployee(req, res) {
    console.log(req.body);
    // Call the employee service to add a new employee
    const employee = await employeeService.addEmployee(req.body);
    console.log(employee);
    // Check if the employee was added successfully
    if (employee) {
        const response = {
            status: 'User added successfully',
            message: 'Employee added successfully',
        };
        res.status(200).json(response);
    } else {
        const response = {
            status: 'User not added',
            message: 'Employee could not be added',
        };
        res.status(403).json(response);
    }
}

// Export the addEmployee function
module.exports = {
    addEmployee,
};