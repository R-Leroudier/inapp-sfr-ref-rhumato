<template>
  <main>
    <p v-if="notFound">Aucun résultat</p>
    <ul>
      <li v-for="(result, i) in resultItems" :key="i">
        <router-link :to="'/score/' + result.item.slug">
          {{ result.item.name }}
        </router-link>
      </li>
    </ul>
  </main>
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
};
</script>

<style scoped lang="scss"></style>
