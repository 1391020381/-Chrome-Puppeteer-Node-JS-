const Router = require('koa-router')
const router = new Router()
const index = require('./home')
const monitor = require('./monitor')

router.use('/index', index.routes())
router.use('/monitor', monitor.routes())

module.exports = router