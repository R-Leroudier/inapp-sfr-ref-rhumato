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
    color: red;
    width: 100%;
    height: 20px;
    background: aqua;
    border-color: red;
    border-width: 1px;
    border-style: solid;
    display: block;
    margin-bottom: 5px;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;

    a {
      display: block;
    }
  }
}
</style>
