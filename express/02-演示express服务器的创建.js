// 1.导入express
const express = require('express')

// 2.调用express()创建服务器
const app = express()

/*app.set('view engine', 'ejs')

app.set('views','./ejs_pages')

// 3.调用 aap.get()方法, 来监听客户端的请求,并指定要监听的URL地址和处理函数
app.get('/',(req,res)=>{
    //使用express调用http模块中的end方法向客户端发送数据
    //res.send('哈哈哈')
    res.render('index.ejs',{name: 'zs',age:20,hobby:['吃饭','阅读','唱歌']})
})*/
app.use('/', express.static('./views'))

// 4.调用app.listen()方法启动 express服务器
app.listen(3000,()=>{
    console.log('server running at http://127.0.0.1:3000')
})