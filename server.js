const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config(); 
const mongoose = require('mongoose');
const dataRoutes  = require('./Routes/dataRoutes')
const port = process.env.PORT || 4000; 
const mongoURI = process.env.MONGO_URI; 
const frontendOrigin = process.env.FRONTEND_ORIGIN;  
const corsOptions = {
  origin: ["https://famous-phoenix-ff4e15.netlify.app","http://localhost:3000"], 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
  allowedHeaders: "Content-Type, Authorization", 
};

app.use(cors(corsOptions));
app.use(express.json());

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Server Connected");
  })
  .catch((err) => {
    console.log("Database error");
  });
 
app.use('/users',dataRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))