<script>
import Presentation from './Presentation.vue'
import Join from './Join.vue';

export default {
  name: 'Home',
  components: {
    Presentation,
    Join,
  },
}
</script>

<template>
  <div class="home">
    <div class="overlay-content">
      <Join />
      <div class="spacer"></div>
      <Presentation />
    </div>
  </div>
</template>

<style scoped>
.home {
  height: 150vh;
  background-image: url('@/assets/logo.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}
.overlay-content {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding-top: 50px;
  transition: transform 0.1s linear;
}
.home::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 0;
}
.spacer {
  height: 8vh;
}
</style>
