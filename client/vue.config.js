module.exports = {
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
  }
}
