var path = require('path');
var webpack = require('webpack');
//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {
    devtool: 'eval-source-map', //生成Source Maps,这里选择eval-source-map
    entry:['webpack/hot/dev-server', path.resolve(__dirname, './app/index.js')], //唯一入口文件
    output: { //输出目录
        path: __dirname + "/build", //打包后的js文件存放的mulu
        filename: 'bundle.js', //打包后的js文件名
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=25000'
        }]
    },
    devServer: {
        contentBase: "./build", //默认webpack-dev-server会为根文件夹提供本地服务器，本实例设置 build 目录
        historyApiFallback: true, //开发单页应用时，如果设置为true，所有的跳转将指向index.html
        inline: true, //设置为true，自动刷新页面
        port: 3005, //设置默认监听端口,默认为"8080"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};





