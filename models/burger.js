const orm = require('../config/orm.js');

let burger = {
  selectAll: (cb) => {
    orm.selectAll('burgers', (result) => {
      cb(result);
    });
  },
  insertOne: (values, cb) => {
    orm.insertOne('burgers', '(burger_name)', values, (result) => {
      cb(result);
    });
  },
  updateOne: (value, id, cb) => {
    orm.updateOne('burgers', 'devoured', value, 'id', id, (result) => {
      cb(result);
    });
  }
};

module.exports = burger;