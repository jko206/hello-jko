<template>
  <div>
    <h1>About me</h1>
    <img src="../assets/family.jpg" alt="Ko family" class="main-photo" />
    <p>
      My name is Jai Ko. It might be tempting to pronounce it as Jī, rhyming with "hi",
      but it's actually Jā, rhyming with "hey". The reason is fairly simple: my parents
      are immigrants who aren't proficient in English. 
    </p>
  </div>
</template>

<script>
export default {
  name: 'PageAbout'
}
</script>

<style lang="scss" scoped>
.main-photo {
  float: left;
  width: 300px;
  margin: 10px;
}
</style>