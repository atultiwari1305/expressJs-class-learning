const express = require('express');
const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send('<h1>Product List</h1><form action="/store-product" method="POST"><input type="text" name="item"></input><button>Store</button></form>');
})

router.post('/store-product',(req,res,next)=>{
    console.log('item name: ',req.body);
    res.send(`Item Received`);
})

module.exports = router;