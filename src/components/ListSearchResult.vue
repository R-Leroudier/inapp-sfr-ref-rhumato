<template>
  <div class="list">
    <p>Test display listSearchResult Component</p>
<!--<div v-for="(elem, i) in MyResult" :key="i">

    </div>-->
  </div>
</template>

<script lang="ts">
import TreeMenu from '@/components/TreeMenu.vue';

export default {
  name: 'ListSearchResult',
  components: {
    TreeMenu
  },
  data: () => ({
  }),
};
</script>

<style scoped lang="scss"></style>




<!--
<tree-menu
    :name="elem.name"
    :type="elem.type"
    :slug="elem.slug"
    :children="elem.children"
    :depth="0"
    :content="elem.content"
></tree-menu>-->
