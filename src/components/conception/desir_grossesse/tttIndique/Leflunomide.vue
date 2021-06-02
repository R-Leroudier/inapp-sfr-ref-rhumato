<template lang="html">
    <section class="Leflunomide">
      <h2>Leflunomide</h2>

      <p>Grossesse :</p>
      <ul>
        <li>
          Arrêter avant la grossesse + <span class="bold">wash-out</span> (½-vie longue) :
          <ul>
            <li>Cholestyramine 8g 3 fois par jour</li>
            <li><span class="bold">OU</span> charbon activé 50g 4 fois par jour</li>
            <li>Pendant 11 jours (pour les 2)</li>
          </ul>
        </li>
        <li>Contre-indication pendant toute la durée de la grossesse</li>
      </ul>

      <p>Allaitement :</p>
      <ul>
        <li>Contre-indication pendant l’allaitement</li>
      </ul>

      <p>Découverte d’une grossesse sous Méthotrexate:</p>
      <ul>
        <li><span class="bold">ARRÊT</span> du traitement dès que possible</li>
        <li>Rassurer la patiente quant au risque malformatif</li>
        <li>Accélération de l’élimination du traitement par wash-out (cholestyramine ou charbon activé)</li>
        <li>Dépistage prénatal des malformations si exposition au T1</li>
      </ul>
    </section>
</template>

<script lang="js">
    export default {
        name: 'Leflunomide',
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
    .Leflunomide {
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
