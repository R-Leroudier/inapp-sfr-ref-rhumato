<template>
  <div class="ListPage">
    <div class="main-categories">
      <div class="list" v-for="node0 in nodes0" :key="node0.name">
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
.ListPage {
    padding: 24px;
}

.list {
  a {
    all: unset;
    background: #ecf1f5;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px lightgray;
    display: block;
    margin-bottom: 8px;
    padding: 16px;
    cursor: pointer;
    text-align: left;
    font-weight: bold;
    color: #472e5a;
  }
}
</style>
