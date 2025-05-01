//Import the dotenconfig module to load environment variables from a .env file
require('dotenv').config();

// Import the express module
const express = require('express');

// Import cors module to enable Cross-Origin Resource Sharing (CORS)
const cors = require('cors');

//Create the express app
const app = express();

// Use cors middleware to enable CORS for all requests
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

//Import the router module
const router = require('./routes');

// Use the router for all routes
app.use(router);

//Get the port from the environment variable or use 3000 as default
const port = process.env.PORT;

//set up the listener
app.listen(port, () => console.log(`Listening on port ${port}`));


