<template>
  <div>
      <h2 class="title">Critères de classification proposés par Fautrel (2002)</h2>
      <p class="description">Calcul des critères de classification ou de diagnostic</p>

      <h4 class="categorie">Critères majeurs :</h4>

          <p class="description">Fièvre hectique ≥ 39°C</p>
          <!-- first choice -->
            <input type="radio"  name="btnradio1" id="btnradio1" @click="choice1(0)">
            <label class="btn " for="btnradio1">NON</label>

            <input type="radio"  name="btnradio1" id="btnradio2" @click="choice1(1)">
            <label class="btn" for="btnradio2">OUI</label>

          <!-- second choice -->
          <p class="description"> Arthralgies ou arthrites </p> 
            <input type="radio"  name="btnradio3" id="btnradio3" @click="choice2(0)">
            <label class="btn" for="btnradio3">NON</label>

            <input type="radio"  name="btnradio3" id="btnradio4" @click="choice2(1)">
            <label class="btn" for="btnradio4">OUI</label>

          <!-- third choice -->
          <p class="description">Erythème fugace</p> 
            <input type="radio"  name="btnradio4" id="btnradio5" @click="choice3(0)">
            <label class="btn" for="btnradio5">NON</label>

            <input type="radio"  name="btnradio4" id="btnradio6" @click="choice3(1)">
            <label class="btn" for="btnradio6">OUI</label>

          <!-- fourth choice -->
          <p class="description">Pharyngite</p>
            <input type="radio"  name="btnradio5" id="btnradio7" @click="choice4(0)">
            <label class="btn" for="btnradio7">NON</label>

            <input type="radio"  name="btnradio5" id="btnradio8" @click="choice4(1)">
            <label class="btn" for="btnradio8">OUI</label>

          <!-- fifth choice -->
          <p class="description">Polynucléaires neutrophiles ≥ 80%</p>
            <input type="radio"  name="btnradio6" id="btnradio9" @click="choice5(0)">
            <label class="btn" for="btnradio9">NON</label>

            <input type="radio"  name="btnradio6" id="btnradio10" @click="choice5(1)">
            <label class="btn" for="btnradio10">OUI</label>

          <!-- sixth choice -->
          <p class="description">Ferritine glycosylée ≤ 20%</p> 
            <input type="radio"  name="btnradio7" id="btnradio11"  @click="choice6(0)">
            <label class="btn" for="btnradio11">NON</label>

            <input type="radio"  name="btnradio7" id="btnradio12" @click="choice6(1)">
            <label class="btn" for="btnradio12">OUI</label>

        <h4 class="categorie">Critères mineurs :</h4>

          <!-- seventh choice -->
          <p class="description">Rash maculo-papuleux</p>

            <input type="radio"  name="btnradio8" id="btnradio13" @click="choice7(0)">
            <label class="btn" for="btnradio13">NON</label>

            <input type="radio"  name="btnradio8" id="btnradio14" @click="choice7(1)">
            <label class="btn" for="btnradio14">OUI</label>

          <!-- eighth choice -->
          <p class="description">Leucocytes ≥ 10 000 mm3 </p>

            <input type="radio"  name="btnradio9" id="btnradio15"  @click="choice8(0)">
            <label class="btn" for="btnradio15">NON</label>

            <input type="radio" name="btnradio9" id="btnradio16"  @click="choice8(1)">
            <label class="btn" for="btnradio16">OUI</label>
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

<style>
.description{
  font-size: 25px;
}
.categorie{
  font-size: 30px;
}

h2{
  font-size: 40px;
} 
.result{
  background-color: rgb(224, 222, 222);
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  justify-content: center;
  align-content: space-around;
  align-items: flex-start;
  text-align: center;
  padding-bottom: 3px;
  padding-top: 3px;
  margin: 35px;
  font-size: 30px;
}

.validate{
  background-color: rgb(72, 179, 86); 
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 5px;
  justify-content: center;
  align-content: space-around;
  align-items: flex-start;
  height: 50px;
  border-radius: 8px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  color: rgb(49, 49, 49);
}

input{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

label:hover,
label:focus {
  color: grey;
}

label:active {
  background-color: white;
  color: black;
  outline: 1px solid black;
}

[type="radio"]:checked + label {
  background-color:violet;
}
</style>

