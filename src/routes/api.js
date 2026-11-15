import express from "express";


const api=express.Router();

const data=[
               {"name": "swift", "type": "hatchback", "price":870000},
               {"name": "dzire", "type": "sedan", "price":980000},
               {"name": "ciaz", "type": "sedan", "price":1100000},
               {"name": "baleno", "type": "hatchback", "price":880000},
               {"name": "fronx", "type": "hatchback", "price":1150000},
               {"name": "brezza", "type": "suv", "price":1250000},
               {"name": "grand vitara", "type": "suv", "price":1990000},
               {"name": "invicto", "type": "mpv", "price":2990000},
               {"name": "alto", "type": "hatchback", "price":380000},
               {"name": "s presso", "type": "hatchback", "price":350000},
               {"name": "wagon r", "type": "hatchback", "price":500000},
               {"name": "jimny", "type": "suv", "price":1400000}
          ];

     // api.use((req,res,next)=>{
     //      // res.header('Access-Control-Allow-Origin',"*");
     //      next();
     // });


api.get('/',(req,res)=>{
     // res.status(200).send("Products Page");
     res.status(200).send(`<h1>API Page</h1> <a href="/api/cars">Cars</a>`)
});

api.get("/cars",(req,res)=>{
     res.status(200).json(data);
});

api.get("/cars/:car",(req,res)=>{
     const car=data.filter(i=>i.name==req.params.car);
     if(car.length){
          res.status(200).json(car[0]);
     }
    else{
          res.status(200).json({status:"no car found"});
    }
});


api.get("/*splat",(req,res)=>{
     res.status(404).send(`404, API not found, Go to <a href="/api">API</a>`);
});

export default api;