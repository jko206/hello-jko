<template>
  <div class="page-sketches">
    <div class="content-block full-height">
      <div class="title-wrapper">
        <h2>
          About
        </h2>
      </div>
      <div class="content faux-double-col">
        <p>
          This is a collections of my work that doesn't quite amount to a project,
          but nonetheless something I put time and effort into.
        </p>
        <p>
          Underneath the title of each of my work, there's a link to the demo or the repo.
        </p>
      </div>
    </div>
    <div class="content-block full-height">
      <div class="title-wrapper">
        <h2>Hexagon Tiles</h2>
        <div class="link-icons">
          <a href="https://codesandbox.io/s/quizzical-shtern-2cx1l" target="blank">
            <img src="../assets/codesandbox-icon.png" alt="CodeSandBox icon" />
          </a>
        </div>
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
        <p class="tech-stack">
          Used HTML / CSS / JavaScript
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.link-icons {
  text-align: right;
  img {
    height: 20px;
  }
}
</style>