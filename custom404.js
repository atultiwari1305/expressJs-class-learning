const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const adminRoutes = require('./Routes/admin');
const welcomeRoutes = require('./Routes/welcome');

app.use(adminRoutes);
app.use(welcomeRoutes);

app.use('/lpu',(req,res,next)=>{
    res.status(404).send('<h1><b>ERROR 404 LPU NOT FOUND</b></h1>');
})
app.use('/csk',(req,res,next)=>{
    res.status(404).send('<h1><b>ERROR 404 CSK WILL DESTROY EVERYONE</b></h1>');
})
app.use((req,res,next)=>{
    res.status(404).send('<h1><b>ERROR 404 NOT FOUND</b></h1>');
})

app.listen(3000);