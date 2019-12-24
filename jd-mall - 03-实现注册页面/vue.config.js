// 该文件需要自己手动创建,并添加自己需要进行的配置,具体配置可参考地址 https://www.cnblogs.com/zjhr/p/9472648.html

module.exports={
  configureWebpack:{
    devServer:{
      port:8080,    // 端口号
      open:true,    // 自动打开浏览器
      // Mock数据
      before(app){

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
