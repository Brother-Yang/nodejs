const http = require('http')
const url  = require('url')


http.createServer((req,res)=>{
  const query = url.parse(req.url,true).query
  res.end(`${query.callback}(${JSON.stringify({name: 'Mike'})})`)
}).listen(3000)