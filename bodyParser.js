const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))

app.get('/add-product',(req,res,next)=>{
    res.send('<h1>Product List</h1><form action="/store-product" method="POST"><input type="text" name="item"></input><button>Store</button></form>');
})
app.post('/store-product',(req,res,next)=>{
    console.log('item name: ',req.body);
    res.send(`Item Received<br><form action="/add-product" method="GET"><button>Add New</button></form>`);
})
app.listen(3000);