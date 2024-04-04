const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))

const iplRoutes = require('./Routes/ipl');

app.use(iplRoutes);

app.listen(3000);