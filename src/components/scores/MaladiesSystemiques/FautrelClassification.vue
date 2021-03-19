<template>
  <div>
      <h2 class="title">Critères de classification proposés par Fautrel</h2>
      <p class="description">Calcul des critères de classification ou de diagnostic</p>

      <h4 class="categorie">Critères de classification proposés par Fautrel (2002)</h4>
        <p class="description">Critères majeurs :</p>

          <p class="description">Fièvre hectique ≥ 39°C</p>
          <!-- first choice -->
            <input type="radio" class="btn-check" name="btnradio1" id="btnradio3" @click="choice1(0)" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio1">NON</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradio4" @click="choice1(1)" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio8">OUI</label>

          <!-- second choice -->
          <p class="description"> Arthralgies ou arthrites </p> 
            <input type="radio" class="btn-check" name="btnradio3" id="btnradio5" @click="choice2(0)" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio5">NON</label>

            <input type="radio" class="btn-check" name="btnradio3" id="btnradio6" @click="choice2(1)" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio6">OUI</label>

          <!-- third choice -->
          <p class="description">Erythème fugace</p> 
            <input type="radio" class="btn-check" name="btnradio3" id="btnradio5" @click="choice3(0)" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio5">NON</label>

            <input type="radio" class="btn-check" name="btnradio3" id="btnradio6" @click="choice3(1)" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio6">OUI</label>

          <!-- fourth choice -->
          <p class="description">Pharyngite</p>
            <input type="radio" class="btn-check" name="btnradio4" id="btnradio7" @click="choice4(0)" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio7">NON</label>

            <input type="radio" class="btn-check" name="btnradio4" id="btnradio8" @click="choice4(1)" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio8">OUI</label>

          <!-- fifth choice -->
          <p class="description">Polynucléaires neutrophiles ≥ 80%</p>
            <input type="radio" class="btn-check" name="btnradio5" id="btnradio9" @click="choice5(0)" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio9">NON</label>

            <input type="radio" class="btn-check" name="btnradio5" id="btnradio10" @click="choice5(1)" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio10">OUI</label>

          <!-- sixth choice -->
          <p class="description">Ferritine glycosylée ≤ 20%</p> 
            <input type="radio" class="btn-check" name="btnradio6" id="btnradi11"  @click="choice6(0)" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio11">NON</label>

            <input type="radio" class="btn-check" name="btnradio6" id="btnradio12" @click="choice6(1)" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio12">OUI</label>

        <h4 class="categorie">Critères mineurs :</h4>

          <!-- seventh choice -->
          <p class="description">Rash maculo-papuleux</p>

            <input type="radio" class="btn-check" name="btnradio7" id="btnradio13" @click="choice7(0)" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio13">NON</label>

            <input type="radio" class="btn-check" name="btnradio7" id="btnradio14" @click="choice7(1)" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio14">OUI</label>

          <!-- eighth choice -->
          <p class="description">Leucocytes ≥ 10 000 mm3 </p>

            <input type="radio" class="btn-check" name="btnradio8" id="btnradio15"  @click="choice8(0)" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio15">NON</label>

            <input type="radio" class="btn-check" name="btnradio8" id="btnradio16"  @click="choice8(1)" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio16">OUI</label> -->
      <br>
      <card class="result">

        <span v-if="majorCriterias() <= 1">{{ majorCriterias() }} critère majeur</span>
        <span v-else>{{ majorCriterias() }} critères majeurs</span> <br>

        <span  v-if="minorCriterias() <= 1"> {{ minorCriterias() }} critère mineur</span>
        <span v-else>{{ minorCriterias() }} critères mineurs</span> <br>

        <p class="description">Nombre de critères nécessaires: 4 critères majeurs ou 3 critères majeurs + 2 critères mineurs</p>

    </card>

  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      number1: 0,
      number2: 0,
      number3: 0,
      number4: 0,
      number5: 0,
      number6: 0,
      number7: 0,
      number8: 0,
      majorCriteriaCount : 0,
      minorCriteria: 0
    };
  },
  methods: {
    choice1(x) {
      this.number1 = x;
      this.majorCriteriaCount += this.number1;
    },
    choice2(x) {
      this.number2 = x
      this.majorCriteriaCount += this.number2;
    },
    choice3(x) {
      this.number3 = x;
      this.majorCriteriaCount += this.number3;
    },
    choice4(x) {
      this.number4 = x;
      this.majorCriteriaCount += this.number4;
    },
    choice5(x) {
      this.number5 = x;
      this.majorCriteriaCount += this.number5;
    },
    choice6(x) {
      this.number6 = x;
      this.majorCriteriaCount += this.number6;
    },
    choice7(x) {
      this.number7 = x;
      this.minorCriteria += this.number7;
    },
    choice8(x) {
      this.number8 = x; 
      this.minorCriteria += this.number8;
    },
    majorCriterias() {
      return this.number1 + this.number2 + this.number3 + this.number4 + this.number5 + this.number6;
    },
    minorCriterias() {
      return this.number7 + this.number8;
    }
  },
})

</script>

<style></style>
