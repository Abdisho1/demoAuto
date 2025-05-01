// Import the express module
const express = require('express');

// Import router module
const router = express.Router();   

// Import the login routes
const loginRoutes = require('./login.routes');

// Import the employee routes  
const employeeRoutes = require('./employee.routes');

// Add the login routes to the router
router.use(loginRoutes);

// Add the employee routes to the router
router.use(employeeRoutes);

// Import the install routes
const installRoutes = require('./install.routes');

// Add the install routes to the router
router.use(installRoutes);

// Export the router 
module.exports = router;