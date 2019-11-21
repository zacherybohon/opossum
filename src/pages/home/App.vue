<template>
  <div id="app" class="container-fluid mt-0">
    <nav class="navbar sticky">
      <user id="user"></user>
    </nav>
    <div class="row">
      <div class="col-3 position-fixed px-1 h-100" id="navbar">
        <channelNav></channelNav>
      </div>
      <div class="col offset-3" id="body">
        <feed></feed>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../../components/User.vue";
import Feed from "../../components/Feed.vue";
import ChannelNav from "../../components/ChannelNav.vue";

export default {
  name: "app",
  components: {
    User,
    Feed,
    ChannelNav
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

#navbar {
  background: linear-gradient(#424551, #323531);
  color: #a5e285;
  /*position: absolute;*/
  /*overflow-y: scroll;*/
}
#body {
  background-color: #d6fdc0;
}

#header {
  background-color: #303030;
}
</style>
