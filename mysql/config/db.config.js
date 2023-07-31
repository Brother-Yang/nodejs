const mysql = require('mysql2/promise');

// 通过createPool方法连接服务器
const db = mysql.createPool({
  host: '127.0.0.1', // 表示连接某个服务器上的mysql数据库
  user: 'root', // 数据库的用户名 （默认为root）
  password: '12345678', // 数据库的密码 (默认为root)
  database: 'test', // 创建的本地数据库名称
});

// 测试数据库是否连接成功
db.getConnection((err, conn) => {
  conn.connect((err) => {
    if (err) {
      console.log('连接失败~');
    } else {
      console.log('连接成功~');
    }
  });
});

module.exports = db;

// CREATE TABLE  `users`(
//   `id` INT UNSIGNED AUTO_INCREMENT,
//   `username` VARCHAR(20) NOT NULL,
//   `password` VARCHAR(20) NOT NULL,
//   `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP  ,
//   PRIMARY KEY ( `id` )
// ) DEFAULT CHARSET=utf8;
