const http = require('http');
const express = require('express');
const app = express();

// app.use(()=>{
//     console.log("Express in Working Always");
// })



// //whenever more than one response is used we need to use next callback function to execute other responses
// app.use((req,res,next)=>{
//     console.log("January");
//     next();
// })
// app.use((req,res,next)=>{
//     console.log("February");
//     next();
// })
// app.use((req,res,next)=>{
//     console.log("March");
//     next();
// })
// app.use((req,res,next)=>{
//     console.log("April");
//     next();
// })
// app.use((req,res,next)=>{
//     console.log("May");
//     // next();
// })



// //writing in browser
// app.use('/second',(req,res,next)=>{
//     res.send('<h1>Happy Learning Day: 1</h1><br>');
//     next();
// })
// app.use('/',(req,res,next)=>{
//     res.send('<h2>Happy Learning Day: 2</h2>');
// })



//Different URL and Different Route

app.use('/third',(req,res)=>{
    console.log('Third Happy');
    res.send('<h1>Happy Happy Happy</h1>');
})

app.use('/second',(req,res)=>{
    console.log('Second Happy');
    res.send('<h1>Happy Happy</h1>');
})

app.use('/',(req,res)=>{
    console.log('First Happy');
    res.send('<h1>Happy</h1>');
})

const server = http.createServer(app);
server.listen(3000);