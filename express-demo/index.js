const express = require('express');
const cors = require('cors');
const app = express();

const LoginRouter = require('./router/login');
const HomeRouter = require('./router/home');

app.use(cors());
app.use(express.json());
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/home', HomeRouter);
app.use('/login', LoginRouter);

app.listen(3001);
