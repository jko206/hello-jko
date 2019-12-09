<template>
  <app-tooltip 
    class="tooltip-wrapper"
    :message="tooltipMessage"
    trigger-display-style="inline-block"
  >
    <template v-slot:tooltip-trigger>
      <a v-if="!underConstruction" :href="link" target="_blank">
        <img :src="imageSrc" :alt="imageAlt" />
      </a>
      <img
        v-else 
        :src="imageSrc" 
        :alt="imageAlt" 
        :class="{disabled: underConstruction}"
        :title="title"
      />
    </template>
  </app-tooltip>
</template>

<script>
import AppTooltip from './app-tooltip.vue'
import codesandboxIcon from '../assets/icons/codesandbox.png'
import demoIcon from '../assets/icons/demo.png'
import githubIcon from '../assets/icons/github.png'

const map = {
  'codesandbox' : {
    src: codesandboxIcon,
    alt: 'CodeSandBox icon',
  },
  'demo' : {
    src: demoIcon,
    alt: 'demo icon',
  },
  'github' : {
    src: githubIcon,
    alt: 'GitHub icon',
  },
}

export default {
  name: 'IconLink',
  props: {
    link: {
      type: String,
      required: false,
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
  components: {
    AppTooltip,
  },
  computed: {
    imageSrc() {
      return map[this.icon].src
    },
    imageAlt() {
      return map[this.icon].alt
    },
    title() {
      switch(this.icon) {
        case 'codesandbox' :
          return 'CodeSandBox'
        case 'demo' :
          return 'Demo'
        case 'github' :
          return 'GitHub'
        default :
          return false
      }
    },
    tooltipMessage() {
      const { underConstruction, icon } = this
      switch(icon) {
        case 'codesandbox' :
          return underConstruction
            ? 'Demo on CodeSandBox is coming soon'
            : 'See work on CodeSandBox'
        case 'demo' :
          return underConstruction
            ? 'Demo on CodeSandBox is coming soon'
            : 'See the demo'
        case 'github' :
          return underConstruction 
            ? 'I\'m in the process of migrating repositories to GitHub'
            : 'See work on GitHub'
        default :
          return ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.tooltip-wrapper {
  display: inline-block;
  margin-left: 10px;
}
img {
  height: 20px;
  &.disabled {
    filter: opacity(0.4);
  }
}
</style>