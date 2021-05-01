const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === './') {
    res.end('welcome to my homepage');
  }
  if (req.url === '/about') {
    res.end('here is about');
  }
  res.end(`<h1>Oops!</h1>
            <p>cant find!</p>`);
});

server.listen(5000);
