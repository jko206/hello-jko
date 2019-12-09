<template>
  <div class="page-projects">
    <div class="content-block full-height">
      <div class="header-wrapper">
        <h2>About</h2>
      </div>
      <div class="content faux-double-col">
        <p>
          These are some of my projects that I can display publicly. 
        </p>
        <p>
          Any available screenshots, repos, or demos will have a link below
          the header for each project. 
        </p>
      </div>
    </div>
    
    <div class="content-block full-height">
      <div class="title-wrapper">
        <h2>KenKen Solver</h2>
          <icon-link 
            link="https://codesandbox.io/s/elated-hoover-2bnn0"
            icon="codesandbox"
          />
        </div>
        <tech-list :techList="['HTML', 'CSS', 'JavaScript']" />
      </div>
      <div class="content double-col">
        <p>
          Virtually all websites utilize the neatly stacking nature of 90&deg; angles. 
          I explored what angles would look nice on the web and discovered that hexagons
          stack nicely. This is a small example to illustrate how hexagons might look on the web.
        </p>
        <p>
          This example uses grid to layout the hexagons. High school level of trigonometry
          is used to calculate the grid-row-gap and grid-column-gap. 
        </p>
      </div>
    </div>
    <!-- 
      project list:
        - Knight's tour
        - Toptal projects
        - Twitter
        - Precision.js
     -->
  </div>
</template>

<script>
import IconLink from './icon-link.vue'
import TechList from './tech-list.vue'

export default {
  name: 'PageProjects', 
  components: {
    IconLink,
    TechList,
  },
}
</script>

<style lang="scss" scoped>
@import '../style/global';

</style>