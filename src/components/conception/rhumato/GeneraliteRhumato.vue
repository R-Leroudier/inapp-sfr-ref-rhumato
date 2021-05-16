<template lang="html">
  <section class="GeneraliteRhumato">
    <h2>Généralités</h2>

    <p>
      L’AJI désigne l’ensemble des atteintes inflammatoires articulaires sans cause reconnue, débutant avant l'âge de 16 ans évoluant depuis plus de 6 semaines.
      <br>
      Les principaux diagnostics différentiels :
    </p>
    <ul>
      <li>Une manifestation articulaire en lien avec un agent infectieux : rhumatisme articulaire aigu, arthrite post-streptococcique, borréliose de Lyme, rickettsioses, mycobactéries, brucellose, salmonellose, maladie des griffes du chat, infections virales.</li>
      <li>Une MICI, une sarcoïdose.</li>
      <li>Une maladie auto-immune : lupus systémique, connectivite mixte (syndrome de Sharp), connectivite de chevauchement, myosite, sclérodermie, syndrome de Sjögren.</li>
      <li>Une vascularite (périartérite noueuse, maladie de Wegener)</li>
      <li>Une affection maligne : leucémie aiguë, lymphome</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'GeneraliteRhumato',
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
    .GeneraliteRhumato {
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
