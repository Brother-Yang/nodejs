const express = require('express');
const app = express();

const LoginRouter = require('./router/login');
const HomeRouter = require('./router/home');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/home', HomeRouter);
app.use('/login', LoginRouter);

app.listen(3001);
