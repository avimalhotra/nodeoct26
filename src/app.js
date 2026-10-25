import http from "node:http";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import cluster from "node:cluster";

const port=80;

// if(cluster.isPrimary){
//      const totalCPUs = os.cpus().length;
//      console.log(`Master running... CPU Cores: ${totalCPUs}`);
     
//      // Create workers
//      for( let i=0; i<totalCPUs; i++){
//           cluster.fork()
//      };

//      // Restart worker if it crashes
//   cluster.on("exit", (worker) => {
//     console.log(`Worker ${worker.process.pid} died. Restarting...`);
//     cluster.fork();
//   });
// }
// else{
//      const server=http.createServer((req,res)=>{
//           res.end(`Handled by worker ${process.pid}`);
//      });

//      server.listen(port,()=>console.log(`Server running at http://127.0.0.1:${port}`))
// }


const server=http.createServer((req,res)=>{
     // res.statusCode=200;
     // res.setHeader('Content-Type','text/html');
     res.writeHead(200,{"content-type":"text/html","accept-encoding":"utf-8"});
     res.write("<h1>Hello Node JS</h1>");

     // res.write(`<p>${req.url}</p>`);
     // res.write(`<p>${req.method}</p>`);
     // res.write(`<p>${req.headers.host}</p>`);

     // if(req.url=="/" && req.method=="GET"){
     //      fs.readFile(path.resolve("src/home.html"),(err,data)=>{
     //           if(err){
     //                res.writeHead(404,{"content-type":"text/html","accept-encoding":"utf-8"});
     //                res.write("<h1>Error</h1>");
     //           }
     //           else{
     //                res.writeHead(200,{"content-type":"text/html","accept-encoding":"utf-8"});
     //                res.write(data);
     //           }
     //           res.end();
     //      });
     // }
     // else{
     //      res.end(`<p>URL not Found</p>`);
     // }

      res.end();
});

server.listen(port,()=>{
     console.log(`Server running at http://127.0.0.1:${port}`);
});