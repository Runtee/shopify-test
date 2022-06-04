const express = require("express");
const app = express();
const  cors = require("cors");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path")
require('dotenv').config();
const inventoriesRoutes = require('./routes/inventories');
const warehousesRoutes = require('./routes/warehouses');


app.use(express.json());
app.use(cors());

app.use('/inventory', inventoriesRoutes);
app.use('/warehouse', warehousesRoutes);
app.get('/',(req,res)=>{
    res.redirect('/inventory')
})

app.listen(5000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server Running at port 5000...")
    }})