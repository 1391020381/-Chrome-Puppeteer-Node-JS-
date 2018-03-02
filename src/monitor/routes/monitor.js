const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {
  let img = ctx.params.img

  ctx.body = `<img src="${img}">`
})
router.get('/test', async (ctx, next) => {
  ctx.body = 'test'
})

module.exports = router