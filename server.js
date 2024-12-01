const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');
const dataRoutes  = require('./Routes/dataRoutes')

const port = 8000;



const corsOptions = {
  origin: "http://localhost:3000", // Allow requests from your frontend
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow these HTTP methods
  allowedHeaders: "Content-Type, Authorization", // Allow these headers
};

app.use(cors(corsOptions));
app.use(express.json());

mongoose
  .connect("mongodb+srv://Gowtham:gowtham@bill.fx5nzqb.mongodb.net/?retryWrites=true&w=majority&appName=bill")
  .then(() => {
    console.log("Server Connected");
  })
  .catch((err) => {
    console.log("Database error");
  });
 
app.use('/users',dataRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))