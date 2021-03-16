<template>
  <div class="ListPage">
    <div class="main-categories">
      <div v-for="node0 in nodes0" :key="node0.id">
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
