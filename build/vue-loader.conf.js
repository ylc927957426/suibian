'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  devServer:{
    //设置代理
    proxy: { //代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
      // /api 是一个访问别名
      '/T1348647853363/0-140.html': { // axios 访问 /douban/v2/xxx == target + '/douban/v2/xx
        target: 'http://c.3g.163.com/nc/article/headline',
        changeOrigin: true,
        pathRewrite: { //路径替换
          '^/douban': '', // axios 访问/douban/v2 == target + /v2
        }
      }
    }
  }
}
