<template>
  <div class="tree-menu" :class="{ children: depth % 2  === 1, grandChildren: depth !== 0 && depth % 2 === 0 }">
    <div v-if="this.type === 'list'">
      <div class="label-wrapper" @click="toggleChildren">
        {{ name }}
      </div>
      <tree-menu
        v-if="showChildren"
        v-for="subChildren in children"
        :name="subChildren.name"
        :type="subChildren.type"
        :slug="subChildren.slug"
        :children="subChildren.children"
        :depth="depth + 1"
        :key="subChildren.name"
      >
      </tree-menu>
    </div>
    <div class="label-wrapper" v-else>
      <router-link :to="'/score/' + this.slug">
        {{ name }}
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
  computed: {},
  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren;
    },
  },
  mounted() {
  },
};
</script>
<style lang="scss">
.tree-menu {
  all: unset;
  background: #ecf1f5;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px lightgray;
  display: block;
  margin-bottom: 8px;
  padding: 16px;
  cursor: pointer;
  text-align: left;
  font-weight: bold;
  color: #472e5a;

  a {
    all: unset;
  }

  &.children {
    background-color: #4c2b62;
    color: #fff;
  }

  &.grandChildren {
    background-color: #fff;
    color: #4c2b62;
  }
}
</style>
