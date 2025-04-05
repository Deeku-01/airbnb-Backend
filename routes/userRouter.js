const express=require("express");

const path=require('path');
const {regHomes}=require("./hostroute");
const {loca}=require("./hostroute");

const rootDir = require("../utils/pathUtil");

const userroute=express.Router();

userroute.get("/",(req,res,next)=>{
    // console.log(regHomes);

    //Dynamic UI using EJS
    res.render('home',{regHomes:regHomes,PageTitle:"ADDHOME"});
})

module.exports=userroute;