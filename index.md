# 创建package.json文件
### npm init -y
# 创建webpack.config.js文件
### 在其中配置入口、出口文件，配置运行模式，配置运行端口等
### 下载webpack-dev-server运行项目
### 下载插件配置plugin
#### html-webpack-plugin: 将公用js、css代码插入html中，减少请求次数
#### clean-webpack-plugin: 打包后将旧包清理
#### mini-css-extract-plugin: css单独打包
### loader转换器
因为webpack只能解析js或者json文件，需要loader将其他文件进行转换，从而正常运行
#### css与less转换（css-loader, style-loader, less-loader），
* 在入口js中引入css文件后进行解析
* 但在html中通过link引入css文件，无法解析正确。
#### html解析（html-loader）
* 解析html文件中的url
#### 图片解析（url-loader）
* 可解析css、html中图片，并配置大小（小于此限制转换成base64，可减少图片引用）与图片打包地址名字
#### babel（创建babel.config.js文件）
* 将高级语法转换，将es6转换成es5，在开发环境代码不会进行压缩以及转换，生产环境包中会进行压缩
* 但看了生产环境的代码，还不是很明白转换的含义，const并么有被转换掉

#### 在静态导入（statically import）使用splitChunksPlugin可以将公共模块分离出来存入chunk，从而减小打包体积，其中mini-css-extract-plugin是将css文件分离出来
#### 使用source-maps可以在打包后将报错信息定位到实际文件
#### 在使用静态导入（dynamic import）会自动将文件分离到chunk
#### 预获取prefetch，将来某些导航下可能需要的资源，在父chunk加载结束后加载，在浏览器闲置时下载，会用于未来某一时刻
#### 预加载preload，本导航下可能需要的资源，在父chunk加载时，以并行方式开始加载，具有中等优先级，并立即下载，在父chunk中立即请求，用于当下时刻