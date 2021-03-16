<template>
<div>
  <!-- <h3>http://www.rhumato.info/fiches-pratiques2/166-spondylarthrite-ankylosante/1747-criteres-damor-des-spondylarthropathies</h3> -->
  <h2 class="title">Critères d’AMOR DES SPONDYLARTHROPATHIES</h2>
  <div>
    <label>Douleurs nocturnes ou raideur matinale de siège lombaire ou dorsal</label>
    <input type="checkbox" id="jack" value="1" v-model="checkedNames">1</input><br>
    <label>Oligoarthrite asymétrique </label>
    <input type="checkbox" id="jack" value="2" v-model="checkedNames">2</input><br>
    <label>Douleurs fessières sans précision </label>
    <input type="checkbox" id="jack" value="" v-model="checkedNames">1</input><br>
    <label>Douleurs fessières à bascule </label>
    <input type="checkbox" id="jack" value="" v-model="checkedNames">2</input><br>
    <label>Doigt ou orteil en saucisse </label>
    <input type="checkbox" id="jack" value="" v-model="checkedNames">2</input><br>
    <label>Talalgies ou autre enthésopathie </label>
    <input type="checkbox" id="jack" value="" v-model="checkedNames">2</input><br>
    <label>Iritis </label>
    <input type="checkbox" id="jack" value="" v-model="checkedNames">2</input><br>
    <label>Urétrite non gonococcique ou cervicite (< 1 mois avant arthrite) </label>
    <input type="checkbox" id="jack" value="" v-model="checkedNames">1</input><br>
    <label>Diarrhée moins d'un moins avant une arthrite </label>
    <input type="checkbox" id="jack" value="" v-model="checkedNames">1</input><br>
    <label>Présence ou antécédents : psoriasis et/ou balanite et/ou entérocolopathie </label>
    <input type="checkbox" id="jack" value="" v-model="checkedNames">2</input><br>
    <label>Sacro-iliite radiologique unilatérale (stade 3) ou bilatérale (stade 2) </label>
    <input type="checkbox" id="jack" value="" v-model="checkedNames">3</input><br>
    <label>Présence de l'antigène HLA B27 et/ou antécédent familial : SPA Reiter psoriasis uvéite entérocolopathie </label>
    <input type="checkbox" id="jack" value="" v-model="checkedNames">2</input><br>
    <label>Efficacité rapide (48 h) des AINS ou rechute rapide (48 h) après arrêt </label>
    <input type="checkbox" id="jack" value="" v-model="checkedNames">2</input><br>
  </div>
</div>
  
</template>

<script lang="ts"></script>

<style></style>
