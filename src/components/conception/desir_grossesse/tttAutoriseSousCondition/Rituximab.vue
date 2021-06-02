<template lang="html">
  <section class="Rituximab">
    <h2>Rituximab</h2>

    <p>Grossesse :</p>
    <ul>
      <li>Arrêter à la conception</li>
      <li>A éviter pendant toute la durée de la grossesse sauf si absence d’autre alternative</li>
    </ul>

    <p>Allaitement :</p>
    <ul>
      <li>Possible pendant l’allaitement</li>
    </ul>

    <p>En cas de grossesse sous rituximab :</p>
    <ul>
      <li>Rassurer la patiente sur le risque malformatif</li>
      <li>Dernière injection à 25 SA</li>
      <li>Surveillance obstétricale, surrisque d’infection materno-fœtale</li>
      <li>Nouveau-né considéré immunodéprimé <span class="bold">pendant 4 à 6 mois après la dernière injection</span> (vaccins vivants !)</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Rituximab',
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
    .Rituximab {
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
