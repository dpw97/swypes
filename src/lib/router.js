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
        res.json(result);
      }
    });
});

// GET endpoint to retrieve a specific restaurant by name
router.get('/restaurants/:name', (req, res) => {
  const db = GetDB.getDb('RestaurantDB');
  const name = req.params;
  db.collection('Restaurants').findOne({ name }, (err, result) => {
    if (err) {
      res.status(404).send('The restaurant with the given name was not found.');
    } else {
      res.json(result);
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
    .insertOne(email, (err) => {
      if (err) {
        res.status(400).send('error inserting email');
      } else {
        res.status(200).send('success inserting email');
      }
    });
});
// POST endpoint to add a new restaurant
router.post('/restaurants', (req, res) => {
  const db = GetDB.getDb('RestaurantDB');
  const restaurant = {
    name: req.body.name,
    phone: req.body.phone,
    website: req.body.website,
    image: req.body.image,
  };
  db
    .collection('Restaurants')
    .insertOne(restaurant, (err) => {
      if (err) {
        res.status(400).send('error inserting restaurant');
      } else {
        res.status(200).send('success inserting restaurant');
      }
    });
});

// PUT endpoint to update a specific restaurant by name
router.put('/restaurants/:name', (req, res) => {
  const db = GetDB.getDb('RestaurantDB');
  const { name } = req.params;
  const restaurant = {
    name: req.body.name,
    phone: req.body.phone,
    website: req.body.website,
    image: req.body.image,
  };
  db.collection('Restaurants').updateOne({ name }, { $set: restaurant }, (err, result) => {
    if (err) {
      res.status(404).send('The restaurant with the given name was not found.');
    } else {
      res.json(result);
    }
  });
});

// DELETE endpoint to delete a specific restaurant by id
router.delete('/restaurants/:id', (req, res) => {
  const db = GetDB.getDb('RestaurantDB');
  const { id } = req.params;
  db.collection('Restaurants').deleteOne({ _id: id }, (err, result) => {
    if (err) {
      res.status(404).send('The restaurant with the given name was not found.');
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
