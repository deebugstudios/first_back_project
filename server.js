const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`${new Date().getTime()}`);
    res.end();
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));