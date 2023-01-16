const path = require('path');
const express = require('express');
const cors = require('cors');
const router = require('./app/libs/router')
const { PORT = 3001 } = process.env;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', router)
app.use(express.static('dist/app'));

app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
