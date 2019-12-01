<template>
  <div class="page-links-contacts">
    <ul>
      <li>
        <a href="http://linkedin.com/in/jai-ko" target="blank">LinkedIn</a>
      </li>
      <li>
        <a href="http://github.com/jaiko86" target="blank">Github</a>
      </li>
      <li>
        <a href="https://stackoverflow.com/users/458425/j-ko?tab=profile" target="blank">StackOverflow</a>
      </li>
      <li>
        <a href="https://medium.com/@MisterJKo" target="blank">Medium</a>
      </li>
      <li>
        <a href="JAI_KO.pdf">Résumé</a>
        <a href="JAI_KO.pdf" download="" class="button">download</a>
      </li>
      <li>
        <a href="mailto:just.jai.ko@gmail.com">
          Email
        </a>
        <button @click.stop="copy('email')">
          copy
        </button>
      </li>
      <li>
        <a href="sms:+14252205899">
          Text
        </a>
        <button @click.stop="copy('phone')">
          copy
        </button>
      </li>
      <li>
        <a href="tel:+14252205899">
          Phone
        </a>
        <button @click.stop="copy('phone')">
          copy
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
function copy(val) {
  return navigator.clipboard.writeText(val)
}

export default {
  name: 'PageLinksContacts',
  methods: {
    copy(entity) {
      const value = entity === 'phone' ? '4252205899' : 'just.jai.ko@gmail.com'
      copy(value)
        .then(() => {
          alert('success')
        })
        .catch(e => {
          alert(e)
        })
    }
  },
}
</script>
<style lang="scss" scoped>
.page-links-contacts ul {
  list-style: none;
}
a {
    display: inline-block;
    padding: 10px;
    width: 200px;
    border-left: 3px solid transparent;
    &:hover {
      border-color: #333;
    }
}

button, .button {
  padding: 0 1em;
  width: 100px;
  text-align: center;
  box-sizing: border-box;
  border: 0;
  font-size: 1em;
  background: inherit;
  color: inherit;
  font-family: inherit;
  cursor: pointer;
  opacity: 0;
  outline: none;
  li:hover & {
    opacity: 1;
  }
  &:hover {
    border: 1px solid #333;
    border-radius: 3px;
  }
}
</style>