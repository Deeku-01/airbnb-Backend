const express=require("express");

const path =require('path');
const hostroute=express.Router();



hostroute.get("/add-home",(req,res,next)=>{
    res.render("addhome",{PageTitle:"AddHome"})
})

const regHomes=[]

hostroute.post("/add-home",(req,res,next)=>{
    //For dynamic ui using EJS
    regHomes.push(req.body);
    res.render("registered",{PageTitle:"Registered"})
})



exports.hostroute=hostroute;
exports.regHomes=regHomes;
