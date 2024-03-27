const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const welcomeRoutes = require('./Routes/welcome');

app.use(bodyParser.urlencoded({extended:true}))

app.use(welcomeRoutes);

app.listen(3000);