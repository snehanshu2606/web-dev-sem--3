const http = require("http");

const PORT = 3000;

const server = http.createServer(function (req, res) {

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to Node Server");
    }

    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About Page");
    }

    else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Contact Page");
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Page Not Found");
    }
});

server.listen(PORT, function () {
    console.log("Server is running...");
    console.log("Visit: http://localhost:" + PORT);
    console.log("Routes:");
    console.log(" /");
    console.log(" /about");
    console.log(" /contact");
});