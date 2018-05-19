// Import the MySQL connection.
const connection = require('./connection.js');

// Object Relational Mapper (ORM)
// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// REMEMBER TO ADD CB TO YOUR OTHER ONES
const orm = {
  selectAll: (table, cb) => {
    let queryString = 'SELECT * FROM ??';
    connection.query(queryString, [table], (error, response) => {
      if (error) throw 'Something went wrong: ' + error;
      console.log(response);
      cb(response);
    });
  },
  insertOne: (table, columns, values, cb) => {
    let queryString = 'INSERT INTO ?? (??) VALUES (?)';
    connection.query(queryString, [table, columns, values], (error, response) => {
      if (error) throw 'Something went wrong: ' + error;
      cb(response);
    });
  },
  updateOne: (table, column, value, conditionCol, conditionVal, cb) => {
    let queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
    connection.query(queryString, [table, column, value, conditionCol, conditionVal], (error, response) => {
      if (error) throw 'Something went wrong: ' + error;
      cb(response);
    });
  },
  deleteOne: (table, conditionCol, conditionVal, cb) => {
    let queryString = 'DELETE FROM ?? WHERE ?? = ?';
    connection.query(queryString, [table, conditionCol, conditionVal], (error, response) => {
      if (error) throw 'Something went wrong: ' + error;
      cb(response);
    });
  }
};

module.exports = orm;