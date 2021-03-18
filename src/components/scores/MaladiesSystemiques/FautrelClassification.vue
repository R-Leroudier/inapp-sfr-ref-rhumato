<template>
  <div>
      <h2 class="title">Critères de classification proposés par Fautrel</h2>
      <p class="description">Calcul des critères de classification ou de diagnostic</p>

      <h4 class="categorie">Critères de classification proposés par Fautrel (2002)</h4>
        <p class="description">Critères majeurs :</p>

          <p class="description">Fièvre hectique ≥ 39°C</p>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradio1" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio1">NON</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio2">OUI</label>

          <p class="description">Arthralgies ou arthrites</p>
            <input type="radio" class="btn-check" name="btnradio2" id="btnradio3" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio3">NON</label>

            <input type="radio" class="btn-check" name="btnradio2" id="btnradio4" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio4">OUI</label>

          <p class="description">Erythème fugace</p> 
            <input type="radio" class="btn-check" name="btnradio3" id="btnradio5" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio5">NON</label>

            <input type="radio" class="btn-check" name="btnradio3" id="btnradio6" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio6">OUI</label>

          <p class="description">Pharyngite</p>

            <input type="radio" class="btn-check" name="btnradio4" id="btnradio7" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio7">NON</label>

            <input type="radio" class="btn-check" name="btnradio4" id="btnradio8" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio8">OUI</label>

          <p class="description">Polynucléaires neutrophiles ≥ 80%</p>
            <input type="radio" class="btn-check" name="btnradio5" id="btnradio9" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio9">NON</label>

            <input type="radio" class="btn-check" name="btnradio5" id="btnradio10" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio10">OUI</label>

          <p class="description">Ferritine glycosylée ≤ 20%</p> 
            <input type="radio" class="btn-check" name="btnradio6" id="btnradi11" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio11">NON</label>

            <input type="radio" class="btn-check" name="btnradio6" id="btnradio12" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio12">OUI</label>

      <h4 class="categorie">Critères mineurs :</h4>
          <p class="description">Rash maculo-papuleux</p>

            <input type="radio" class="btn-check" name="btnradio7" id="btnradio13" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio13">NON</label>

            <input type="radio" class="btn-check" name="btnradio7" id="btnradio14" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio14">OUI</label>

          <p class="description">Leucocytes ≥ 10 000 mm3 </p>
   
            <input type="radio" class="btn-check" name="btnradio8" id="btnradio15" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio15">NON</label>

            <input type="radio" class="btn-check" name="btnradio8" id="btnradio16" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio16">OUI</label>

      <card class="result">

        <p class="description">0 critère majeur</p>

        <p class="description">0 critère mineur</p>

        <p class="description">Nombre de critères nécessaires: 4 critères majeurs ou 3 critères majeurs + 2 critères mineurs</p>

    </card>

  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name:"FautrelClassification",
 mounted()
    {}
})

</script>

<style></style>
