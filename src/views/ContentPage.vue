<template>
  <div class="content-page">
    <keep-alive>
      <component v-bind:is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DataService from "@/service/DataService";
import Score1 from "@/components/scores/Score1.vue";
import NewYorkCriteria from "@/components/scores/RIC/Spondyloarthrite/NewYorkCriteria.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Score1,
    NewYorkCriteria
  },
  data() {
    return {
      componentName: null,
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
            this.componentName = node0.component;
            break;
          }
          for (let node1 of node0.children) {
            if (node1.slug === slug) {
              this.componentName = node1.component;
              break;
            }
            for (let node2 of node1.children) {
              if (node2.slug === slug) {
                this.componentName = node2.component;
                break;
              }
              for (let node3 of node2.children) {
                if (node3.slug === slug) {
                  this.componentName = node3.component;
                  break;
                }
                for (let node4 of node3.children) {
                  if (node4.slug === slug) {
                    this.componentName = node4.component;
                    break;
                  }
                }
              }
            }
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },
});
</script>
