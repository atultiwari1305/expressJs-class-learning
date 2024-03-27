const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./Routes/admin');

app.use(bodyParser.urlencoded({extended:true}))

app.use(adminRoutes);

app.listen(3000);