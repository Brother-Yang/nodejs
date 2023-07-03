const fs = require('fs');

fs.writeFile('./hello.txt', 'hello world', 'utf8', function (err) {
  if (err) throw err;
  console.log('文件写入成功');
});

fs.readFile('./hello.txt', 'utf8', function (err, data) {
  if (err) {
    return console.error('读取文件出错: ' + err.message);
  }
  console.log('文件内容: ' + data);
});

fs.access('hello.txt', fs.constants.F_OK, (err) => {
  if (err) {
    console.log('package.json不存在于当前目录中');
    return;
  }
  console.log('package.json存在于当前目录中');
});

fs.unlink('./hello.txt', function (err) {
  if (err) throw err;
  console.log('文件删除成功');
});
