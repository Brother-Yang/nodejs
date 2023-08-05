const path = require('path');

// 简单拼接
console.log(path.join('/a', '/v', '../', 'c', '/b'));
// /为绝对路径
console.log(path.resolve('/a', '/v', '../', 'c', '/b', 'z', 'g', 'e', '.'));
