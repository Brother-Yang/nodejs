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
  res.send({
    ok: 1,
    data: users[0],
  });
});

// 方便测试全用get
app.get('/add', async (req, res) => {
  const sql = 'insert into users (name,age) values (?,?)'; // 构建sql语句
  // 执行sql语句
  const ret = await db.query(sql, ['Tom', 21]);
  console.log(ret);
  res.send({
    ok: 1,
  });
});

app.get('/update', async (req, res) => {
  const sql = 'update users set age=? where id=?'; // 构建sql语句
  // 执行sql语句
  const ret = await db.query(sql, [10, 2]);
  console.log(ret);
  res.send({
    ok: 1,
  });
});

app.get('/delete', async (req, res) => {
  const sql = 'delete from users where id=?'; // 构建sql语句
  // 执行sql语句
  const ret = await db.query(sql, [1]);
  console.log(ret);
  res.send({
    ok: 1,
  });
});

app.listen(3002);
