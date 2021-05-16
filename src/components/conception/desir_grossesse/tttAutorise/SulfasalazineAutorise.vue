<template lang="html">
  <section class="Sulfasalazine">
    <h2>Sulfasalazine</h2>

    <p>Grossesse :</p>
    <ul>
      <li>Possible pendant toute la durée de la grossesse</li>
      <li>Supplémentation en acide folique</li>
    </ul>

    <p>Allaitement :</p>
    <ul>
      <li>
        Possible pendant l’allaitement sauf si
        <ul>
          <li>Prématurité</li>
          <li>Déficit en G6PD</li>
          <li>Hyperbilirubinémie</li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Sulfasalazine',
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
    .Sulfasalazine {
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
