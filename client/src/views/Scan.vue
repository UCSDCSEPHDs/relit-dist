<template lang="html">
  <div class="scan">
    <web-cam :width="windowWidth" :height="windowHeight" @notsupported="onError" />
  </div>
</template>

<script>
import { WebCam } from 'vue-web-cam'
import { vueWindowSizeMixin } from 'vue-window-size'

export default {
  name: 'Scan',
  data () {
    return {}
  },
  components: {
    WebCam
  },
  mounted: function () {},
  mixins: [ vueWindowSizeMixin ],
  onError: function () {
    this.$router.replace('error')
  }
}
</script>

<style lang="scss" scoped>

</style>
