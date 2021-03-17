<template>
  <div class="SubListPage">
    <div class="sub-categories">
      <div v-for="node1 in nodes1" :key="node1.id">
        <tree-menu
          :name="node1.name"
          :type="node1.type"
          :slug="node1.slug"
          :children="node1.children"
          :depth="0"
        ></tree-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DataService from "@/service/DataService";
import TreeMenu from "@/components/TreeMenu.vue";

export default Vue.extend({
  name: "SubListPage",
  data() {
    return {
      nodes1: [],
    };
  },
  components: {
    TreeMenu,
  },
  mounted() {
    DataService.load()
      .then(() => {
        const slug = this.$route.params.slug;
        const dataTree = DataService.$data.tree;


        // Retrive component name from slug.
        for (let nodes0 of dataTree) {
          if (nodes0.slug === slug) {
            this.nodes1 = nodes0.children;
            break;
          }
        }

      })
      .catch((e) => {
        console.log(e);
      });
  },
});
</script>
<style lang="scss">
.sub-categories {
}
</style>