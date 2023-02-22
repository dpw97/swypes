const express = require('express');
const GetDB = require('./GetDB');

const router = express.Router();

router.use(express.json());

// GET endpoint to retrieve all restaurants
router.get('/restaurants', (req, res) => {
  const db = GetDB.getDb('RestaurantDB');
  db.collection('Restaurants')
    .find()
    .toArray((err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
});

// GET endpoint to retrieve a specific restaurant by name
router.get('/restaurants/:name', (req, res) => {
  const db = GetDB.getDb('RestaurantDB');
  const name = {
    name: req.params.name,
  };
  db.collection('Restaurants').findOne(name, (err, result) => {
    if (err) {
      res.status(404).send('The restaurant with the given name was not found.');
    } else {
      res.status(200).send(result);
    }
  });
});
// POST endpoint to signup with email
router.post('/signup', (req, res) => {
  const db = GetDB.getDb('EmailDB');
  const email = {
    name: req.body.email,
  };
  db
    .collection('Emails')
    .insertOne(email, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
});

module.exports = router;
