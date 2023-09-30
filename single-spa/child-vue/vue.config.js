module.exports = {
    configureWebpack: {
        output: {
            library: 'singleVue',
            libraryTarget: 'umd', // 把导出的3个生命周期函数挂在到window.singleSpaVue属性上
        },
        devServer: {
            port: 10000
        }
    }
}