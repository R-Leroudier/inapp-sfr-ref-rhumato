<template>
  <div>
    <h2 class="title">Critères de classification ACR-EULAR de la sclérodermie systémique</h2>

    <h4 class="categorie">Epaississement cutané (ne tenir compte que du score le plus élevé) :</h4>
      <p class="description">Epaississement cutané des doigts des mains s'étendant au-delà des articulations MCP</p>
      <p class="description">9 points</p>

        <input type="radio" class="btn-check" name="btnradio1" id="btnradio1" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio1">NON</label>

        <input type="radio" class="btn-check" name="btnradio1" id="btnradio2" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio2">OUI</label>

      <p class="description">Doigts boudinés</p>
      <p class="description"> 2 points</p>
        <input type="radio" class="btn-check" name="btnradio2" id="btnradio3" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio3">NON</label>

        <input type="radio" class="btn-check" name="btnradio2" id="btnradio4" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio4">OUI</label>

      <p class="description">Atteinte des doigts ne dépassant pas les articulations MCP</p> 
      <p class="description">4 points </p>
        <input type="radio" class="btn-check" name="btnradio3" id="btnradio5" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio5">NON</label>

        <input type="radio" class="btn-check" name="btnradio3" id="btnradio6" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio6">OUI</label>

    <h4 class="categorie">Lésions pulpaires (ne tenir compte que du score le plus élevé) :</h4>
      <p class="description">Ulcères pulpaires digitaux</p>
      <p class="description">2 points</p>

        <input type="radio" class="btn-check" name="btnradio4" id="btnradio7" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio7">NON</label>

        <input type="radio" class="btn-check" name="btnradio4" id="btnradio8" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio8">OUI</label>

      <p class="description">Cicatrices déprimées </p>
      <p class="description">3 points</p>
        <input type="radio" class="btn-check" name="btnradio5" id="btnradio9" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio9">NON</label>

        <input type="radio" class="btn-check" name="btnradio5" id="btnradio10" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio10">OUI</label>


      <p class="description">Télangiectasies</p>
      <p class="description">2 points</p>

        <input type="radio" class="btn-check" name="btnradio6" id="btnradio11" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio11">NON</label>

        <input type="radio" class="btn-check" name="btnradio6" id="btnradio12" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio12">OUI</label>


      <p class="description">Anomalies capillaroscopiques</p>
      <p class="description">2 points</p>

        <input type="radio" class="btn-check" name="btnradio7" id="btnradio13" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio13">NON</label>

        <input type="radio" class="btn-check" name="btnradio7" id="btnradio14" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio14">OUI</label>


      <p class="description">HTAP et/ou fibrose pulmonaire</p>
      <p class="description">2 points</p>

        <input type="radio" class="btn-check" name="btnradio8" id="btnradio15" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio15">NON</label>

        <input type="radio" class="btn-check" name="btnradio8" id="btnradio16" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio16">OUI</label>

      <p class="description">Phénomène de Raynaud</p>
      <p class="description">3 points</p>

        <input type="radio" class="btn-check" name="btnradio9" id="btnradio17" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio17">NON</label>

        <input type="radio" class="btn-check" name="btnradio9" id="btnradio18" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio18">OUI</label>

      <p class="description">Anticorps spécifiques: anti-topoisomérase I ou anti-centromères ou anti-ARN polymérase de type III</p>
      <p class="description">3 points</p>

        <input type="radio" class="btn-check" name="btnradio10" id="btnradio19" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio19">NON</label>

        <input type="radio" class="btn-check" name="btnradio10" id="btnradio20" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio19">OUI</label>

    <card class="result">

      <p class="description">Points</p>

      <p class="description">0 Critère d'exclusion</p>

      <p class="description">Negatif</p>

      <p class="description">Positif</p>

      <p class="description">Le critère peut être retenu s'il est présent à un moment au moins de l'histoire clinique. Un score ≥ 9 permet de classer les patients comme atteints de sclérodermie systémique.</p>

    </card>

  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
 mounted()
    {}
})

</script>

<style></style>
