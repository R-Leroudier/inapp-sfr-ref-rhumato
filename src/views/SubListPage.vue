<template>
  <div class="SubListPage">
    <search-bar />
    <h1>{{ list.name }}</h1>
    <div class="sub-categories">
      <div v-for="(subChildren, index) in list.children" :key="list.name + index">
        <tree-menu
          :name="subChildren.name"
          :type="subChildren.type"
          :slug="subChildren.slug"
          :children="subChildren.children"
          :depth="0"
          :content="subChildren.content"
        ></tree-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DataService from "@/service/DataService";
import TreeMenu from "@/components/TreeMenu.vue";
import SearchBar from '@/components/search/SearchBar.vue';

export default Vue.extend({
  name: "SubListPage",
  data() {
    return {
      list: [],
    };
  },
  components: {
    TreeMenu,
    SearchBar
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
<style scoped lang="scss">
@import "src/sass/global.scss";;
.SubListPage {
  padding: 0 .75rem;

  h1 {
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
    text-align: left;
    font-size: calc(1.375rem + 1.5vw);
    color: #4c2b62;
  }
}

.sub-categories {
}
</style>
