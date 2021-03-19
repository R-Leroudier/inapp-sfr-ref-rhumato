<template>
  <div>
    <h2 class="title">Calcul du score de RODNAN</h2>
      <form>
        <h4 class="categorie">Corps</h4>

        <section>
          <p class="description">Visage</p>

            <input type="radio" id="input1" v-model="face" value="0">
            <label class="btn" for="input1"> Absence de sclérose</label>

            <input type="radio" id="input2" v-model="face" value="1">
            <label class="btn" for="input2">Sclérose superficielle</label>

            <input type="radio" id="input3" v-model="face" value="2">
            <label class="btn" for="input3">Sclérose intermédiaire</label>

            <input type="radio" id="input4" v-model="face" value="3">
            <label class="btn" for="input4"> Sclérose adhérente au plan profond</label>
        </section>

        <section>
          <p class="description">Thorax</p>

            <input type="radio" id="input5" v-model="thorax" value="0">
            <label class="btn" for="input5"> Absence de sclérose</label>

            <input type="radio" id="input6" v-model="thorax" value="1">
            <label class="btn" for="input6">Sclérose superficielle</label>

            <input type="radio" id="input7" v-model="thorax" value="2">
            <label class="btn" for="input7">Sclérose intermédiaire</label>

            <input type="radio" id="input8" v-model="thorax" value="3">
            <label class="btn" for="input8"> Sclérose adhérente au plan profond</label>
        </section>

        <section>
          <p class="description">Abdomen</p>

            <input type="radio" id="input9" v-model="abdomen" value="0">
            <label class="btn" for="input9"> Absence de sclérose</label>

            <input type="radio" id="input10" v-model="abdomen" value="1">
            <label class="btn" for="input10">Sclérose superficielle</label>

            <input type="radio" id="input11" v-model="abdomen" value="2">
            <label class="btn" for="input11">Sclérose intermédiaire</label>

            <input type="radio" id="input12" v-model="abdomen" value="3">
            <label class="btn" for="input12"> Sclérose adhérente au plan profond</label>
        </section>

      <h4 class="categorie">Haut gauche</h4>

        <section>
          <p class="description">Bras gauche</p>

            <input type="radio" id="input13" v-model="armLeft" value="0">
            <label class="btn" for="input13"> Absence de sclérose</label>

            <input type="radio" id="input14" v-model="armLeft" value="1">
            <label class="btn" for="input14">Sclérose superficielle</label>

            <input type="radio" id="input15" v-model="armLeft" value="2">
            <label class="btn" for="input15">Sclérose intermédiaire</label>

            <input type="radio" id="input16" v-model="armLeft" value="3">
            <label class="btn" for="input16"> Sclérose adhérente au plan profond</label>
        </section>

        <section>
          <p class="description">Av-Bras gauche</p>

            <input type="radio" id="input17" v-model="foreArmLeft" value="0">
            <label class="btn" for="input17"> Absence de sclérose</label>

            <input type="radio" id="input18" v-model="forArmLeft" value="1">
            <label class="btn" for="input18">Sclérose superficielle</label>

            <input type="radio" id="input19" v-model="forArmLeft" value="2">
            <label class="btn" for="input19">Sclérose intermédiaire</label>

            <input type="radio" id="input20" v-model="forArmLeft" value="3">
            <label class="btn" for="input20"> Sclérose adhérente au plan profond</label>
        </section>

        <section>
          <p class="description">Main gauche</p>

            <input type="radio" id="input21" v-model="handLeft" value="0">
            <label class="btn" for="input21"> Absence de sclérose</label>

            <input type="radio" id="input22" v-model="handLeft" value="1">
            <label class="btn" for="input22">Sclérose superficielle</label>

            <input type="radio" id="input23" v-model="handLeft" value="2">
            <label class="btn">Sclérose intermédiaire</label>

            <input type="radio" id="input24" v-model="handLeft" value="3">
            <label class="btn" for="input24"> Sclérose adhérente au plan profond</label>
        </section>

        <section>
          <p class="description">Doigts gauche</p>

            <input type="radio" id="input25" v-model="fingerLeft" value="0">
            <label class="btn" for="input25"> Absence de sclérose</label>

            <input type="radio" id="input26" v-model="fingerLeft" value="1">
            <label class="btn" for="input26">Sclérose superficielle</label>

            <input type="radio" id="input27" v-model="fingerLeft" value="2">
            <label class="btn" for="input27">Sclérose intermédiaire</label>

            <input type="radio" id="input28" v-model="fingerLeft" value="3">
            <label class="btn" for="input28"> Sclérose adhérente au plan profond</label>
        </section>

      <h4 class="categorie">Haut droit</h4>
        
        <section>
          <p class="description">Bras droit</p>

            <input type="radio" id="input29" v-model="armRight" value="0">
            <label class="btn" for="input29"> Absence de sclérose</label>

            <input type="radio" id="input30" v-model="armRight" value="1">
            <label class="btn" for="input30">Sclérose superficielle</label>

            <input type="radio" id="input31" v-model="armRight" value="2">
            <label class="btn" for="input31">Sclérose intermédiaire</label>

            <input type="radio" id="input32" v-model="armRight" value="3">
            <label class="btn" for="input32"> Sclérose adhérente au plan profond</label>
        </section>

        <section>
          <p class="description">Av-bras droit </p>

            <input type="radio" id="input33" v-model="forArmRight" value="0">
            <label class="btn" for="input33"> Absence de sclérose</label>

            <input type="radio" id="input34" v-model="forArmRight" value="1">
            <label class="btn" for="input34">Sclérose superficielle</label>

            <input type="radio" id="input35" v-model="forArmRight" value="2">
            <label class="btn" for="input35">Sclérose intermédiaire</label>

            <input type="radio" id="input36" v-model="forArmRight" value="3">
            <label class="btn" for="input36"> Sclérose adhérente au plan profond</label>

        </section>

        <section>
          <p class="description">Main droite</p>

            <input type="radio" id="input37" v-model="handRight" value="0">
            <label class="btn" for="input37"> Absence de sclérose</label>

            <input type="radio" id="input38" v-model="handRight" value="1">
            <label class="btn" for="input38">Sclérose superficielle</label>

            <input type="radio" id="input39" v-model="handRight" value="2">
            <label class="btn" for="input39">Sclérose intermédiaire</label>

            <input type="radio" id="input40" v-model="handRight" value="3">
            <label class="btn" for="input40"> Sclérose adhérente au plan profond</label>
        </section>

        <section>
          <p class="description">Doigts droit</p>

            <input type="radio" id="input41" v-model="fingerRight" value="0">
            <label class="btn" for="input41"> Absence de sclérose</label>

            <input type="radio" id="input42" v-model="fingerRight" value="1">
            <label class="btn" for="input42">Sclérose superficielle</label>

            <input type="radio" id="input43" v-model="fingerRight" value="2">
            <label class="btn" for="input43">Sclérose intermédiaire</label>

            <input type="radio" id="input44" v-model="fingerRight" value="3">
            <label class="btn" for="input44"> Sclérose adhérente au plan profond</label>
        </section>

      <h4 class="categorie">Bas gauche</h4>
        <section>
          <p class="description">Cuisse gauche</p>

            <input type="radio" id="input45" v-model="thighLeft" value="0">
            <label class="btn" for="input45"> Absence de sclérose</label>

            <input type="radio" id="input46" v-model="thighLeft" value="1">
            <label class="btn" for="input46">Sclérose superficielle</label>

            <input type="radio" id="input47" v-model="thighLeft" value="2">
            <label class="btn" for="input47">Sclérose intermédiaire</label>

            <input type="radio" id="input48" v-model="thighLeft" value="3">
            <label class="btn" for="input48"> Sclérose adhérente au plan profond</label>
        </section>
        
        <section>
          <p class="description">Jambe gauche</p>

            <input type="radio" id="input49" v-model="legLeft" value="0">
            <label class="btn" for="input49"> Absence de sclérose</label>

            <input type="radio" id="input49" v-model="legLeft" value="1">
            <label class="btn" for="input49">Sclérose superficielle</label>

            <input type="radio" id="input50" v-model="legLeft" value="2">
            <label class="btn" for="input50">Sclérose intermédiaire</label>

            <input type="radio" id="input51" v-model="legLeft" value="3">
            <label class="btn" for="input51"> Sclérose adhérente au plan profond</label>
        </section>

        <section>
          <p class="description">pied gauche</p>

            <input type="radio" id="input52" v-model="feetLeft" value="0">
            <label class="btn" for="input52"> Absence de sclérose</label>

            <input type="radio" id="input53" v-model="feetLeft" value="1">
            <label class="btn" for="input53">Sclérose superficielle</label>

            <input type="radio" id="input54" v-model="feetLeft" value="2">
            <label class="btn" for="input54">Sclérose intermédiaire</label>

            <input type="radio" id="input55" v-model="feetLeft" value="3">
            <label class="btn" for="input55">Sclérose adhérente au plan profond</label>
        </section>
      
        <h4 class="categorie">Bas droit</h4>
          <section>
          <p class="description">Cuisse droite</p>

            <input type="radio" id="input56" v-model="thigRight" value="0">
            <label class="btn" for="input56"> Absence de sclérose</label>

            <input type="radio" id="input57" v-model="thigRight" value="1">
            <label class="btn" for="input57">Sclérose superficielle</label>

            <input type="radio" id="input58" v-model="thigRight" value="2">
            <label class="btn" for="input58">Sclérose intermédiaire</label>

            <input type="radio" id="input59" v-model="thigRight" value="3">
            <label class="btn" for="input59"> Sclérose adhérente au plan profond</label>
        </section>

        <section>
          <p class="description">Jambe droite</p>

            <input type="radio" id="input60" v-model="legRight" value="0">
            <label class="btn" for="input60"> Absence de sclérose</label>

            <input type="radio" id="input61" v-model="legRight" value="1">
            <label class="btn" for="input61">Sclérose superficielle</label>

            <input type="radio" id="input62" v-model="legRight" value="2">
            <label class="btn" for="input62">Sclérose intermédiaire</label>

            <input type="radio" id="input63" v-model="legRight" value="3">
            <label class="btn" for="input63"> Sclérose adhérente au plan profond</label>
        </section>
        
        <section>
          <p class="description">pied droit</p>

            <input type="radio" id="input64" v-model="feetRight" value="0">
            <label class="btn" for="input64"> Absence de sclérose</label>

            <input type="radio" id="input65" v-model="feetRight" value="1">
            <label class="btn" for="input65">Sclérose superficielle</label>

            <input type="radio" id="input66" v-model="feetRight" value="2">
            <label class="btn" for="input66">Sclérose intermédiaire</label>

            <input type="radio" id="input67" v-model="feetRight" value="3">
            <label class="btn" for="input67"> Sclérose adhérente au plan profond</label>

        </section>

        <button type="button" class="validate" v-on:click="calcScore"> calculer</button>
        <input class="resulta" v-model="result">
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

<style>
.description{
  font-size: 25px;
}
.categorie{
  font-size: 30px;
}

h2{
  font-size: 40px;
} 
.resulta{
  background-color: rgb(224, 222, 222);
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  justify-content: center;
  align-content: space-around;
  align-items: flex-start;
  text-align: center;
  padding-bottom: 3px;
  padding-top: 3px;
  margin: 35px;
  font-size: 30px;
}

.validate{
  background-color: rgb(72, 179, 86); 
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 5px;
  justify-content: center;
  align-content: space-around;
  align-items: flex-start;
  height: 50px;
  border-radius: 8px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  color: rgb(49, 49, 49);
}

input{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

label:hover,
label:focus {
  color: grey;
}

label:active {
  background-color: white;
  color: black;
  outline: 1px solid black;
}
</style>
