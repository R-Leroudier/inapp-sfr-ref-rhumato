<template>
    <div class="Sdai">
        <h2 class="title">polyarthrite rhumatoïde - SDAI</h2>
        <p class="description">Le SDAI ou Simplified Disease Activity Index est inspiré de la famille de scores « DAS » pour la polyarthrite rhumatoïde, comprenant DAS28 et DAS28-CRP. Il est très utiles pour réaliser une évaluation objective, reproductible et comparable de l'activité de la polyarthrite rhumatoïde.</p>
        <p class="line"></p>

        <form class="form">
          <div>
            <label for="tenderJoins">Nombre d'articulations douloureuses (sur 28)</label>
            <input v-model="tenderJoins" type="number" id="tenderJoins" name="tenderJoins" min="0" max="28">
          </div>

          <div>
            <label for="swollenJoins">Nombre d'articulations enflées (sur 28)</label>
            <input v-model="swollenJoins" type="number" id="swollenJoins" name="swollenJoins" min="0" max="28">
          </div>

          <div>
            <label for="patientEvaluation">Évaluation globale par le patient de l'activité de la maladie (sur 10)</label>
            <input v-model="patientEvaluation" type="number" id="patientEvaluation" name="patientEvaluation" min="0" max="10">
          </div>

          <div>
            <label for="medicEvaluation">Évaluation globale par le l'équipe soignante de l'activité de la maladie (sur 10)</label>
            <input v-model="medicEvaluation" type="number" id="medicEvaluation" name="medicEvaluation" min="0" max="10">
          </div>
        </form>

        <form class="form">
            <p>CRP en :</p>
            <label for="crpTypeL">mg/L</label>
            <input type="radio" id="crpTypeL" value="l" v-model="crpType">

            <label for="crpTypeDl">mg/dL</label>
            <input type="radio" id="crpTypeDl" value="dl" v-model="crpType">

            <div>
              <label for="crpL" v-if="crpType === 'l'">CRP en mg/L</label>
              <input v-model="crpL" type="number" id="crpL" name="crpL" min="0" v-if="crpType === 'l'">
            </div>

            <div>
              <label for="crpDl" v-if="crpType === 'dl'">CRP en mg/dL</label>
              <input v-model="crpDl" type="number" id="crpDl" name="crpDl" min="0" v-if="crpType === 'dl'">
            </div>
        </form>

        <card class="result" v-if="calcTotal() <= 3.3">Rémission : {{ calcTotal() }} </card>
        <card class="result" v-if="3.3 < calcTotal() && calcTotal() <= 11">Activité faible : {{ calcTotal() }} </card>
        <card class="result" v-if="11 < calcTotal() && calcTotal() <= 26">Activité modérée : {{ calcTotal() }} </card>
        <card class="result" v-if="26 < calcTotal()">Activité forte : {{ calcTotal() }} </card>

      <span class="line"></span>
      <div class="info">
        <span>L'interprétation de ce score compris entre 0 et 76 ne dépend pas de son évolution au cours du temps. Généralement, on considère qu'il y a rémission si le score est compris entre 0 et 3,3 inclus. Une activité faible est indiquée par un score > 3,3 jusqu'à 11 inclus. Une activité modérée est indiquée par un score compris entre > 11 et 26 inclus, tandis qu'une activité élevée est indiquée par un score strictement supérieur à 26.</span>
      </div>
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
      crpType: 'l',
      crpL: 0,
      crpDl: 0,
    };
  },
  methods: {
    calcTotal() {
      if (this.crpType === 'l') {
        return parseInt(this.tenderJoins) + parseInt(this.swollenJoins) + parseInt(this.patientEvaluation) + parseInt(this.medicEvaluation) + (parseFloat(this.crpL)/10);
      } else if (this.crpType === 'dl') {
        return parseInt(this.tenderJoins) + parseInt(this.swollenJoins) + parseInt(this.patientEvaluation) + parseInt(this.medicEvaluation) + parseFloat(this.crpDl);
      } else {
          return 0;
      }
    },
  },
});
</script>

<style scoped lang="scss">
@import "src/sass/global";

.Sdai{
  .info {
    font-style: italic;
    font-size: x-small;
  }

  input {
    width: 60px;
  }

  form {
    div {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;

      label {
        width: 70%;
      }
    }
  }
}
</style>
