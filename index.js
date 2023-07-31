 //path
 
 const path = require('path')
 console.log(__dirname);
 console.log(path.join(__dirname,"index.js"));

 //fs
 const fs = require('fs')
fs.writeFileSync("ganiefah.js","console.log(11 + 7)")

//os
var os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());