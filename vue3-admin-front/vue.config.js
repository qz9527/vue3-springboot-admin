const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

// 配置全局less变量
module.exports = {
    pluginOptions: { // 第三方插件配置
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './src/assets/styles/vars.less')]
        }
    }
}

