// 引入配置好的 multerConfig
const multerConfig = require('./multerConfig');
const fs = require('fs');
const path = require('path');

// 上传到服务器地址
const BaseURL = 'http://localhost:3001';
// 上传到服务器的目录
const imgPath = '/express-demo/public/';

const handlePath = (dir) => {
  return path.join(__dirname, './', dir);
};

function filterLastFile(files) {
  const fileTimeArr = files?.map((item) => item?.split('-')?.[0]);
  const maxTime = Math.max(...fileTimeArr);
  return files?.filter((item) => item?.indexOf(maxTime) === -1);
}

const hanldeImgDel = (originalname) => {
  fs.readdir(handlePath('../public/'), (err, files) => {
    if (err) return console.log('upload 读取目录报错', err);

    for (const i of filterLastFile(files?.filter((item) => item?.indexOf(originalname) !== -1))) {
      fs.unlink(handlePath('../public/') + i, (err) => {
        if (err) {
          console.log('upload 删除文件报错', err);
        }
      });
    }
  });
};

// 封装上传图片的接口
function uploadAvatar(req, res) {
  return new Promise((resolve, reject) => {
    multerConfig.single('file')(req, res, function (err) {
      if (err) {
        // 传递的图片格式错误或者超出文件限制大小，就会reject出去
        reject(err);
      } else {
        // 删除同名图片，有瑕疵
        hanldeImgDel(req.file.originalname);
        resolve(BaseURL + imgPath + req.file.filename);
        // 拼接成完整的服务器静态资源图片路径
      }
    });
  });
}

module.exports = uploadAvatar;
