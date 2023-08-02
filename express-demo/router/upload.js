const express = require('express');

// 导入用户逻辑
const uploadController = require('../controllers/uploadControllers');

// 创建路由对象
const router = express.Router();

// 设置路由
router.post('/', uploadController.upload);

// 导入路由对象
module.exports = router;
