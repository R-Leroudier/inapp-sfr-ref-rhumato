<template>
  <div class="score">
    <h2 class="title">SCORE FFS</h2>
    <span class="line"></span>

    <section class="result" :class="{'medium-risk' : finalScore === 1, 'hight-risk' : finalScore >= 2  }">
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
    this.finalScore = this.scores.reduce((x1, x2) => (parseFloat(x1) + parseFloat(x2)));

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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    align-content: center;
    text-align: left;
    margin: 0px;
    margin-top: 10px;
    margin-bottom: 17px;
    background-color: #87c343;
    width: 100%;
    display: flex !important;

    div:nth-child(1) {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: stretch;
      align-content: initial;
      width: 80%;

      h3 {
        padding-left: 15px;
      }
    }

    div:nth-child(2) {
      display: flex;
      width: 20%;

      h2 {
        margin: auto;
      }
    }
  }

  .medium-risk {
    background-color: #ff6600;
  }

  .hight-risk {
    background-color: #d22207;
  }
</style>
