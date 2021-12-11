
// creating conncetion
const mongoose = require('mongoose');
const express = require("express");
const Routes = require('./src/routes');
const bodyParser=require("body-parser")
const cors = require('cors');
const app = express();
require('dotenv').config()

const DB = 'mongodb+srv://rahul:rahul2018$$$$$@cluster0.nderl.mongodb.net/mernstack?retryWrites=true&w=majority'


// importing the Schema file here start
const User = require('./src/models/userSchema');
// end of importing the schema file.

app.use(cors())
app.use(express.json());
// app.use(express.urlencoded({extended:true}))
app.use(Routes)

// auth file inside router folder rendering
app.use(require('./src/auth'));
// app.use(require('./router/routes')); 


// middleware
const middleware = (req,res,next) =>{
  console.log(`hello my middleware`);
  next();
}

// code for  connecting with databse 
mongoose.connect(DB).then(() => {
  console.log(`connection successfull`);
}).catch((err) => console.log(`no connection`));
// connection ends here
app.get('/',(req,res)=>{
  res.send(`hello from the server this is me`);
});
app.get('/quizes',(req,res)=>{
  res.send(`this page is for quizes`);
});
app.get('/longanswer',(req,res)=>{
  res.send(`this page is for descriptive question`);
});

// console.log("hello everyone"); it is used to check server running output in CMD

app.listen(3000, () =>{
  console.log(`server is running at port no 3000`);
})