module.exports = {
  publicPath: '/',
  outputDir: './qybook',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/variable.scss";'
      }
    }
  }
}
