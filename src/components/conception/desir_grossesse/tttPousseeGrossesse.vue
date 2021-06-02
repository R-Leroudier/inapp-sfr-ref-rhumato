<template lang="html">
  <section class="tttPousseeGrossesse">
    <h2>Traitement d’une poussée au cours de la grossesse</h2>

    <p>Arthrite / signes d’activité articulaire :</p>
    <ul>
      <li>éInfiltrations intra-articulaires</li>
      <li>AINS : pas après 32 SA !!!</li>
      <li>Colchicine</li>
      <li>Corticothérapie : < 20 mg par jour</li>
    </ul>

    <p>Douleurs :</p>
    <ul>
      <li>Paracétamol pendant toute la durée de la grossesse</li>
    </ul>

    <p>Poussée systémique :</p>
    <ul>
      <li>Corticothérapie : < 20 mg par jour</li>
      <li>Bolus de méthylprednisolone : traitement le plus court possible</li>
      <li>Hydroxychloroquine</li>
      <li>Azathioprine</li>
      <li>Ciclosporine : surveillance de la TA</li>
      <li>Sulfasalazine : supplémentation en folates</li>
      <li>Tacrolimus : surrisque d’infection CMV</li>
      <li>Ig IV</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'tttPousseeGrossesse',
        props: [],
        mounted() {},
        data() {
            return {};
        },
        methods: {},
        computed: {}
    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .tttPousseeGrossesse {
      padding: 0 15px;
      text-align: left;

      h2 {
        text-align: center;
      }

      .bold {
        font-weight: bold;
      }
    }
</style>
