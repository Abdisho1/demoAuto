// Import express module
const express = require('express');

//Import router module
const router = express.Router();

// Import the employee controller
const employeeController = require('../controllers/employee.controller');

//Create a post request to add a new employee
router.post('/add-employee', employeeController.addEmployee);

//Export the router
module.exports = router;