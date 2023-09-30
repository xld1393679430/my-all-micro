module.exports = {
    webpack: (config) => {
        config.output.library = 'reactApp'
        config.output.libraryTarget = 'umd'
        config.output.publicPath = 'http://localhost:40000/'
        return config
    },
     devServer: (configFn) => {
        return function(proxy, allowedHost) {
            const config = configFn(proxy, allowedHost)
            // config.port = 'xxxx'
            config.headers = {
                'Access-Control-Allow-Origin': '*'
            }
            return config
        }
     }
}