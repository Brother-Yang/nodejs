const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

const LoginRouter = require('./router/login');
const HomeRouter = require('./router/home');
const CookieRouter = require('./router/cookie');
const UploadRouter = require('./router/upload');

app.use(cors());
app.use(express.json());
app.use(express.static('./public'));
app.use(cookieParser('secret'));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/home', HomeRouter);
app.use('/login', LoginRouter);
app.use('/cookie', CookieRouter);
app.use('/upload', UploadRouter);

app.listen(3001);
