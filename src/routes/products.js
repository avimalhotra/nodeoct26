import express from "express";

const products=express.Router();

products.get('/',(req,res)=>{
     res.status(200).send("Products Page");
});

products.get("/:product",(req,res)=>{
     res.status(200).send(`${req.params.product}`);
});

export default products ;