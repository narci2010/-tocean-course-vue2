// scss样式
// @mixin fontColor{
//     color:red;
// }
// 引入fontColor
// @include fontColor

const path = require('path');
// const os = require('os');
// const UglifyjJsPlugin = require('uglifyjs-webpack-plugin');

// const isProduct = process.env.NODE_DEV === 'production';

// 引入文件
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  runtimeCompiler: true,

  devServer: {
    // overlay: { // 让浏览器 overlay 同时显示警告和错误
    //   warnings: true,
    //   errors: true
    // },
    // open: false, // 是否打开浏览器
    // host: "localhost",
    port: '8080', // 代理断就
    // https: false,
    // hotOnly: false, // 热更新
    //     proxy: {
    //       '/api': {
    //         target: 'https://www.easy-mock.com/mock/5bc75b55dc36971c160cad1b/sheets', // 目标代理接口地址
    //         secure: false,
    //         changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
    //         // ws: true, // 是否启用websockets
    //         pathRewrite: {
    //           '^/api': '/',
    //         },
    //       },
    //     },
  },
  //   publicPath: './',

  //   outputDir: 'dist',

  //   lintOnSave: true,
  //   resolve: {
  //     alias: {
  //       vue: 'vue/dist/vue.js',
  //     },
  //   },
  //   externals: {
  //     vue: 'Vue',
  //   },
  //   devServer: {
  //     // 开启压缩
  //     compress: false,
  //     proxy: {
  //       api: {
  //         // 需要代理的服务器地址
  //         target: 'http:www.laowang.com',
  //         ws: true,
  //         // 是否允许跨域
  //         changeOrigin: true,
  //         pathRewrite: {
  //           api: '/',
  //         },
  //       },
  //     },
  //   },
  //   css: {
  //     // 分离插件 需要装插件 mini-css-extract-plugin
  //     extract: true,
  //     sourceMap: false,
  //     loaderOptions: {
  //       sass: {
  //         data: `
  //                     @import '@/assets/common/index.scss'
  //                 `,
  //       },
  //     },
  //     // css处理模块
  //     modules: false,
  //   },
  //   // webpack配置
  chainWebpack: (config) => {
    // 配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@img', resolve('src/assets/img'))
      .set('@scss', resolve('src/assets/common'));

    //     config.plugins.delete('fork-ts-checker');
    //     config.module.rule('ts').use('ts-loader');
    // .tap(options => ({ ...options, transpileOnly: false }));
  },

  //     if (isProduct) {
  //       // 删除预加载
  //       config.plugins.delete('preload');
  //       config.plugins.delete('prefetch');
  //       // 压缩代码
  //       config.optimization.minimize(true);
  //       // 根据不同的类型进行分割
  //       config.optimization.splitChunks({
  //         chunks: 'all',
  //       });
  //       // 注入cdn
  //     }
  //   },
  //   configureWebpack: (config) => {
  //     // if里面可以注入cdn
  //     if (isProduct) {
  //       config.plugins.push(
  //         new UglifyjJsPlugin({
  //           uglifyOptions: {
  //             // 删除debugger、console
  //             compress: {
  //               drop_debugger: true,
  //               drop_console: true,
  //             },
  //           },
  //           sourceMap: false,
  //           // 多进程并行来提高构建速度
  //           parallel: true,
  //         }),
  //       );
  //     } else {
  //       // 为其他环境配置
  //     }
  //   },
  //   // 生产环境是否生成sourceMap
  //   productionSourceMap: false,
  //   // 启用并行化 默认并发运行数('os').cpus().length - 1 显著加速构建
  //   parallel: os.cpus().length > 1,
  // 下面配置，支持js，ts混用
  configureWebpack: {
    resolve: { extensions: ['.ts', '.tsx', '.js', '.json'] },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      ],
    },
  },
};
