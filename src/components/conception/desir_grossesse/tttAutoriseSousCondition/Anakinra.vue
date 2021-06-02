<template lang="html">
  <section class="Anakinra">
    <h2>Anakinra</h2>

    <p>Grossesse :</p>
    <ul>
      <li>Arrêter à la conception</li>
      <li>A éviter pendant toute la durée de la grossesse sauf si absence d’autre alternative</li>
    </ul>

    <p>Allaitement :</p>
    <ul>
      <li>A éviter pendant l’allaitement mais possible en l’absence d’alternative (haut poids moléculaire)</li>
    </ul>

    <p>En cas de grossesse sous anakinra :</p>
    <ul>
      <li>Rassurer la patiente sur le risque malformatif</li>
      <li>Risque accru d’infection materno-fœtale</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Anakinra',
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
    .Anakinra {
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
