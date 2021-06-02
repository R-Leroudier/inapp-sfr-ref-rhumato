<template>
  <div id="app">
    <Header :headerQuitApp="this.$router.currentRoute.fullPath === '/'"></Header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DataService from "@/service/DataService";

import Header from "@/components/Header.vue";

export default Vue.extend({
  components: { Header },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    DataService.load()
      .then(() => {
        this.name = DataService.$data.appData.name;
        this.categories = DataService.$data.tree;
      })
      .catch((e) => {
        console.log(e);
      });
  },
});
</script>

@import "src/sass/global.scss";;html, body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* position: fixed; */
  width: 100%;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

