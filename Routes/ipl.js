const express = require('express');
const router = express.Router();

router.get('/cricket',(req,res,next)=>{
    res.send('<h1>Enter your fav team</h1><form action="/cric-info" method="POST"><input name="name"></input><button>Submit</button></form>')
})

router.post('/cric-info',(req,res,next)=>{
    res.send(`<h1>Your Fav Team is</h1>${req.body.name}<br><img src="https://t3.gstatic.com/images?q=tbn:ANd9GcQOkctUdtbKKCpJOwSZ0-wQGW9I2JfM7RYmJ5pv3RqyzH65mQQt"></img>`)
})

module.exports = router;