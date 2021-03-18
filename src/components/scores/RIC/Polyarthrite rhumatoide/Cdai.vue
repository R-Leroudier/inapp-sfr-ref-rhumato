<template>
    <div>
        <h2 class="title">polyarthrite rhumatoïde - CDAI</h2>
        <p class="description">Le CDAI ou Clinical Disease Activity Index est inspiré de la famille de scores « DAS » pour la polyarthrite rhumatoïde, comprenant DAS28 et DAS28-CRP. Il est très utiles pour réaliser une évaluation objective, reproductible et comparable de l'activité de la polyarthrite rhumatoïde.</p>
        <p class="line">------</p>

        <form class="form">
            <p class ="details">Les scores des 28 articulations douloureuses ou enflées visent les mêmes articulations (épaules, coudes, poignets, articulations métacarpo-phalangiennes, articulations interphalangiennes proximales et les genoux).</p>

            <label for="tenderJoins">Nombre d'articulations douloureuses (sur 28)</label>
            <input v-model="tenderJoins" type="number" id="tenderJoins" name="tenderJoins" min="0" max="28">

            <label for="swollenJoins">Nombre d'articulations enflées (sur 28)</label>
            <input v-model="swollenJoins" type="number" id="swollenJoins" name="swollenJoins" min="0" max="28">

            <label for="patientEvaluation">Évaluation globale par le patient de l'activité de la maladie (sur 10)</label>
            <input v-model="patientEvaluation" type="number" id="patientEvaluation" name="patientEvaluation" min="0" max="10">

            <label for="medicEvaluation">Évaluation globale par le l'équipe soignante de l'activité de la maladie (sur 10)</label>
            <input v-model="medicEvaluation" type="number" id="medicEvaluation" name="medicEvaluation" min="0" max="10">
        </form>

        <card class="result" v-if="calcTotal() <= 2.8">Rémission : {{ calcTotal() }} </card>
        <card class="result" v-if="2.8 < calcTotal() && calcTotal() <= 10">Activité faible : {{ calcTotal() }} </card>
        <card class="result" v-if="10 < calcTotal() && calcTotal() <= 22">Activité modérée : {{ calcTotal() }} </card>
        <card class="result" v-if="22 < calcTotal()">Activité forte : {{ calcTotal() }} </card>

        <p>L'interprétation de ce score compris entre 0 et 76 ne dépend pas de son évolution au cours du temps. Généralement, on considère qu'il y a rémission si le score est compris entre 0 et 2,8 inclus. Une activité faible est indiquée par un score > 2,8 jusqu'à 10 inclus. Une activité modérée est indiquée par un score compris entre > 10 et 22 inclus, tandis qu'une activité élevée est indiquée par un score strictement supérieur à 22.</p>
    </div>

</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  mounted() {},
  data() {
    return {
      tenderJoins: 0,
      swollenJoins: 0,
      patientEvaluation: 0,
      medicEvaluation: 0,
    };
  },
  methods: {
    calcTotal() {
      return (
       parseInt(this.tenderJoins) + parseInt(this.swollenJoins) + parseInt(this.patientEvaluation) + parseInt(this.medicEvaluation)
      );
    },
  },
});
</script>

<style></style>
