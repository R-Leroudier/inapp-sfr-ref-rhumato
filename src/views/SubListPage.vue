<template>
  <div class="SubListPage">
    <h1>{{ list.name }}</h1>
    <div class="sub-categories">
      <div v-for="(subChildren, index) in list.children" :key="list.name + index">
        <tree-menu
          :name="subChildren.name"
          :type="subChildren.type"
          :slug="subChildren.slug"
          :children="subChildren.children"
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
      list: [],
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
        for (let list of dataTree) {
          if (list.slug === slug) {
            this.list = list;
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
.SubListPage {
  padding: 24px;

  h1 {
    margin: 0 0 10px;
    text-align: left;
    font-size: 24px;
    color: #4c2b62;
  }
}

.sub-categories {
}
</style>
