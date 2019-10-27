module.exports = {
  devServer: {
    https: true
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/assets/mixins/variables.scss";
        @import 'node_modules/bootstrap/scss/bootstrap';
        @import 'node_modules/bootstrap-vue/src/index.scss';
        @import url('https://use.typekit.net/dav4knx.css');
        @import "@/assets/mixins/flex.scss";
        @import "@/assets/mixins/font.scss";
        `
      }
    }
  },
  pwa: {
    name: 're:Lit',
    themeColor: '#ffffff'
  }
}
