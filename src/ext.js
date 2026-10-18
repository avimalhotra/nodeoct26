const pi=3.141592653589793;
const radius=5;
const apikey="dfgl;dkeljhfg";

// module.exports=pi;              // single export
// exports.p=pi;                       
// exports.r=r;

// export default pi;                        // esm single export, export property
export {pi as p,radius as r};                          // esm multiple export, export object