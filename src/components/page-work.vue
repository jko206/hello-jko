<template>
  <div class="page-work">
    <div class="content-block full-height">
      <div class="header-wrapper">
        <h2>About</h2>
      </div>
      <div class="content faux-double-col">
        <p>
          The main difference between work and projects is that with work
          I am monetizing or will eventually monetize it.
        </p>
        <p>
          Any available screenshots or demos will have a link below
          the header for each project. For obvious reasons, I can't or
          won't post link to the repositories. 
        </p>
      </div>
    </div>
    
    <div class="content-block full-height">
      <div class="title-wrapper">
        <h2>MathTestNinja</h2>
        <div class="icon-links">
          <icon-link 
            link="https://mathtest.ninja/"
            icon="demo"
          />
        </div>
        <tech-list :techList="[
          'HTML', 
          'CSS', 
          'JavaScript', 
          'Vue',
          'Vue-router',
          'Vuex',
          'Vue-test-util',
          'Jest',
          'SASS', 
          'Responsive Design',
          'Firebase'
        ]" />
      </div>
      <div class="content double-col">
        <p>
          MathTestNinja is a service I started as a side project to help
          students prepare for standardized math tests, such as ACT, SAT, and GED.
        </p>
        <p>
          I was a private tutor from about 2010 to 2017. I've taught a wide
          range of students on a couple of different topics, but mostly math
          of all levels from elementary schools to seniors in high school. 
          During that time I realized there was a lot of room for improvements
          in all areas of education.
        </p>
        <p>
          That was that.
        </p>
        <p>
          But at some point, I began to learn that social inequalities in the US
          happen because underrepresented minorities have a smaller chance of getting
          degree-requiring, high paying jobs, such as software engineering jobs. 
        </p>
        <p>
          While the problem is bigger than that, I reasoned that it'd do everyone
          good for these test prep courses' prices to come down. That was the first
          motivation. The second motivation is that test prep isn't complicated, and
          can easily be automated. My 7 years of private tutoring in math tells me
          that you can raise your math score from mid 400s to low 600s in a matter 
          of 3 months by simply practicing them a bunch of times. 
        </p>
        <p>
          So that's how this started. This is something I spend about 10 hours a week on,
          and something I hope to run as a passive income generator in years to come.
        </p>
      </div>
    </div>
    <!-- 
      project list:
        - MTN
        - Pilot
        - Persona
        - PZA time when it's ready
     -->
  </div>
</template>

<script>
import IconLink from './icon-link.vue'
import TechList from './tech-list.vue'

export default {
  name: 'PageWork', 
  components: {
    IconLink,
    TechList,
  },
}
</script>

<style lang="scss" scoped>
@import '../style/global';

</style>