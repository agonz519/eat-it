const express = require('express');
// import the model (burger.js) to use its database functions.
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (request, result) => {
  burger.selectAll((data) => {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    result.render('index', hbsObject);
  });
});

router.post('/api/addburger', (request, result) => {
  burger.insertOne('Rebel Outlaw Burger', (data) => {
    data.json('hi');
  });
});

router.put('/api/eatburger/:id', (request, result) => {

});

module.exports = router;
