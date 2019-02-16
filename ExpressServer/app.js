const express = require('express');
const fs = require('fs');

var app = express();


//logging server requests
app.use((req,res,next) =>{

    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;

    fs.appendFile('server.log',log + '\n',(err) =>{
        if(err){
            log = "Issue while writing to log file";
        }
    });
    console.log(log);

    //THIS IS REQUIRED TO PROCEED WITH REQUEST
    next();
});

//Set up URL handler
app.get('/',(req,res) => {
   res.send('Hello Express !');
});

//Using middleware to load static content
app.use(express.static('./static'));


//Bind the port for the server
app.listen(3000,() =>{
    console.log("Server started !");
});

