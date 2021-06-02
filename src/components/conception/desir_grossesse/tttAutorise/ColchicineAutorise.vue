<template lang="html">
  <section class="Colchicine">
    <h2>Colchicine</h2>

    <p>Grossesse : </p>
    <ul>
      <li>Possible pendant toute la durée de la grossesse</li>
    </ul>

    <p>Allaitement :</p>
    <ul>
      <li>
        Possible pendant l’allaitement
        <ul>
          <li>En cas de diarrhée chez l’enfant : reconsidérer l’allaitement ou le traitement</li>
          <li>Attention à la prescription de macrolides chez le nourrisson !</li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Colchicine',
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
    .Colchicine {
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
