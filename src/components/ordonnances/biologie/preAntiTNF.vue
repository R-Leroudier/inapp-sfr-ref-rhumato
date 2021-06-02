<template lang="html">
  <section class="preAntiTNF">
    <h2>Biologie pré-antiTNF</h2>

    <img src="@/assets/pré-antiTNFBiologie.png">
  </section>
</template>

<script lang="js">
    export default {
        name: 'preAntiTNF',
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
    .preAntiTNF {
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
