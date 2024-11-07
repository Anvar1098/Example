// Modul packages : Core, External, File
// Core Module:

setTimeout(function () {
    console.log('ishga tushdi');
}, 5000); 

console.log('===========');

 let number = 0;
setInterval(function () {
 console.log('hisob', number);
 number++;
}, 1000);

const fs = require('fs');  
const data = fs.readFileSync('./input.txt', 'utf8');  
console.log(data);  

console.log('=======');

fs.writeFileSync('./input.txt', `${data} \n\t\t by BekzodAli`);
const new_data = fs.readFileSync('./input.txt', 'utf8');
console.log(new_data);

console.log('=======');

// External Module


