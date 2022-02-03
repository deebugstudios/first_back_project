const http = require('http');

const myServer = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('{<h1>Hello World<h1>}');
    res.end();
});

const PORT = process.env.PORT || 5000;
myServer.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));