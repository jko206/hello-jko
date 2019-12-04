<template>
  <div class="page-timeline">
    <div class="content-block">
      <h2>Foundation</h2>
      <div class="content">
        <p>
          I was studying math at the University of Washington, Seattle, when I
          got into programming. Computer science wasn't my major, but I took 
          classes that were offered to non-majors. 
        </p>
        <p>
          In those classes, I learned object oriented programming (OOP), data structures, 
          and algorithms. I learned some fairly advanced algorithms as well, but I forgot them. 
        </p>
      </div>
    </div>
    <div class="content-block">
      <h2>Steps Education</h2>
      <div class="content">
        <p>
          Before I could finish college, I had to go to Korea, and I ended up staying there for a while. 
        </p>
        <p>
          While I was there, I worked as a private math tutor. As one can imagine, as a math tutor, 
          I had to generate, grade, and analyze a lot of math problems — everything that computer was good at. 
        </p>
        <p>
          So I built a web app that could do just that. I could give students math homework through it, 
          share notes, and record and analyze their progress. I wanted it to do more than that, 
          so I built it handle interactive widgets. I then made widgets with which you can 
          interact with fractions and decimals; widget with which you can learn to solve single-variable
          equations by dragging tiles around on the screen; and an interactive app that helps students
          add/subtract fractions and decimals by simulating the abacus. 
        </p>
        <p>
          This was done in HTML, CSS (no library), JavaScript (+ jQuery), and PHP in the back. 
        </p>
      </div>
    </div>
    <div class="content-block">
      <h2>Refinement</h2>
      <div class="content">
        <p>
          After I started my family, I didn't want to live in Korea, so I moved back to the States. 
        </p>
        <p>
          For a period of about one year, I caught up in more modern way of web development. I learned
          what webpack was and how it worked; learned more modern ES syntaxes; learned Vue / Vuex / Vue Router
          / Vue test util stack; and learned React.
        </p>
      </div>
    </div>
    <div class="content-block">
      <h2>Toptal, Persona, and Pilot</h2>
      <div class="content">
        <p>
          When I learned everything I thought I needed to get a job in the States, 
          I started looking and passed the Toptal's screening and joined their exclusive
          freelancers network. I then got a short contract job as a frontend engineer 
          at Persona.io.
        </p>
        <p>
          However, since it was a part-time contract, I looked for a more permanent position
          through Triplebyte and landed the position at Pilot.com as a frontend engineer. 
        </p>
      </div>
    </div>
    <div class="content-block">
      <h2>Present</h2>
      <div class="content">
        <p>
          Although Pilot.com has been great, I feel like there isn't much room for growth.
          Every day is routine. I get a project from the PM, designed by the designer. 
          I make the UI work, and plug it to the backend end points the backend engineer made.
          Test it, and ship it. 
        </p>
        <p>
          There's also the issue with cost of living. When I was first offered a job in SF, 
          the compensation bewildered me. However, living in SF region for a bit more than 
          half a year has taught me that money doesn't stretch as far here as in other places. 
          Were I unwed and childless, equity alone is enough to sustain me, but as a family
          man with a wife, a kid, and a dog, I must seek to alleviate any sense of shortage
          from my home.
        </p>
        <p>

        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTimeline'
}
</script>

<style scoped lang="scss">
@import '../style/global';
.page-timeline {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.content-block {
  min-height: 100vh;

  .content {
    column-count: 2;
  }
}
</style>