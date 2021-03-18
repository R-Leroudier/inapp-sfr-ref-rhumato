<template>
  <div class="score">
    <h2 class="title">SCORE SELENA-SLEDAI</h2>
    <span class="line">------</span>

    <div v-for="(dataQuestion, i) in datasQuestion" :key="i">
      <SelenaSledaiCheckBox
        :index="i"
        :question="dataQuestion.question"
        :malusScore="dataQuestion.malusScore"
        @upwardChange="upwardChange"
      ></SelenaSledaiCheckBox>
      <br />
    </div>

    <span class="line"></span>
    <h3 class="title">
      Score final <em>{{ finalScore }}</em
      >.
    </h3>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SelenaSledaiCheckBox from "./SelenaSledaiCheckBox.vue";

export default Vue.extend({
  components: { SelenaSledaiCheckBox },
  name: "SelenaSledai",
  data() {
    return {
      finalScore: 0,
      scores: [],
      datasQuestion: 
      [
        { question: "Convulsion", malusScore: 8, userScore: 0,},
        { question: "Psychose", malusScore: 8, userScore: 0,},
        { question: "Atteinte cérébrale", malusScore: 8, userScore: 0,},
        { question: "Troubles visuels", malusScore: 8, userScore: 0,},
        { question: "Nerfs crâniens", malusScore: 8, userScore: 0,},
        { question: "Céphalées", malusScore: 8, userScore: 0,},
        { question: "AVC", malusScore: 8, userScore: 0,},
        { question: "Vascularite", malusScore: 8, userScore: 0,},
        { question: "Arthrites", malusScore: 4, userScore: 0,},
        { question: "Myosite", malusScore: 4, userScore: 0,},
        { question: "Cylindres urinaires", malusScore: 4, userScore: 0,},
        { question: "Hématurie", malusScore: 4, userScore: 0,},
        { question: "Protéinurie", malusScore: 4, userScore: 0,},
        { question: "Pyurie", malusScore: 4, userScore: 0,},
        { question: "Nouvelle éruption cutanée", malusScore: 2, userScore: 0,},
        { question: "Alopécie", malusScore: 2, userScore: 0,},
        { question: "Ulcères muqueux", malusScore: 2, userScore: 0,},
        { question: "Pleurésie", malusScore: 2, userScore: 0,},
        { question: "Péricardite", malusScore: 2, userScore: 0,},
        { question: "Complément", malusScore: 2, userScore: 0,},
        { question: "Anti-ADN", malusScore: 2, userScore: 0,},
        { question: "Fièvre", malusScore: 1, userScore: 0,},
        { question: "Thrombopénie", malusScore: 1, userScore: 0,},
        { question: "Leucopénie", malusScore: 1, userScore: 0,}
      ],
    };
  },
  methods: {
    calcResult() {
    this.finalScore = this.scores.reduce((x1, x2) => x1 + x2);
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
<style lang="scss"></style>
