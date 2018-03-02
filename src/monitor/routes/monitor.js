const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = 'monitor'
})
router.get('/test', async (ctx, next) => {
  ctx.body = 'test'
})

module.exports = router