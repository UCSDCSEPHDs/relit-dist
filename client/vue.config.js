module.exports = {
  devServer: {
    https: true
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/assets/mixins/variables.scss";
        @import "@/assets/mixins/flex.scss";
        @import "@/assets/mixins/font.scss";
        `
      }
    }
  },
  pwa: {
    name: 're:Lit',
    themeColor: '#ffffff'
  },
  lintOnSave: false
}
