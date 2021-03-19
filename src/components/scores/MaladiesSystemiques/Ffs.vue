<template>
  <div class="score">
    <h2 class="title">SCORE FFS</h2>
    <span class="line"></span>

    <section class="result">
      <div>
        <h3>SURVIE À 5 ANS (%):  {{percentageSurvivalAtFiveYears}}</h3>
        <h3>RISQUE DE DÉCÈS :  {{riskOfDeath}}</h3>
      </div>
      <div>
        <h2>{{ finalScore }}</h2>
      </div>
    </section>

    <div v-for="(dataQuestion, i) in datasQuestion" :key="i">
      <SelenaSledaiCheckBox
        :index="i"
        :question="dataQuestion.question"
        :malusScore="dataQuestion.malusScore"
        @upwardChange="upwardChange"
      ></SelenaSledaiCheckBox>
      <br/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SelenaSledaiCheckBox from "./HelperCheckBox.vue";

export default Vue.extend({
  components: { SelenaSledaiCheckBox },
  name: "SelenaSledai",
  data() {
    return {
      percentageSurvivalAtFiveYears: 88.1,
      riskOfDeath: 0.62, 
      finalScore: 0,
      scores: [],
      datasQuestion: 
      [
        { question: "Âge du patient supérieur à 65 ans", malusScore: 1, userScore: 0},
        { question: "Créatininémie supérieure à 150 μmol/l", malusScore: 1, userScore: 0},
        { question: "Cardiomyopathie", malusScore: 1, userScore: 0},
        { question: "Atteinte digestive", malusScore: 1, userScore: 0},
        { question: "Absence d’atteinte ORL au cours d’une granulomatose avec polyangéite (de Wegener) ou d’un syndrome de Churg-Strauss", malusScore: 1, userScore: 0},
      ],
    };
  },
  methods: {
    calcResult() {
    this.finalScore = this.scores.reduce((x1, x2) => x1 + x2);

    switch (this.finalScore) {
      case 0:
        this.percentageSurvivalAtFiveYears = 88.1;
        this.riskOfDeath = 0.62;
        break;
      case 1:
        this.percentageSurvivalAtFiveYears = 74.1;
        this.riskOfDeath = 1.35;
        break;
      default:
        this.percentageSurvivalAtFiveYears = 54.1;
        this.riskOfDeath = 2.40;
    }

    //this.percentageSurvivalAtFiveYears = 
    },
    upwardChange(e: any) {
      this.scores[e.index] = e.userScore;
      this.calcResult()
    },
  },
  watch: {
    choise: {
      handler: function() {
        this.calcResult();
      },
      deep: true,
    },
  },
  mounted() {},
});
</script>
<style lang="scss">
  .result {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
</style>
