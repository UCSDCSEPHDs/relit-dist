<template lang="html">
  <div class="scan">
    <div class="cam-enclsore">
      <web-cam
          ref="webcam"
          :device-id="deviceId"
          width="100%"
          height="100%"
          @error="onError"
          @cameras="onCameras"
      />
    </div>
    <div class="controls">
      <div class="shutter" @click="onCapture">
        <img src="@/assets/images/shutter.svg" />
      </div>
    </div>
    <b-modal id="waiting" title="Hang Tight!" centered ok-only ok-title="Got it!">
      <p>re:Lit is processing your image!</p>
    </b-modal>
  </div>
</template>

<script>
import { WebCam } from 'vue-web-cam'
import { post } from 'axios'

export default {
  name: 'scan',
  data () {
    return {
      img: null,
      camera: null,
      deviceId: null,
      devices: []
    }
  },
  components: {
    WebCam
  },
  computed: {
    device: function () {
      return this.devices.find(n => n.deviceId === this.deviceId)
    }
  },
  watch: {
    camera: function (id) {
      this.deviceId = id
    },
    devices: function () {
      const length = this.devices.length
      // const [first, second, ...rest] = this.devices
      // let that = this
      if (length === 1) {
        this.camera = this.devices[0].deviceId
        this.deviceId = this.devices[0].deviceId
      } else if (length > 1) {
        this.camera = this.devices[1].deviceId
        this.deviceId = this.devices[1].deviceId
      } else {
        console.error('No camera detected')
      }
    }
  },

  methods: {
    onCapture () {
      this.img = this.$refs.webcam.capture()
      console.log(this.img)
      this.$store.commit('beginRequest')
      this.$bvModal.show('waiting')
      post('https://relit.xyz/classify', {
        img: this.img
      })
        .then(res => console.log(res.data))
      // this.$router.push('result')
    },
    onError (error) {
      console.log(error)
      this.$router.replace('error')
    },
    onCameras (cameras) {
      this.devices = cameras
    }
  }

}
</script>

<style lang="scss" scoped>
  .scan {
    @include flexbox();
    @include flex-direction(column);
    @include align-items(center);
    @include justify-content(center);
    height: $router-view-height;
    background-color: black;
    .cam-enclosure {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 0;
    }
    .controls {
      @include flexbox();
      @include flex-direction(column);
      @include align-items(center);
      @include justify-content(center);
      position: absolute;
      bottom: 0;
      padding-bottom: 88px;
      width: 100%;
      z-index: 1;
      .shutter {
        @include flexbox();
        @include flex-direction(column);
        @include align-items(center);
        @include justify-content(center);
        width: 5rem;
        height: 5rem;
        border: none !important;
        border-radius: 50%;
        background: linear-gradient(to right, $primary, $secondary);
        img {
          filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.25));
        }
      }
    }
  }
</style>
