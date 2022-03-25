const path = require("path");
const { isProd, mode, publicPath } = require("./config");
const loaders = require("./loaders");
const plugins = require("./plugins");
const JOIN_PATH = $path => {
    return path.join(__dirname, "..", $path)
}
const entry = {
    index: JOIN_PATH("/src/main.ts")
}
const output = {
    path: JOIN_PATH("./dist"),
    filename: "[name].[hash:4].js",
    publicPath
}
const devServer = {
    host: "127.0.0.1",
    port: 8080,
    disableHostCheck: true,
    allowedHosts: [".jd.com"],
    publicPath,
    historyApiFallback: {
        rewrites: [
            {
                from: /.*/g,
                to: "index.html"
            }
        ]
    }
}
module.exports = {
    mode,
    entry,
    output,
    devServer,
    module: loaders,
    plugins,
    resolve: {
        alias: {
            "@": JOIN_PATH("/src")
        },
        extensions: [".ts", "tsx", ".js", ".jsx", ".vue", ".json", ".scss"]
    },
    externals: {
        vue: "Vue"
    }
}