const express=require("express")
const router=express.Router()
const connection=require("../db/dbconnect")



router.get("/products",(req,resp)=>{
    connection.query("select * from products ",(err,data)=>{
        if(err)
        {
            resp.status(500).send("data not found "+JSON.stringify(err))
        }
        else{
            resp.send(data)
        }
    })
})




router.post("/products/addproduct/:pid",(req,resp)=>{
    let {pid,pname,price} = req.body

    connection.query("insert into products values(?,?,?)",[pid,pname,price],(err,result)=>{
        console.log(result)
        if(err){
            resp.status(500).send("Data not inserted")
        }
        else{
            if(result.affectedRows>0)
            resp.send("{'msg':'Product inserted successfully'}")
            else
            resp.send("{'msg':'Product Not inserted'}")
        }

    })
})

router.put("/products/updateproduct/:pid",(req,resp)=>{
    let {pid,pname,price} = req.body
connection.query("update products set pname=? ,price=? where pid=?",[pname,price,pid],(err,result)=>{
    if(err){
        resp.status(500).send("Product not Updated")
    }
    else{
        if(result.affectedRows>0)
        resp.send("Product Updated successfully")
        else
        resp.send("Product not Found")
    }
})

})

router.delete("/products/deleteproduct/:pid",(req,resp)=>{
    
    connection.query("delete from products where pid=?",[req.params.pid],(err,result)=>{
        if(err){
            resp.status(500).send("Product not deleted ")
        }
        else{
            if(result.affectedRows>0)
            resp.send("Product delete successfully")
            else
            resp.send("product not deleted")
        }
    })
})

router.get("/products/product/:pid",(req,resp)=>{
    
    connection.query("select * from products where pid=?",[req.params.pid],(err,result)=>{
        if(err){
            resp.status(500).send("Product not found"+JSON.stringify(err))
        }
        else{
            resp.send(result[0])
        }
    })
})
module.exports=router;