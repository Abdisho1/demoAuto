// Import express and path modules
const express = require('express');
const path = require('path');

//Creat an express app
const app = express();

//Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

//Redirect all requests to the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Listen to the default port 80
app.listen(80);