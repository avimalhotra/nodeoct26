import express from "express";
import path from "node:path";
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";

import products from "./routes/products.js";
import courses from "./routes/courses.js";
import api from "./routes/api.js";

const port=3000;

const app=express();

// Built-in middleware for parsing JSON
app.use(express.json());
// Built-in middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser('secret'));

 // trust first proxy
app.set('trust proxy', 1); 

app.use(session({
    secret:"session",
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}));

// app.use(cors({origin:"http://127.0.0.1:5500"}));
app.use(cors({origin:"*"}));


// app.use((req,res,next)=>{
//      console.log(`Path : ${req.url}, Time: ${Date.now()}`);
//      next();
// });

function isAuthenticated(req,res,next){
      if(new Date().getHours()>=12){ 
          next();
      }
     res.status(400).send("not authorised"); 
}

app.use("/products",products);
app.use("/courses",courses);
app.use("/api",api);


app.use(express.static(path.resolve("src/public")));
app.use(express.static(path.resolve("node_modules/bootstrap/dist")));


app.get("/",(req,res)=>{
     // res.cookie("login","abcdef",{signed:true});
     res.cookie("app","aaa",{httpOnly:true});
     res.setHeader('Content-Type','text/html');
     // res.status(200).send("Hello Express");
     // res.status(200).send(req.cookies);
     // res.status(200).send(req.signedCookies);
     res.status(200).send(req.sessionID);
     
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

app.post("/login",(req,res)=>{
     const {email,pass}=req.body;
     if(email=="a@b" && pass==123456){
          res.status(200).send(`Email: ${email}, password: ${[pass]}`);
     }
     else{
           res.status(400).send("invalid email or pass");
     }
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