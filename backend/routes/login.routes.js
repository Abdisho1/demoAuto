//Import express module
const express = require('express');

//Import router from express
const router = express.Router();

//Import the login controller
const loginController = require('../controllers/login.controller');

//Pas the login controller to the router
router.post('/login', loginController.logIn);

//Export the router
module.exports = router;