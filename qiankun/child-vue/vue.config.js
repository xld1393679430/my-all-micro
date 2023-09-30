module.exports = {
    devServer: {
        port: 30000,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        output: {
            library: 'vueApp',
            libraryTarget: 'umd'
        }
    }
}