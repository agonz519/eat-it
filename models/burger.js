const orm = require('../config/orm.js');

let burger = {
  selectAll: (cb) => {
    orm.selectAll('burgers', (response) => {
      cb(response);
    });
  },
  insertOne: (columns, values, cb) => {
    orm.insertOne('burgers', columns, values, (response) => {
      cb(response);
    });
  },
  updateOne: (value, id, cb) => {
    orm.updateOne('burgers', 'devoured', value, 'id', id, (response) => {
      cb(response);
    });
  },
  deleteOne: (id, cb) => {
    orm.deleteOne('burgers', 'id', id, (response) => {
      cb(response);
    });
  }
};

module.exports = burger;