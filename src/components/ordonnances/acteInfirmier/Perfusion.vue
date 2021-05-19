<template lang="html">
  <section class="Perfusion">
    <h2>Perfusion acide zolédronique</h2>

    <img src="@/assets/PerfusionActe.png">
  </section>
</template>

<script lang="js">
    export default {
        name: 'Perfusion',
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
    .Perfusion {
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
