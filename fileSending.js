const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const fileRoutes = require('./Routes/fileRouter');

app.use(fileRoutes);

app.listen(3000);