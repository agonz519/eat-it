const express = require('express');
// import the model (burger.js) to use its database functions.
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (request, response) => {
  burger.selectAll((data) => {
    let hbsObject = {
      burgers: data
    };
    response.render('index', hbsObject);
  });
});

router.post('/api/addburger', (request, response) => {
  burger.insertOne(['burger_name', 'devoured'], [request.body.burger_name, request.body.devoured], (data) => {
    response.json({id: data.insertId});
    console.log('Added burger with id ' + data.insertId);
  });
});

router.put('/api/eatburger/:id', (request, response) => {
  let id = request.params.id;
  burger.updateOne(request.body.devoured, id, (data) => {
    console.log(`Updated ${ data.changedRows } record(s).`);
    response.json(`Updated ${ data.changedRows } record(s).`);
    response.status(200).end();
  });
});

router.delete('/api/deleteburger/:id', (request, response) => {
  let id = request.params.id;
  burger.deleteOne(id, (data) => {
    console.log(`Deleted ${ data.affectedRows } burger with id ${ id }`);
    response.json(`Deleted ${ data.affectedRows } burger with id ${ id }`);
    response.status(200).end();
  });
});

module.exports = router;
