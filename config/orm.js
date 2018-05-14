// Import the MySQL connection.
const connection = require('../config/connection.js');

// Object Relational Mapper (ORM)
// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values

const orm = {
  selectAll: (table) => {
    let queryString = 'SELECT * FROM ??';
    connection.query(queryString, [table], (error, result) => {
      if (error) throw 'Something went wrong: ' + error;
      console.log(result);
    });
  },
  insertOne: (table, columns, values) => {
    let queryString = 'INSERT INTO ?? ?? VALUES ?';
    connection.query(queryString, [table, columns, values], (error, result) => {
      if (error) throw 'Something went wrong: ' + error;
      console.log(result);
    });
  },
  updateOne: (table, column, value, conditionCol, conditionVal) => {
    let queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
    connection.query(queryString, [table, column, value, conditionCol, conditionVal], (error, result) => {
      if (error) throw 'Something went wrong: ' + error;
      console.log(result);
    });
  }
};

module.exports = orm;