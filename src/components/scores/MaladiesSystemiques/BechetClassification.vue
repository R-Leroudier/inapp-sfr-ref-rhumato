<template>
  <!-- <h3> https://www.fai2r.org/les-pathologies-rares/behcet/criteres </h3> -->
  <div id="containeer">
    <p>Critères</p>
    <div id="list-container">
      <label> Aphtose orale </label>
      <button type="button" :disabled="toggle[1]" @click="toggle[1] == false ? calcPlus(1) : calcLess(1)">
        <div v-if="content"></div>
        <span v-else>non</span>
      </button>

      <label>Aphtose génitale </label>
      <input type="checkbox" v-model="toggle[2]" @click="toggle[2] == false ? calcPlus(1) : calcLess(1)"><br>

      <label> Lésions cutanées  </label>
      <input type="checkbox" v-model="toggle[3]" @click="toggle[3] == false ? calcPlus(1) : calcLess(1)"><br>

      <label> Atteinte oculaire </label>
      <input type="checkbox" v-model="toggle[4]"  @click="toggle[4] == false ? calcPlus(2) : calcLess(2)"><br>

      <label> Test pathergique positif  </label>
      <input type="checkbox" v-model="toggle[5]"  @click="toggle[5] == false ? calcPlus(2) : calcLess(2)"><br>

      <label> Lésion vasculaire (thrombose artérielle, veineuse, anévrysme) </label>
      <input type="checkbox" v-model="toggle[6]" @click="toggle[6] == false ? calcPlus(2) : calcLess(2)"><br>
    </div>

    <div id="example">
      <span>{{ total }} Points</span>
      <span>{{ criteria }} Critère d'exclusion</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "behcet",
  data() {
    return{
      content: false,
      toggle: {
        1:false,
        2:false,
        3:false,
        4:false,
        5:false,
        6:false
      },
      total: 0,
      criteria: 0,
    }
  },
  methods: {
    calcPlus(num){
      this.total+=num
    },
    calcLess(num){
      this.total-=num
    }
  },
  mounted(){
    
  }
});
</script>

<style></style>
