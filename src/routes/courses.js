import express from "express";

const courses=express.Router();

courses.get('/',(req,res)=>{
     res.status(200).send("Courses Page");
});

courses.get('/react',(req,res)=>{
     res.status(200).send("React Page");
});

courses.get('/angular',(req,res)=>{
     res.status(200).send("Angular Page");
});

courses.get('/node',(req,res)=>{
     res.status(200).send("Node Page");
});

courses.get("/*splat",(req,res)=>{
     res.status(404).send(`No Course found <a href="/courses">All Courses</a>`);
});

export default courses ;