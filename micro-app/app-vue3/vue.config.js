module.exports = {
	output: {
		library: "qiankun-app-vue",
		libraryTarget: "umd"
	},
    devServer: {
		inline: true,
		hot: true,
		stats: 'minimal',
		contentBase: __dirname,
		overlay: true,
		historyApiFallback: true,

		port: 8083,
		headers: {
			"Access-Control-Allow-Origin": "*"
		}
	}
}