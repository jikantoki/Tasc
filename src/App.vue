<template lang="pug">
v-app
  v-main
    .links
      .linkTop
        router-link(to="/")
          .navButton Top
      .linkOsakana
        router-link(to="/a")
          .navButton Osakana
    router-view
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld
  },

  data: () => ({
    //
  }),
  mounted: () => {
    console.log('hello')
  }
}
</script>

<style lang="scss" scoped>
:root {
  transition: all 0.2s;
}
.links {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  div > a > div {
    width: 8em;
    text-align: center;
    font-size: 1.5em;
    color: black;
    margin: 0.1em;
    padding: 0.1em 0.3em;
    border-radius: 9999em;
    &:hover {
      background-color: #333333;
      color: #e6e6e6;
    }
  }
}
a {
  text-decoration: none;
}
</style>
