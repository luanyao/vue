

//以前的方式
//var name = obj.className
//var desc = obj.desc          
//console.log(className.desc)

// 结构赋值
//let obj = {
//    className: 'web123',
//    desc: '除了帅一无所有, 当然这是真的啦'
//}

//黑科技
//const {className, desc} = obj
//console.log(className, desc)




//function add(x,y) {
//    return x + y
//}

// 匿名箭头函数
//(x,y) => {
//    return x + y
//}

//var add = (x,y) => {
//    return x + y
//}
//
//console.log(1, 2)

//------------------变体1
//var add = x => {
//    return x + 10
//}

//console.log(add(1))

//------------------变体2
//var add = (x,y) => x + y

//console.log(add(1,2))

//------------------变体3

//var add = x => x + 20
//console.log(add(3))


//读取文件
//const fs = require('fs')
//
//fs.readFile('./files/4.txt','utf-8',(err,data) =>{
//
//  if(err) return console.log('文件读取失败了')
//
//  console.log(data)
//})



// appendFile 追加文件
//fs.appendFile('./files/3.txt', '姜伯约在此',(err)=>{
//    if(err) return console.log('文件追加失败了')
//     console.log('文件追加成功了')
//    })


//const fs = require('fs')
//const path = require('path')
//
//
//
//fs.readFile(path.join(__dirname,'./1.txt'), 'utf-8', (err,dataStr) =>{
//    if(err) return console.log('err.message')
//    console.log(dataStr)
//})

