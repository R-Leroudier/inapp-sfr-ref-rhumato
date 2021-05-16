<template lang="html">
  <section class="Hydroxychloroquine">
    <h2>Hydroxychloroquine </h2>

    <p>Grossesse :</p>
    <ul>
      <li>Possible pendant toute la durée de la grossesse</li>
    </ul>

    <p>Allaitement :</p>
    <ul>
      <li>Possible pendant l’allaitement</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Hydroxychloroquine',
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
    .Hydroxychloroquine {
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
