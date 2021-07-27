<template>
  <form class="search" @input="handleSearch" >
    <input class="search__input" v-model="searchText"  :placeholder="searchText" />
    <button class="search__button search__button__find">
      <i class="fas fa-search"  />
    </button>
    <button class="search__button search__button__clear" @click="handleClear">
      <i class="fas fa-times" />
    </button>
  </form>
</template>

<script lang="ts">
import DataService from "@/service/DataService";
import Fuse from "fuse.js";

export default {
  name: 'SearchBar',
  data: () => ({
    searchText: "",
    isSearching: false,
    list: [],
    options: {
      keys: [
        "name"
      ]
    },
  }),
  async mounted() {
    await DataService.loadSearch().then((data: any) => {
      this.list = data
    })
  },
  methods: {
    handleClear() {
      if (this.searchText.length > 0) {
        this.searchText = "";
        console.log("input cleared")
        // ici je vais envoyer une props isSearching a false
        this.isSearching = false
        this.$emit('onClear', this.isSearching )
      }
    },
    handleSearch (event) {
      const fuse = new Fuse(this.list, this.options)
      const inputValue = event.target.value
      if (inputValue === '') {
        return
      }
      this.searchText = inputValue
      console.log("input value :",this.searchText)
      // ici je vais envoyer une props isSearching a true
      this.isSearching = true
      this.$emit('onSearch', fuse.search(this.searchText), this.isSearching )
    },
  },
};
</script>

<style scoped lang="scss">
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &__input {
      width: 100%;
      border: 1px solid #F1F1F6;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      padding: .4em 2em;
    }

    &__button {
      position: absolute;
      border: none;
      border-radius: 50px;
      background-color: #fff;
      &__clear {
        right: 5px;
      }
      &__find {
        left: 5px;
      }
    }
  }
</style>
