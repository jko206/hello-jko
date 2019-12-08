<template>
  <a v-if="!underConstruction" :href="link" target="_blank" :class="{disabled: underConstruction}">
    <img :src="imageSrc" :alt="imageAlt" />
  </a>
  <span v-else>
    <img :src="imageSrc" :alt="imageAlt" />
  </span>
</template>

<script>
import githubIcon from '../assets/icons/github.png'
import codesandboxIcon from '../assets/icons/codesandbox.png'

const map = {
  'github' : {
    src: githubIcon,
    alt: 'GitHub icon',
  },
  'codesandbox' : {
    src: codesandboxIcon,
    alt: 'CodeSandBox icon',
  },
}

export default {
  name: 'IconLink',
  props: {
    link: {
      type: String,
      required: true,
      validator: url => /^http(s)?/.test(url)
    },
    icon: {
      type: String,
      required: true,
      validator: icon => Object.keys(map).includes(icon)
    },
    underConstruction: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    imageSrc() {
      return map[this.icon].src
    },
    imageAlt() {
      return map[this.icon].alt
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  height: 20px;
  &.disabled {
    filter: opacity(0.4);
  }
}
</style>