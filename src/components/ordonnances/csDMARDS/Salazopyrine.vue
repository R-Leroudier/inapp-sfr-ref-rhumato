<template lang="html">
  <section class="Salazopyrine">
    <h2>Salazopyrine</h2>

    <img src="@/assets/SalazopyrineCSDMARDS.png">
  </section>
</template>

<script lang="js">
    export default {
        name: 'Salazopyrine',
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
    .Salazopyrine {
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
