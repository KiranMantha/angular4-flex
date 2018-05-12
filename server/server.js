// Get dependencies
const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
//const session = require('express-session');
//const mongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || '3000';
var db = require('./schema/schemas')(mongoose);

// Get our API routes
const dashboard = require('./routes/dashboard')(router, mongoose);
const orders = require('./routes/orders')(router, mongoose);
const users = require('./routes/users')(router, mongoose);

const app = express();

//use sessions for tracking logins
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: true,
//   saveUninitialized: false,
//   store: new mongoStore({
//     mongooseConnection: db
//   })
// }));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set dashboard routes
app.use('/dashboard', dashboard);

// Set order routes
app.use('/orders', orders);

//Set user routes
app.use('/users', users);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, () => console.log(`API running on localhost:${port}`));
