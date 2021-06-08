<template>
  <div class="Imc">
    <h2 class="title">Calcul de l'IMC femme et homme</h2>
    <p class="description"></p>
    <span class="line"></span>
    <div class="information">
      Chez un patient présentant une rachialgie ≥ 3 mois dont l'âge du
      diagnostic est &lsaquo; 45 ans alors on peut classer sa maladie dans la
      forme spondylarthrite axiale
    </div>

    <form class="form">
      <div>
        <label for="weight"> Poids (kg) : </label>
        <input v-model="weight" id="weight" type="number" />
      </div>

      <div>
        <label for="size">Taille (cm) : </label>
        <input v-model="size" id="size" type="number" />
      </div>
      <div @click="getResult()" class="btn">Calculer</div>
    </form>
    <div class="result">
      <h4>{{ this.result }}</h4>
    </div>
    <span class="line"></span>
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
      weight: 0,
      size: 0,
      imc: 0,
      detail: "",
      result: "",
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
      let sizeMeter = parseInt(size) / 100;
      return this.arround(parseInt(weight) / (sizeMeter * sizeMeter));
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



<style scoped lang="scss">
@import "src/sass/global.scss";
.Imc {
  div {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    line-height: 40px;
    margin-top: 12px;
  }
}
</style>
