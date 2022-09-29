/**
 * @description
 * @author 康慧怡
 * @Date 2022/09/26
 */
let HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { loader } = require("mini-css-extract-plugin");
module.exports = {
    mode: 'development',
    devServer: {
      port: 30000,
        hot: true
    },
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    // 引入插件，扩展webpack的能力
    plugins: [
        // 将公共的css、js插入到html中，减少请求次数，优化性能
        new HtmlWebpackPlugin({
            title: '傻了',
            template: path.join(__dirname, './src/index.html'),
            filename: path.join(__dirname, './dist/index.html')
        }),
        // 自动清理dist目录中的旧文件
        new CleanWebpackPlugin(),
        // 提取css代码为单独的css文件, 默认main.css
        new MiniCssExtractPlugin(),
    ],
    // 导出为函数的js模块，webpack只能处理.js和.json后缀的模块，调用加载器做到正常打包
    module: {
        rules: [
            {
                // 匹配css文件类型
                test: /\.css$/,
                // 从右往左,先用css-loader处理css，然后用style-loader把css-loader解析后的样式代码内敛插入html的style中
                // use: ['style-loader', 'css-loader'],
                // 提取css代码为单独的css文件
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                // 匹配less文件类型
                test: /\.less$/,
                // 从右往左
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
              test: /\.html$/,
              use: {
                  // 解析html文件中的url
                  loader: 'html-loader',
                  // options: {
                  //     attributes: true
                  // }
              }
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    // 图片转base64最小限制
                    dataUrlCondition: {
                        maxSize: 1024 * 8
                    }
                },
                generator: {
                    // 打包后文件位置
                    filename: 'image/[name].[hash:7].[ext]',
                    publicPath: './'
                }
            },
            // 将高级语法解析成浏览器能懂的语法
            {
                test: /\.js $/,
                use: 'babel-loader',
                // 排除解析文件
                exclude: /node_modules/
            }
        ]
    }
}