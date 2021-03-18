<template>
<div>
  <h3>Score ASDAS</h3>
  <span class="line">------</span>
  <p class="introduction">Renseignez chaque item. Indiquez une valeur de 0 (absent) à 10 (extrême) pour les questions concernant votre ressenti.</p>

<form>
<section>
  <h5>1. Où situez-vous votre degré global de douleur au niveau du cou, du dos et des hanches 
      dans le cadre de votre spondylarthrite ankylosante ?
  </h5>
  <input type="number" v-model="painScale" max="10">
  <p>(0=absent, 10=extrême)</p>
</section>

<section>
  <h5>2. Quelle est la durée de votre raideur matinale à partir de votre réveil ?</h5>
  <div>
    <input type="radio" value="none" v-model="durationMorningStiffness">
    <label>Aucune</label>
  </div>
  <div>
    <input type="radio" value="15min" v-model="durationMorningStiffness">
    <label>15 min</label>
  </div>
   <div>
    <input type="radio" value="30min" v-model="durationMorningStiffness">
    <label>30 min</label>
  </div>
   <div>
    <input type="radio" value="4(min" v-model="durationMorningStiffness">
    <label>45 min</label>
  </div>
   <div>
    <input type="radio" value="1h" v-model="durationMorningStiffness">
    <label>1 heure</label>
  </div>
   <div>
    <input type="radio" value="1h15" v-model="durationMorningStiffness">
    <label>1h15</label>
  </div>
   <div>
    <input type="radio" value="1h30" v-model="durationMorningStiffness">
    <label>1h30</label>
  </div>
   <div>
    <input type="radio" value="1h45" v-model="durationMorningStiffness">
    <label>1h45</label>
  </div>
  <div>
    <input type="radio" value="2hOrMore" v-model="durationMorningStiffness">
    <label>2h ou plus</label>
  </div>
</section>
<section>
  <h5>3. Comment évaluez-vous globalement de votre maladie ?</h5>
   <input type="number" v-model="selfEval" max="10">
    <p>(0=absent, 10=extrême)</p>
</section>

<section>
  <h5>4. Où situez-vous votre degré de gonflement ou de douleur articulaire en dehors du cou, du dos et des hanches ?</h5>
  <input type="number" v-model="scaleStateJoint" max="10">
  <p>(0=absent, 10=extrême)</p>
</section>

<section>
  <input type="radio" value="cpr" v-model="picked">
  <label>Utiliser CPR</label>
  <input type="radio" value="vs" v-model="picked">
  <label>Utiliser VS.</label>
</section>

<section>
  <label>CPR :</label>
  <input type="number" v-model="cprVsValue" v-if="picked === 'cpr'"><p>mg/l</p>

  <label>VS :</label>
  <input type="number" v-model="cprvsValue" v-if="picked === 'vs'"><p>s</p>
</section>
<button type="button" class="btn validate" v-on:click="calcScore"> calculer</button>
</form>
<section class="score">
  <p>{{score}}</p>
</section>
</div>

</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name:"Asdas",
 mounted()
    {

    },
    data()
    {
      return {
      painScale: 0,
      durationMorningStiffness:"",
      valueMorningStiffness:0,
      selfEval:0,
      scaleStateJoint:0,
      picked: "",
      cprVsValue:0,
      score:0,
      }
    },
    methods:
    {
      calcScore(){
        this.getValueForMorningStiffness();
        switch(this.picked)
        {
          case "cpr":
            this.score = 0.121 * this.painScale + 0.058 * this.valueMorningStiffness + 0.110 * this.selfEval + 0.073 * this.scaleStateJoint + 0.579 * Math.log(this.cprValue + 1);
            console.log(this.score);
            break;
          case "vs":
            	this.score = 0.079 * this.painScale + 0.069 * this.valueMorningStiffness + 0.113 * this.selfEval + 0.086 * this.scaleStateJoint + 0.293 * Math.sqrt(Number(this.vsValue) + Number(1));
            break;
        }
        //Final result     
	      this.score = Math.round(this.score * 100) / 100;
      },

      getValueForMorningStiffness()
      {
        switch(this.durationMorningStiffness)
        {
          case "none":
            this.valueMorningStiffness = 0
            break;
          case "15min":
            this.valueMorningStiffness = 1.25
            break;
          case "30min":
            this.valueMorningStiffness = 2.5
            break;
          case "45min":
            this.valueMorningStiffness = 3.75
            break;
          case "1h":
            this.valueMorningStiffness = 5
            break;
          case "1h15":
            this.valueMorningStiffness = 6.25
            break;
          case "1h30":
            this.valueMorningStiffness = 7.5
            break;
          case "1h45":
            this.valueMorningStiffness = 8.75
            break;
          case "2hOrMore":
            this.valueMorningStiffness = 10
            break;
        }
      }
    }
})
</script>

<style></style>


