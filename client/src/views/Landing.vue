<template>
  <div class="landing">
    <div class="enclosure">
      <img src="@/assets/images/landing.png" />
      <div class="agenda">
        <p class="title">No More Doubts.</p>
        <p class="description">Let re:Lit tells you where your trash should go</p>
      </div>
    </div>
    <router-link class="button-enclosure" :to="{ name: 'scan' }"><Button label="Scan It!" /></router-link>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'landing',
  components: {
    Button
  }
}
</script>

<style lang="scss" @scoped>
@import url('https://use.typekit.net/dav4knx.css');
@import '@/assets/mixins/flex';
@import '@/assets/mixins/font';
  .landing {
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
      bottom: 5rem;
      width: 100%;
      height: auto;
      img {
        max-width: 20rem;
        box-sizing: border-box;
        padding: 7px 15px;
      }
      .agenda {
        @include flexbox();
        @include flex-direction(column);
        @include align-items(center);
        width: 100%;
        box-sizing: border-box;
        padding: 0 10vw;
        p {
          margin: 0 !important;
        }
        .title {
          font-size: 24pt;
          padding: 15px 0;
        }
        .description {
          font-size: 16pt;
          color: #b2b2b2;
        }
      }
    }
    .button-enclosure {
      position: absolute;
      bottom: 5rem;
      width: 80%;
      height: 3rem;
    }
  }
</style>
