const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/student-attendance',(req,res,next)=>{
    res.sendFile(__dirname,'views','studentAttendence.html');
})

