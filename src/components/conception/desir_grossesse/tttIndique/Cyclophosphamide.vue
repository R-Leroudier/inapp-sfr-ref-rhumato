<template lang="html">
  <section class="Cyclophosphamide">
    <h2>Cyclophosphamide </h2>

    <p>Grossesse :</p>
    <ul>
      <li class="bold">TERATOGENE</li>
      <li>Arrêter avant la grossesse</li>
      <li>Contre-indication pendant toute la durée de la grossesse sauf dans les formes graves réfractaires 🡪 à discuter au T2 et/ou T3</li>

    </ul>

    <p>Allaitement :</p>
    <ul>
      <li>Contre-indication pendant l’allaitement</li>
    </ul>

    <p>Découverte d’une grossesse sous cyclophosphamide :</p>
    <ul>
      <li><span class="bold">ARRÊT</span> du traitement dès que possible</li>
      <li>Évaluation personnalisée du risque</li>
      <li>Dépistage prénatal des malformations si grossesse maintenue</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Cyclophosphamide',
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
    .Cyclophosphamide {
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
