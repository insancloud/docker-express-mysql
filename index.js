'use strict';

const express = require('express');
const mysql = require('mysql');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// App
const app = express();

// Create a route to fetch data from the database and send it to the client
app.get('/get-users', (req, res) => {
  const connection = mysql.createConnection({
    host: 'db',  // Assuming the database is running in a container named 'db'
    user: 'root',
    password: 'barbar',
    database: 'express-db'
    
  });

  connection.connect();

  connection.query('SELECT * FROM users', (err, rows, fields) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.status(500).send('Error querying the database');
      return;
    }

    // Send the database results to the client as JSON
    res.json(rows);
  });

  connection.end();
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
