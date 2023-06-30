const express=require("express")
const app=express();
// let path =require("path")
const bodyparser=require("body-parser");
const router=require("./router/routers")

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use("/",router); 

app.listen(3002,()=>{
    console.log(" server running at port 3002")
})

module.exports=app;
    
