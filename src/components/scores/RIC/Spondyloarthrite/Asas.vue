<template>
  <div>
    <h2 class="title">Spondylarthrite axiale, Critères ASAS</h2>
    <p class="description"></p>
    <span class="line">------</span>
    <card class="information">
      Chez un patient présentant une rachialgie ≥ 3 mois dont l'âge du
      diagnostic est &lsaquo; 45 ans alors on peut classer sa maladie dans la
      forme spondylarthrite axiale
    </card>

    <form class="form">
      <h4 class="categorie">Sacro-iliite à l'imagerie:</h4>
      <ul>
        <li>
          <input @click="calcChecked()" class="sacro-iliite" type="checkbox" />
          Inflammation fortement évocatrice de sacro-iliite à l'IRM.
        </li>
        <li>
          <input @click="calcChecked()" class="sacro-iliite" type="checkbox" />
          Sacro-iliite radiologique stade ≥ 2 si bilatéral OU ≥ 3 si unilatéral.
        </li>
      </ul>

      <h4 class="categorie">Signes de spondylarthrite:</h4>
      <ul class="form">
        <li>
          <input @click="calcChecked()" class="choice" type="checkbox" />
          Rachialgie inflammatoire.
        </li>
        <li>
          <input
            @click="calcChecked()"
            class="choice"
            type="checkbox"
          />Arthrite.
        </li>
        <li>
          <input
            @click="calcChecked()"
            class="choice"
            type="checkbox"
          />Enthésite (talon).
        </li>
        <li>
          <input @click="calcChecked()" class="choice" type="checkbox" />Uvéite.
        </li>
        <li>
          <input
            @click="calcChecked()"
            class="choice"
            type="checkbox"
          />Dactylite.
        </li>
        <li>
          <input
            @click="calcChecked()"
            class="choice"
            type="checkbox"
          />Psoriasis.
        </li>
        <li>
          <input @click="calcChecked()" class="choice" type="checkbox" />Maladie
          de Crohn / Rectocolite Hémorragique.
        </li>
        <li>
          <input @click="calcChecked()" class="choice" type="checkbox" />Bonne
          réponse aux AINS.
        </li>
        <li>
          <input
            @click="calcChecked()"
            class="choice"
            type="checkbox"
          />Antécédent familial de Spondylarthrite.
        </li>
        <li>
          <input @click="calcChecked()" type="checkbox" id="HLA" />HLA-B27
          positif.
        </li>
        <li>
          <input @click="calcChecked()" class="choice" type="checkbox" />CRP
          augmentée.
        </li>
      </ul>
    </form>

    <card class="result">
      <p>{{ this.result }}</p>
    </card>
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
      result: "",
    };
  },
  methods: {
    calcChecked() {
      let signe_spondylarthite = document.querySelectorAll(".choice");
      let positif = document.querySelector("#HLA");
      let sacro_iliite = document.querySelectorAll(".sacro-iliite");
      let count_signe_spondylarthite = 0;
      if (signe_spondylarthite.length > 0) {
        signe_spondylarthite.forEach((x) => {
          if (x["checked"]) count_signe_spondylarthite++;
        });
      }
      let count_sacro_iliite = 0;
      if (sacro_iliite.length > 0) {
        sacro_iliite.forEach((x) => {
          if (x["checked"]) count_sacro_iliite++;
        });
      }
      if (
        (count_signe_spondylarthite > 0 && count_sacro_iliite > 0) ||
        (positif && positif["checked"] && count_signe_spondylarthite > 1) ||
        (positif && positif["checked"] && count_sacro_iliite > 0)
      ) {
        return (this.result = "forme spondylarthrite axiale POSITIVE");
      } else {
        return (this.result = "forme spondylarthrite axiale NEGATIVE");
      }
    },
  },
});
</script>



<style></style>