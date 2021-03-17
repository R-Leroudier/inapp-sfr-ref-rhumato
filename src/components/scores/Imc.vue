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
      <label for="weight"> poid</label>
      <input id="weight" type="text" />
      <label for="size">taille</label>
      <input id="size" type="text" />
      <label for="size">Date</label>
      <input id="size" type="date" />
      <input type="submit" value="Ajouter" />
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
      point: {
        weight: null,
        size: null,
        date: null,
        imc: null,
        detail: null,
      },
      points: [],
    };
  },
  methods: {
    getDetail() {},
    addPoint() {},
    getImc(weight, size) {
      return weight / (size * size);
    },
    deletePoint() {},
    getPoints() {},
  },
});
</script>



<style></style>