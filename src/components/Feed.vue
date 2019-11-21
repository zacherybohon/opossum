<template>
  <div class="posts">
    <div v-for="toot in feeds['sffbookclub']" :key="toot.id" class="row">
      <div class="col-flex avatar-space">
        <img v-bind:src="toot.account.avatar" class="avatar" />
      </div>
      <div class="col post">
        <div v-html="toot.content"></div>
        <div class="post-buttons">
          <a href="#" class="clicked">
            <i class="fas fa-reply"></i>
          </a>
          <a href="#" v-bind:class="{clicked: !!toot.favourited, unclicked: !toot.favourited}">
            <i class="fas fa-heart"></i>
          </a>
          <a href="#" v-bind:class="{clicked: !!toot.boosted, unclicked: !toot.boosted}">
            <i class="fas fa-retweet"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters(["feeds"]),
  methods: mapActions(["fetchFeeds"]),
  created() {
    this.fetchFeeds();
  }
};
</script>

<style>
.post {
  text-align: left;
  color: 424551;
  padding: 3px;
  margin: 5px;
  border: 1px;
  border-block-color: 424551;
  border-style: solid;
  border-radius: 5px;
  background: linear-gradient(to right, #fff, #f8fff8);
}
.post:hover {
  background: linear-gradient(to right, #f8fff8, #f0fff0);
}
.avatar {
  margin: 5px;
  height: 48px;
  width: 48px;
  border-radius: 50%;
}
.clicked {
  color: #000;
}
.unclicked {
  color: #797;
}
.post-buttons {
  text-align: right;
}
.post-buttons a {
  margin: 5px;
}
.post-buttons a:hover {
  color: #000;
}
</style>
