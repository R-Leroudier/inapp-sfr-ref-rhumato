<template>
  <div class="ListPage">
    <div class="main-categories">
      <div class="list" v-for="node0 in nodes0" :key="node0.name + index">
        <router-link :to="'/sublist/' + node0.slug">{{
          node0.name
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DataService from "@/service/DataService";

export default Vue.extend({
  name: "ListPage",
  data() {
    return {
      nodes0: [],
    };
  },
  mounted() {
    DataService.load()
      .then(() => {
        this.nodes0 = DataService.$data.tree;
      })
      .catch((e) => {
        console.log(e);
      });
  },
});
</script>
<style lang="scss">
.list {
  a {
    color: red;
    width: 100%;
    height: 20px;
    background: aqua;
    border-color: red;
    border-width: 1px;
    border-style: solid;
    display: block;
    margin-bottom: 5px;
    padding: 8px;
    border-radius: 5px;
  }
}
</style>
