<template>
  <form class="search-form" @submit.prevent="onSubmit">
    <input v-model="searchText" placeholder="Rechercher" name="filter" />
    <div class="loupe-container" @click="onSubmit">
      <div class="loupe">
        <i class="fas fa-search"></i>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    reset() {
      this.searchText = '';
    },
    onSubmit() {
      this.$router.push(`/search/${this.searchText}`);
    },
  },
};
</script>

<style>
.loupe-container {
  width: 30px;
  height: 30px;
  background: #38bbec 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loupe {
  height: 17px;
}
form input {
  width: 70%;
  background: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid white;
  margin-right: 10px;
}
form input::placeholder {
  color: black;
}
form input:focus {
  outline: none;
}
.search-form {
  display: flex;
  justify-content: center;
  width: 70%;
  align-self: center;
  box-shadow: 0 3px 6px rgb(196 154 108 / 30%);
}
</style>
