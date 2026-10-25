import os from "node:os";                                        // from nodejs
import fs from "node:fs";
import path from "node:path";
import EventEmitter from "node:events";
const emitter=new EventEmitter();

console.log("Hello NodeJS");
console.log( process.version );

// const data=fs.readFileSync("src/data.txt",{encoding:'utf-8'});
// console.log(data);

// fs.readFile(path.resolve("src/data.txt"),{encoding:"utf-8"},(err,data)=>{
//      if(err){ console.warn(err)}
//      else{ console.log(data) }
// });

// fs.stat("src/data.txt",{encoding:"utf-8"},(err,stat)=>{
//      if(err){ console.warn(err)}
//      else{ console.log(stat.size) }
// });

// fs.writeFile("src/data.txt","Hello FS 🤔",{encoding:"utf-8"},(err)=>{
//      if(err){ console.warn(err)}
//      else{ console.log("file updated ") }
// });

// fs.appendFile("src/data.txt",`Hello There, ${new Date().toLocaleString()} \n`,{encoding:"utf-8"},(err)=>{
//       if(err){ console.warn(err)}
//      else{ console.log("file updated") }
// });

//  fs.unlink('src/demo.txt',(err)=>{
//        if(err){
//            console.log('Error:', err);
//        }
//        else{
//           console.log('file deleted successfully'); 
//        }        
// });


// console.log( path.normalize("./src/app") );
// console.log( path.normalize("src//app") );
// console.log( path.normalize("src/app/../") );

// console.log( path.basename("src/app") );
// console.log( path.basename("src/app.html",".html") );

// console.log( path.resolve("src/data.txt") );
// console.log( path.resolve("src","app") );

// console.log( path.join("src","./app") );

// fs.ReadStream("src/data.txt").on("open",()=>{
//      console.log("file open");
// });

// register
// emitter.on("done",(user)=>{
//      console.log(`done event occured once by ${user}`);
// });
// emitter.on("done",(user)=>{
//      console.log(`done event occured twice by ${user}`);
// });

// emitter.on("single",(x)=>{
//      console.log(x)
//      // x.done=true;
// });
// emitter.on("single",(x)=>{
//     if(x.done){ console.log(x) }
// });

emitter.once("single",()=>{
     console.log(`Single Event`)
});

// emit or trigger
// emitter.emit("done","Avi");
// emitter.emit("done","Isha");

// emitter.emit("single");

// console.log("done");