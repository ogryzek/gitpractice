// app.js
const http = require('http');

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello World!</h1>");
    res.end("Hey there!");
}).listen(3000);
