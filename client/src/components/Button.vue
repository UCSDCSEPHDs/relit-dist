<template lang="html">
  <button>{{ label }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: String
  }
}
</script>

<style lang="scss" scoped>
  button {
    @include font('gilbert');
    font-size: 16pt;
    width: 100%;
    height: 100%;
    color: white;
    background: linear-gradient(to right, #FF4E3B, #FF7800);
    border: none;
    border-radius: 3rem;
  }
</style>
