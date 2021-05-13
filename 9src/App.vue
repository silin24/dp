<template>
  <div id="appContainer">
    <video src="../test.mp4" autoplay muted loop></video>
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
    // background: url('../test.mp4');
    // background: url('./assets/bgimg1.png');
    video {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }

  }
</style>
