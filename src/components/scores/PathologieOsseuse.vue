<template>
 <div>  
   <h2 class="title">Calcul de la clairance de la créatinine selon Cockroft & Gault et MDRD</h2>

      <span class="input-group-text">Année de naissance</span>
      <input type="text" class="form-control">

      <span class="input-group-text">Age</span>
      <input type="text" class="form-control">
      <span class="input-group-text">ans</span>
      
      <span class="input-group-text">Poids</span>
      <input type="text" class="form-control">
      <span class="input-group-text">Kg</span>

      <span class="input-group-text">Taux de Créatine</span>
      <input type="text" class="form-control">
      <span class="input-group-text">µmol/L</span>


    <p class="description">Sexe</p>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
      <label class="btn btn-outline-primary" for="btnradio1">Femme</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
      <label class="btn btn-outline-primary" for="btnradio2">Homme</label>

  <p class="description">Patient à peau noire</p>

      <input type="radio" class="btn-check" name="btnradio1" id="btnradio3" autocomplete="off" checked>
      <label class="btn btn-outline-primary" for="btnradio3">Oui</label>

      <input type="radio" class="btn-check" name="btnradio1" id="btnradio4" autocomplete="off">
      <label class="btn btn-outline-primary" for="btnradio4">Non</label>

      <input class="btn btn-primary" type="button" value="Calculer">

  <p class="description"> La clairance est indispensable avant toute injection de produit de contraste au scanner et en IRM.</p>

  <p class="description">Le calcul de la clairance de la créatinine permet d'éviter une éventuelle insuffisance rénale induite par ces produits de contraste.</p>
  
  <p class="description">* Le résultat du calcul de la clairance est donné à titre indicatif. Le site clairance-creatinine.fr ne peut être tenue pour responsable en cas de conséquences indésirables.</p>
 </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
 name:"PathologieOsseuse",
 mounted()
    {}
})
</script>

<style></style>
