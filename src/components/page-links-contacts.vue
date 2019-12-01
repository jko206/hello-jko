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
      // eslint-disable-next-line
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
  padding: 0;
  list-style: none;
}
</style>