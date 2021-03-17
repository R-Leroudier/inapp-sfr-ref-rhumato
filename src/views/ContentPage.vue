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
import Haq from "@/components/scores/RIC/PolyarthriteRhumatoide/Haq.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Score1,
    Haq
  },
  methods: {
    searchComponentName(nodes, slug) {
      for (let node of nodes) {
        if (node.slug === slug) {
          this.componentName = node.component;
          break;
        }
        if(node.children)
        {
          this.searchComponentName(node.children, slug);
        }
      }
    },
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
        this.searchComponentName(dataTree,slug)
      })
      .catch((e) => {
        console.log(e);
      });
  },
});
</script>
