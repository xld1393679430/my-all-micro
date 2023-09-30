const path = require("path");
const { name } = require("./package");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const { NODE_ENV } = process.env

module.exports = {
  filenameHashing: true,
  lintOnSave: NODE_ENV !== "production",
  runtimeCompiler: true,
  productionSourceMap: false,
  devServer: {
    hot: true,
    disableHostCheck: true,
    // 修改默认端口，和注册时一直
    port: 8083,
    overlay: {
      warnings: false,
      errors: true,
    },
    // 解决主应用加载子应用出现跨域问题
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  // 自定义 webpack 配置
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    // 让主应用能正确识别微应用暴露出来的一些信息
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把子应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp*${name}`,
    },
  },
};