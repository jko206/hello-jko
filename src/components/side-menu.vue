<template>
  <nav class="side-menu">
    <a href="/about">About</a>
    <a href="/timeline">Timeline</a>
    <a href="/sketches">Sketches</a>
    <a href="/projects">Projects</a>
    <a href="/thoughts">Thoughts</a>
    <a href="/links-contacts">Links &amp; Contacts</a>
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

  &.active {
    color: #333;
    border-color: #333;
  }
}
</style>