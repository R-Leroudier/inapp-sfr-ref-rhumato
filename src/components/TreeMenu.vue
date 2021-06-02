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
        :content="subChildren.content"
      >
      </tree-menu>
    </div>

    <a :href="this.content" target="_blank" v-else-if="this.type === 'link'">
      <div class="label-wrapper">
        {{ name }}
      </div>
    </a>

    <router-link :to="'/score/' + this.slug" v-else>
      <div class="label-wrapper">
        {{ name }}
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["name", "type", "slug", "children", "depth", "content"],
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
<style scoped lang="scss">
@import "src/sass/global.scss";;
.tree-menu {
  all: unset;
  color: #472e5a;
  font-weight: bold;
  background: #ecf1f5;
  border-radius: 5px;
  margin-top: .5rem;
  display: block;
  padding: 16px;

  transition: all .5s linear;


  i {
    background: #472e5a;
    color: #ecf1f6;
    padding: .5em .75em;
    border-radius: .5rem;
    font-weight: lighter;
    display: flex;
  }

  .label-wrapper {
    display: flex;
    cursor: pointer;
    text-align: left;
    justify-content: space-between;
    align-items: center;
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
