<template>
  <div class="page-about">
    <img 
      src="../assets/family.jpg" 
      alt="Ko family" 
      class="main-photo" 
      title="At a pumpkin patch in Concord, CA, in 2019"
    />
    <div class="profile">
      <h2>
        Basics
      </h2>
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
      <h2>
        Personal
      </h2>
      <ul>
        <li>
          <strong>Hobbies</strong> Programming, solving puzzles, woodworking
        </li>
        <li>
          <strong>Games</strong> Tetris (expert), Vainglory (expert)
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageAbout'
}
</script>

<style lang="scss" scoped>
.page-about {
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 400px auto;
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
  width: 100%;
}
p {
  max-width: 600px;
  line-height: 2;
  padding: 10px;
  margin-top: 0;
}
</style>