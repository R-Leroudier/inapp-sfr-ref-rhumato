<template lang="html">
  <section class="preJAKi">
    <h2>Biologie pré-JAKi</h2>

    <img src="@/assets/pré-JAKiBiologie.png">
  </section>
</template>

<script lang="js">
    export default {
        name: 'preJAKi',
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
    .preJAKi {
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
