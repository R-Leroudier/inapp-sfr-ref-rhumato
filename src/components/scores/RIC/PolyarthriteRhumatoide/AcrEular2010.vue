<template>
  <div>
    <div>
      <h2 class="title">Polyarthrite rhumatoïde, critères ACR/EULAR</h2>
      <span class="description">
        Critères diagnostics devant une polyarthrite débutante avec des
        radiographies normales et en l'absence d'un diagnostic d'une autre
        maladie.
      </span>
      <span class="line"></span>
    </div>

    <div class="container">
      <form class="form">
        <h4 class="categorie">Atteintes articulaires</h4>
        <div>
          <ul class="details">
            <span> On différencie les grosses et petites articulations: </span>
            <li>
              <span>
                Grosses articulations : épaule, coude, hanche, genou, cheville.
              </span>
            </li>
            <li>
              <span>
                Petites articulations : toutes autres articulations des membres
              </span>
            </li>
          </ul>
        </div>
        <div>
          <button type="button" @click="choice1(0)" class="btn">
            1 grosse articulation.
          </button>
        </div>
        <div>
          <button type="button" @click="choice1(1)" class="btn">
            2 à 10 grosses articulations.
          </button>
        </div>
        <div>
          <button type="button" @click="choice1(2)" class="btn">
            1 à 3 petites articulations (grosses articulations non comptées).
          </button>
        </div>
        <div>
          <button type="button" @click="choice1(3)" class="btn">
            4 à 10 petites articulations (grosses articulations non comptées).
          </button>
        </div>
        <div>
          <button type="button" @click="choice1(4)" class="btn">
            Plus de 10 articulations (dont au moins une petite articulation).
          </button>
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
          <button type="button" @click="choice2(0)" class="btn">
            FR et ACPA négatifs.
          </button>
        </div>
        <div>
          <button type="button" @click="choice2(2)" class="btn">
            FR ou ACPA faiblement positif
            <span>(> normale et ≤ 3 x normale).</span>
          </button>
        </div>
        <div>
          <button type="button" @click="choice2(3)" class="btn">
            FR ou ACPA fortement positif <span>(> 3 x normale).</span>
          </button>
        </div>
        <h4 class="categorie">Durée de la synovite</h4>
        <div>
          <button type="button" @click="choice3(0)" class="btn">
            Durée &#8249; 6 semaines.
          </button>
        </div>
        <div>
          <button type="button" @click="choice3(1)" class="btn">
            Durée ≥ 6 semaines.
          </button>
        </div>

        <h4 class="categorie">Marqueurs de l'inflammation</h4>
        <div>
          <button type="button" @click="choice4(0)" class="btn">
            VS et CRP normales.
          </button>
        </div>
        <div>
          <button type="button" @click="choice4(1)" class="btn">
            VS et CRP anormales.
          </button>
        </div>

        <div class="result">
          <h4>Score :{{ calcTotal() }}</h4>
        </div>
      </form>
    </div>

    <span class="line"></span>
    <div class="info">
      <span>
        Interprétation : Les critères ACR/EULAR donnent la possibilité de
        diagnostiquer précocement une polyarthrite rhumatoïde. Un score à 6 ou
        plus pose le diagnostic de polyarthrite rhumatoïde.
      </span>
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

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
.detail{
  text-align: initial;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.btn {
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  background-color: #eceaf0;

  border: none;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 1em;
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
.info {
  font-style: italic;
  font-size: x-small;
}
.btn:focus {
  background-color: #3abaea;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 5px;
  justify-content: center;
  align-content: space-around;
  align-items: flex-start;
  height: 50px;
  border-radius: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  color: white;
}

.title {
  color: rgb(143, 58, 177);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.introduction {
  background-color: rgb(224, 222, 222);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  justify-content: center;
  align-content: space-around;
  align-items: flex-start;
  text-align: center;
  padding-bottom: 3px;
  padding-top: 3px;
  margin: 35px;
}

.result {
  width: 80%;
  margin: auto;
  border-radius: 10px;
  background-color: #4c2b62;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  justify-content: center;
  display: block !important;
  margin-top: 2rem;
  margin-bottom: 1rem;

  /* align-content: space-around; */
  /* align-items: flex-start; */
  text-align: center;
  color: white;
}

.validate {
  background-color: rgb(72, 179, 86);
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 5px;
  justify-content: center;
  align-content: space-around;
  align-items: flex-start;
  height: 50px;
  border-radius: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  color: rgb(49, 49, 49);
}

.validate:focus {
  background-color: rgb(72, 179, 86);
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 5px;
  justify-content: center;
  align-content: space-around;
  align-items: flex-start;
  height: 50px;
  border-radius: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  color: white;
}
.cancel {
  background-color: rgb(179, 72, 72);
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 5px;
  justify-content: center;
  align-content: space-around;
  align-items: flex-start;
  height: 50px;
  border-radius: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  color: rgb(49, 49, 49);
}
.cancel:focus {
  background-color: rgb(179, 72, 72);
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 5px;
  justify-content: center;
  align-content: space-around;
  align-items: flex-start;
  height: 50px;
  border-radius: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  color: white;
}
.line {
  display: block;
  width: 100% /*or whatever width you want the effect of <hr>*/;
  border-top: 2px solid #ccc;
}
</style>
