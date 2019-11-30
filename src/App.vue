<template>
  <div id="app">
    <side-menu />
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

<style>
@import './style/global.scss';
@import './style/default.scss';

</style>
