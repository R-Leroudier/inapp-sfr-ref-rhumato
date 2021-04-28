<template>
  <div class="tree-menu" :class="{ children: depth % 2  === 1, grandChildren: depth !== 0 && depth % 2 === 0 }">
    <div v-if="this.type === 'list'">
      <div class="label-wrapper" @click="toggleChildren">
        {{ name }}
        <i v-if="!this.showChildren" class="fas fa-chevron-right"></i>
        <i v-else class="fas fa-chevron-down"></i>
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
    <router-link :to="'/score/' + this.slug" v-else>
      <div class="label-wrapper">
        {{ name }}
      </div>
    </router-link>

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

  .label-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

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
