const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// var Express =require("express");
// var Mongoclient=require("mongodb").MongoClient;
// var cors=require("cors");
// const multer=require("multer");


// console.log("test1");

// var app=Express();
// app.use(cors());

// var CONNECTION_STRING="mongodb+srv://rajsubash007:Rajmeena%4099@cluster0.s8jveqm.mongodb.net/?retryWrites=true&w=majority";

// console.log("test2");

// var DATABASENAME="employeedb"
// var database;

// app.listen(5038, ()=>{

//     Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
//         database=client.db(DATABASENAME);
//         console.log("MongoDB Connectes Successfully");
//     })
// })

// app.get('/api/employee/GetNotes',(request,response)=>{

//     database.collection("employeecollection").find({}).toArray((error,result)=>{
//         response.send(result);
//     })
// })

