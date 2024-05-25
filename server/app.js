const express = require("express");
const cors = require("cors");
const app = express();

if(process.env.NODE_ENV!=='production')
require("dotenv").config({path:"./config/.env"});


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());


const task = require("./routes/Task_router");


//using routes
app.use("" , task);


module.exports = app ;




