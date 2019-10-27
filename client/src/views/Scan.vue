<template lang="html">
  <div class="scan">
    <vue-webrtc width="100%" />
  </div>
</template>

<script>
import { WebRTC } from 'vue-webrtc'

export default {
  name: 'Scan',
  components: {
    [WebRTC.name]: WebRTC
  }
}
</script>

<style lang="scss" scoped>
  .scan {
    width: 100%;
    height: $router-view-height
  }
</style>
