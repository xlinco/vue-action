// 每次做更改这个配置文件的时候，都必须重启项目才会生效

module.exports={
  configureWebpack:{
    devServer:{
      port:8080,    // 端口号
      open:false,    // 自动打开浏览器
      // Mock数据接口编写的地方
      before(app){
        // app.get('请求地址',(req,res)=>{
        //   /*req,res*/
        //   res.json({
        //   })
        // })

        // 注册接口
        // 用户信息池
        let userpoor = [
          { username: 'admin', password: '123' },
          { username: 'test', password: '123456' }
        ]

        app.get('/api/register', (req, res) => {
          const { username, password } = req.query;
          const userlength = userpoor.filter(v => v.username == username).length;
          if (userlength > 0) {
            res.json({
              success: false,
              message: '用户名已存在'
            })
          } else {
            res.json({
              success: true,
              message: '注册成功'
            })
          }
        })

        // 登录接口
        let tokenkey = 'practice'
        app.get('/api/login', (req, res) => {
          const { username, password } = req.query;
          if (username == 'admin' && password == '123' || username == 'test' && password == '123456'){
            res.json({
              code:200,
              message:'登录成功',
              token:tokenkey+'-'+username+'-'+(new Date().getTime()+60*60*1000)
            })
          }else{
            res.json({
              code: 500,
              message: '账号或密码错误'
            })
          }
        })
      }
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
