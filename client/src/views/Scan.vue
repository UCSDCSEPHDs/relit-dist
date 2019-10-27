<template lang="html">
  <div class="scan">
    <div class="cam-enclsore">
      <web-cam
          ref="webcam"
          :device-id="deviceId"
          width="100%"
          height="100%"
          @started="onStarted"
          @stopped="onStopped"
          @error="onError"
          @cameras="onCameras"
          @camera-change="onCameraChange"
      />
    </div>
    <div class="controls">
      <div class="shutter" @click="onCapture">
        <img src="@/assets/images/shutter.svg" />
      </div>
      <!-- <img src="@/assets/images/shutter.png" @click="onCapture" /> -->
    </div>
  </div>
</template>

<script>
import { WebCam } from 'vue-web-cam'

export default {
  name: 'scan',
  data() {
    return {
      img: null,
      camera: null,
      deviceId: null,
      devices: []
    };
  },
  components: {
    WebCam
  },
  computed: {
    device: function() {
      return this.devices.find(n => n.deviceId === this.deviceId);
    }
  },
  watch: {
    img: function () {
      console.log(this.$data.img)
    },
    camera: function (id) {
      this.deviceId = id;
    },
    devices: function () {
      // Once we have a list select the first one
      const length = this.devices.length
      const [first, second, ...rest] = this.devices
      let that = this
      if (length == 1) {
        that.camera = first.deviceId
        that.deviceId = first.deviceId
      } else if (length > 1) {
        that.camera = second.deviceId
        that.deviceId = second.deviceId
      } else {
        console.error("No camera detected")
      }
    }
  },

  methods: {
    onCapture () {
      this.img = this.$refs.webcam.capture()
      this.$router.push('result')
    },
    onStarted (stream) {
      console.log("On Started Event", stream)
    },
    onStopped (stream) {
      console.log("On Stopped Event", stream)
    },
    onStop () {
      this.$refs.webcam.stop()
    },
    onStart () {
      this.$refs.webcam.start()
    },
    onError (error) {
      this.$router.replace('error')
    },
    onCameras (cameras) {
      this.devices = cameras;
      console.log("On Cameras Event", cameras)
    },
    onCameraChange (deviceId) {
      this.deviceId = deviceId;
      this.camera = deviceId;
      console.log("On Camera Change Event", deviceId)
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
