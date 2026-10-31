import express from "express";
import path from "node:path";
const port=3000;

const app=express();

app.use((req,res,next)=>{
     console.log('Time: %d', Date.now());
     next();
     // if(new Date().getHours()>=10){ next(); }
     // else{ res.status(400).send("not authorised") }
});

// app.use(express.static(path.resolve("src/public")));
// app.use(express.static(path.resolve("node_modules/bootstrap/dist")));


app.get("/",(req,res)=>{
     res.setHeader('Content-Type','text/html')
     res.status(200).send("Hello Express");
});
app.get("/about",(req,res)=>{
      res.setHeader('Content-Type','text/html')
     res.status(200).send("About Us");
});
app.post("/post",(req,res)=>{
     res.status(200).send("POST DATA");
});

app.get("/api",(req,res)=>{
     res.status(200).json({name:"lorem",id:22});
});

app.get("/*splat",(req,res)=>{
     res.status(404).send(`404, Page not found, Go to <a href="/">Homepage</a>`);
});

app.listen(port,()=>{
     console.log(`App running at http://127.0.0.1:${port}`);
});