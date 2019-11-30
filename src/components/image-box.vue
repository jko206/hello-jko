<template>
  <div 
    :class="[
      'image-box', 
      {'display-content': displayContent}
    ]" 
    @click="displayContent = !displayContent"
  >
    <slot />
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayContent: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.image-box {
  img{
    width: 100%;
    height: 100%;
    
  }
}
</style>