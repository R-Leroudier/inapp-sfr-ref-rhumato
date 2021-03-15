<template>
  <div class="ListPage">
    <div class="main-categories">
      <div v-for="categorie in categories" :key="categorie.id">
        <router-link :to="'/sublist/' + categorie.slug">{{
          categorie.name
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DataService from "@/service/DataService";

export default Vue.extend({
  name: "ListPage",
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    DataService.load()
      .then(() => {
        this.categories = DataService.$data.tree;
      })
      .catch((e) => {
        console.log(e);
      });
  },
});
</script>
