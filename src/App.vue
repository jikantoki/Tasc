<template lang="pug">
v-app
  v-main
    router-view
    ul
      ll
        router-link(to="/") Top
      ll
        router-link(to="/a") Osakana
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

<style lang="scss" scoped></style>
