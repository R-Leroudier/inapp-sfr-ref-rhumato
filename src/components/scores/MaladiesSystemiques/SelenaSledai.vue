<template>
  <div class="score">
    <h2 class="title">xxx</h2>
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
        { question: "Ouvrir une porte de voiture ?", malusScore: 3, userScore: 0,},
        { question: "Dévisser le couvercle d'un pot déjà ouvert une fois ?", malusScore: 6, userScore: 0,},
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
