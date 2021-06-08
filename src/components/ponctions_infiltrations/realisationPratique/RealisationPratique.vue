<template lang="html">
  <section class="RealisationPratique">
    <h2 class="title">Réalisation pratique</h2>
<span class="line"></span>

    <p>
      Réalisation des ponctions-infiltrations en pratique
      <br>
      Comment réaliser ces gestes ?
    </p>

    <p class="underline red">Articulations périphériques</p>

    <ul>
      <li>
        Genou :<span class="bold"> (Pr Benoit Le Goff)</span><br>
        <iframe src="http://www.lecofer.org/videos/K4d.mp4" allowfullscreen="true"></iframe>
      </li>
      <li>
        Epaule :<span class="bold"> (Pr Benoit Le Goff)</span><br>
        <iframe src="http://www.lecofer.org/videos/K5e.mp4" allowfullscreen="true"></iframe>
      </li>
      <li>
        Poignet :<span class="bold"> (Dr Marine Clay - Pr Philippe Gaudin)</span><br>
        <iframe src="http://www.lecofer.org/videos/K6f.mp4" allowfullscreen="true"></iframe>
      </li>
      <li>
        Cheville :<span class="bold"> (Dr Marine Clay - Pr Philippe Gaudin)</span><br>
        <iframe src="http://www.lecofer.org/videos/K7g.mp4" allowfullscreen="true"></iframe>
      </li>
    </ul>

  </section>
</template>

<script lang="js">
    export default {
        name: 'RealisationPratique',
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
    .RealisationPratique {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }

      .underline {
        text-decoration: underline;
      }

      .red {
        color: red;
      }
    }
</style>
