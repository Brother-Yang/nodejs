//main.js
const Koa = require('koa'); // 引入koa
const Router = require('koa-router'); // 引入koa-router
const { koaBody } = require('koa-body');
const static = require('koa-static');
const path = require('path');
const cors = require('koa2-cors');
// const logger = require('koa-logger');

const upload = require('./upload');

const app = new Koa();
const router = new Router();

// app.use(
//   logger((str, args) => {
//     console.log(str);
//     console.log(args);
//   }),
// );

router
  .get('/', async (ctx) => {
    ctx.type = 'html';
    ctx.body = '<h1>hello world!</h1>';
  })
  .post('/upload', upload.single('file'), async (ctx) => {
    ctx.body = 'ok';
  });

app
  .use(cors())
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(static(path.join(__dirname, './public')));

app.listen(3000);

// const koa = require('koa');
// const Router = require('koa-router');
// const static = require('koa-static');
// const path = require('path');

// const app = new koa();
// const router = new Router();

// app.use(static(path.join(__dirname, './public')));

// // function delay(time) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(resolve, time * 1000);
// //   });
// // }

// // app.use(async (ctx, next) => {
// //   console.log(1);
// //   await next();
// //   console.log(4);
// //   // ctx.body = 'hello';
// // });
// // app.use(async () => {
// //   console.log(2);
// //   await delay(3);
// //   console.log(3);
// // });

// router.get('/', (ctx) => {
//   // console.log(ctx.query);
//   // console.log(ctx.querystring);
//   ctx.body = 'hello world';
// });

// router.post('/list', (ctx) => {
//   ctx.body = ['111', '222', '333'];
// });

// router.get('/list', (ctx) => {
//   ctx.body = [3, 4, 5];
// });

// app.use(router.routes()).use(router.allowedMethods());
// app.listen(3000);
