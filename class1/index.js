
const fs = require('fs');



const path = require('path');
const filePath = path.join(__dirname, 'test', 'hello.txt');
console.log(filePath);

const os = require{'os');
const user = os.usesInfo();
console.log(user);

const des = require('./module/des.js');
console.log(des);

const packages = require('./module/pacg.js');
console.log(packages);
