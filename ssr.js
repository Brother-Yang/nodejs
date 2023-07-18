const express = require('express');
const cors = require('cors');
const app = express();

const LoginRouter = require('./router/login');
const HomeRouter = require('./router/home');

app.use(cors());

app.set('views', './views'); //设置视图的对应目录
app.set('view engine', 'ejs'); //设置默认的模板引擎
// app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/home', HomeRouter);
app.use('/login', LoginRouter);

app.listen(3002);
