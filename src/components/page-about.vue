<template>
  <div class="page-about">
    <img 
      src="../assets/family.jpg" 
      alt="Ko family" 
      class="main-photo" 
      title="At a pumpkin patch in Concord, CA, in 2019"
    />
    <div class="paragraphs">
      <p>
        My name is Jai Ko. It might be tempting to pronounce it as Jī, 
        rhyming with "hi", but it's actually Jā, rhyming with "hey". 
        The reason is fairly simple: my parents are immigrants 
        who aren't proficient in English. 
      </p>
      <p>
        My hobbies include programming, solving puzzles, and playing Vainglory. 
        My topics of interest are politics, technology, science, business, 
        economy, monetary instruments, comedy, comics and cartoons.
      </p>
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