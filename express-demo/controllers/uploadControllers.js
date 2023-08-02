const uploadAvatar = require('../multer/upload');

// 用户的逻辑控制器
const UploadController = {
  // 头像图片上传
  async upload(req, res) {
    try {
      const uploadRes = await uploadAvatar(req, res);
      console.log(uploadRes, 'uploadRes');
      res.send({
        img_url: uploadRes,
        meta: { code: 200, msg: '上传成功！' },
        data: { img_url: uploadRes },
      });
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = UploadController;
