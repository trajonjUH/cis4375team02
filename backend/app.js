const express = require('express');
const morgan = require('morgan');
const routes = express.Router();
const router = express.Router();
// Database Connection

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'cis3368fall.c7lgfan7kblo.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'admin2000',
  database: 'cis4375',
});

const app = express();


app.use('/', routes);
app.use(express.json()); 
app.use(morgan('dev'));

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
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Error fetching data from database');
    } else {
      res.json(results);
    }
  });
});

app.post('/orders', (req, res) => {
  const {
    tracking_number,
    delivery_service,
    expected_delivery_date,
    employee_id,
    expected_cost,
    delivery_fees,
    message,
  } = req.body;

  const query = `INSERT INTO orders (
    tracking_number,
    delivery_service,
    expected_delivery_date,
    employee_id,
    expected_cost,
    delivery_fees,
    message
  ) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    tracking_number,
    delivery_service,
    expected_delivery_date,
    employee_id,
    expected_cost,
    delivery_fees,
    message,
  ];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Error creating order');
    } else {
      console.log('Order created successfully');
      res.status(201).json({ orderId: results.insertId });
    }
  });
});

app.post('/drivers', (req, res) => {
  const {
    tracking_number,
    delivery_service,
    expected_delivery_date,
    employee_id,
    expected_cost,
    delivery_fees,
    message,
  } = req.body;

  const query = `INSERT INTO orders (
    tracking_number,
    delivery_service,
    expected_delivery_date,
    employee_id,
    expected_cost,
    delivery_fees,
    message
  ) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    tracking_number,
    delivery_service,
    expected_delivery_date,
    employee_id,
    expected_cost,
    delivery_fees,
    message,
  ];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Error creating order');
    } else {
      console.log('Order created successfully');
      res.status(201).json({ orderId: results.insertId });
    }
  });
});

// Express Listener
const listenerPort = process.env.LISTENER || 3000; // Default to 3000 if LISTENER is not set
app.listen(listenerPort, () => {
  console.log(`Server is running on port ${listenerPort}`);
});
 
// Rest of your express app logic