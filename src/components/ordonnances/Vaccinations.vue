<template lang="html">
  <section class="Vaccinations">
    <h2>MAJ Vaccination pré-biothérapie</h2>

    <img src="@/assets/Vaccinations.png">
  </section>
</template>

<script lang="js">
    export default {
        name: 'Vaccinations',
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
    .Vaccinations {
      padding: 0 15px;

      p {
        text-align: left;
      }
      h2 {
        text-align: center;
      }

      img {
        max-width: 100%;
        border: 1px solid black;
      }
    }
</style>
