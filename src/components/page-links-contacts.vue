<template>
  <div class="page-links-contacts">
    <div class="content-block">
      <h2>Links</h2>
      <div class="content">
        <ul>
          <li>
            <a href="http://linkedin.com/in/jai-ko" target="blank">LinkedIn</a>
          </li>
          <li>
            <a href="http://github.com/jaiko86" target="blank">Github</a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/458425/j-ko?tab=profile"
              target="blank"
              >StackOverflow</a
            >
          </li>
          <li>
            <a href="https://medium.com/@j-ko" target="blank">Medium</a>
          </li>
          <li>
            <a :href="resume">Résumé</a>
            <a :href="resume" download="" class="button">download</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="content-block">
      <h2>Contacts</h2>
      <div class="content">
        <ul>
          <li>
            <a href="mailto:me@j-ko.dev"> Email </a>
            <button @click.stop="copy('email')">copy</button>
          </li>
          <li>
            <a href="sms:+14252205899"> Text </a>
            <button @click.stop="copy('phone')">copy</button>
          </li>
          <li>
            <a href="tel:+14252205899"> Phone </a>
            <button @click.stop="copy('phone')">copy</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
function copy(val) {
  return navigator.clipboard.writeText(val)
}

export default {
  name: "PageLinksContacts",
  data() {
    return {
      resume:
        "https://firebasestorage.googleapis.com/v0/b/j-ko-dev.appspot.com/" +
        "o/J-KO.pdf?alt=media&token=253274fb-b99d-41b0-82bf-dc1e21d341e9",
    }
  },
  methods: {
    copy(entity) {
      const value = entity === "phone" ? "4252205899" : "me@j-ko.dev"
      copy(value)
        .then(() => {
          alert(`Copied ${entity === "phone" ? "phone number" : "email"}`)
        })
        .catch(e => {
          alert(e)
        })
    },
  },
}
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  display: inline-block;
  padding: 10px;
  width: 200px;
  border-left: 3px solid transparent;
  text-decoration: none;
  &:hover {
    border-color: #333;
  }
}

button,
.button {
  padding: 0 1em;
  width: 100px;
  text-align: center;
  box-sizing: border-box;
  border: 0;
  font-size: 1em;
  background: inherit;
  color: #808080;
  font-family: inherit;
  cursor: pointer;
  opacity: 0;
  outline: none;
  border: 1px solid transparent;
  li:hover & {
    opacity: 1;
  }
  &:hover {
    color: #333;
    border: 1px solid #333;
    border-radius: 3px;
  }
}
</style>
