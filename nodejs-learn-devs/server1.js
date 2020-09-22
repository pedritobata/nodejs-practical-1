// Introduction to Node js :  https://nodejs.dev/learn

const http = require('http');

const port = process.env.PORT || 9000;
const host = "127.0.0.1";

const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World!!");
});

server.listen(port, host, () => {
    console.log("Server running on port:", port);
})