// Set up the MySQL connection...
const mysql = require('mysql');
// require('dotenv').config();

var connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'p@ssw0rd',
  database: 'burgers_db'
});

// console.log(connection);

connection.connect((error) => {
  // if (error) throw 'Something went wrong: ' + error;
  if (error) return console.error(error.stack);
  console.log('Welcome to the burgers_db database. You are connected as ID ' + connection.threadId);
});

module.exports = connection;