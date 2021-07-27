<template>
  <div class="subMenu">
    <h1 class="subMenu__title">
      {{ list.name }}
    </h1>
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
  },
});
</script>
<style scoped lang="scss">
.subMenu {
  padding: 0 .75rem;
  &__title {
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
    text-align: left;
    font-size: calc(1.375rem + 1.5vw);
    color: #4c2b62;
  }
}

</style>
