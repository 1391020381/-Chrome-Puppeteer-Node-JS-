const Koa = require('koa')
const service = new Koa()
const router = require('./routes/index.js')

service.use(router.routes())
service.listen('3000', () => {
  console.log('monitor is listening')
})

