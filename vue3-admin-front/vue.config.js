const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

// 配置全局less变量
module.exports = {
    pluginOptions: { // 第三方插件配置
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, 'src/assets/styles/vars.less')]
        }
    },
    configureWebpack: {
        //配置路径相关的时候用resolve 可以解决路径相关的问题
        resolve: {
            //别名ps：.vue等相关的其实已经写了，这里只需要写我们自己需要的
            alias: {
                //默认有@  他指向的是：src
                'assets': '@/assets',
                'styles': '@/assets/styles',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                //router 一般情况下不用配置，因为只有在main.js中引用一次，如果有需要也可以在这里配置
                // 'router': '@/router'
            }
        }
    }
}

