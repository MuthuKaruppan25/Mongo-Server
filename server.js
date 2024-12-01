const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config(); 
const mongoose = require('mongoose');
const dataRoutes  = require('./Routes/dataRoutes')
const port = process.env.PORT || 4000; // Use PORT from .env or default to 8000
const mongoURI = process.env.MONGO_URI; // MongoDB URI from .env
const frontendOrigin = process.env.FRONTEND_ORIGIN; 



const corsOptions = {
  origin: ["https://famous-phoenix-ff4e15.netlify.app","http://localhost:3000"], // Allow requests from your frontend
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow these HTTP methods
  allowedHeaders: "Content-Type, Authorization", // Allow these headers
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