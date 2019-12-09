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
        <div class="icon-links">
          <icon-link 
            link="https://codesandbox.io/s/elated-hoover-2bnn0"
            icon="codesandbox"
          />
          <icon-link 
            icon="github"
            :underConstruction="true"
          />
        </div>
        <tech-list :techList="['HTML', 'CSS', 'JavaScript', 'jQuery']" />
      </div>
      <div class="content faux-double-col">
        <p>
          <a href="https://kenkenpuzzle.com" target="_blank">KenKen</a> is a puzzle that is 
          somewhat similar to sudoku, but it requires arithmetic to solve it. 
        </p>
        <p>
          I made an app that can solve the puzzle. 
        </p>
      </div>
    </div>
    
    <div class="content-block full-height">
      <div class="title-wrapper">
        <h2>Knight's Tour</h2>
        <div class="icon-links">
          <icon-link 
            link="https://codesandbox.io/s/loving-bash-s5u4q"
            icon="codesandbox"
          />
          <icon-link 
            icon="github"
            :underConstruction="true"
          />
        </div>
        <tech-list :techList="['HTML', 'CSS', 'JavaScript', 'jQuery']" />
      </div>
      <div class="content faux-double-col">
        <p>
          Knight's tour is a program that can shows the path a knight can
          take from a given position to visit all the squares. 
        </p>
      </div>
    </div>
    
    <div class="content-block full-height">
      <div class="title-wrapper">
        <h2>Toptal Screening Project</h2>
        <div class="icon-links">
          <icon-link 
            link="https://88uws.csb.app/"
            icon="codesandbox"
          />
          <icon-link 
            link="https://github.com/jaiko86/toptal"
            icon="github"
          />
        </div>
        <tech-list :techList="['HTML', 'CSS', 'JavaScript', 'Vue', 'SASS', 'Responsive Design']" />
      </div>
      <div class="content faux-double-col">
        <p>
          Toptal is one of the world's leading network of freelance developers.
          Entry into the network requires passing screening tests and projects. 
          This is the project that let me pass the screening.
        </p>
      </div>
    </div>
    
    <div class="content-block full-height">
      <div class="title-wrapper">
        <h2>Tweet Streams</h2>
        <div class="icon-links">
          <icon-link 
            link="https://tweet-streams.firebaseapp.com/"
            icon="demo"
          />
          <icon-link 
            link="https://github.com/jaiko86/tweet-streams"
            icon="github"
          />
        </div>
        <tech-list :techList="[
          'HTML5', 
          'CSS', 
          'JavaScript', 
          'Vue', 
          'SASS', 
          'Responsive Design', 
          'Firebase',
          'REST API',
        ]"/>
      </div>
      <div class="content double-col">
        <p>
          This was a screening project for turing.ly. 
        </p>
        <p>
          In this project, I used Twitter's API to fetch
          real-time tweets for three accounts. 
        </p>
        <p>
          Some of the notable features:
        </p>
        <ul>
          <li>
            Drag and drop to rearrange columns, either in 
            the main view or in the menu. The feature works
            on mobile as well
          </li>
          <li>
            Hover over date to see the timestamp
          </li>
          <li>
            Uses <code>localStorage</code> to save user preference
          </li>
        </ul>
      </div>
    </div>
    
    <!-- 
      project list:
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