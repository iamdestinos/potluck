const express = require('express');
const path = require('path');
require('./db');

const port = 3000;

const app = express();
const staticPath = path.resolve(__dirname, '../../client/src/public');

app.use(express.static(staticPath));

app.listen(port, () => console.log(`Potluck is running on port ${port}`));
