<template>
  <div id="app">
    <user></user>
  </div>
</template>

<script>
import User from "./components/User.vue";
import axios from 'axios';

export default {
  name: "app",
  components: {
    User
  },
  created() {
    const parms = URLSearchParams(window.location.search);
    if(parms.has('code')) {
      l
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
