<template lang="pug">
v-app(ontouchstart="")
  header
    v-app-bar
      template(v-slot:append)
        v-btn(icon="mdi-magnify")
        v-btn(icon="mdi-dots-vertical")
      v-app-bar-nav-icon(@click="toggleDrawer()")
      v-toolbar-title {{ PackageJson.name }}
    v-navigation-drawer(v-model="drawer" fixed temporary)
      v-list(nav)
        v-list-item-group
          v-list-item(v-for="navigationItem in NavigationList")
            li.nav(@click="a(navigationItem.url)")
              p {{ navigationItem.name }}
  v-main
    router-view
    v-btn(@click="send(sendWebSocket)") click!
    v-text-field(label="input!" v-model="sendWebSocket")
  v-footer
    .copyRight &copy; 2023 - {{ new Date().getFullYear() }} エノキ電気
</template>

<script>
import PackageJson from '../package.json'
import Functions from '../functions/Functions'
import NavigationList from './items/itemNavigationList'

export default {
  name: 'App',
  components: {
    PackageJson,
    NavigationList
  },
  data() {
    return {
      PackageJson: PackageJson,
      NavigationList: NavigationList,
      drawer: false,
      webSocket: null,
      webSocketURL: 'wss://' + window.document.location.host + '/',
      sendWebSocket: ''
    }
  },
  mounted() {
    this.webSocket = new WebSocket('ws://127.0.0.1:5001')
    PackageJson.name = Functions.ifEnglishStartUpper(PackageJson.name)

    this.webSocket.addEventListener('open', () => {
      console.log('接続が開かれたときに呼び出されるイベント')
    })

    this.webSocket.addEventListener('message', (e) => {
      console.log(e.data)
    })

    this.webSocket.addEventListener('close', (e) => {
      console.log(
        '接続が閉じられたときに呼び出されるイベント' + JSON.stringify(e)
      )
    })

    this.webSocket.addEventListener('error', (e) => {
      console.log(
        'エラーが発生したときに呼び出されるイベント' + JSON.stringify(e)
      )
    })

    //btn.addEventListener('click', (e) => {
    //this.webSocket.send('hello')
    //})
  },
  methods: {
    toggleDrawer() {
      if (this.drawer === false) {
        this.drawer = true
      } else {
        this.drawer = false
      }
    },
    /**
     * <p>aタグと同じ動きをするし、pjaxになる</p>
     * <p>外部URLの場合、新しいタブで開く</p>
     * @param {string} url 転送したいURL（ルートからのパス）
     * @returns {int} 内部リンクなら0、外部ドメインなら1
     */
    a(url) {
      if (url.slice(0, 4) === 'http') {
        window.open(url, '_blank')
        return 1
      } else {
        this.$router.push(url)
        return 0
      }
    },
    send(string) {
      this.webSocket.send(string)
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  user-select: none;
  list-style: none;
  transition: all 0.14s;
}
li.nav {
  width: 100%;
  height: 3em;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover::after {
    content: '>';
    margin-left: 1em;
    font-weight: bold;
  }
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
