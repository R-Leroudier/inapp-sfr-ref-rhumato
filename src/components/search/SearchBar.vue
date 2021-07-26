<template>
  <form class="search" @input="handleChange" >
    <input class="search__input" cl v-model="searchText"  :placeholder="searchText" />
    <button class="search__button search__button__find" >
      <i class="fas fa-search" />
    </button>
    <button class="search__button search__button__reset">
      <i class="fas fa-times" />
    </button>
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
    handleChange(event) {
      const fuse = new Fuse(this.list, this.options);
      const inputValue = event.target.value
      console.log(inputValue)
      if (inputValue === '') {
        return
      }
      this.searchText = inputValue
      console.log(fuse.search(inputValue))
      //return this.fuse.search(inputValue)
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
      border: 1px solid #707070;
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
