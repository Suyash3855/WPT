const express=require("express")
const app=express()
const bodyparser=require("body-parser")
const router=require("./router/routers")


app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


app.use("/",router)

app.listen(3005,function(){
    console.log("Srever running on port 3005")
}
)

module.exports=app;