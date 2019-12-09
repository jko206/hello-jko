<template>
  <div class="tooltip-wrapper" :style="{display: triggerDisplayStyle}">
    <div class="tooltip-trigger" 
      @click="showTooltip"
    >
      <slot name="tooltip-trigger" />
    </div>
    <div :class="['tooltip', {visible: isTooltipVisibile}]">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTooltip',
  props: {
    message: {
      type: String,
      required: true,
    },
    triggerDisplayStyle: {
      type: String, 
      required: false,
      default: 'inline-block',
      validator: display => ['inline', 'block', 'inline-block'].includes(display)
    },
  },
  data() {
    return {
      isTooltipVisibile: false, 
      timeout: null,
    }
  },
  methods: {
    showTooltip() {
      this.isTooltipVisibile = true
      // eslint-disable-next-line
      console.log('here')
      this.timeout = setTimeout(() => {
        this.isTooltipVisibile = false
      }, 3000)
    },
    hideTooltip() {
      this.isTooltipVisibile = false
      if(this.timeout) clearTimeout(this.timeout)
      this.timeout = null
    },
  },
}
</script>

<style lang="scss" scoped>
.tooltip-trigger:hover + .tooltip {
  visibility: visible;
}
.tooltip {
  background: #333;
  color: white;
  padding: 0.3em;
  text-align: center;
  position: absolute;
  right: -135px;
  width: 300px;
  top: -4em;
  border-radius: 3px;
  visibility: hidden;
  font-size: 0.9em;
  line-height: 1.5;

  &.visible {
    visibility: visible;
  }

  &::after {
    content: '';
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #333 #333;   
    transform: rotate(-45deg);
    position: absolute;
    top: 85%;
    left: 50%;
  }
}
</style>