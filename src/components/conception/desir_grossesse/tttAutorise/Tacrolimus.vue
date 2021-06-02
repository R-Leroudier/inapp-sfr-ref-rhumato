<template lang="html">
  <section class="Tacrolimus">
    <h2>Tacrolimus</h2>

    <p>Grossesse: </p>
    <ul>
      <li>Possible pendant toute la durée de la grossesse</li>
      <li>
        Attention !
        <ul>
          <li>Surveillance de la pression artérielle</li>
          <li>Risque accru d’infection materno-fœtale, <span class="bold">CMV</span> surtout</li>
          <li>Baisse possible des concentrations plasmatiques au cours de la grossesse</li>
        </ul>
      </li>

    </ul>

    <p>Allaitement:</p>
    <ul>
      <li>Possible pendant l’allaitement</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Tacrolimus',
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
    .Tacrolimus {
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
