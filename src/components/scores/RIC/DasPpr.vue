<template>
  <div class="DasPpr">
    <h2 class="title">Calcul du score ‘DAS-PPR’</h2>
    <p class="description"></p>
    <span class="line"></span>

    <form class="form">
      <div>
        <label for="crp_id"> CRP : </label>
        <input v-model="crp" id="crp_id" type="number" /> ml/l
      </div>
      <div>
        <label for="duration_stiffness_id"
          >Durée de la raideur matinale :
        </label>
        <input
          v-model="duration_stiffness"
          id="duration_stiffness_id"
          type="number"
        />
        minutes
      </div>
      <div>
        <label for="patient_judgment"
          >Jugement du patient sur l’activité de sa PPR :
        </label>
        <select v-model="patient_judgment" id="patient_judgment_id" type="text">
          <option value="0" :key="0">{{ 0 }}</option>
          <option v-for="n in 10" :value="n" :key="n">{{ n }}</option>
        </select>
      </div>
      <div>
        <label for="doctor_judgment_id"
          >Jugement du médecin sur l’activité de la PPR :
        </label>
        <select v-model="doctor_judgment" id="doctor_judgment_id" type="text">
          <option value="0" :key="0">{{ 0 }}</option>
          <option v-for="t in 10" :value="t" :key="t">{{ t }}</option>
        </select>
      </div>

      <ul>
        Capacité à lever les bras:
        <li>
          <input
            v-model="arms_up"
            type="radio"
            id="radio4"
            name="arms_up_radio"
            value="3"
          />
          <label for="radio1">impossible</label>
        </li>
        <li>
          <input
            v-model="arms_up"
            type="radio"
            id="radio3"
            name="arms_up_radio"
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
            name="arms_up_radio"
            value="1"
          />
          <label for="radio2">au niveau de la ceinture scapulaire (90°)</label>
        </li>
        <li>
          <input
            v-model="arms_up"
            type="radio"
            id="radio1"
            name="arms_up_radio"
            value="0"
          />
          <label for="radio4">bien au dessus des épaules (&rsaquo; 90°) </label>
        </li>
      </ul>
      <input type="submit" @click="getResult()" value="Valider" />
    </form>
    <card class="result">
      <p>{{ this.result }}</p>
    </card>
    <span class="line"></span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  mounted() {},
  data() {
    return {
      crp: 0,
      duration_stiffness: 0,
      patient_judgment: 0,
      doctor_judgment: 0,
      arms_up: 0,
      score: 0,
      result: "",
    };
  },
  methods: {
    getResult() {
      // a revoir la condtion

      if (this.patient_judgment)
        this.score = this.score + this.patient_judgment;
      if (this.doctor_judgment)
        this.score =
          this.crp / 10 +
          this.duration_stiffness / 10 +
          this.patient_judgment +
          this.doctor_judgment +
          this.arms_up;
      if (this.score >= 7 && this.scrore <= 17) this.result = "Activité modéré";
      else if (this.score > 17) this.result = "Activité forte";
      else this.result = "Activité faible";
      return this.result;
    },
  },
});
</script>



<style scoped lang="scss">
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
