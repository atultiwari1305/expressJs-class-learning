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

//writing in browser
app.use('/second',(req,res,next)=>{
    res.send('<h1>Happy Learning Day: 1</h1><br>');
    next();
})
app.use('/',(req,res,next)=>{
    res.send('<h2>Happy Learning Day: 2</h2>');
})

const server = http.createServer(app);
server.listen(3000);