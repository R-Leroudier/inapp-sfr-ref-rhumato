<template>
  <div class="SubListPage">
    <div class="sub-categories">
      <div v-for="subCategorie in subCategories" :key="subCategorie.id">
        <div>{{ subCategories.name }}</div>
        
        <div v-for="dropdown in subCategorie.children" :key="dropdown.id">
          <router-link :to="'/score/' + dropdown.slug">{{
            dropdown.name
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DataService from "@/service/DataService";

export default Vue.extend({
  name: "SubListPage",
  data() {
    return {
      subCategories: [],
    };
  },
  mounted() {
    DataService.load()
      .then(() => {
        this.subCategories = DataService.$data.tree;
      })
      .catch((e) => {
        console.log(e);
      });
  },
});
</script>
