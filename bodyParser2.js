const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))

app.use('/add-image',(req,res,next)=>{
    res.send('<h1>image List</h1><form action="/store-image" method="POST"><input type="file" name="item"></input><button>Store</button></form>');
})
app.post('/store-image',(req,res,next)=>{
    console.log('item name: ',req.body);
    res.send(`Item Received<br><form action="/add-image" method="POST"><button>Add New</button></form>`);
})
app.listen(3000);