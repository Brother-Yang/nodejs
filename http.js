const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8',
    });
    res.end(JSON.stringify({ msg: '请求成功', code: 1 }));
  })
  .listen(3000);
