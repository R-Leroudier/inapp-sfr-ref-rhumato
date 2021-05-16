<template lang="html">
  <section class="CalendrierVaccinal">
    <h2>Calendrier Vaccinal</h2>

    <img src="@/assets/calendrier_vaccinal.png">

    <p>
      Vaccin vivants atténués (BCG, ROR, varicelle, fièvre jaune) contre indiqués si traitement immunosuppresseur, biothérapie et/ou corticothérapie à dose immunosuppressive (>10 mg d’équivalent prednisone ou > 2mg/kg/j)
      <br><br>
      Vaccins à réaliser de préférence au cours d’une phase inactive de l’AJI
    </p>
  </section>
</template>

<script lang="js">
    export default {
        name: 'CalendrierVaccinal',
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
    .CalendrierVaccinal {
      padding: 0 15px;
      text-align: left;

      h2 {
        text-align: center;
      }

      .bold {
        font-weight: bold;
      }

      img {
        width: 100%;
      }
    }
</style>
