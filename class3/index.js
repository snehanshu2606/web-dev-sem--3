/*
const fs = require('fs');



const path = require('path');
const filePath = path.join(__dirname, 'test', 'hello.txt');
console.log(filePath);

const os = require('os');
const user = os.usesInfo();
console.log(user);

const des = require('./module/des.js');
console.log(des);

const packages = require('./module/pacg.js');
console.log(packages);
*/
//A bit of data
const students = [

];


const http = require('http');

require('dotenv').config()

const process = require('process');
//console.log(process.argv)
//console.log(process.env.PORT);
const port = process.env.PORT || 3000;


const server = http.createServer((req, res)=>{
    if(req.method === 'GET' && req.usl === '/api/students'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(
            JSON.stringify({count: students.length, students})
        )
    }
});

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

console.log(`http://localhost:${port}/`); //just so I don't have to remember link