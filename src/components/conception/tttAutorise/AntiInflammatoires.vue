<template lang="html">
  <section class="AntiInflammatoires">
    <h2>ANTI-INFLAMMATOIRES</h2>

    <p>Grossesse :</p>
    <ul>
      <li>Possible pendant les 2 premiers trimestres de la grossesse</li>
      <li><span class="bold">SAUF pour les inhibiteurs sélectifs de COX2 non autorisés</span> (peu de données)</li>
    </ul>

    <p>Allaitement :</p>
    <ul>
      <li>Possibles pendant l’allaitement <span class="bold">SAUF les inhibiteurs sélectifs de COX2</span></li>
      <li>Préférer les AINS de courte ½-vie</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'AntiInflammatoires',
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
    .AntiInflammatoires {
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
