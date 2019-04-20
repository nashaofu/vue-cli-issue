const pages = Array(12)
  .fill(0)
  .reduce((pages, val, index) => {
    pages[`index${index}`] = {
      // page 的入口
      entry: `src/main${index}.js`,
      // 模板来源
      template: `public/index${index}.html`,
      // 在 dist/index.html 的输出
      filename: `index${index}.html`
    }
    return pages
  }, {})
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      },
      '/ms': {
        target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
        changeOrigin: true
      }
    }
  },
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html'
    },
    ...pages
  }
}
