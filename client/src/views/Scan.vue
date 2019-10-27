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
    camera: function(id) {
      this.deviceId = id;
    },
    devices: function() {
      // Once we have a list select the first one
      const [first, ...tail] = this.devices;
      if (first) {
        this.camera = first.deviceId;
        this.deviceId = first.deviceId;
      }
    }
  },
  methods: {
    onCapture() {
      this.img = this.$refs.webcam.capture();
    },
    onStarted(stream) {
      console.log("On Started Event", stream);
    },
    onStopped(stream) {
      console.log("On Stopped Event", stream);
    },
    onStop() {
      this.$refs.webcam.stop();
    },
    onStart() {
      this.$refs.webcam.start();
    },
    onError(error) {
      console.log("On Error Event", error);
    },
    onCameras(cameras) {
      this.devices = cameras;
      console.log("On Cameras Event", cameras);
    },
    onCameraChange(deviceId) {
      this.deviceId = deviceId;
      this.camera = deviceId;
      console.log("On Camera Change Event", deviceId);
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
      background: green;
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
<!-- <template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2>Current Camera</h2>
                <code v-if="device">{{ device.label }}</code>
                <div class="border">
                    <vue-web-cam
                        ref="webcam"
                        :device-id="deviceId"
                        width="100%"
                        @started="onStarted"
                        @stopped="onStopped"
                        @error="onError"
                        @cameras="onCameras"
                        @camera-change="onCameraChange"
                    />
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <select v-model="camera">
                            <option> Select Device </option>
                            <option
                                v-for="device in devices"
                                :key="device.deviceId"
                                :value="device.deviceId"
                            >{{ device.label }}</option>
                        </select>
                    </div>
                    <div class="col-md-12">
                        <button type="button" class="btn btn-primary" @click="onCapture">Capture Photo</button>
                        <button type="button" class="btn btn-danger" @click="onStop">Stop Camera</button>
                        <button type="button" class="btn btn-success" @click="onStart">Start Camera</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <h2>Captured Image</h2>
                <figure class="figure">
                    <img :src="img" class="img-responsive" />
                </figure>
            </div>
        </div>
    </div>
</template> -->
