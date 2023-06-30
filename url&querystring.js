const _url = require('url');
const qs = require('querystring');

const url = new URL('http://www.example.com/index.html?a=1&b=2');
// const url1 = new URL('/aa', 'http://www.example.com/a');
// console.log(url);

console.log(url.toJSON());

// for (const item of url.searchParams.entries()) {}
// 等同于
for (const item of url.searchParams) {
  console.log(item, 'item');
}

const myURL = new URL('https://a:b@測試?abc#foo');

console.log(myURL.href);
// Prints https://a:b@xn--g6w251d/?abc#foo

console.log(myURL.toString());
// Prints https://a:b@xn--g6w251d/?abc#foo

console.log(_url.format(myURL, { fragment: false, unicode: true, auth: false }));
// Prints 'https://測試/?abc'

console.log(_url.fileURLToPath('file:///C:/path/'));

const a = qs.stringify({ username: 'admin', password: '123456' });

console.log(a);

console.log(qs.parse(a), 'parse');
