<template>
  <div class="list">
   <search-bar />
  </div>
</template>

<script>
import searching from '@/utils/Searching';
import DataService from '@/service/DataService';
//import TreeMenu from '@/components/TreeMenu.vue';
import SearchBar from '@/components/search/SearchBar.vue';

export default {
  name: 'Search',
  components: { SearchBar },
  data: () => ({

  }),
  watch:{

  },
  methods: {

  },
  mounted() {
  },
};
</script>

<style scoped lang="scss"> </style>
