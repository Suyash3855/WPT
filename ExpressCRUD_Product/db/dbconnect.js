const mysql=require("mysql")


let mysqlconnection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root123",
    database : "wpt",
    port : 3306
})

mysqlconnection.connect((err)=>{
    if(err){
        console.log("failed to connect db coz", JSON.stringify(err))
    }
    else{
        console.log("DB connected successfully")
    }

})



module.exports=mysqlconnection;


