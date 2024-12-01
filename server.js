const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');
const dataRoutes  = require('./Routes/dataRoutes')
app.use(cors());
const port = 8000;

app.use(cors());
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