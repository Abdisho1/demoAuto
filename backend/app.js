// Import the express module
const express = require('express');

//iport the mysql module
const mysql = require('mysql2');

//Create the express app
const app = express();

// Define a connection parameter to the database
const dbConfig = {
    connectionLimit: 10,
    password: 'AbeDemoApp',
    user: 'demoApp',
    database: 'demoapp',
    host: 'localhost'
};

//Create the connection to the database
const connection = mysql.createConnection(dbConfig);

//Connect to the database
connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected to the database!');
});

// Middleware to parse JSON request bodies
app.use(express.json());


// Create a simple get request handler to send a response back
app.get('/', (req, res) => {
    res.send('Testing!');
});

//allwo CORS for all requests
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods', 
        'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

//post request to add a new user
app.post('/add-employee', (req, res) => {
    // console.log(req.body);
    // Write the sql query to add to the database table named employee_test
    const sql = `INSERT INTO add_employee (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`;
const values = [req.body.first_name, req.body.last_name, req.body.email, req.body.password];

connection.query(sql, values, function (err, result) {
    if (err) {
        console.error(err);
        return res.status(500).json({ status: 'error', message: 'Database error!' });
    }
    console.log(result);
    // Check if the result is not empty
    if (result.affectedRows > 0) {
        const response = {
            send: 'User added successfully!',
            message: 'User added successfully',
        };
        res.status(200).send(response); 
    } else {
        const response = {
            send: 'User not added!',
            message: 'User not added',
        };
        res.status(200).json(response);
    }
});
});
//post request to get all users
app.post('/login', (req, res) => {
    console.log(req.body);
    // Write the sql query to retrive the employee with the email and password provided
    const sql = `SELECT * FROM add_employee WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;
    connection.query(sql, function (err, result){
        if (err) throw err;
        console.log(result);
        // Check if the result is not empty
        if (result.length > 0) {
            const response = {
                send: 'User logged in successfully!',
                message: 'Login seccessful',
                    };
                res.status(200).send(response); 
        } else {
            const response = {
                send: 'User not found!',
                message: 'Login failed',
                    };
                res.status(200).json(response);
        }
    });
});

//set up the port to listen
const port = 4550;

//set up the listener
app.listen(port, () => console.log(`Listening on port ${port}`));


