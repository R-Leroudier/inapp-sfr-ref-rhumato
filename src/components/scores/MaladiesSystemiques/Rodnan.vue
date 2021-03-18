<template>
  <div>
    <h2 class="title">Calcul du score de RODNAN</h2>
<form>
      <h4 class="categorie">Body</h4>
        <p class="description">Visage</p>

          <input type="radio" class="btn-check" name="btnradio1" id="btnradio1" autocomplete="off"  v-model="face" value="0">
          <label class="btn btn-outline-primary"> Absence de sclérose</label>

          <input type="radio" class="btn-check" name="btnradio1" id="btnradio2" autocomplete="off" v-model="face" value="1">
          <label class="btn btn-outline-primary">Sclérose superficielle</label>

          <input type="radio" class="btn-check" name="btnradio1" id="btnradio3" autocomplete="off" v-model="face" value="2">
          <label class="btn btn-outline-primary">Sclérose intermédiaire</label>

          <input type="radio" class="btn-check" name="btnradio1" id="btnradio4" autocomplete="off" v-model="face" value="3">
          <label class="btn btn-outline-primary"> Sclérose adhérente au plan profond</label>

      <p class="description">Thorax</p>

          <input type="radio" class="btn-check" name="btnradio2" id="btnradio5" autocomplete="off" v-model="thorax" value="0">
          <label class="btn btn-outline-primary"> Absence de sclérose</label>

          <input type="radio" class="btn-check" name="btnradio2" id="btnradio6" autocomplete="off" v-model="thorax" value="1">
          <label class="btn btn-outline-primary">Sclérose superficielle</label>

          <input type="radio" class="btn-check" name="btnradio2" id="btnradio7" autocomplete="off" v-model="thorax" value="2">
          <label class="btn btn-outline-primary">Sclérose intermédiaire</label>

          <input type="radio" class="btn-check" name="btnradio2" id="btnradio8" autocomplete="off" v-model="thorax" value="3">
          <label class="btn btn-outline-primary"> Sclérose adhérente au plan profond</label>

        <p class="description">Abdomen</p>

          <input type="radio" class="btn-check" name="btnradio3" id="btnradio9" autocomplete="off" v-model="abdomen" value="0">
          <label class="btn btn-outline-primary"> Absence de sclérose</label>

          <input type="radio" class="btn-check" name="btnradio3" id="btnradio10" autocomplete="off" v-model="abdomen" value="1">
          <label class="btn btn-outline-primary">Sclérose superficielle</label>

          <input type="radio" class="btn-check" name="btnradio3" id="btnradio11" autocomplete="off" v-model="abdomen" value="2">
          <label class="btn btn-outline-primary">Sclérose intermédiaire</label>

          <input type="radio" class="btn-check" name="btnradio3" id="btnradio12" autocomplete="off" v-model="abdomen" value="3">
          <label class="btn btn-outline-primary"> Sclérose adhérente au plan profond</label>

      <h4 class="categorie">Haut gauche</h4>
        <p class="description">Bras gauche</p>

          <input type="radio" class="btn-check" name="btnradio4" id="btnradio13" autocomplete="off" v-model="armLeft" value="0">
          <label class="btn btn-outline-primary"> Absence de sclérose</label>

          <input type="radio" class="btn-check" name="btnradio4" id="btnradio14" autocomplete="off" v-model="armLeft" value="1">
          <label class="btn btn-outline-primary">Sclérose superficielle</label>

          <input type="radio" class="btn-check" name="btnradio4" id="btnradio15" autocomplete="off" v-model="armLeft" value="2">
          <label class="btn btn-outline-primary">Sclérose intermédiaire</label>

          <input type="radio" class="btn-check" name="btnradio4" id="btnradio16" autocomplete="off" v-model="armLeft" value="3">
          <label class="btn btn-outline-primary"> Sclérose adhérente au plan profond</label>

        <p class="description">Av-Bras gauche</p>

          <input type="radio" class="btn-check" name="btnradio5" id="btnradio17" autocomplete="off" v-model="foreArmLeft" value="0">
          <label class="btn btn-outline-primary"> Absence de sclérose</label>

          <input type="radio" class="btn-check" name="btnradio5" id="btnradio18" autocomplete="off" v-model="forArmLeft" value="1">
          <label class="btn btn-outline-primary">Sclérose superficielle</label>

          <input type="radio" class="btn-check" name="btnradio5" id="btnradio19" autocomplete="off" v-model="forArmLeft" value="2">
          <label class="btn btn-outline-primary">Sclérose intermédiaire</label>

          <input type="radio" class="btn-check" name="btnradio5" id="btnradio20" autocomplete="off" v-model="forArmLeft" value="3">
          <label class="btn btn-outline-primary"> Sclérose adhérente au plan profond</label>

        <p class="description">Main gauche</p>

          <input type="radio" class="btn-check" name="btnradio6" id="btnradio21" autocomplete="off" v-model="handLeft" value="0">
          <label class="btn btn-outline-primary"> Absence de sclérose</label>

          <input type="radio" class="btn-check" name="btnradio6" id="btnradio22" autocomplete="off" v-model="handLeft" value="1">
          <label class="btn btn-outline-primary">Sclérose superficielle</label>

          <input type="radio" class="btn-check" name="btnradio6" id="btnradio23" autocomplete="off" v-model="handLeft" value="2">
          <label class="btn btn-outline-primary">Sclérose intermédiaire</label>

          <input type="radio" class="btn-check" name="btnradio6" id="btnradio24" autocomplete="off" v-model="handLeft" value="3">
          <label class="btn btn-outline-primary"> Sclérose adhérente au plan profond</label>

        <p class="description">Doigts gauche</p>

          <input type="radio" class="btn-check" name="btnradio7" id="btnradio25" autocomplete="off"  v-model="fingerLeft" value="0">
          <label class="btn btn-outline-primary"> Absence de sclérose</label>

          <input type="radio" class="btn-check" name="btnradio7" id="btnradio26" autocomplete="off"  v-model="fingerLeft" value="1">
          <label class="btn btn-outline-primary">Sclérose superficielle</label>

          <input type="radio" class="btn-check" name="btnradio7" id="btnradio27" autocomplete="off"  v-model="fingerLeft" value="2">
          <label class="btn btn-outline-primary">Sclérose intermédiaire</label>

          <input type="radio" class="btn-check" name="btnradio7" id="btnradio28" autocomplete="off"  v-model="fingerLeft" value="3">
          <label class="btn btn-outline-primary"> Sclérose adhérente au plan profond</label>

      <h4 class="categorie">Haut droit</h4>
        <p class="description">Bras droit</p>

          <input type="radio" class="btn-check" name="btnradio8" id="btnradio29" autocomplete="off"  v-model="armRight" value="0">
          <label class="btn btn-outline-primary"> Absence de sclérose</label>

          <input type="radio" class="btn-check" name="btnradio8" id="btnradio30" autocomplete="off"  v-model="armRight" value="1">
          <label class="btn btn-outline-primary">Sclérose superficielle</label>

          <input type="radio" class="btn-check" name="btnradio8" id="btnradio31" autocomplete="off"  v-model="armRight" value="2">
          <label class="btn btn-outline-primary">Sclérose intermédiaire</label>

          <input type="radio" class="btn-check" name="btnradio8" id="btnradio32" autocomplete="off"  v-model="armRight" value="3">
          <label class="btn btn-outline-primary"> Sclérose adhérente au plan profond</label>

        <p class="description">Av-bras droit </p>

          <input type="radio" class="btn-check" name="btnradio9" id="btnradio33" autocomplete="off"  v-model="forArmRight" value="0">
          <label class="btn btn-outline-primary"> Absence de sclérose</label>

          <input type="radio" class="btn-check" name="btnradio9" id="btnradio34" autocomplete="off"  v-model="forArmRight" value="1">
          <label class="btn btn-outline-primary">Sclérose superficielle</label>

          <input type="radio" class="btn-check" name="btnradio9" id="btnradio35" autocomplete="off"  v-model="forArmRight" value="2">
          <label class="btn btn-outline-primary">Sclérose intermédiaire</label>

          <input type="radio" class="btn-check" name="btnradio9" id="btnradio36" autocomplete="off"  v-model="forArmRight" value="3">
          <label class="btn btn-outline-primary"> Sclérose adhérente au plan profond</label>

        <p class="description">Main droite</p>

          <input type="radio" class="btn-check" name="btnradio10" id="btnradio37" autocomplete="off" v-model="handRight" value="0">
          <label class="btn btn-outline-primary"> Absence de sclérose</label>

          <input type="radio" class="btn-check" name="btnradio10" id="btnradio38" autocomplete="off" v-model="handRight" value="1">
          <label class="btn btn-outline-primary">Sclérose superficielle</label>

          <input type="radio" class="btn-check" name="btnradio10" id="btnradio39" autocomplete="off" v-model="handRight" value="2">
          <label class="btn btn-outline-primary">Sclérose intermédiaire</label>

          <input type="radio" class="btn-check" name="btnradio10" id="btnradio40" autocomplete="off" v-model="handRight" value="3">
          <label class="btn btn-outline-primary"> Sclérose adhérente au plan profond</label>

        <p class="description">Doigts droit</p>

          <input type="radio" class="btn-check" name="btnradio11" id="btnradio41" autocomplete="off" v-model="fingerRight" value="0">
          <label class="btn btn-outline-primary" > Absence de sclérose</label>

          <input type="radio" class="btn-check" name="btnradio11" id="btnradio42" autocomplete="off" v-model="fingerRight" value="1">
          <label class="btn btn-outline-primary">Sclérose superficielle</label>

          <input type="radio" class="btn-check" name="btnradio11" id="btnradio43" autocomplete="off" v-model="fingerRight" value="2">
          <label class="btn btn-outline-primary">Sclérose intermédiaire</label>

          <input type="radio" class="btn-check" name="btnradio11" id="btnradio44" autocomplete="off" v-model="fingerRight" value="3">
          <label class="btn btn-outline-primary"> Sclérose adhérente au plan profond</label>

      <h4 class="categorie">Bas gauche</h4>
        <p class="description">Cuisse gauche</p>

          <input type="radio" class="btn-check" name="btnradio12" id="btnradio45" autocomplete="off" v-model="thighLeft" value="0">
          <label class="btn btn-outline-primary"> Absence de sclérose</label>

          <input type="radio" class="btn-check" name="btnradio12" id="btnradio46" autocomplete="off" v-model="thighLeft" value="1">
          <label class="btn btn-outline-primary">Sclérose superficielle</label>

          <input type="radio" class="btn-check" name="btnradio12" id="btnradio47" autocomplete="off" v-model="thighLeft" value="2">
          <label class="btn btn-outline-primary">Sclérose intermédiaire</label>

          <input type="radio" class="btn-check" name="btnradio12" id="btnradio48" autocomplete="off" v-model="thighLeft" value="3">
          <label class="btn btn-outline-primary"> Sclérose adhérente au plan profond</label>

        <p class="description">Jambe gauche</p>

          <input type="radio" class="btn-check" name="btnradio13" id="btnradio49" autocomplete="off" v-model="legLeft" value="0">
          <label class="btn btn-outline-primary"> Absence de sclérose</label>

          <input type="radio" class="btn-check" name="btnradio13" id="btnradio50" autocomplete="off" v-model="legLeft" value="1">
          <label class="btn btn-outline-primary">Sclérose superficielle</label>

          <input type="radio" class="btn-check" name="btnradio13" id="btnradio51" autocomplete="off" v-model="legLeft" value="2">
          <label class="btn btn-outline-primary">Sclérose intermédiaire</label>

          <input type="radio" class="btn-check" name="btnradio13" id="btnradio52" autocomplete="off" v-model="legLeft" value="3">
          <label class="btn btn-outline-primary"> Sclérose adhérente au plan profond</label>

        <p class="description">pied gauche</p>

          <input type="radio" class="btn-check" name="btnradio14" id="btnradio53" autocomplete="off" v-model="feetLeft" value="0">
          <label class="btn btn-outline-primary"> Absence de sclérose</label>

          <input type="radio" class="btn-check" name="btnradio14" id="btnradio54" autocomplete="off" v-model="feetLeft" value="1">
          <label class="btn btn-outline-primary">Sclérose superficielle</label>

          <input type="radio" class="btn-check" name="btnradio14" id="btnradio55" autocomplete="off" v-model="feetLeft" value="2">
          <label class="btn btn-outline-primary">Sclérose intermédiaire</label>

          <input type="radio" class="btn-check" name="btnradio14" id="btnradio56" autocomplete="off" v-model="feetLeft" value="3">
          <label class="btn btn-outline-primary"> Sclérose adhérente au plan profond</label>

      <h4 class="categorie">Bas droit</h4>
        <p class="description">Cuisse droite</p>

          <input type="radio" class="btn-check" name="btnradio15" id="btnradio57" autocomplete="off" v-model="thigRight" value="0">
          <label class="btn btn-outline-primary"> Absence de sclérose</label>

          <input type="radio" class="btn-check" name="btnradio15" id="btnradio58" autocomplete="off" v-model="thigRight" value="1">
          <label class="btn btn-outline-primary">Sclérose superficielle</label>

          <input type="radio" class="btn-check" name="btnradio15" id="btnradio59" autocomplete="off" v-model="thigRight" value="2">
          <label class="btn btn-outline-primary">Sclérose intermédiaire</label>

          <input type="radio" class="btn-check" name="btnradio15" id="btnradio60" autocomplete="off" v-model="thigRight" value="3">
          <label class="btn btn-outline-primary"> Sclérose adhérente au plan profond</label>

        <p class="description">Jambe droite</p>

          <input type="radio" class="btn-check" name="btnradio16" id="btnradio61" autocomplete="off" v-model="legRight" value="0">
          <label class="btn btn-outline-primary"> Absence de sclérose</label>

          <input type="radio" class="btn-check" name="btnradio16" id="btnradio62" autocomplete="off" v-model="legRight" value="1">
          <label class="btn btn-outline-primary">Sclérose superficielle</label>

          <input type="radio" class="btn-check" name="btnradio16" id="btnradio63" autocomplete="off" v-model="legRight" value="2">
          <label class="btn btn-outline-primary">Sclérose intermédiaire</label>

          <input type="radio" class="btn-check" name="btnradio16" id="btnradio64" autocomplete="off" v-model="legRight" value="3">
          <label class="btn btn-outline-primary"> Sclérose adhérente au plan profond</label>

        <p class="description">pied droit</p>

          <input type="radio" class="btn-check" name="btnradio17" id="btnradio65" autocomplete="off" v-model="feetRight" value="0">
          <label class="btn btn-outline-primary"> Absence de sclérose</label>

          <input type="radio" class="btn-check" name="btnradio17" id="btnradio66" autocomplete="off" v-model="feetRight" value="1">
          <label class="btn btn-outline-primary">Sclérose superficielle</label>

          <input type="radio" class="btn-check" name="btnradio17" id="btnradio67" autocomplete="off" v-model="feetRight" value="2">
          <label class="btn btn-outline-primary">Sclérose intermédiaire</label>

          <input type="radio" class="btn-check" name="btnradio17" id="btnradio68" autocomplete="off" v-model="feetRight" value="3">
          <label class="btn btn-outline-primary"> Sclérose adhérente au plan profond</label>

        <button type="button" class="btn validate" v-on:click="calcScore"> calculez</button>
        <p class="details">Résultat: {{result}}</p>
</form>
        
  
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name:"Rodnan",
 mounted(){},
    data(){
      return {
      face:null,
      thorax:null,
      abdomen:null,
      armLeft:null,
      foreArmLeft:null,
      handLeft:null,
      fingerLeft:null,
      armRight:null,
      forArmRight:null,
      handRight:null,
      fingerRight:null,
      thighLeft:null,
      legLeft:null,
      feetLeft:null,
      thigRight:null,
      legRight:null,
      feetRight:null,
      result:null
      };
    },
    methods:{
      calcScore()
      {
        this.result = Number(this.face) + Number(this.thorax) + Number(this.abdomen) + Number(this.armLeft) + Number(this.foreArmLeft) + Number(this.handLeft) + Number(this.fingerLeft) + Number(this.armRight) 
        + Number(this.forArmRight) + Number(this.handRight) + Number(this.fingerRight) + Number(this.thighLeft) + Number(this.legLeft) + Number(this.feetLeft) + Number(this.thigRight) + Number(this.legRight) + Number(this.feetRight);
      }
    }
})
</script>

<style></style>
