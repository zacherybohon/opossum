<template>
  <div class="user">
    <div v-if="loggedIn">
      <input type="button" value="logout" @click="logoutWithRedirect" />
    </div>
    <div v-else>
      <a href="auth">log in</a>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "user",
  methods: {
    ...mapActions(["logout"]),
    logoutWithRedirect() {
      this.logout();
      window.location.href = "auth";
    }
  },
  computed: mapGetters(["loggedIn"]),
  created() {
    if (!this.loggedIn) {
      window.location.href = "auth";
    }
  }
};
</script>

<style>
.user {
  background-color: #38212b;
  color: #10a6f2;
}
</style>
