<template>
<div >

<h2 class="title">Score DAS 28</h2>
<p class="description"></p>
<span class="line">------</span>
<card class="introduction">
    <h5>Interprétation:</h5>
     <p>Le nombre d'articulations douloureuses (de 0 à 28) est indiqué par le patient lors de la consultation. Le nombre d'articulations gonflées est constaté par le médecin lors de la consultation. Attention, les articulations des pieds et des chevilles ne sont pas prises en compte.</p>
     <p>L'évaluation globale par le patient de l’activité de la PR est une échelle visuelle analogique de 0 à 100 mm. Le principe est le même que pour l'évaluation de la douleur : 0 = aucune manifestation de la PR, 100 = gravité maximale que peut imaginer le patient.</p>
     <p>Lors de l'utilisation de la VS, le nombre à indiquer est le nombre de mm à la première heure.</p>

</card>
<form class="form" style="display:flex; flex-direction:column">
    <section>
<label class="categorie">Articulations Douloureuses</label> 
<input type="number" required v-model="valuePainfullJoint" class="inputNumber">
    </section>

<section>
<label class="categorie">Articulations Gonflées</label>
<input type="number" required v-model="valueSwollenJoint" class="inputNumber">
</section>

<section>
<label class="categorie">Evaluation de la maladie</label>
<input type="number" required v-model="valueDiseaseAssesment" class="inputNumber">
</section>

<section>
<label class="categorie">V.S. ou C.R.P. (mm.h1 ou mg/l)</label>
<input type="number" required v-model="valueVsCrp" class="inputNumber">
</section>

<section>
<input type="radio" class="btn" value="Vs" v-model="picked"><label for="one">Utiliser V.S.</label>

<input type="radio" class="btn validate" value="Crp" v-model="picked"><label for="one">Utiliser C.R.P.</label>
</section>

<button type="button" class="btn validate" v-on:click="calcScore" > Voir résultat</button>
</form>

<card class="result">
<p>Score :{{score}}</p>
<p>Activité P.R :{{prActivity}}</p>

</card>
<span class="line"></span>

</div>

</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
 mounted()
    {

    },
    data()
    {
        return {
            valuePainfullJoint:0,
            valueSwollenJoint:0,
            valueDiseaseAssesment:0,
            valueVsCrp:0,
            score:0,
            picked:"",
            prActivity:""
            }
    },
    methods:
    {
        calcScore()
        {
            this.score = 0.56*Math.sqrt(this.valuePainfullJoint) +  0.28*Math.sqrt(this.valueSwollenJoint) + 0.014*(this.valueDiseaseAssesment);
            switch (this.picked)
            {
                case "Vs":
                    this.score = this.score + 0.7*Math.log(this.valueVsCrp);
                    break;
                case "Crp":
                    // Witout Number(), Js do a concatenation instead of a sum
                    this.score = this.score + 0.36*Math.log(Number(this.valueVsCrp) + Number(1)) + 0.96;
                    break;
                default:
                    this.score = 0;
            }
            this.calcPrActivity();
        },

        calcPrActivity()
        {
            if(this.score < 2.6)
            {
                this.prActivity = "Rémission"
            }
            if(this.score >= 2.6 && this.score < 3.3)
            {
                this.prActivity = "Faible"
            }
            if(this.score >= 3.3 && this.score <= 5.1)
            {
                this.prActivity = "Modérée"
            }
            if(this.score > 5.1)
            {
                this.prActivity = "Forte"
            }
        }
    }
     
})
</script>



<style>
.inputNumber{
    width:60px;
}

button{
    width:150px;
    align-items: center;
}
</style>


