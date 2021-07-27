<template>
  <form class="search" @input="handleSearch" >
    <input class="search__input" v-model="searchText"  :placeholder="searchText" />
    <button class="search__button search__button__find">
      <i class="fas fa-search"  />
    </button>
    <button class="search__button search__button__reset" @click="onReset">
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
    onReset() {
      if (this.searchText.length > 0) {
        this.searchText = "";
        console.log("input cleared")
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
      //this.$emit('onSearch', $event, fuse.search(this.searchText))
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
      &__reset {
        right: 5px;
      }
      &__find {
        left: 5px;
      }
    }
  }
</style>
