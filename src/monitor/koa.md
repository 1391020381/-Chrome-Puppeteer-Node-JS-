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
  # koa获取参数
  1. 获取类似的 req.params的参数
    * req.params  另一种方法传参数给服务器,但是这不算是传统标准的做法,是属于 HTTP Routing的延伸应用
    * req.params：解析URL中占位符,如/:name,访问/haha ,req.params的值为{name:'haha'}
    
    在koa中就是 ctx.params.postId
  2. 获取query的参数
     * ctx.query  
 
