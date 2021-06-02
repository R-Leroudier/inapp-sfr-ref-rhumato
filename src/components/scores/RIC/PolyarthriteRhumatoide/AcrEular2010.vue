<template>
  <div class="AcrEular2010">
    <div>
      <h2 class="title">Polyarthrite rhumatoïde, critères ACR/EULAR</h2>
      <p class="description">
        Critères diagnostics devant une polyarthrite débutante avec des
        radiographies normales et en l'absence d'un diagnostic d'une autre
        maladie.
      </p>
      <span class="line"></span>
    </div>

    <div class="container">
      <form class="form">
        <h4 class="categorie">Atteintes articulaires</h4>
        <div>
          <ul class="details">
            <li> On différencie les grosses et petites articulations: </li>
            <li>
                Grosses articulations : épaule, coude, hanche, genou, cheville.
            </li>
            <li>
                Petites articulations : toutes autres articulations des membres
            </li>
          </ul>
        </div>
        <div>
          <p @click="choice1(0)" class="btn" :class="{ selected: score1 === 0 }">
            1 grosse articulation.
          </p>
        </div>
        <div>
          <p @click="choice1(1)" class="btn" :class="{ selected: score1 === 1 }">
            2 à 10 grosses articulations.
          </p>
        </div>
        <div>
          <p @click="choice1(2)" class="btn" :class="{ selected: score1 === 2 }">
            1 à 3 petites articulations (grosses articulations non comptées).
          </p>
        </div>
        <div>
          <p @click="choice1(3)" class="btn" :class="{ selected: score1 === 3 }">
            4 à 10 petites articulations (grosses articulations non comptées).
          </p>
        </div>
        <div>
          <p @click="choice1(4)" class="btn" :class="{ selected: score1 === 4 }">
            Plus de 10 articulations (dont au moins une petite articulation).
          </p>
        </div>

        <h4 class="categorie">Sérologie</h4>
        <div>
          <ul class="details">
            Notes :
            <li>FR = Facteur rhumatoïde.</li>
            <li>ACPA = Anticorps anti-peptides/protéines citrulliné(e)s.</li>
          </ul>
        </div>
        <div>
          <p @click="choice2(0)" class="btn" :class="{ selected: score2 === 0 }">
            FR et ACPA négatifs.
          </p>
        </div>
        <div>
          <p @click="choice2(2)" class="btn" :class="{ selected: score2 === 2 }">
            FR ou ACPA faiblement positif
            <span>(> normale et ≤ 3 x normale).</span>
          </p>
        </div>
        <div>
          <p @click="choice2(3)" class="btn" :class="{ selected: score2 === 3 }">
            FR ou ACPA fortement positif <span>(> 3 x normale).</span>
          </p>
        </div>
        <h4 class="categorie">Durée de la synovite</h4>
        <div>
          <p @click="choice3(0)" class="btn" :class="{ selected: score3 === 0 }">
            Durée &#8249; 6 semaines.
          </p>
        </div>
        <div>
          <p @click="choice3(1)" class="btn" :class="{ selected: score3 === 1 }">
            Durée ≥ 6 semaines.
          </p>
        </div>

        <h4 class="categorie">Marqueurs de l'inflammation</h4>
        <div>
          <p @click="choice4(0)" class="btn" :class="{ selected: score4 === 0 }">
            VS et CRP normales.
          </p>
        </div>
        <div>
          <p @click="choice4(1)" class="btn" :class="{ selected: score4 === 1 }">
            VS et CRP anormales.
          </p>
        </div>

        <div class="result">
          <h4>Score : {{ calcTotal() }}</h4>
        </div>
      </form>
    </div>

         <div class="info">
      <span>
        Interprétation : Les critères ACR/EULAR donnent la possibilité de
        diagnostiquer précocement une polyarthrite rhumatoïde. Un score à 6 ou
        plus pose le diagnostic de polyarthrite rhumatoïde.
      </span>
      <br>
      <span>
        Références : Funovits J, Aletaha D, Bykerk V, Combe B, Dougados M, Emery
        P, et al. The American College of Rheumatology/European League Against
        Rheumatism classification criteria for rheumatoid arthritis:
        methodological report Phase 1. Ann Rheum Dis 2010; 69: 1589–95.
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  mounted() {},
  data() {
    return {
      score1: 0,
      score2: 0,
      score3: 0,
      score4: 0,
    };
  },
  methods: {
    choice1(number) {
      this.score1 = number;
    },
    choice2(number) {
      this.score2 = number;
    },
    choice3(number) {
      this.score3 = number;
    },
    choice4(number) {
      this.score4 = number;
    },
    calcTotal() {
      return this.score1 + this.score2 + this.score3 + this.score4;
    },
  },
});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";

.AcrEular2010 {
  ul {
    list-style: none;
    padding: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    background-color: #eceaf0;
    cursor: pointer;

    border: none;
    padding: 5px 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 0 0 1em;
    justify-content: center;
    align-content: space-around;
    align-items: flex-start;
    height: 100%;
    width: 80%;
    border-radius: 8px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;
    color: rgb(49, 49, 49);
  }



  .btn.selected {
    background-color: #3abaea;
    color: white;
  }

  .line {
    display: block;
    width: 100%;
    border-top: 2px solid #ccc;
  }
}
</style>
