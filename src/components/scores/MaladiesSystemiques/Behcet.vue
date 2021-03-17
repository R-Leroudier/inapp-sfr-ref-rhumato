<template>
  <!-- <h3> https://www.fai2r.org/les-pathologies-rares/behcet/criteres </h3> -->
  <div id="containeer">
    <p>Critères</p>
    <!-- first choice -->
      <label> Aphtose orale </label>
      <span v-if="this.score1 == 0">
      <button type="button" class="btn-1" @click="choice1(1);">oui</button>
      </span>
      <span v-else>
      <button type="button" class="btn-1" @click="choice1(0)">non</button>
      </span>
    <!-- second choice -->
      <br>
      <label>Aphtose génitale </label>
      <span v-if="this.score2 == 0">
      <button type="button" @click="choice2(2);">oui</button>
      </span>
      <span v-else>
      <button type="button" @click="choice2(0)">non</button>
      </span>
      <br>
      <!-- third choice -->
      <label> Lésions cutanées </label>
      <span v-if="this.score3 == 0">
      <button type="button" @click="choice3(1);">oui</button>
      </span>
      <span v-else>
      <button type="button" @click="choice3(0)">non</button>
      </span>
      <br>
      <!-- fourth choice -->
      <label> Atteinte oculaire </label>
      <span v-if="this.score4 == 0">
      <button type="button" @click="choice4(2);">oui</button>
      </span>
      <span v-else>
      <button type="button" @click="choice4(0)">non</button>
      </span>
      <br>
      <!-- fifth choice -->
      <label> Test pathergique positif  </label>
      <span v-if="this.score5 == 0">
      <button type="button" @click="choice5(1);">oui</button>
      </span>
      <span v-else>
      <button type="button" @click="choice5(0)">non</button>
      </span>
      <br>
      <!-- sixth choice -->
      <label> Lésion vasculaire (thrombose artérielle, veineuse, anévrysme) </label>
      <span v-if="this.score6 == 0">
      <button type="button" @click="choice6(1);">oui</button>
      </span>
      <span v-else>
      <button type="button" @click="choice6(0)">non</button>
      </span>
      <br>

    <br>
      <span>{{ total() }} Points</span> <br>
      <span>{{ 0 }} Critère d'exclusion</span> <br>
      <span v-if="total() >= 3"> POSITIF</span> <span v-else>NEGATIF</span>
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
    choice1(x) {
      this.score1 = x;
    },
    choice2(x) {
      this.score2 = x;
    },
    choice3(x) {
      this.score3 = x;
    },
    choice4(x) {
      this.score4 = x;
    },
    choice5(x) {
      this.score5 = x;
    },
    choice6(x) {
      this.score6 = x;
    },
    total() {
      return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6;
    },
  },
});
</script>

<style></style>
