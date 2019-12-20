<template>
  <div class="page-projects">
    <div class="content-block full-height" id="project-root" ref="project-root">
      <div class="header-wrapper">
        <h2>About</h2>
      </div>
      <div class="content faux-double-col">
        <p>
          These are some of my projects that I can display publicly.
        </p>
        <p>
          Any available screenshots, repos, or demos will have a link below the
          header for each project.
        </p>
      </div>
    </div>

    <div class="content-block full-height" id="kenken-desc" ref="kenken">
      <div class="title-wrapper">
        <h2>KenKen Solver</h2>
        <div class="icon-links">
          <icon-link
            link="https://codesandbox.io/s/kenkensolver-2bnn0"
            icon="codesandbox"
          />
          <icon-link icon="github" :underConstruction="true" />
        </div>
        <tech-list :techList="['HTML', 'CSS', 'JavaScript', 'jQuery']" />
      </div>
      <div class="content faux-double-col">
        <p>
          <a href="https://kenkenpuzzle.com" target="_blank">KenKen</a> is a
          puzzle that is somewhat similar to sudoku, but it requires arithmetic
          to solve it.
        </p>
        <p>
          I made an app that can solve the puzzle.
        </p>
      </div>
    </div>

    <div
      class="content-block full-height"
      id="knights-tour-desc"
      ref="knights-tour"
    >
      <div class="title-wrapper">
        <h2>Knight's Tour</h2>
        <div class="icon-links">
          <icon-link
            link="https://codesandbox.io/s/knights-tour-s5u4q"
            icon="codesandbox"
          />
          <icon-link icon="github" :underConstruction="true" />
        </div>
        <tech-list :techList="['HTML', 'CSS', 'JavaScript', 'jQuery']" />
      </div>
      <div class="content faux-double-col">
        <p>
          Knight's tour is a program that can shows the path a knight can take
          from a given position to visit all the squares.
        </p>
      </div>
    </div>

    <div class="content-block full-height" id="toptal-desc" ref="toptal">
      <div class="title-wrapper">
        <h2>Toptal Screening Project</h2>
        <div class="icon-links">
          <icon-link
            link="https://codesandbox.io/s/toptal-screening-88uws"
            icon="codesandbox"
          />
          <icon-link link="https://github.com/jaiko86/toptal" icon="github" />
        </div>
        <tech-list
          :techList="[
            'HTML',
            'CSS',
            'JavaScript',
            'Vue',
            'SASS',
            'Responsive Design',
          ]"
        />
      </div>
      <div class="content faux-double-col">
        <p>
          Toptal is one of the world's leading network of freelance developers.
          Entry into the network requires passing screening tests and projects.
          This is the project that let me pass the screening.
        </p>
      </div>
    </div>

    <div
      class="content-block full-height"
      id="tweet-streams-desc"
      ref="tweet-streams"
    >
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
        <tech-list
          :techList="[
            'HTML5',
            'CSS',
            'JavaScript',
            'Vue',
            'SASS',
            'Responsive Design',
            'Firebase',
            'REST API',
          ]"
        />
      </div>
      <div class="content double-col">
        <p>
          This was a screening project for
          <a href="https://turing.ly/" target="blank"> turing.ly</a>.
        </p>
        <p>
          In this project, I used Twitter's API to fetch real-time tweets for
          three accounts.
        </p>
        <p>
          Some of the notable features:
        </p>
        <ul>
          <li>
            Drag and drop to rearrange columns, either in the main view or in
            the menu. The feature works on mobile as well
          </li>
          <li>
            Hover over date to see the timestamp
          </li>
          <li>Uses <code>localStorage</code> to save user preference</li>
        </ul>
      </div>
    </div>

    <div
      class="content-block full-height"
      id="tile-shuffle-desc"
      ref="tile-shuffle"
    >
      <div class="title-wrapper">
        <h2>Tile Shuffle</h2>
        <div class="icon-links">
          <icon-link
            link="https://codesandbox.io/s/tile-shuffle-b1nok"
            icon="codesandbox"
          />
          <icon-link
            link="https://github.com/jaiko86/tile-shuffle"
            icon="github"
          />
        </div>
        <tech-list :techList="['HTML5', 'CSS', 'JavaScript', 'React']" />
      </div>
      <div class="content faux-double-col">
        <p>
          Tile shuffle is a puzzle game in which a set of number are shuffled on
          a board, and the player needs to slide them back to their original
          positions.
        </p>
      </div>
    </div>

    <div
      class="content-block full-height"
      id="precision-js-desc"
      ref="precision-js"
    >
      <div class="title-wrapper">
        <h2>Precision.js</h2>
        <div class="icon-links">
          <icon-link :underConstruction="true" icon="codesandbox" />
          <icon-link :underConstruction="true" icon="github" />
        </div>
        <tech-list :techList="['JavaScript', 'TypeScript']" />
      </div>
      <div class="content double-col">
        <p>
          When I was working on
          <router-link to="/work/steps-education">Steps Education</router-link>,
          I hit some limitations on math with JavaScript. As the famous example
          goes, in JS, <code>0.1 + 0.2 === 0.3</code> returns
          <code>false</code>.
        </p>
        <p>
          I couldn't have a web app that taught math when it couldn't handle
          decimal numbers correctly, so I began to develop a math library for JS
          that could handle fractions and decimal numbers to arbitrary
          precision, and also perform common math functios, such as finding the
          greatest common divisor, changing number base, etc. Most notably,
          precision JS can calculate factorial without losing precision, even if
          it takes a long time, without using <code>BigInt</code>.
        </p>
        <p>
          It has gone through several rounds of revision, and is now in the
          process of being re-written with testings and in TypeScript.
        </p>
      </div>
    </div>

    <div class="content-block full-height" id="pza-time-desc" ref="pza-time">
      <div class="title-wrapper">
        <h2>PZA Time</h2>
        <div class="icon-links">
          <icon-link :underConstruction="true" icon="codesandbox" />
          <icon-link :underConstruction="true" icon="github" />
        </div>
        <tech-list
          :techList="['HTML5', 'CSS', 'JavaScript', 'React', 'Redux']"
        />
      </div>
      <div class="content double-col">
        <p>
          Some nights, you want to order pizza for dinner, but you immediately
          become paralyzed by indecision. Should I order two medium pizzas from
          Pizza ABC for $20, or get one large pizza from Leaning Tower of Pizza
          for $15?
        </p>
        <p>
          Worry no more, because PZA time can tell you which deal is better.
        </p>
        <p>
          In most places, a medium pizza has a diameter of 12" (= 6" radius),
          and a large has a diameter of 14" (= 7" radius). Given these, we get 2
          &times; 6in. &times; 6in. &times; π / $20 ≈ 11.30in<sup>2</sup>/$, and
          7in. &times; 7in. &times; π / $15 ≈ 10.26in<sup>2</sup>/$
        </p>
        <p>
          This project is a work in progress.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import IconLink from "./icon-link.vue"
import TechList from "./tech-list.vue"

export default {
  name: "PageProjects",
  components: {
    IconLink,
    TechList,
  },
  mounted() {
    const initialProjectName = this.$route.params.project
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
              projectName === "project-root"
                ? ""
                : projectName.replace("-desc", "")
            window.history.replaceState({}, null, `/projects/${projectName}`)
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
