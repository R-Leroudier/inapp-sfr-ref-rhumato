<template>
  <div>
    <h2 class="title">disease activity score PPR</h2>
    <p class="description"></p>
    <span class="line">------</span>
    <card class="information">
      Chez un patient présentant une rachialgie ≥ 3 mois dont l'âge du
      diagnostic est &lsaquo; 45 ans alors on peut classer sa maladie dans la
      forme spondylarthrite axiale
    </card>

    <form class="form">
      <label for="weight"> CRP (divisée par 10) : </label>
      <input v-model="weight" id="weight" type="text" />
      <label for="size">Durée de la raideur matinale divisée par 10 : </label>
      <input v-model="size" id="size" type="text" />
      <label for="size"
        >Jugement du patient sur l’activité de sa PPR (0 à 10)
      </label>
      <input v-model="size" id="size" type="text" />
      <label for="size"
        >Jugement du médecin sur l’activité de la PPR (0 à 10)</label
      >
      <input v-model="size" id="size" type="text" />
      <ul>
        Capacité à lever les bras:
        <li>
          <input
            v-model="arms_up"
            type="radio"
            id="radio4"
            name="drone"
            value="3"
          />
          <label for="radio1">impossible</label>
        </li>
        <li>
          <input
            v-model="arms_up"
            type="radio"
            id="radio3"
            name="drone"
            value="2"
          />
          <label for="radio2"
            >en dessous ceinture scapulaire (&lsaquo; 90°)
          </label>
        </li>
        <li>
          <input
            type="radio"
            v-model="arms_up"
            id="radio2"
            name="drone"
            value="1"
          />
          <label for="radio2">au niveau de la ceinture scapulaire (90°)</label>
        </li>
        <li>
          <input
            v-model="arms_up"
            type="radio"
            id="radio1"
            name="drone"
            value="0"
          />
          <label for="radio4">bien au dessus des épaules (&rsaquo; 90°) </label>
        </li>
      </ul>
      <input type="submit" @click="getScore()" value="Valider" />
    </form>
    <card class="result">
      <p>{{ this.result }}</p>
    </card>
    <span class="line">------</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  mounted() {},
  data() {
    return {
      crp: null,
      duration_stiffness: null,
      Patient_judgment: null,
      Patient_doctor: null,
      arms_up: null,
      score: 0,
    };
  },
  methods: {
    getResult() {
      // a revoir la condtion
      if (this.crp == 30) {
        this.score = this.score + 3;
      }
      if (this.duration_stiffness >= 60) {
        this.score = this.score + 6;
      }
    },
  },
});
</script>



<style></style>