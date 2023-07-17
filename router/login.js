const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('login', {
    title: 'hello world',
    render: `<h2>哈哈哈</h2>`,
  });
});

module.exports = router;
