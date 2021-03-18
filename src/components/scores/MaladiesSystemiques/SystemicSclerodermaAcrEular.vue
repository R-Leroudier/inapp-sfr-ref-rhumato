<template>
<div>
<h2 class="title">Critères de classification ACR-EULAR de la sclérodermie systémique</h2>

<h4 class="categorie">Epaississement cutané (ne tenir compte que du score le plus élevé) :</h4>
<p>Epaississement cutané des doigts des mains s'étendant au-delà des articulations MCP</p>
<p>9 points</p>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">NON</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">OUI</label>

<p>Doigts boudinés</p>
<p> 2 points</p>
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">NON</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">OUI</label>

<p>Atteinte des doigts ne dépassant pas les articulations MCP</p> 
<p>4 points </p>
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">NON</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">OUI</label>

<h4 class="categorie">Lésions pulpaires (ne tenir compte que du score le plus élevé) :</h4>
<p>Ulcères pulpaires digitaux</p>
<p>2 points</p>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">NON</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">OUI</label>

<p>Cicatrices déprimées </p>
<p>3 points</p>
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">NON</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">OUI</label>


<p>Télangiectasies</p>
<p>2 points</p>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">NON</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">OUI</label>


<p>Anomalies capillaroscopiques</p>
<p>2 points</p>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">NON</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">OUI</label>


<p>HTAP et/ou fibrose pulmonaire</p>
<p>2 points</p>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">NON</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">OUI</label>

<p>Phénomène de Raynaud</p>
<p>3 points</p>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">NON</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">OUI</label>

<p>Anticorps spécifiques: anti-topoisomérase I ou anti-centromères ou anti-ARN polymérase de type III</p>
<p>3 points</p>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">NON</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">OUI</label>

<card class="result">

<p>Points</p>

<p>0 Critère d'exclusion</p>

  <p>Negatif</p>

  <p>Positif</p>

<p>Le critère peut être retenu s'il est présent à un moment au moins de l'histoire clinique. Un score ≥ 9 permet de classer les patients comme atteints de sclérodermie systémique.</p>

</card>

</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "SystemicSclerodermaAcrEular",
 mounted()
    {}
})

</script>

<style></style>
