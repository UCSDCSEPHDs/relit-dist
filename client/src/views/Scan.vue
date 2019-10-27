<template lang="html">
  <div class="scan">
    <div><video ref="video" id="video" width="640" height="480" autoplay></video></div>
  </div>
</template>

<script>
export default {
  name: 'Scan',
  data () {
    return {
      video: {},
      captures: []
    }
  },
  components: {},
  mounted: function () {
    this.video = this.$refs.video
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({
        video: true
      })
        .then(stream => {
          this.video.src = window.URL.createObjectURL(stream)
          this.video.play()
        })
        .catch(e => {
          this.$router.replace('error')
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
