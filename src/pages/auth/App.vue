<template>
  <div id="app">
    auth page!
    <form v-on:submit.prevent>
      <input v-model="tmpInstance" @change="validateUrl">
    </form>
    <div class="instance-info" v-if="validUrl">
      <h3>{{instanceObj.title}}</h3>
      <img class="thumbnail" v-bind:src="instanceObj.thumbnail">
      <p>{{instanceObj.description}}</p>
      <input type="button" value="login" @click="login">
    </div>
  </div>
</template>

<script>
// import User from "../../components/User.vue";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "app",
  data: function() {
    return {
      tmpInstance: "",
      validUrl: false,
      instanceObj: {},
      timeout: null
    };
  },
  methods: {
    validateUrl: async function() {
      try {
        let res = await axios.get(
          `https://${this.tmpInstance}/api/v1/instance`
        );
        this.instanceObj = res.data;
        this.validUrl = true;
      } catch {
        this.validUrl = false;
      }
    },
    login: function() {
      localStorage["instance"] = this.tmpInstance;
      const i = this.tmpInstance;
      const c = this.clientId;
      const s = encodeURIComponent("read write follow");
      const r = encodeURIComponent(this.redirectURI);
      const url = `https://${i}/oauth/authorize?redirect_uri=${r}&response_type=code&scope=${s}&client_id=${c}`;
      window.location.href = url;
    },
    getAuthToken: async function(code) {}
  },
  computed: {
    ...mapGetters([
      "loggedIn",
      "clientId",
      "redirectURI",
      "getAuthInfo",
      "clientSecret"
    ]),
    oauthUrl: function() {
      return url;
    }
  },
  async created() {
    const parms = new URLSearchParams(window.location.search);
    if (parms.has("code")) {
      try {
        let host = this.getAuthInfo.instance;
        let res = await axios.post(`https://${host}/oauth/token`, {
          code: parms.get("code"),
          grant_type: "authorization_code",
          client_id: this.clientId,
          client_secret: this.clientSecret,
          redirect_uri: this.redirectURI
        });
        localStorage["token"] = res.data.access_token;
        window.location.href = "../";
      } catch (error) {
        console.log(error);
      }
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
.thumbnail {
  width: 200px;
}
.instance-info {
  width: 250px;
  background-color: aliceblue;
  margin: auto;
  padding: 10px;
}
</style>
