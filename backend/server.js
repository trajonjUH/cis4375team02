// backend/server.js

// Import required modules
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

// Create an Express application
const app = express();

// Define the port for the server to listen on
const port = 3000;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'cis3368fall.c7lgfan7kblo.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'admin2000',
  database: 'cis4375',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});


// Define an API endpoint to fetch data from the MySQL database
app.get('/orders', (req, res) => {
  const query = 'SELECT * FROM orders';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Error fetching data from database');
    } else {
      res.json(results);
    }
  });
});

app.get('/drivers', (req, res) => {
    const query = 'SELECT * FROM drivers';
    connection.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
// Other API endpoints can be defined here...

app.post('/drivers', (req, res) => {
    const query = 'SELECT * FROM drivers';
    connection.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port 5173`);
});
