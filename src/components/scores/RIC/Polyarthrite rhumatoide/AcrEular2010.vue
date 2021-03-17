<template>
  <div>
    <h2 class="title">Polyarthrite rhumatoïde, critères ACR/EULAR</h2>
    <p class="description">
      Critères diagnostics devant une polyarthrite débutante avec des
      radiographies normales et en l'absence d'un diagnostic d'une autre
      maladie.
    </p>
    <span class="line">------</span>
    <form class="form">
      <h4 class="categorie">Atteintes articulaires</h4>
      <ul class="details">
        On différencie les grosses et petites articulations :
        <li>Grosses articulations : épaule, coude, hanche, genou, cheville.</li>
        <li>Petites articulations : toutes autres articulations des membres</li>
      </ul>
      <button type="button" @click="choice1(0)" class="btn">
        1 grosse articulation.
      </button>
      <button type="button" @click="choice1(1)" class="btn">
        2 à 10 grosses articulations.
      </button>
      <button type="button" @click="choice1(2)" class="btn">
        1 à 3 petites articulations (grosses articulations non comptées).
      </button>
      <button type="button" @click="choice1(3)" class="btn">
        4 à 10 petites articulations (grosses articulations non comptées).
      </button>
      <button type="button" @click="choice1(4)" class="btn">
        Plus de 10 articulations (dont au moins une petite articulation).
      </button>

      <h5 class="categorie">Sérologie</h5>
      <ul class="details">
        Notes :
        <li>FR = Facteur rhumatoïde.</li>
        <li>ACPA = Anticorps anti-peptides/protéines citrulliné(e)s.</li>
      </ul>
      <button type="button" @click="choice2(0)" class="btn">
        FR et ACPA négatifs.
      </button>
      <button type="button" @click="choice2(2)" class="btn validate">
        FR ou ACPA faiblement positif <span>(> normale et ≤ 3 x normale).</span>
      </button>
      <button type="button" @click="choice2(3)" class="btn cancel">
        FR ou ACPA fortement positif <span>(> 3 x normale).</span>
      </button>

      <h6 class="categorie">Durée de la synovite</h6>

      <button type="button" @click="choice3(0)" class="btn">
        Durée &#8249; 6 semaines.
      </button>
      <button type="button" @click="choice3(1)" class="btn">
        Durée ≥ 6 semaines.
      </button>

      <h7 class="categorie">Marqueurs de l'inflammation</h7>

      <button type="button" @click="choice4(0)" class="btn">
        VS et CRP normales.
      </button>
      <button type="button" @click="choice4(1)" class="btn">
        VS et CRP anormales.
      </button>
      <card class="result">score {{ calcTotal() }} </card>
    </form>
    <span class="line">------</span>
    <span>
      Interprétation : Les critères ACR/EULAR donnent la possibilité de
      diagnostiquer précocement une polyarthrite rhumatoïde. Un score à 6 ou
      plus pose le diagnostic de polyarthrite rhumatoïde.
    </span>
    <span>
      Références : Funovits J, Aletaha D, Bykerk V, Combe B, Dougados M, Emery
      P, et al. The American College of Rheumatology/European League Against
      Rheumatism classification criteria for rheumatoid arthritis:
      methodological report Phase 1. Ann Rheum Dis 2010; 69: 1589–95.
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  mounted() {},
  data() {
    return {
      score1: 0,
      score2: 0,
      score3: 0,
      score4: 0,
    };
  },
  methods: {
    choice1(number) {
      this.score1 = number;
    },
    choice2(number) {
      this.score2 = number;
    },
    choice3(number) {
      this.score3 = number;
    },
    choice4(number) {
      this.score4 = number;
    },
    calcTotal() {
      return this.score1 + this.score2 + this.score3 + this.score4;
    },
  },
});
</script>



<style></style>