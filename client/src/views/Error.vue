<template lang="html">
  <div class="error">
    <div class="enclosure">
      <img src="@/assets/images/error.png" />
      <p class="title">Oops!</p>
      <p class="description">Something went wrong, it cloud be your device does not support WebRTC, or you don't have a webcam ❌</p>
      <router-link class="button-enclosure" :to="{ name: 'landing' }"><Button label="Back" /></router-link>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'error',
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
  .error {
    @include flexbox();
    @include flex-direction(column);
    @include align-items(center);
    @include justify-content(center);
    width: 100%;
    height: $router-view-height;
    .enclosure {
      @include flexbox();
      @include flex-direction(column);
      @include align-items(center);
      position: relative;
      bottom: 2rem;
      width: 100%;
      height: auto;
      img {
        width: 10rem;
        height: auto;
      }
      p {
        @include font('gilbert');
        margin: 0 !important;
      }
      .title {
        font-size: 24pt;
        padding: 1rem;
      }
      .description {
        color: $descriptive;
      }
    }

  }
</style>
