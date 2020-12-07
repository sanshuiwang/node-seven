## web 服务 如何处理一个 请求

### url-->网络-->dns 解析-->目标服务器

1. 如何响应这个请求 --> 路由

   1》请求方法区分 get/post 进行响应

   2》通过 url 路径 http://baidu.com/[a/b/c.html]

2. express 路由实现上边 1/2》

### 需要定义一个 api/路由，满足客户端无论使用什么请求方式(get/post/delete/put)都可以得到响应

1. app.all

### 无论客户端使用任何的 uri,我们的服务器都可以响应 (实际在日志场景需要)

1. app.all\*

### app.use（中间件） 也可以实现客户端无论使用什么请求方式或 uri 都可以响应, 但是 app.use 一般是写中间件，可以看出来 route 也是中间件的一种

1. app.use

### app 是 web 服务实例，如何做路由的拆分

1. member
2. sku
3. order

> 使用 express.Router 进行路由拆分
