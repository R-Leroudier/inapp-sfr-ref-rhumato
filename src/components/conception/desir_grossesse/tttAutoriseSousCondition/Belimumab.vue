<template lang="html">
  <section class="Belimumab">
    <h2>Belimumab</h2>

    <p>Grossesse :</p>
    <ul>
      <li>Arrêter à la conception</li>
      <li>A éviter pendant toute la durée de la grossesse sauf si absence d’autre alternative</li>
    </ul>

    <p>Allaitement :</p>
    <ul>
      <li>A éviter pendant l’allaitement mais possible en l’absence d’alternative (haut poids moléculaire)</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Belimumab',
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
    .Belimumab {
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
