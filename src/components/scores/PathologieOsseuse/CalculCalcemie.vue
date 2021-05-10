<template lang="html">
    <section class="CalculCalcemie">
      <h2>CALCUL DE LA CALCEMIE CORRIGEE</h2>
      <span class="line"></span>

      <div>
        <label for="calcemie">Calcémie (mmol/L):</label>
        <input type="number" id="calcemie" v-model="calcemie" @change="calcul">
      </div>

      <div>
        <label for="albuminemie">Albuminémie (g/L):</label>
        <input type="number" id="albuminemie" v-model="albuminemie" @change="calcul">
      </div>

      <div class="result">
        <h4>Résultat: {{ result }}</h4>
      </div>
    </section>
</template>

<script lang="js">
    export default {
        name: 'CalculCalcemie',
        props: [],
        mounted() {},
        data() {
            return {
              calcemie: 0,
              albuminemie: 0,
              result: 0,
            };
        },
        methods: {
          calcul() {
            this.result = parseInt(this.calcemie) - 0.025 * (parseInt(this.albuminemie) - 40)
          }
        },
        computed: {}
    }
</script>

<style scoped lang="scss">
@import "src/sass/global";

.CalculCalcemie {
  [type="number"] {
    width: 60px;
  }

  div {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    line-height: 40px;
  }
}
</style>
