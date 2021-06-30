<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DataService from '@/service/DataService';

import Header from '@/components/Header.vue';

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
<style lang="scss">
@import 'src/sass/global.scss';

html,
body {
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: 'Helvetica Neue';
  src: url('~@/assets/fonts/HelveticaNeue-Bold.otf') format('otf'),
    url('~@/assets/fonts/HelveticaNeue-Bold_1.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Helvetica Neue';
  src: url('~@/assets/fonts/HelveticaNeue-Medium.otf') format('otf'),
    url('~@/assets/fonts/HelveticaNeue-Medium_1.woff') format('woff');
  font-weight: medium;
  font-style: normal;
}

@font-face {
  font-family: 'Helvetica Neue';
  src: url('~@/assets/fonts/HelveticaNeue-Regular.otf') format('otf'),
    url('~@/assets/fonts/HelveticaNeue-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: 'Helvetica Neue';
  font-weight: bold;
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
