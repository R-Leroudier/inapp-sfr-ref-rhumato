<template lang="html">
  <section class="Apremilast">
    <h2>Apremilast</h2>

    <img src="@/assets/ApremilastCSDMARDS.png">
  </section>
</template>

<script lang="js">
    export default {
        name: 'Apremilast',
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
    .Apremilast {
      padding: 0 15px;

      h2 {
        text-align: center;
      }

      img {
        max-width: 100%;
        border: 1px solid black;
      }
    }
</style>
