console.log("Hello Node JS");
// console.log( globalThis );                   // global

// console.log( __filename );
// console.log( __dirname );
// console.log( process.version );
// console.log( globalThis.process.version );
// console.log( process.versions );

const fs = require('fs');

// const data = fs.readFileSync('src/data.txt',{encoding:"utf-8"});
// console.log(data);                                // 0.07ms

const data = fs.readFile('src/data.txt',{encoding:'utf-8'},(err,output)=>{

//     if(err){console.warn("error")}
//     else{console.log(output);}

setTimeout(()=>console.log("timeout"));
setImmediate(()=>console.log("immediate"));
queueMicrotask(()=>console.log("microtask que"));
Promise.resolve("promise").then(i=>console.log(i));
process.nextTick(()=>console.log("next tick"));

});

// setTimeout(()=>console.log("timeout"));
// setImmediate(()=>console.log("immediate"));
// queueMicrotask(()=>console.log("microtask que"));
// Promise.resolve("promise").then(i=>console.log(i));
// process.nextTick(()=>console.log("next tick"));

console.log("--done--"); 