<template>
  <div id="appContainer">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>


<style lang="scss" scoped>
  #appContainer {
    height: 100%;
    width: 100%;
    background: {
      image: url('./assets/bgimg1.png');
      size: cover;
      repeat: no-repeat;
      position: left center;
    };
  }
</style>
