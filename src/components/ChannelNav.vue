<template>
  <div id="channels">
    <h6>
      Channels
      <a href="#" id="add-channel">
        <i class="fas fa-plus"></i>
      </a>
    </h6>
    <ul class="nav flex-column">
      <li v-for="feedName in feedNames" :key="feedName">
        <a class="nav-link" :href="'channel/' + feedName">#{{feedName}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["feedNames"])
};
</script>

<style>
#channels a:any-link {
  color: #a5e285;
}
a:hover {
  color: #b5f295;
}
#channels {
  text-align: left;
}
#add-channel {
  float: right;
}
</style>
