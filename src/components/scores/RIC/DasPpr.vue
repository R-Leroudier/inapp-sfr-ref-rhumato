<template>
  <div class="DasPpr">
    <h2 class="title">Calcul du score ‘DAS-PPR’</h2>
    <p class="description"></p>
    <span class="line"></span>

    <form class="form">
      <div>
        <label for="crp_id"> CRP : </label>
        <input v-model="crp" id="crp_id" type="number" required /> ml/l
      </div>
      <div>
        <label for="duration_stiffness_id"
          >Durée de la raideur matinale :
        </label>
        <input
          v-model="duration_stiffness"
          id="duration_stiffness_id"
          type="number"
          required
        />
        minutes
      </div>
      <div>
        <label for="patient_judgment_id"
          >Jugement du patient sur l’activité de sa PPR :
        </label>
        <select v-model="patient_judgment" id="patient_judgment_id" type="text" required>
          <option value="0" :key="0">{{ 0 }}</option>
          <option v-for="n in 10" :value="n" :key="n">{{ n }}</option>
        </select>
      </div>
      <div>
        <label for="doctor_judgment_id"
          >Jugement du médecin sur l’activité de la PPR :
        </label>
        <select v-model="doctor_judgment" id="doctor_judgment_id" type="text" required>
          <option value="0" :key="0">{{ 0 }}</option>
          <option v-for="t in 10" :value="t" :key="t">{{ t }}</option>
        </select>
      </div>

        Capacité à lever les bras:
          <input
            v-model="arms_up"
            type="radio"
            id="radio1"
            name="arms_up_radio"
            value="3"
            style="display: none"
          />
          <label for="radio1" class="btn" :class="{selected: arms_up === '3'}">impossible</label>


          <input
            v-model="arms_up"
            type="radio"
            id="radio2"
            name="arms_up_radio"
            value="2"
            style="display: none"

          />
      <label for="radio2" class="btn" :class="{selected: arms_up === '2'}">en dessous ceinture scapulaire (&lsaquo; 90°)</label>



      <input
            type="radio"
            v-model="arms_up"
            id="radio3"
            name="arms_up_radio"
            value="1"
            style="display: none"

      />
      <label for="radio3" class="btn" :class="{selected: arms_up === '1'}">au niveau de la ceinture scapulaire (90°)</label>



      <input
            v-model="arms_up"
            type="radio"
            id="radio4"
            name="arms_up_radio"
            value="0"
            style="display: none"

      />
      <label for="radio4" class="btn" :class="{selected: arms_up === '0'}">bien au dessus des épaules (&rsaquo; 90°) </label>


      <div class="btn" @click="getResult()">Valider</div>
    </form>
    <div v-if="score" class="result">
      <p>SCORE: {{this.score}}.<br>INTERPRETATION : {{ this.result }}</p>
    </div>
    <div v-if="error" class="result">
      <p>{{ this.error }}</p>
    </div>
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
      patient_judgment: null,
      doctor_judgment: null,
      arms_up: null,
      score: null,
      result: null,
      error: null
    };
  },
  methods: {
    getResult() {
      if (this.crp && this.duration_stiffness && this.doctor_judgment && this.patient_judgment && this.arms_up) {
        this.error = null
        this.score =
          parseInt(this.crp) / 10 +
          parseInt(this.duration_stiffness) / 10 +
          this.patient_judgment +
          this.doctor_judgment +
          parseInt(this.arms_up);
        if (this.score >= 7 && this.scrore <= 17) this.result = "Activité modéré";
        else if (this.score > 17) this.result = "Activité forte";
        else this.result = "Activité faible";
        return this.result;
      } else {
        this.error = "Remplissez tous les champs pour valider le calcul"
      }
    },
  },
});
</script>



<style scoped lang="scss">
@import "src/sass/global.scss";
@import "src/sass/global";

.DasPpr {
  [type="number"] {
    width: 60px;
  }

  form {
    div {
      margin: 10px 0;
    }
  }
}
</style>
