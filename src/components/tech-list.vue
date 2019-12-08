<template>
  <div class="tech-list">
    <span 
      v-for="item in techList" 
      :key="item"
      class="tech-stack-item"
    >
      {{ item }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'TechList',
  props: {
    techList: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.tech-list span {
  display: block;
  text-align: right;
}
</style>