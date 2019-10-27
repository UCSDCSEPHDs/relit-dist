<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'landing' }">
        <img alt="re:Lit" src="@/assets/images/logo.png" />
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    margin: 0;
    @include font('gilbert');
    font-size: 14pt;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  #nav {
    @include flexbox();
    @include flex-direction(column);
    @include align-items(center);
    @include justify-content(center);
    height: 3rem;
    padding: 30px;
    img {
      height: 2rem;
      width: auto;
      max-height: 20vh;
    }
  }
  .button-enclosure {
    width: 80%;
    height: 3rem;
    margin: 2rem;
  }
</style>
