<template>
  <nav class="side-menu">
    <router-link to="/about">About</router-link>
    <router-link to="/timeline">Timeline</router-link>
    <router-link to="/sketches">Sketches</router-link>
    <router-link to="/projects">Projects</router-link>
    <!-- <router-link to="/thoughts">Thoughts</router-link> -->
    <router-link to="/links-contacts">Links &amp; Contacts</router-link>
  </nav>
</template>

<script>
export default {
  name: 'SideMenu',
}
</script>

<style lang="scss" scoped>
.side-menu a {
  display: block;
  font-size: 20px;
  padding: 10px;
  color: gray;
  border-left: 5px solid transparent;
  &:not(:first-of-type) {
    margin-top: 10px;
  }

  &:hover {
    border-left: 5px solid gray;
  }

  &.router-link-active {
    color: #333;
    border-color: #333;
  }
}
</style>