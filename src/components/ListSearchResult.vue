<template>
  <main>
    <p v-if="notFound">Aucun résultat</p>
    <ul class="list">
      <li v-for="(result, i) in resultItems" :key="i"  class="list__item">
        <router-link :to="'/score/' + result.item.slug">
          {{ result.item.name }}
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script lang="ts">

export default {
  name: 'ListSearchResult',

  props: {
    resultItems: Array,
    notFound: Boolean
  },
};
</script>

<style scoped lang="scss">

.list {
  padding: 0;
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
  }
  a {
    color: #472e5a;
    background: #ecf1f5;
    border-radius: 5px;
    user-select: none;
    transition: box-sadow .3s ease-in;
    text-decoration: none;
    flex-basis: 85%;
    padding: 1em;
    margin: .25em;
    &:hover{
      box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
