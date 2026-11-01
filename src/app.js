import express from "express";
import path from "node:path";

import products from "./routes/products.js";
import courses from "./routes/courses.js";

const port=3000;

const app=express();

app.use((req,res,next)=>{
     console.log(`Path : ${req.url}, Time: ${Date.now()}`);
     next();
});

function isAuthenticated(req,res,next){
      if(new Date().getHours()>=12){ 
          next();
      }
     res.status(400).send("not authorised"); 
}

app.use("/products",products);
app.use("/courses",courses);


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

app.get("/search",(req,res)=>{
     const {q,used}=req.query;
     res.status(200).send(`${q}, ${used??false}`);
});

// app.get("/products",(req,res)=>{
//      res.status(200).send("Products Page");
// });
// app.get("/products/:product",(req,res)=>{
//      res.status(200).send(`${req.params.product}`);
// });

app.get("/api",(req,res)=>{
     res.status(200).json({name:"lorem",id:22});
});

app.get("/contact",(req,res)=>{
     res.status(200).send("contact us")
});

app.get("/contact.php",(req,res)=>{
     res.status(200).redirect("/contact")
});

app.get("/admin",isAuthenticated,(req,res)=>{
      res.status(200).send("Hello Admin");
})

app.get("/*splat",(req,res)=>{
     res.status(404).send(`404, Page not found, Go to <a href="/">Homepage</a>`);
});

app.listen(port,()=>{
     console.log(`App running at http://127.0.0.1:${port}`);
});