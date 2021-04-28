<template>
  <div class="header">
    <div v-if="false">X</div>
    <div v-else @click="goBack(this,2)"><</div>
   Haut de page
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { goBack } from "@/global";

export default Vue.extend({
  mounted() {
    console.log(this.$router.currentRoute.fullPath);
  },
  methods: {
    goBack
  }
})
</script>

<style>
.header {
  height: 40px;
  top: -20px;
  padding: 30px 30px 10px 30px;
  position: relative;
  background-color: #f2f1f6;
  box-shadow: 1px 1px 1px 1px lightgray;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 40px;
}

</style>
