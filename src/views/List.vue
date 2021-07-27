<template>
  <div class="ListPage">
    <search-bar @onSearch="toggleSearching" />
    <ListSearchResult v-if="isSearching"/>
<!--    <ListPage v-else="isSearching"/>-->

<!--    <ListPage />-->

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchBar from '@/components/search/SearchBar.vue';
import ListSearchResult from '@/components/ListSearchResult.vue';
import ListPage from '@/components/ListPage.vue';

export default Vue.extend({
  name: 'ListPage',
  data: () => ({
    isSearching: false,
    nodes0: []
  }),
  components: {
    SearchBar,
    ListSearchResult,
    ListPage
  },
  methods: {
    toggleSearching() {
      if (inputValue > 0 ) {
        this.isSearching = !this.isSearching
      }

      console.log(this.isSearching)
    }
  }
});
</script>
<style scoped lang="scss">
@import 'src/sass/global.scss';
.ListPage {
  display: flex;
  flex-flow: column nowrap;
  padding: 0 0.75rem;

  h1 {
    padding: 0;
    margin-bottom: 0;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    font-size: calc(1.375rem + 1.5vw);
    font-weight: 500;
    line-height: 1.2;
    text-align: left;
    color: #472e5a;
  }
}

.list {
  a {
    all: unset;
    color: #472e5a;
    font-weight: bold;
    background: #ecf1f5;
    border-radius: 5px;
    display: flex;
    margin-top: 0.5rem;
    padding: 16px;
    cursor: pointer;
    text-align: left;
    justify-content: space-between;
    align-items: center;

    i {
      background: #80cc28;
      color: #ecf1f6;
      padding: 0.5em 0.75em;
      border-radius: 0.5rem;
      font-weight: lighter;
      display: flex;
    }
  }
}
</style>
