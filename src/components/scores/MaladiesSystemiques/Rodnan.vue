<template>
  <div>
    <h2 class="title">Calcul du score de RODNAN</h2>
      <form>
        <h4 class="categorie">Corps</h4>

        <section>
          <p class="description">Visage</p>

            <input type="radio" class="btn" v-model="face" value="0">
            <label class="btn"> Absence de sclérose</label>

            <input type="radio" class="btn" v-model="face" value="1">
            <label class="btn">Sclérose superficielle</label>

            <input type="radio" class="btn" v-model="face" value="2">
            <label class="btn">Sclérose intermédiaire</label>

            <input type="radio" class="btn" v-model="face" value="3">
            <label class="btn"> Sclérose adhérente au plan profond</label>
        </section>

        <section>
          <p class="description">Thorax</p>

            <input type="radio" class="btn" v-model="thorax" value="0">
            <label class="btn"> Absence de sclérose</label>

            <input type="radio" class="btn" v-model="thorax" value="1">
            <label class="btn">Sclérose superficielle</label>

            <input type="radio" class="btn" v-model="thorax" value="2">
            <label class="btn">Sclérose intermédiaire</label>

            <input type="radio" class="btn" v-model="thorax" value="3">
            <label class="btn"> Sclérose adhérente au plan profond</label>
        </section>

        <section>
          <p class="description">Abdomen</p>

            <input type="radio" class="btn" v-model="abdomen" value="0">
            <label class="btn"> Absence de sclérose</label>

            <input type="radio" class="btn" v-model="abdomen" value="1">
            <label class="btn">Sclérose superficielle</label>

            <input type="radio" class="btn" v-model="abdomen" value="2">
            <label class="btn">Sclérose intermédiaire</label>

            <input type="radio" class="btn" v-model="abdomen" value="3">
            <label class="btn"> Sclérose adhérente au plan profond</label>
        </section>

      <h4 class="categorie">Haut gauche</h4>

        <section>
          <p class="description">Bras gauche</p>

            <input type="radio" class="btn" v-model="armLeft" value="0">
            <label class="btn"> Absence de sclérose</label>

            <input type="radio" class="btn" v-model="armLeft" value="1">
            <label class="btn">Sclérose superficielle</label>

            <input type="radio" class="btn" v-model="armLeft" value="2">
            <label class="btn">Sclérose intermédiaire</label>

            <input type="radio" class="btn" v-model="armLeft" value="3">
            <label class="btn"> Sclérose adhérente au plan profond</label>
        </section>

        <section>
          <p class="description">Av-Bras gauche</p>

            <input type="radio" class="btn" v-model="foreArmLeft" value="0">
            <label class="btn"> Absence de sclérose</label>

            <input type="radio" class="btn" v-model="forArmLeft" value="1">
            <label class="btn">Sclérose superficielle</label>

            <input type="radio" class="btn" v-model="forArmLeft" value="2">
            <label class="btn">Sclérose intermédiaire</label>

            <input type="radio" class="btn" v-model="forArmLeft" value="3">
            <label class="btn"> Sclérose adhérente au plan profond</label>
        </section>

        <section>
          <p class="description">Main gauche</p>

            <input type="radio" class="btn" v-model="handLeft" value="0">
            <label class="btn"> Absence de sclérose</label>

            <input type="radio" class="btn" v-model="handLeft" value="1">
            <label class="btn">Sclérose superficielle</label>

            <input type="radio" class="btn" v-model="handLeft" value="2">
            <label class="btn">Sclérose intermédiaire</label>

            <input type="radio" class="btn" v-model="handLeft" value="3">
            <label class="btn"> Sclérose adhérente au plan profond</label>
        </section>

        <section>
          <p class="description">Doigts gauche</p>

            <input type="radio" class="btn" v-model="fingerLeft" value="0">
            <label class="btn"> Absence de sclérose</label>

            <input type="radio" class="btn" v-model="fingerLeft" value="1">
            <label class="btn">Sclérose superficielle</label>

            <input type="radio" class="btn" v-model="fingerLeft" value="2">
            <label class="btn">Sclérose intermédiaire</label>

            <input type="radio" class="btn" v-model="fingerLeft" value="3">
            <label class="btn"> Sclérose adhérente au plan profond</label>
        </section>

      <h4 class="categorie">Haut droit</h4>
        
        <section>
          <p class="description">Bras droit</p>

            <input type="radio" class="btn" v-model="armRight" value="0">
            <label class="btn"> Absence de sclérose</label>

            <input type="radio" class="btn" v-model="armRight" value="1">
            <label class="btn">Sclérose superficielle</label>

            <input type="radio" class="btn" v-model="armRight" value="2">
            <label class="btn">Sclérose intermédiaire</label>

            <input type="radio" class="btn" v-model="armRight" value="3">
            <label class="btn"> Sclérose adhérente au plan profond</label>
        </section>

        <section>
          <p class="description">Av-bras droit </p>

            <input type="radio" class="btn" v-model="forArmRight" value="0">
            <label class="btn"> Absence de sclérose</label>

            <input type="radio" class="btn" v-model="forArmRight" value="1">
            <label class="btn">Sclérose superficielle</label>

            <input type="radio" class="btn" v-model="forArmRight" value="2">
            <label class="btn">Sclérose intermédiaire</label>

            <input type="radio" class="btn" v-model="forArmRight" value="3">
            <label class="btn"> Sclérose adhérente au plan profond</label>

        </section>

        <section>
          <p class="description">Main droite</p>

            <input type="radio" class="btn" v-model="handRight" value="0">
            <label class="btn"> Absence de sclérose</label>

            <input type="radio" class="btn" v-model="handRight" value="1">
            <label class="btn">Sclérose superficielle</label>

            <input type="radio" class="btn" v-model="handRight" value="2">
            <label class="btn">Sclérose intermédiaire</label>

            <input type="radio" class="btn" v-model="handRight" value="3">
            <label class="btn"> Sclérose adhérente au plan profond</label>
        </section>

        <section>
          <p class="description">Doigts droit</p>

            <input type="radio" class="btn" v-model="fingerRight" value="0">
            <label class="btn" > Absence de sclérose</label>

            <input type="radio" class="btn" v-model="fingerRight" value="1">
            <label class="btn">Sclérose superficielle</label>

            <input type="radio" class="btn" v-model="fingerRight" value="2">
            <label class="btn">Sclérose intermédiaire</label>

            <input type="radio" class="btn" v-model="fingerRight" value="3">
            <label class="btn"> Sclérose adhérente au plan profond</label>
        </section>

      <h4 class="categorie">Bas gauche</h4>
        <section>
          <p class="description">Cuisse gauche</p>

            <input type="radio" class="btn" v-model="thighLeft" value="0">
            <label class="btn"> Absence de sclérose</label>

            <input type="radio" class="btn" v-model="thighLeft" value="1">
            <label class="btn">Sclérose superficielle</label>

            <input type="radio" class="btn" v-model="thighLeft" value="2">
            <label class="btn">Sclérose intermédiaire</label>

            <input type="radio" class="btn" v-model="thighLeft" value="3">
            <label class="btn"> Sclérose adhérente au plan profond</label>
        </section>
        
        <section>
          <p class="description">Jambe gauche</p>

            <input type="radio" class="btn" v-model="legLeft" value="0">
            <label class="btn"> Absence de sclérose</label>

            <input type="radio" class="btn" v-model="legLeft" value="1">
            <label class="btn">Sclérose superficielle</label>

            <input type="radio" class="btn" v-model="legLeft" value="2">
            <label class="btn">Sclérose intermédiaire</label>

            <input type="radio" class="btn" v-model="legLeft" value="3">
            <label class="btn"> Sclérose adhérente au plan profond</label>
        </section>

        <section>
          <p class="description">pied gauche</p>

            <input type="radio" class="btn" v-model="feetLeft" value="0">
            <label class="btn"> Absence de sclérose</label>

            <input type="radio" class="btn" v-model="feetLeft" value="1">
            <label class="btn">Sclérose superficielle</label>

            <input type="radio" class="btn" v-model="feetLeft" value="2">
            <label class="btn">Sclérose intermédiaire</label>

            <input type="radio" class="btn" v-model="feetLeft" value="3">
            <label class="btn"> Sclérose adhérente au plan profond</label>
        </section>
      
        <h4 class="categorie">Bas droit</h4>
          <section>
          <p class="description">Cuisse droite</p>

            <input type="radio" v-model="thigRight" value="0">
            <label class="btn"> Absence de sclérose</label>

            <input type="radio" v-model="thigRight" value="1">
            <label class="btn">Sclérose superficielle</label>

            <input type="radio" v-model="thigRight" value="2">
            <label class="btn">Sclérose intermédiaire</label>

            <input type="radio" v-model="thigRight" value="3">
            <label class="btn"> Sclérose adhérente au plan profond</label>
        </section>

        <section>
          <p class="description">Jambe droite</p>

            <input type="radio" v-model="legRight" value="0">
            <label class="btn"> Absence de sclérose</label>

            <input type="radio" v-model="legRight" value="1">
            <label class="btn">Sclérose superficielle</label>

            <input type="radio" v-model="legRight" value="2">
            <label class="btn">Sclérose intermédiaire</label>

            <input type="radio" v-model="legRight" value="3">
            <label class="btn"> Sclérose adhérente au plan profond</label>
        </section>
        
        <section>
          <p class="description">pied droit</p>

            <input type="radio" v-model="feetRight" value="0">
            <label class="btn"> Absence de sclérose</label>

            <input type="radio" v-model="feetRight" value="1">
            <label class="btn">Sclérose superficielle</label>

            <input type="radio" v-model="feetRight" value="2">
            <label class="btn">Sclérose intermédiaire</label>

            <input type="radio" v-model="feetRight" value="3">
            <label class="btn"> Sclérose adhérente au plan profond</label>

        </section>

        <button type="button" class="validate" v-on:click="calcScore"> calculer</button>
        <p class="resulta">Résultat: {{result}}</p>
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
  font-size: 25px;
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

</style>
