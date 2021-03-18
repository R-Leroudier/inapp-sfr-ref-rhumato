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
          <input type="radio" value="a,0" v-model="choise.n0" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,1" v-model="choise.n0" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,2" v-model="choise.n0" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,3" v-model="choise.n0" />
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
          <input type="radio" value="a,0" v-model="choise.n1" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.5" v-model="choise.n1" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,1" v-model="choise.n1" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,1.5" v-model="choise.n1" />
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
          <input type="radio" value="a,0" v-model="choise.n2" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.3" v-model="choise.n2" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,0.7" v-model="choise.n2" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,1" v-model="choise.n2" />
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
          <input type="radio" value="a,0" v-model="choise.n3" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.3" v-model="choise.n3" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,0.5" v-model="choise.n3" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,0.8" v-model="choise.n3" />
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
          <input type="radio" value="a,0" v-model="choise.n4" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.2" v-model="choise.n4" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,0.4" v-model="choise.n4" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,0.6" v-model="choise.n4" />
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
          <input type="radio" value="a,0" v-model="choise.n5" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.2" v-model="choise.n5" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,0.3" v-model="choise.n5" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,0.5" v-model="choise.n5" />
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
          <input type="radio" value="a,0" v-model="choise.n6" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.1" v-model="choise.n6" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,0.3" v-model="choise.n6" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,0.4" v-model="choise.n6" />
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
          <input type="radio" value="a,0" v-model="choise.n7" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.1" v-model="choise.n7" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,0.3" v-model="choise.n7" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,0.4" v-model="choise.n7" />
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
          <input type="radio" value="a,0" v-model="choise.n8" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.1" v-model="choise.n8" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,0.2" v-model="choise.n8" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,0.3" v-model="choise.n8" />
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
          <input type="radio" value="a,0" v-model="choise.n9" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.1" v-model="choise.n9" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,0.2" v-model="choise.n9" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,0.3" v-model="choise.n9" />
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
          <input type="radio" value="a,0" v-model="choise.n10" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.1" v-model="choise.n10" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,0.2" v-model="choise.n10" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,0.3" v-model="choise.n10" />
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
          <input type="radio" value="a,0" v-model="choise.n11" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.1" v-model="choise.n11" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,0.2" v-model="choise.n11" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,0.3" v-model="choise.n11" />
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
          <input type="radio" value="a,0" v-model="choise.n12" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.1" v-model="choise.n12" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,0.2" v-model="choise.n12" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,0.2" v-model="choise.n12" />
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
          <input type="radio" value="a,0" v-model="choise.n13" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.1" v-model="choise.n13" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,0.1" v-model="choise.n13" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,0.2" v-model="choise.n13" />
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
          <input type="radio" value="a,0" v-model="choise.n14" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.1" v-model="choise.n14" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,0.1" v-model="choise.n14" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,0.2" v-model="choise.n14" />
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
          <input type="radio" value="a,0" v-model="choise.n15" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.1" v-model="choise.n15" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,0.1" v-model="choise.n15" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,0.2" v-model="choise.n15" />
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
          <input type="radio" value="a,0" v-model="choise.n16" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.1" v-model="choise.n16" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,0.1" v-model="choise.n16" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,0.2" v-model="choise.n16" />
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
          <input type="radio" value="a,0" v-model="choise.n17" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.1" v-model="choise.n17" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,0.1" v-model="choise.n17" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,0.2" v-model="choise.n17" />
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
          <input type="radio" value="a,0" v-model="choise.n18" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.1" v-model="choise.n18" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,0.1" v-model="choise.n18" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,0.2" v-model="choise.n18" />
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
          <input type="radio" value="a,0" v-model="choise.n19" />
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="b,0.1" v-model="choise.n19" />
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="c,0.1" v-model="choise.n19" />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="d,0.2" v-model="choise.n19" />
          Incapable de le faire
        </label>
      </div>
    </section>
    <span class="line">------</span>
    <h3 class="title">
      Score final <em>{{ finalScore }}</em
      >.
    </h3>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HAQ",
  data() {
    return {
      finalScore: 0,
      choise: {
        n0: "a,0",
        n1: "a,0",
        n2: "a,0",
        n3: "a,0",
        n4: "a,0",
        n5: "a,0",
        n6: "a,0",
        n7: "a,0",
        n8: "a,0",
        n9: "a,0",
        n10: "a,0",
        n11: "a,0",
        n12: "a,0",
        n13: "a,0",
        n14: "a,0",
        n15: "a,0",
        n16: "a,0",
        n17: "a,0",
        n18: "a,0",
        n19: "a,0",
      },
    };
  },
  methods: {
    calcResult() {
      this.finalScore = 0;
      let i;
      for (i = 0; i < Object.keys(this.choise).length; i++) {
        const nb = parseFloat(this.choise[`n` + i].toString().split(",")[1]);
        if (nb >= 0) {
          this.finalScore += nb;
        }
      }
    },
  },
  watch: {
    choise: {
      handler: function() {
        this.calcResult();
      },
      deep: true,
    },
  },
  mounted() {},
});
</script>
