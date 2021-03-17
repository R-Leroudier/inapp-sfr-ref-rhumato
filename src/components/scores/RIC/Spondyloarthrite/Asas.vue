<template>
  <div>
    <h2 class="title">Spondylarthrite axiale, Critères ASAS</h2>
    <p class="description"></p>
    <span class="line">------</span>
    <form class="form">
      <h4 class="categorie">Sacro-iliite à l'imagerie:</h4>
      <ul>
        <li>
          <input type="checkbox" value="1" />
          Inflammation fortement évocatrice de sacro-iliite à l'IRM.
        </li>
        <li>
          <input type="checkbox" value="1" /> Sacro-iliite radiologique stade ≥
          2 si bilatéral OU ≥ 3 si unilatéral.
        </li>
      </ul>

      <h4 class="categorie">Signes de spondylarthrite:</h4>
      <ul class="form">
        <li><input type="checkbox" value="1" />Rachialgie inflammatoire.</li>
        <li><input type="checkbox" value="1" />Arthrite.</li>
        <li><input type="checkbox" value="1" />Enthésite (talon).</li>
        <li><input type="checkbox" value="1" />Uvéite.</li>
        <li><input type="checkbox" value="1" />Dactylite.</li>
        <li><input type="checkbox" value="1" />Psoriasis.</li>
        <li>
          <input type="checkbox" value="1" />Maladie de Crohn / Rectocolite
          Hémorragique.
        </li>
        <li><input type="checkbox" value="1" />Bonne réponse aux AINS.</li>
        <li>
          <input type="checkbox" value="1" />Antécédent familial de
          Spondylarthrite.
        </li>
        <li><input type="checkbox" value="1" />HLA-B27 positif.</li>
        <li><input type="checkbox" value="1" />CRP augmentée.</li>
      </ul>
    </form>
    <span class="line">------</span>
    <span>
      Interprétation : Les critères ASAS (Assessment of SpondyloArthritis
      international Society) de 2009 permettent de classer une spondylarthrite
      dans la forme axiale (sensibilité 82,9%, spécificité 84,4%).
    </span>
    <span>
      Références : Rudwaleit M, Landewe R, van der Heijde D, Listing J, Brandt
      J, Braun J, et al. The development of Assessment of Spondyloarthritis
      international Society (ASAS) Classification Criteria for Axial
      Spondyloarthritis (Part I): classification of paper patients by expert
      opinion including uncertainty appraisal. Ann Rheum Dis. 2009;68:770–6.
      Rudwaleit M, van der Heijde D, Landewé R, Listing J, Akkoc N, Brandt J, et
      al. The development of Assessment of Spondyloarthritis International
      Society classification criteria for axial spondyloarthritis (Part II):
      validation and final selection. Ann Rheum Dis. 2009;68:777–83.
    </span>
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
    };
  },
  methods: {
    choice1(number) {
      this.score1 = number;
    },
    choice2(number) {
      this.score2 = number;
    },
    calcTotal() {
      return this.score1 + this.score2;
    },
  },
});
</script>



<style></style>