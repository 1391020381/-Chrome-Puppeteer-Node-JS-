  # koa
  ## koa-router   koa的路由中间件
  1. 子路由
  ```
    const Router = require('koa-router')
    const router = new Router()
    router.get('/',async(ctx,next)=>{
   
     })
```
  2. 父路由
    1. 导入各个子路由,然后使用  koa-router实例来加载，再暴露出去
    ```
    const Router = require('koa-router')
    const router = new Router()
    const page = require('./page)
    router.use('/page',page.routes(),page.allowedMethods())
    module.exports = router
    ```
  3. koa实例加载路由中间件
  ```
  const Koa = require('koa')
  const router = require('router/index.js')
  const service = new Koa()
  service.use((router.routes(), router.allowedMethods()))
  ```
 
