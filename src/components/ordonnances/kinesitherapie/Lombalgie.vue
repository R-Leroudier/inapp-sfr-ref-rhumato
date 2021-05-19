<template lang="html">
  <section class="Lombalgie">
    <h2>Lombalgie chronique</h2>

    <p>
      Ces modèles d’ordonnances sont proposés à titre indicatif, beaucoup de kinésithérapeutes proposent une prise en charge personnalisée à la suite d’un bilan diagnostique, ainsi, il est possible de noter sur votre ordonnance de kinésithérapie :
      <br><br>
      « Merci de réaliser un bilan diagnostique pour … et de proposer un programme adapté »
    </p>

    <img src="@/assets/LombalgieKine.png">
  </section>
</template>

<script lang="js">
    export default {
        name: 'Lombalgie',
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
    .Lombalgie {
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
