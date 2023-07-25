const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./mysql/config/db.config');

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/users', async (req, res) => {
  const users = await db.query('select * from users');
  console.log(users[0]);
  console.log(users);
  res.send({
    ok: 1,
    data: users[0],
  });
});

app.listen(3002);
