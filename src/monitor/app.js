const Koa = require('koa')
const service = new Koa()

service.use(async (ctx, next) => {
  ctx.body = 'monitor'
})
service.listen('3000', () => {
  console.log('monitor is listening')
})

