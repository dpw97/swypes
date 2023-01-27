const path = require('path');
const express = require('express');
const cors = require('cors');
const router = require('./lib/router');

const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', router);
app.use(express.static('dist/app'));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
