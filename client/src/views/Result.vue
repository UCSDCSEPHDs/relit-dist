<template lang="html">
  <div class="result">
    <p class="description">Got it!</p>
    <p class="title">{{ $store.getters.result.name }}</p>
    <div class="type">
      <img :src="resolveIcon" />
      <label>{{ resolveType }}</label>
    </div>
    <div class="tip"></div>
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
  components: {},
  computed: {
    resolveType: function () {
      return ['Recycable', 'Hazardous', 'Wet', 'Dry'][this.$store.getters.result.type]
    },
    resolveIcon: function () {
      return ['@/assets/images/recycable.png'][this.$store.getters.result.type]
    }
  }
}
</script>

<style lang="scss" scoped>
  .result {
    @include flexbox();
    @include flex-direction(column);
    @include align-items(center);
    @include justify-content(center);
  }
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
  }
  .tip{}

</style>
