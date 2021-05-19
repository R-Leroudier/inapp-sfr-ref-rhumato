<template lang="html">
  <section class="Injection">
    <h2>Injection Teriparatide</h2>

    <img src="@/assets/InjectionActe.png">
  </section>
</template>

<script lang="js">
    export default {
        name: 'Injection',
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
    .Injection {
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
