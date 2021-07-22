<template>
  <form class="search-form" @input="handleChange" >
    <input v-model="searchText"  :placeholder="searchText" />
  </form>
</template>

<script lang="ts">
import Fuse from 'fuse.js'
import DataService from '@/service/DataService';

export default {
  name: 'SearchBar',
  data: () => ({
    searchText: "",
    list: [],
    options: {
      distance: 10, // Determines how close the match with Fuse
      keys: [
        "name"
      ],
    },
    fuse: new Fuse(list, options)
  }),
  mounted() {
  DataService.load().then((data: any) => {
   this.list = data.tree
  })

  },
  methods: {
    handleChange(event) {
     const inputValue = event.target.value
      if (inputValue === '') {
        return
      }
      this.searchText = inputValue
      console.log(this.list)
      //return this.fuse.search(inputValue)
    },
  },
};
</script>

<style></style>
