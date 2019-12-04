<template>
  <div id="app" :class="{'show-menu' : isMenuOpen }" @click="isMenuOpen = false">
    <button class="side-menu-toggle" @click.stop="isMenuOpen = !isMenuOpen">
      *
    </button>
    <side-menu class="side-menu" />
    <div class="main-wrapper">
      <div class="content-block">
        <span></span>
        <div class="content">
          <h1>
            {{ title }}
          </h1>
        </div>
      </div>
      <router-view class="main" />
    </div>
  </div>
</template>

<script>
import SideMenu from './components/side-menu.vue'

export default {
  name: 'app',
  components: {
    SideMenu,
  },
  data() {
    return {
      isMenuOpen: false,
    }
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

$toggleLeft: 20px;
$toggleTop: 20px;

.main-wrapper {
  box-shadow: #7098bb -3px -1px 10px;
  position: relative;
  left: 0;
  min-height: 100vh;
  transition: left 0.1s ease-in-out;
  background: white;
  .show-menu & {
    left: $menuWidth;
    width: calc(100% - #{$menuWidth});
  }
}
.side-menu-toggle {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 20;
  font-size: 35px;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  border-radius: 100%;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  color: #2c3e50;

  &:hover {
    color: #2c3e50;
  }

  .show-menu & {
    left: $menuWidth + $toggleLeft
  }
}
h1 {
  box-sizing: border-box;
  margin: 0;
  background: white;
  width: 100%;
  position: sticky;
  top: 0;
}
.main {
  z-index: 10;
}

</style>
