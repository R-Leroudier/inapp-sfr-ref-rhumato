<template>
  <div class="list">
    <p v-if="notFound">Aucun résultat</p>
    <ul>
      <li v-for="(item, i) in resultItems" :key="i">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import TreeMenu from '@/components/TreeMenu.vue';

export default {
  name: 'ListSearchResult',
  components: {
    TreeMenu
  },
  props: {
    resultItems: Array,
    notFound: Boolean
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
