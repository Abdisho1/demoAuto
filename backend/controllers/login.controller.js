// Import login service
const loginService = require('../services/login.service');

// A function to handle login requests
async function logIn(req, res, next) {
    console.log(req.body);
    const employee = await loginService.logIn(req.body);
    if (employee) {
        const response = {
            status: 'User found in database',
            message: 'Logged in successfully',
        };
        res.status(200).json(response);
    } else {
        const response = {
            status: 'User not found in database',
            message: 'Access denied',
        };
        res.status(403).json(response);
    }
}

// Export the logIn function
module.exports = {
    logIn,
};