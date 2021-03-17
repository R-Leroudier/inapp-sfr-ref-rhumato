<template>
  <div style="display: flex; flex-direction: column; margin-top: 10px">
    <h3>Score Basdai</h3>
    <span
      >Pour chaque item, indiquez une valeur de 0 (absent) à 10 (extrême)
      concernant votre ressenti.</span
    >
    <div>
      <span>1. Où situez-vous votre degré global de fatigue ? </span>
      <span> Réponse :</span>
      <input class="inputNumber" type="number" min="0" max="10" size="6" />
      <label for="">(0=absent, 10=extrême)</label>
    </div>
    <div>
      <span
        >2. Où situez-vous votre degré global de douleur au niveau du cou, du
        dos et des hanches dans le cadre de votre spondylarthrite ankylosante ?
      </span>
      <span> Réponse :</span>
      <input type="number" min="0" max="10" />
      <label for="">(0=absent, 10=extrême)</label>
    </div>
    <div>
      <span
        >3. Où situez-vous votre degré de gonflement articulaire en dehors du
        cou, du dos et des hanches ?
      </span>
      <span> Réponse :</span>
      <input type="number" min="0" max="10" />
      <label for="">(0=absent, 10=extrême)</label>
    </div>
    <div>
      <span
        >4. Où situez-vous votre degré de gêne pour les zones sensibles au
        toucher ou à la pression ?
      </span>
      <span> Réponse :</span>
      <input type="number" min="0" max="10" />
      <label for="">(0=absent, 10=extrême)</label>
    </div>
    <div>
      <span
        >5. Où situez-vous votre degré de raideur matinale depuis votre réveil ?
      </span>
      <span> Réponse :</span>
      <input type="number" min="0" max="10" />
      <label for="">(0=absent, 10=extrême)</label>
    </div>
    <span>1. Où situez-vous votre degré global de fatigue ? </span>
    <span> Réponse :</span>
    <input type="number" min="0" max="10" />
    <label for="">(0=absent, 10=extrême)</label>
  </div>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Basdai",
  data() {
    return {
      result: null,
    };
  },
  mounted() {},
});
</script>

<style lang="scss">
.inputNumber {
  width: 30px;
}
</style>
