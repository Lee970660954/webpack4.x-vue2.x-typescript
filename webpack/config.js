/**
 * 构建环境是否为生产环境
 */
const isProd = process.env.NODE_ENV === "production";
/**
 * 构建模式 有两个值 production-生产环境模式 development-开发环境模式
 */
const mode = isProd ? "production" : "development";
/**
 * 构建的公共路径 生产环境为带有cdn域名的路径
 */
const publicPath = isProd ? "//host.cdn.com/m/" : "/m/";
module.exports = {
    isProd,
    mode,
    publicPath
}