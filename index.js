'use strict';
const Koa = require('koa');
const mount = require('koa-mount');
const serve = require('koa-static');
const app = new Koa();
const port = process.env.PORT || 8080;
app.use(mount('/', serve('./')));
const server = app.listen(port);
console.log('Server running at ' + port);