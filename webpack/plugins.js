const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const JOIN_PATH = $path => {
    return path.join(__dirname, "..", $path)
}
module.exports = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        // 打包生成的html文件的路径和名字，被引入资源文件的路径需要与当前环境的publicPath相结合，本地开发环境和生产环境是不同的。
        filename: "index.html",
        // 源文件地址
        template: JOIN_PATH("/src/public/index.html"),
        // 打包生成的脚本文件插入页面的位置
        inject: "body",
        // 生成html文件的标题
        title: "",
        // minify用于压缩html文件，其中removeComments: true用于移除html中的注释，collapseWhitespace: true用于删除空白符与换行符
        minify: {
            collapseWhitespace: true
        }
    }),
    new VueLoaderPlugin()
]