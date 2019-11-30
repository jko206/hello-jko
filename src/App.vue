<template>
  <div id="app">
    <side-menu class="side-menu" />
    <router-view class="main" />
  </div>
</template>

<script>
import SideMenu from './components/side-menu.vue'

export default {
  name: 'app',
  components: {
    SideMenu,
  }
}
</script>

<style lang="scss">
@import './style/global.scss';
@import './style/default.scss';

#app {
  display: flex;
  height: 100vh;
  width: 100vw;
  
  .side-menu {
    flex: 0 0 200px;
  }
  .main {
    flex: 1 1 auto;
  }
}

</style>
