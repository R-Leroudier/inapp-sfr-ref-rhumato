
<template>
<div>

<h2 class="title">Critères de sharp</h2>
<h4 class="categorie">Critère majeurs</h4>

  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck1">1. Myosite sévère</label>

  <h5>2. Atteinte pulmonaire :</h5>

  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck2">DLCO supèrieur 70% </label>

  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck3">HTAP</label>
  
  <input type="checkbox" class="btn-check" id="btncheck4" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck4">Lésion histologiques vasculaire</label>

  <input type="checkbox" class="btn-check" id="btncheck5" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck5">3. Phénomène de Raynaud</label>

  <input type="checkbox" class="btn-check" id="btncheck6" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck6">4. Mains gonflées ou sclérodactylie</label>

  <input type="checkbox" class="btn-check" id="btncheck7" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck7">5. Anticorps anti-ENA positif avec positivité des anti-U1-RNP et négativité des anti-Sm</label>

<h4 class="categorie">Critère mineurs </h4>

  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck1">1. Alopécie</label>

  <h5>2. Atteinte pulmonaire :</h5>

  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck2">2. Leucopénie</label>

  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck3">3. Anémie</label>
  
  <input type="checkbox" class="btn-check" id="btncheck4" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck4">4. Pleurésie</label>

  <input type="checkbox" class="btn-check" id="btncheck5" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck5">5. Péricardite</label>

  <input type="checkbox" class="btn-check" id="btncheck6" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck6">6. Arthrite</label>

  <input type="checkbox" class="btn-check" id="btncheck7" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck7">7. Névralagie du Trijumeau</label>

 <input type="checkbox" class="btn-check" id="btncheck8" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck8">8. Rash Malaire</label>

  <input type="checkbox" class="btn-check" id="btncheck9" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck9">9. Thrombopénie</label>

 <input type="checkbox" class="btn-check" id="btncheck10" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck10">10. Myosite modérée</label>

  <input type="checkbox" class="btn-check" id="btncheck11" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck11">11. ATCD de mains gonflées</label>

  <p>Diagnostic si 4 critères majeurs sans anti-Sm</p>
  <p>Ou probable si 3 majeurs ou 2 majeurs et 1 mineurs sans anti-Sm</p>
</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
 name: "Sharp",
 mounted()
    {}
})

</script>

<style></style>

