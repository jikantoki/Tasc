<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <button @click="changetitle('uoooo')">タイトルの変更</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import PackageJson from "../package.json";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    /**
     * Webサイトのタイトルを変更
     * @param {string} title 設定したいタイトル
     */
    changetitle: (title) => {
      if (!title || title === "") {
        document.title = title;
      } else {
        document.title = title + " | " + PackageJson.name;
      }
      return 0;
    },
  },
  created: () => {
    console.log("hello!");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
