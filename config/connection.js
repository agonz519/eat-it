// Set up the MySQL connection...
const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE
});

connection.connect((error) => {
  if (error) throw 'Something went wrong: ' + error;
  console.log('Welcome to the burgers_db database. You are connected as ID ' + connection.threadId);
});

module.exports = connection;