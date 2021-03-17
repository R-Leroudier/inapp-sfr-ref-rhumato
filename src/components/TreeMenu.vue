<template>
  <div class="tree-menu">
    <div v-if="this.type === 'list'">
      <div class="label-wrapper" :style="indent" @click="toggleChildren">
        {{ treeIndication }} {{ name }}
      </div>
      <tree-menu
        v-if="showChildren"
        v-for="subChildren in children"
        :name="subChildren.name"
        :type="subChildren.type"
        :slug="subChildren.slug"
        :children="subChildren.children"
        :depth="depth + 1"
      >
      </tree-menu>
    </div>
    <div class="label-wrapper" v-else>
      <router-link :style="indent" :to="'/score/' + this.slug">
        {{ treeIndication }} {{ name }}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "type", "slug", "children", "depth"],
  data() {
    return { showChildren: false };
  },
  name: "tree-menu",
  computed: {
    treeIndication() {
      return `${"-".repeat(this.depth * 1)}`;
    },
    indent() {
      return { transform: `translate (${this.depth * 50} px)` };
    },
  },
  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren;
    },
  },
  mounted() {
    console.log(this.type);
  },
};
</script>
<style lang="scss">
.tree-menu {
  .label-wrapper {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    .has-children {
      cursor: pointer;
    }
  }
}
</style>
