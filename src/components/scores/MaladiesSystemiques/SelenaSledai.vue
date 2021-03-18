<template>
  <div class="score">
    <h2 class="title">xxx</h2>
    <span class="line">------</span>

    <div v-for="(dataQuestion, i) in datasQuestion" :key="i">
      <!-- <HAQQuestion
        :index="i"
        :question="question"
        @questionChanged="qChanged($event)"
      ></HAQQuestion> -->

      <SelenaSledaiCheckBox :index=i :question="dataQuestion.question"></SelenaSledaiCheckBox>

      <br />
    </div>

    <span class="line">------</span>
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
      answers: [],
      datasQuestion: [
        { question: "Ouvrir une porte de voiture ?", malusScore: 0, answer: 0 },
        { question: "Dévisser le couvercle d'un pot déjà ouvert une fois ?", malusScore: 0, answer: 0 },
      ],
    };
  },
  methods: {
    calcResult() {
      this.finalScore = 0;
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
