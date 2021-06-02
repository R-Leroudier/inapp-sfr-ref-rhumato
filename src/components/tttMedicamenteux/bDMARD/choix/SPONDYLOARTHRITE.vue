<template lang="html">
  <section class="SPONDYLOARTHRITE">
    <h2>SPONDYLOARTHRITE</h2>

    <img src="@/assets/SPONDYLOARTHRITE.png">
  </section>
</template>

<script lang="js">
    export default {
        name: 'SPONDYLOARTHRITE',
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
    .SPONDYLOARTHRITE {
      padding: 0 15px;
      text-align: left;

      h2 {
        text-align: center;
      }

      img {
        max-width: 100%;
      }
    }
</style>
