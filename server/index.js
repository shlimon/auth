require('dotenv').config(); 
const express = require("express"); 
const mongoose = require("mongoose"); 
const cors = require("cors"); 

const {PORT, MONGO_URL} = process.env;

const app = express(); 




// DB
mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("Connected to DB");
        
      app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`)
      });
    })
    .catch((err) => {
      console.log(err);
    })

