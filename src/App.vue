<template lang="pug">
v-app(ontouchstart="")
  header
    commonHeader
  v-main
    router-view
    v-btn(@click="SocketFunctions.sendMessage(sendMessage)") click!
    v-text-field(label="input!" v-model="sendMessage")
    p(v-for="messageObject in SocketFunctions.catch.messageList") {{ messageObject.text }}
  v-footer
    commonFooter
</template>

<script>
import PackageJson from '../package.json'
import Functions from '../functions/Functions'
import SocketFunctions from '../functions/SocketFunctions'
import NavigationList from './items/itemNavigationList'
import commonHeader from './common/commonHeader'
import commonFooter from './common/commonFooter'

export default {
  name: 'App',
  components: {
    commonHeader,
    commonFooter
  },
  data() {
    return {
      PackageJson: PackageJson,
      NavigationList: NavigationList,
      SocketFunctions: SocketFunctions,
      drawer: false,
      webSocket: null,
      webSocketURL: 'wss://' + window.document.location.host + '/',
      webSocketConnected: false,
      sendMessage: '',
      sendWebSocketObject: { title: PackageJson.name },
      recievedMessages: []
    }
  },
  watch: {
    SocketFunctions: {
      handler: function (next, prev) {
        console.log(next + prev)
      },
      deep: true
    },
    updateTrigger: {
      handler: function () {
        console.log('a')
      }
    }
  },
  mounted() {
    PackageJson.name = Functions.ifEnglishStartUpper(PackageJson.name)
    SocketFunctions.connect()
  },
  unmounted() {
    SocketFunctions.close(1000, 'ページ移動')
    console.log('destroyed')
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
* {
  user-select: none;
  list-style: none;
  transition: all 0.14s;
}
#app {
  .links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    div > a {
      color: black;
      margin: 0.1em;
      padding: 0.1em 0.3em;
      border-radius: 9999em;
      display: block;
      div {
        width: 8em;
        font-size: 1.5em;
        text-align: center;
      }
      &:hover {
        background-color: #333333;
        color: #e6e6e6;
      }
    }
    a {
      text-decoration: none;
    }
  }
}
</style>
