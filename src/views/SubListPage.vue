<template>
  <div class="SubListPage">
    <div class="sub-categories">
      <div v-for="node in selectedNode" :key="node.id">
        <div v-if="node.type === 'list'">
          <div>{{ node.name }}</div>

          <div v-for="nodeChildren0 in node.children" :key="nodeChildren0.id">
            <router-link :to="'/score/' + nodeChildren0.slug">{{
              nodeChildren0.name
            }}</router-link>
          </div>
        </div>
        <div v-else>
          <router-link :to="'/score/' + node.slug">{{ node.name }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DataService from "@/service/DataService";

export default Vue.extend({
  name: "SubListPage",
  data() {
    return {
      selectedNode: [],
    };
  },
  mounted() {
    DataService.load()
      .then(() => {
        const slug = this.$route.params.slug;
        const dataTree = DataService.$data.tree;

        // Retrive component name from slug.
        for (let node0 of dataTree) {
          if (node0.slug === slug) {
            this.selectedNode = node0.children;
            return 1;
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },
});
</script>
