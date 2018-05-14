const express = require('express');
// import the model (burger.js) to use its database functions.
const burger = require('..models/burger.js');
const router = express.Router();

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
