module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/_colors.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.module.rules.delete("svg");
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: "vue-svg-loader"
        }
      ]
    }
  }
};
