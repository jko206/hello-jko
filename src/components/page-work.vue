<template>
  <div class="page-work">
    <div class="content-block full-height" id="work-root" ref="work-root">
      <div class="header-wrapper">
        <h2>About</h2>
      </div>
      <div class="content faux-double-col">
        <p>
          The main difference between work and projects is that with work I am
          monetizing or will eventually monetize it.
        </p>
        <p>
          Any available screenshots or demos will have a link below the header
          for each project. For obvious reasons, I can't or won't post link to
          the repositories.
        </p>
      </div>
    </div>

    <div
      class="content-block full-height"
      id="math-test-ninja-desc"
      ref="math-test-ninja"
    >
      <div class="title-wrapper">
        <h2>MathTestNinja</h2>
        <div class="icon-links">
          <icon-link link="https://mathtest.ninja/" icon="demo" />
        </div>
        <tech-list
          :techList="[
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
            'Firebase',
          ]"
        />
      </div>
      <div class="content double-col">
        <p>
          MathTestNinja is a service I started as a side project to help
          students prepare for standardized math tests, such as ACT, SAT, and
          GED.
        </p>
        <p>
          I was a private tutor from about 2010 to 2017. I've taught a wide
          range of students on a couple of different topics, but mostly math of
          all levels from elementary schools to seniors in high school. During
          that time I realized there was a lot of room for improvements in all
          areas of education.
        </p>
        <p>
          But at some point, I began to learn that social inequalities in the US
          happen because underrepresented minorities have a smaller chance of
          getting degree-requiring, high paying jobs, such as software
          engineering jobs.
        </p>
        <p>
          While the problem is bigger than that, I reasoned that it'd do
          everyone good for these test prep courses' prices to come down. That
          was the first motivation. The second motivation is that test prep
          isn't complicated, and can easily be automated. My 7 years of private
          tutoring in math tells me that you can raise your math score from mid
          400s to low 600s in a matter of 3 months by simply practicing them a
          bunch of times.
        </p>
        <p>
          So that's how this started. This is something I spend about 10 hours a
          week on, and something I hope to run as a passive income generator in
          years to come.
        </p>
      </div>
    </div>

    <div class="content-block full-height" id="persona-desc" ref="persona">
      <div class="title-wrapper">
        <h2>Persona</h2>
        <div class="icon-links">
          <icon-link icon="demo" link="https://persona.io" />
        </div>
        <tech-list
          :techList="[
            'HTML',
            'CSS',
            'JavaScript',
            'Vue',
            'Vuex',
            'Vue Router',
            'Jest',
          ]"
        />
      </div>
      <div class="content double-col">
        <p>
          I had a temporary remote contract position with this company for about
          half a year. Everyone was working remotely, across different time
          zones, so coordination and communication were paramount.
        </p>
        <p>
          During my time with Persona, I made the landing page, and the app that
          you see when you log in.
        </p>
      </div>
    </div>

    <div
      class="content-block full-height"
      id="steps-education-desc"
      ref="steps-education"
    >
      <div class="title-wrapper">
        <h2>Steps Education</h2>
        <div class="icon-links">
          <icon-link icon="demo" :underConstruction="true" />
          <icon-link icon="github" :underConstruction="true" />
        </div>
        <tech-list :techList="['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP']" />
      </div>
      <div class="content double-col">
        <p>
          When I was a private math tutor, I realized a lot of the work I did
          could be automated and improved. I used to use worksheets to give math
          problems, but sometimes a student needed far more practice with a
          topic than the problems on the book could give them. So I had to
          generate problems on the spot.
        </p>
        <p>
          My first instinct was to search for a service that could do what I
          needed. One of the first choice was
          <a href="https://khanacademy.org/" target="blank">Khan Academy</a>.
          The problem was that it had a limited number of question for each
          topic, so after a few rotations of the problems, some students started
          to simply memorize the answer. They may be bad at math, but because of
          the education system they were in, they were excellent in memorizing
          things.
        </p>
        <p>
          I searched for alternatives, but there weren't any. So I made Steps
          Education web app to do what I needed. It could generate, assign,
          grade, analyze homework, and also notify parents if students didn't do
          their homework via a third party (NEXMO) messaging API.
        </p>
        <p>
          This solved a lot of my pain points. First of all, I didn't have to
          generate dozens or even hundreds of math problems on my own. Secondly,
          the students couldn't lie about doing their homework. Before I made
          Stesps Education, students would sometimes say they spent x amount of
          time on it, even if they didn't finish it. Now I could tell exactly
          how much time they spent. The goal wasn't to detect whether students
          were lying, however. It was to see how proficient they were with
          solving a given type of a problem. My philosophy is that if they're
          good, it shouldn't take them above a certain amount of time.
        </p>
        <p>
          Most importantly, it allowed me to teach some math concepts, such as
          fractions and decimals, and also single variable equation solving.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import IconLink from "./icon-link.vue"
import TechList from "./tech-list.vue"

export default {
  name: "PageWork",
  components: {
    IconLink,
    TechList,
  },
  props: {
    work: {
      type: String,
      required: false,
    },
  },
  mounted() {
    const initialProjectName = this.$route.params.work
    if (initialProjectName) {
      const initialProjectPositions = this.$refs[
        initialProjectName
      ].getBoundingClientRect()
      window.scrollTo({
        top: initialProjectPositions.y,
        left: initialProjectPositions.x,
        behavior: "smooth",
      })
    }
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          const current = entries.find(entry => entry.isIntersecting)
          if (current) {
            let projectName = current.target.attributes.id.value
            projectName =
              projectName === "work-root"
                ? ""
                : projectName.replace("-desc", "")
            window.history.replaceState({}, null, `/work/${projectName}`)
          }
        },
        {
          threshold: 0.5,
        }
      )

      Object.values(this.$refs).forEach(section => {
        observer.observe(section)
      })
    }, 0)
  },
}
</script>

<style lang="scss" scoped>
@import "../style/global";
</style>
