const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const welcomeRoutes = require('./Routes/welcome');
const shopRoutes = require('./Routes/shop');

app.use('/ind',shopRoutes);
app.use(welcomeRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1><b>ERROR 404 NOT FOUND</b></h1>');
})

app.listen(3000);