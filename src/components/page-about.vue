<template>
  <div class="page-about">
    <div class="image-wrapper">
      <img 
        src="../assets/family.jpg" 
        alt="Ko family" 
        class="main-photo" 
        title="At a pumpkin patch in Concord, CA, in 2019"
      />
    </div>
    <div class="content-block">
      <h2>
        Basics
      </h2>
      <div class="content">
        <ul>
          <li>
            <strong>Name</strong> Jai Ko
          </li>
          <li>
            <strong>Role</strong> Fullstack / Frontend Developer
          </li>
          <li>
            <strong>Expertise</strong> HTML / CSS / JavaScript / Vue
          </li>
        </ul>
      </div>
    </div>
    <div class="content-block">
      <h2>
        Personal
      </h2>
      <div class="content">
        <ul>
          <li>
            <strong>Hobbies</strong> Programming, solving puzzles, woodworking
          </li>
          <li>
            <strong>Games</strong> Tetris (expert), Vainglory (expert)
          </li>
          <li>
            <strong>Interests</strong> Science, technology, business, politics, money, economy
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageAbout'
}
</script>

<style lang="scss" scoped>
@import '../style/global';

.image-wrapper {
  width: 100%;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}

ul {
  padding: 0;
  list-style: none;
}

strong {
  display: inline-block;
  width: 100px;
}

.main-photo {
  height: 300px;
}
p {
  max-width: 600px;
  line-height: 2;
  padding: 10px;
  margin-top: 0;
}
</style>