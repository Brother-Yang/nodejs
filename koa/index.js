const koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const path = require('path');

const app = new koa();
const router = new Router();

app.use(static(path.join(__dirname, './public')));

// function delay(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, time * 1000);
//   });
// }

// app.use(async (ctx, next) => {
//   console.log(1);
//   await next();
//   console.log(4);
//   // ctx.body = 'hello';
// });
// app.use(async () => {
//   console.log(2);
//   await delay(3);
//   console.log(3);
// });

router.post('/list', (ctx) => {
  ctx.body = ['111', '222', '333'];
});

router.get('/list', (ctx) => {
  ctx.body = [3, 4, 5];
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
