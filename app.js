// External module 
const express=require('express');

//Local modules;
const userroute=require("./routes/userRouter");
const {hostroute}=require("./routes/hostroute");

const {regHomes}=require("./routes/hostroute");
const path =require('path');

const app=express();

//ejs setting vars
app.set('view engine','ejs');
app.set('views','views');

app.use(userroute);

app.use(express.urlencoded()) //applied directly to the express .. not a good practice also it listens to all the routes to display body if supplied

app.use("/host",hostroute) // any url reached inside has a prescript "/host"

app.use(express.static('public'));

//Handdling 404 
//  PATHS 
// Serving Html FIles 
app.use((req,res,next)=>{
    res.status(404).render("pageNotFound",{PageTitle:"404"});
})



const port=3004;
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})