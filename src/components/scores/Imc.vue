<template>
  <div>
    <h2 class="title">Calcul de l'IMC femme et homme</h2>
    <p class="description"></p>
    <span class="line">------</span>
    <card class="information">
      Chez un patient présentant une rachialgie ≥ 3 mois dont l'âge du
      diagnostic est &lsaquo; 45 ans alors on peut classer sa maladie dans la
      forme spondylarthrite axiale
    </card>

    <form class="form">
      <label for="weight"> Poid : </label>
      <input v-model="weight" id="weight" type="text" />
      <label for="size">Taille : </label>
      <input v-model="size" id="size" type="text" />
      <input type="submit" @click="getResult()" value="Valider" />
    </form>
    <card class="result">
      <p>{{ this.result }}</p>
    </card>
    <span class="line">------</span>
    <span>
      Bon a savoir L'IMC permet de determiner la corpulence d'une personne. La
      même formule est utilisée pour le calcul de l'IMC de la femme et de
      l'homme. L'Organisation Mondiale de la Santé (OMS) a défini cet Indice de
      Masse Corporelle comme le standard pour évaluer les risques liés au
      surpoids.
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  mounted() {},
  data() {
    return {
      weight: null,
      size: null,
      imc: null,
      detail: null,
      result: null,
    };
  },
  methods: {
    getDetail(imc) {
      if (imc < 16.5) {
        return "Famine";
      }
      if (imc >= 16.5 && imc < 18.5) {
        return "maigreur";
      }
      if (imc >= 18.5 && imc <= 25) {
        return "corpulence normale";
      }
      if (imc > 25 && imc <= 30) {
        return "surpoids";
      }
      if (imc > 30 && imc <= 35) {
        return "Obésité modérée";
      }
      if (imc > 35 && imc <= 40) {
        return "Obésité sévère";
      }
      if (imc > 40) {
        return "Obésité morbide";
      }
    },
    getImc(weight, size) {
      return this.arround(weight / (size * size));
    },
    arround(nombre) {
      return Math.round(100 * nombre) / 100;
    },
    getResult() {
      this.result =
        "IMC : " +
        this.getImc(this.weight, this.size) +
        " Détails : " +
        this.getDetail(this.getImc(this.weight, this.size));
    },
  },
});
</script>



<style></style>