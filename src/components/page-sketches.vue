<template>
  <div class="page-sketches">
    <div class="content-block full-height" id="sketch-root" ref="sketch-root">
      <div class="title-wrapper">
        <h2>
          About
        </h2>
      </div>
      <div class="content faux-double-col">
        <p>
          This is a collections of my work that doesn't quite amount to a
          project, but nonetheless something I put time and effort into.
        </p>
        <p>
          Underneath the title of each of my work, there's a link to the demo or
          the repo.
        </p>
      </div>
    </div>
    <div
      class="content-block full-height"
      id="hexagon-tiles-desc"
      ref="hexagon-tiles"
    >
      <div class="title-wrapper">
        <h2>Hexagon Tiles</h2>
        <div class="icon-links">
          <icon-link
            link="https://codesandbox.io/s/hexagon-pattern-2cx1l"
            icon="codesandbox"
          />
        </div>
        <tech-list :techList="['HTML', 'CSS', 'JavaScript']" />
      </div>
      <div class="content double-col">
        <p>
          Virtually all websites utilize the neatly stacking nature of 90&deg;
          angles. I explored what angles would look nice on the web and
          discovered that hexagons stack nicely. This is a small example to
          illustrate how hexagons might look on the web.
        </p>
        <p>
          This example uses grid to layout the hexagons. High school level of
          trigonometry is used to calculate the grid-row-gap and
          grid-column-gap.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import IconLink from "./icon-link.vue"
import TechList from "./tech-list.vue"
export default {
  name: "PageSketches",
  components: {
    IconLink,
    TechList,
  },
  mounted() {
    const initialProjectName = this.$route.params.sketches
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
              projectName === "sketch-root"
                ? ""
                : projectName.replace("-desc", "")
            window.history.replaceState({}, null, `/sketches/${projectName}`)
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
