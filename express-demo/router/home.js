const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.query);
  res.send('home');
});

router.post('/', (req, res) => {
  console.log(req.body, 'body');
  res.send({ code: 1 });
});

router.get('/info/:id', (req, res) => {
  console.log(req.params);
  res.send({ age: 3, name: '22' });
});

module.exports = router;
