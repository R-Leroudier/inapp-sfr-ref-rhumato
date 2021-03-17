<template>
  <!-- <h3> https://www.fai2r.org/les-pathologies-rares/behcet/criteres </h3> -->
  <div id="containeer">
    <p>Critères</p>
    <div id="list-container">
      <label> Aphtose orale </label>
      <button type="button" class="btn" @click="choice1(1)">
        <span v-if="this.score1 !== 0"> oui </span>
        <span v-else> non </span>
      </button>
      <br>
      <label>Aphtose génitale </label>
      <!-- <input type="checkbox" v-model="toggle[2]" @click="toggle[2] == false ? calcPlus(1) : calcLess(1)"><br> -->

      <label> Lésions cutanées  </label>

      <label> Atteinte oculaire </label>

      <label> Test pathergique positif  </label>

      <label> Lésion vasculaire (thrombose artérielle, veineuse, anévrysme) </label>
    </div>
    <br>
    <div id="example">
      <span>{{ calcTotal() }} Points</span> <br>
      <span>{{ }} Critère d'exclusion</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Behcet",
  mounted() {},
  data() {
    return {
      score1: 0,
      score2: 0,
      score3: 0,
      score4: 0,
      score5: 0,
      score6: 0
    };
  },
  methods: {
    choice1(number) {
      this.score1 = number;
    },
    choice2(number) {
      this.score2 = number;
    },
    choice3(number) {
      this.score3 = number;
    },
    choice4(number) {
      this.score4 = number;
    },
    choice5(number) {
      this.score5 = number;
    },
    choice6(number) {
      this.score6 = number;
    },
    calcTotal() {
      return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6;
    },
  },
});
</script>

<style></style>
