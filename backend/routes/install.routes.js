// Import express module
const express = require('express');

// Import the router module
const router = express.Router();

// Import the install controller
const installController = require('../controllers/install.controller');

// Creat a post request to the /install route
router.get('/install', installController.installDirectFromApi);

// Export the router
module.exports = router;