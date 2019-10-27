<template lang="html">
  <div class="result">
    <p class="description">Got it!</p>
    <p class="title">{{ $store.getters.result.name }}</p>
    <div class="type">
      <img :src="resolveIcon" />
      <label :style="{ color: resolveColor }">{{ resolveType }}</label>
    </div>
    <div class="tip">
      <p>{{ $store.getters.result.tip }}</p>
    </div>
    <router-link class="button-enclosure" :to="{ name: 'landing' }"><Button label="Rescan" /></router-link>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'result',
  data () {
    return {}
  },
  components: {
    Button
  },
  computed: {
    resolveType: function () {
      return ['Recycable', 'Hazardous', 'Wet', 'Dry'][this.$store.getters.result.type]
    },
    resolveIcon: function () {
      return require.context('@/assets/images/', false, /\.png$/)(`./${['recycable'][this.$store.getters.result.type]}.png`)
    },
    resolveColor: function () {
      return ['#1aad19'][this.$store.getters.result.type]
    }
  }
}
</script>

<style lang="scss" scoped>
  .result {
    @include flexbox();
    @include flex-direction(column);
    @include align-items(center);
    position: absolute;
    width: 100%;
    height: $router-view-height;
    p {
      margin: 0 !important;
    }
    .description {
      color: $descriptive;
    }
    .title {
      font-size: 24pt;
    }
    .type {
      @include flexbox();
      @include flex-direction(column);
      @include align-items(column);
      padding: 3rem 0;
      img {
        width: 8rem;
        height: 8rem;
      }
    }
    .tip{
      @include flexbox();
      @include flex-direction(column);
      @include align-items(column);
      padding: 0 3em;
      box-sizing: border-box;
      text-align: center;
    }
  }
</style>
