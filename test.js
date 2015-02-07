// tisikkirlir.js - v1.0.0

var tisikkirlir = require('./tisikkirlir');

var t = "teşekkürler superman"; // test string
var r = t.tisikkirlir(); // result

console.log( "Result: "+ r );
console.log( "Test: "+ ((r === "tişikkirlir sipirmin") ? "Passed!" : "Failed!") );
