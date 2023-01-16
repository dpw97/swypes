const express = require('express');
const cors = require('cors');

const router = express.Router();
router.use(express.json());
const restaurants = [
    {
        "id": 1,
        "name": "pizza",
        "phone": "+91 789654123",
        "website": "pizza.com",
        "image": "../../assets/restaurant-logo.jpg"
    },
    {
        "id": 2,
        "name": "tacos",
        "phone": "+91 123456987",
        "website": "tacos.com",
        "image": "../../assets/restaurant-logo.jpg"

    },
    {
        "id": 3,
        "name": "tacos",
        "phone": "+91 123456987",
        "website": "tacos.com",
        "image": "../../assets/restaurant-logo.jpg"

    },
    {
        "id": 4,
        "name": "tacos",
        "phone": "+91 123456987",
        "website": "tacos.com",
        "image": "../../assets/restaurant-logo.jpg"

    },
    {
        "id": 5,
        "name": "tacos",
        "phone": "+91 123456987",
        "website": "tacos.com",
        "image": "../../assets/restaurant-logo.jpg"

    }
]

// GET endpoint to retrieve all restaurants
router.get('/restaurants', (req, res) => {
    res.json(restaurants);
});

// GET endpoint to retrieve a specific restaurant by ID
router.get('/restaurants/:id', (req, res) => {
    const restaurant = restaurants.find(r => r.id === parseInt(req.params.id));
    if (!restaurant) {
        res.status(404).send('The restaurant with the given ID was not found.');
        return;
    }
    res.json(restaurant);
});

// POST endpoint to add a new restaurant
router.post('/restaurants', (req, res) => {
    const restaurant = {
        id: restaurants.length + 1,
        name: req.body.name,
        phone: req.body.phone,
        website: req.body.website,
        image: req.body.image
    };
    restaurants.push(restaurant);
    res.json(restaurant);
});

// PUT endpoint to update a specific restaurant by ID
router.put('/restaurants/:id', (req, res) => {
    const restaurant = restaurants.find(r => r.id === parseInt(req.params.id));
    if (!restaurant) {
        res.status(404).send('The restaurant with the given ID was not found.');
        return;
    }

    restaurant.name = req.body.name;
    restaurant.phone = req.body.phone;
    restaurant.website = req.body.website;
    restaurant.image = req.body.image;
    res.json(restaurant);
});

// DELETE endpoint to delete a specific restaurant by ID
router.delete('/restaurants/:id', (req, res) => {
    const restaurant = restaurants.find(r => r.id === parseInt(req.params.id));
    if (!restaurant) {
        res.status(404).send('The restaurant with the given ID was not found.');
        return;
    }

    const index = restaurants.indexOf(restaurant);
    restaurants.splice(index, 1);
    res.json(restaurant);
});

module.exports = router;