<template>
  <div id="app">
    <side-menu class="side-menu" />
    <h1>
      {{ title }}
    </h1>
    <router-view class="main" />
  </div>
</template>

<script>
import SideMenu from './components/side-menu.vue'

export default {
  name: 'app',
  components: {
    SideMenu,
  },
  computed: {
    title() {
      const currentRoute = this.$route.path
      switch(currentRoute) {
        case '/' : 
          return 'Welcome'
        case '/about' :
          return 'About Me'
        case '/timeline' :
          return 'My Timeline'
        case '/sketches' :
          return 'Sketches'
        case '/projects' :
          return 'Projects'
        case '/thoughts' :
          return 'Thoughts'
        case '/links-contacts' :
          return 'Links & Contacts'
        default : 
          return ''
      }
    }
  },
}
</script>

<style lang="scss">
@import './style/global.scss';
@import './style/default.scss';

#app {
  display: grid;
  grid-template-areas: 
    "side-menu title"
    "side-menu main";
  grid-template-columns: 200px auto;
  grid-template-rows: 50px auto;
  height: 100vh;
  width: 100vw;
  
  .side-menu {
    grid-area: side-menu;
  }
  h1 {
    margin: 0;
  }
  .main {
    grid-area: main;
  }
}

</style>
