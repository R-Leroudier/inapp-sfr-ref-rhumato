<template>
<div>
  <h2 class="title">Score ASDAS</h2>
<span class="line">------</span>

<p class="introduction">Renseignez chaque item. Indiquez une valeur de 0 (absent) à 10 (extrême) pour les questions concernant votre ressenti.</card>

<section>
  <h5>
    1. Où situez-vous votre degré global de douleur au niveau du cou, du dos et des hanches 
    dans le cadre de votre spondylarthrite ankylosante ?
  </h5>
  <input type="number" id="toggle" class="visually-hidden">
  <p>(0=absent, 10=extrême)</p>
</section>

<section>
  <h5>2. Quelle est la durée de votre raideur matinale à partir de votre réveil ?</h5>
  <div>
  <input type="radio">
  <label>Aucune</label>
  </div>

  <div>
  <input type="radio">
  <label>Aucune</label>
  </div>

  <div>
  <input type="radio">
  <label>15min</label>
  </div>

  <div>
  <input type="radio">
  <label>30min</label>
  </div>

  <div>
  <input type="radio">
  <label>45min</label>
  </div>

  <div>
  <input type="radio">
  <label>1h</label>
  </div>

  <div>
  <input type="radio">
  <label>1h15</label>
  </div>

  <div>
  <input type="radio">
  <label>1h30</label>
  </div>

  <div>
  <input type="radio">
  <label>1h45</label>
  </div>

  <div>
  <input type="radio">
  <label>2h ou plus</label>
  </div>
</section>



</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
 name:"Asdas",
 mounted()
    {}
})
</script>

<style>
</style>


