<template>
  <div class="score">
    <h2 class="title">Score HAQ</h2>
    <span class="line">------</span>
    <h3 class="title">Habillement, soins corporels</h3>
    <h4 class="title">Êtes-vous capable de :</h4>
    <section>
      <p class="details">
        Vous habiller, y compris nouer vos lacets et boutonner vos vêtements ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise0" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="0.1" v-model="choise0" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="0.3" v-model="choise0" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="0.4" v-model="choise0" />
          Incapable de le faire
        </label>
      </div>
    </section>
    <section>
      <p class="details">
        Vous laver les cheveux ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise1" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="0.1" v-model="choise1" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="0.3" v-model="choise1" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="0.4" v-model="choise1" />
          Incapable de le faire
        </label>
      </div>
    </section>
    <span class="line">------</span>
    <h3 class="title">Se lever</h3>
    <h4 class="title">Etes-vous capable de :</h4>
    <section>
      <p class="details">
        Vous lever d'une chaise ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise2" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="0.1" v-model="choise2" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="0.3" v-model="choise2" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="0.4" v-model="choise2" />
          Incapable de le faire
        </label>
      </div>
    </section>
    <section>
      <p class="details">
        Vous mettre au lit et vous lever du lit ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise3" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="0.1" v-model="choise3" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="0.3" v-model="choise3" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="0.4" v-model="choise3" />
          Incapable de le faire
        </label>
      </div>
    </section>

    <span class="line">------</span>
    <h3 class="title">Les repas</h3>
    <h4 class="title">Etes-vous capable de :</h4>
    <section>
      <p class="details">
        Couper votre viande ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise4" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="0.1" v-model="choise4" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="0.3" v-model="choise4" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="0.4" v-model="choise4" />
          Incapable de le faire
        </label>
      </div>
    </section>

    <section>
      <p class="details">
        Porter à votre bouche 1 tasse ou 1 verre bien plein ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise5" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="1" v-model="choise5" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="2" v-model="choise5" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="3" v-model="choise5" />
          Incapable de le faire
        </label>
      </div>
    </section>

    <section>
      <p class="details">
        Ouvrir une brique de lait ou de jus de fruit ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise6" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="1" v-model="choise6" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="2" v-model="choise6" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="3" v-model="choise6" />
          Incapable de le faire
        </label>
      </div>
    </section>

    <span class="line">------</span>
    <h3 class="title">La marche</h3>
    <h4 class="title">Etes-vous capable de :</h4>
    <section>
      <p class="details">
        Marcher en terrain plat à l'extérieur ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise7" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="1" v-model="choise7" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="2" v-model="choise7" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="3" v-model="choise7" />
          Incapable de le faire
        </label>
      </div>
    </section>

    <section>
      <p class="details">
        Monter 5 marches ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise8" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="1" v-model="choise8" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="2" v-model="choise8" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="3" v-model="choise8" />
          Incapable de le faire
        </label>
      </div>
    </section>

    <span class="line">------</span>
    <h3 class="title">Hygiène</h3>
    <h4 class="title">Etes-vous capable de :</h4>
    <section>
      <p class="details">
        Vous laver et vous sécher entièrement ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise9" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="1" v-model="choise9" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="2" v-model="choise9" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="3" v-model="choise9" />
          Incapable de le faire
        </label>
      </div>
    </section>

    <section>
      <p class="details">
        Prendre un bain ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise10" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="1" v-model="choise10" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="2" v-model="choise10" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="3" v-model="choise10" />
          Incapable de le faire
        </label>
      </div>
    </section>

    <section>
      <p class="details">
        Vous asseoir et vous relever des toilettes
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise11" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="1" v-model="choise11" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="2" v-model="choise11" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="3" v-model="choise11" />
          Incapable de le faire
        </label>
      </div>
    </section>

    <span class="line">------</span>
    <h3 class="title">Attraper</h3>
    <h4 class="title">Etes-vous capable de :</h4>
    <section>
      <p class="details">
        Prendre un objet pesant 2,5 kg situé au-dessus de votre tête ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise12" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="1" v-model="choise12" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="2" v-model="choise12" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="3" v-model="choise12" />
          Incapable de le faire
        </label>
      </div>
    </section>

    <section>
      <p class="details">
        Vous baisser pour ramasser un vêtement par terre ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise13" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="1" v-model="choise13" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="2" v-model="choise13" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="3" v-model="choise13" />
          Incapable de le faire
        </label>
      </div>
    </section>

    <span class="line">------</span>
    <h3 class="title">Préhension</h3>
    <h4 class="title">Etes-vous capable de :</h4>
    <section>
      <p class="details">
        Ouvrir une porte de voiture ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise14" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="1" v-model="choise14" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="2" v-model="choise14" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="3" v-model="choise14" />
          Incapable de le faire
        </label>
      </div>
    </section>

    <section>
      <p class="details">
        Dévisser le couvercle d'un pot déjà ouvert une fois ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise15" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="1" v-model="choise15" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="2" v-model="choise15" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="3" v-model="choise15" />
          Incapable de le faire
        </label>
      </div>
    </section>

    <section>
      <p class="details">
        Ouvrir et fermer un robinet ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise16" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="1" v-model="choise16" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="2" v-model="choise16" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="3" v-model="choise16" />
          Incapable de le faire
        </label>
      </div>
    </section>

    <span class="line">------</span>
    <h3 class="title">Autres activités</h3>
    <h4 class="title">Etes-vous capable de :</h4>
    <section>
      <p class="details">
        Faire vos courses ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise17" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="1" v-model="choise17" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="2" v-model="choise17" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="3" v-model="choise17" />
          Incapable de le faire
        </label>
      </div>
    </section>

    <section>
      <p class="details">
        Monter et descendre de voiture ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise18" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="1" v-model="choise18" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="2" v-model="choise18" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="3" v-model="choise18" />
          Incapable de le faire
        </label>
      </div>
    </section>

    <section>
      <p class="details">
        Faire des travaux ménagers tels que passer l'aspirateur ou faire du
        petit jardinage ?
      </p>
      <div>
        <label>
          <input type="radio" value="0" v-model="choise19" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="1" v-model="choise19" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="2" v-model="choise19" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="3" v-model="choise19" />
          Incapable de le faire
        </label>
      </div>
    </section>

    <p>
      Score final <em>{{ score }}</em
      >.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Score1",
  data() {
    return {
      score: 0,
      choise0: 0,
      choise1: 0,
      choise2: 0,
      choise3: 0,
      choise4: 0,
      choise5: 0,
      choise6: 0,
      choise7: 0,
      choise8: 0,
      choise9: 0,
      choise10: 0,
      choise11: 0,
      choise12: 0,
      choise13: 0,
      choise14: 0,
      choise15: 0,
      choise16: 0,
      choise17: 0,
      choise18: 0,
      choise19: 0,
      result: null,
    };
  },
  methods: {
    calcResult() {
      this.score = this.choise0;
    },
  },
  watch: {
    choise0: function() {
      this.calcResult();
    },
  },
  mounted() {},
});
</script>
