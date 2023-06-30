const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, 'ok', {
    'Content-Type': 'text/json',
  });
  res.end(JSON.stringify({ msg: 'hello' }));
});

server.listen(3002, () => {
  console.log('连接成功');
});
