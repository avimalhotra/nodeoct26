// require("colors");                                            // cjs modules
// const x=require("./ext.js");                                  // cjs modules

import "./global.js";                        // global data
import colors from "colors";                                     // from npmjs
import os from "node:os";                                        // from nodejs
// import pi from "./ext.js";
import {p,r} from "./ext.js";                                   // from ext.js file

console.log("Hello NodeJS");
console.log( process.version );
console.log( os.cpus().length );
console.log( os.freemem()/1073741824 );
console.log( os.totalmem()/1073741824 );


// console.log( x );
// console.log( pi );
// console.log( r );
// console.log("Hello NodeJS ".red);
// console.log("Hello NodeJS ".green);
// console.log("Hello NodeJS ".bgYellow);

// console.log( pi );
// console.log( id );
// console.log( E );

async function fetchData() {
     console.log("api starts");
     
     const x=await fetch("https://www.techaltum.com/node/api");
     const y=await x.json();
     console.log(y);
     
     console.log("api ends");
}

// fetchData();

// console.log(p);
// console.log(r);