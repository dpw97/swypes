import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import restaurants from '../swypes/restaurant-data.json' assert {type: "json"}
const app = express();
app.use(bodyParser.json());
app.use(cors());


// GET endpoint to retrieve all restaurants
app.get('/api/restaurants', (req, res) => {
    res.json(restaurants);
});

// GET endpoint to retrieve a specific restaurant by ID
app.get('/api/restaurants/:id', (req, res) => {
    const restaurant = restaurants.find(r => r.id === parseInt(req.params.id));
    if (!restaurant) {
        res.status(404).send('The restaurant with the given ID was not found.');
        return;
    }
    res.json(restaurant);
});

// POST endpoint to add a new restaurant
app.post('/api/restaurants', (req, res) => {
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
app.put('/api/restaurants/:id', (req, res) => {
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
app.delete('/api/restaurants/:id', (req, res) => {
    const restaurant = restaurants.find(r => r.id === parseInt(req.params.id));
    if (!restaurant) {
        res.status(404).send('The restaurant with the given ID was not found.');
        return;
    }

    const index = restaurants.indexOf(restaurant);
    restaurants.splice(index, 1);
    res.json(restaurant);
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
