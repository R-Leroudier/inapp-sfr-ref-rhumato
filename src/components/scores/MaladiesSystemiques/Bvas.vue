<template>
    <div>
        <h2 class="title">Vascularite - BVAS</h2>
        <p class="line">------</p>

        <form class="form">
            <p class ="details">Ne cocher que les manifestations témoignant d’une maladie active (les séquelles présentes depuis plus de 3 mois sont appréciées par le VDI). Si toutes les manifestations représentent une maladie chronique active, mais faiblement (smoldering/grumbling disease) et qu’il n’y aucune manifestation nouvelle récente ou d’aggravation franche, ne cocher pas de cases. Le score indiqué est celui pour une maladie active récemment.</p>

            <div>
                <h3 class="title">Signes généraux</h3>

                <input type="checkbox" name="general1" id="general1" v-on:change="toggleAndUpdate(general, 0)">
                <label for="general1">Myalgies</label>

                <input type="checkbox" name="general2" id="general2" v-on:change="toggleAndUpdate(general, 1)">
                <label for="general2">Arthralgies ou arthrites</label>

                <input type="checkbox" name="general3" id="general3" v-on:change="toggleAndUpdate(general, 2)">
                <label for="general3">Fièvre  ≥ 38°C</label>

                <input type="checkbox" name="general4" id="general4" v-on:change="toggleAndUpdate(general, 3)">
                <label for="general4">Amaigrissement  ≥ 2kg</label>
                
                <p v-if="stable">Sous total {{ general.subTotal }} (max : {{ general.stableMax }})</p>
                <p v-if="!stable">Sous total {{ general.subTotal }} (max : {{ general.unstableMax }})</p>
            </div>

            <div>
                <h3 class="title">Signes cutanés</h3>

                <input type="checkbox" name="skin1" id="skin1" v-on:change="toggleAndUpdate(skin, 0)">
                <label for="skin1">Nécrose</label>

                <input type="checkbox" name="skin2" id="skin2" v-on:change="toggleAndUpdate(skin, 1)">
                <label for="skin2">Purpura</label>

                <input type="checkbox" name="skin3" id="skin3" v-on:change="toggleAndUpdate(skin, 2)">
                <label for="skin3">Ulcération(s)</label>

                <input type="checkbox" name="skin4" id="skin4" v-on:change="toggleAndUpdate(skin, 3)">
                <label for="skin4">Gangrène</label>

                <input type="checkbox" name="skin5" id="skin5" v-on:change="toggleAndUpdate(skin, 4)">
                <label for="skin5">Autre(s) lésion(s) liée(s) à la vasculatite</label>

                <p v-if="stable">Sous total {{ skin.subTotal }} (max : {{ skin.stableMax }})</p>
                <p v-if="!stable">Sous total {{ skin.subTotal }} (max : {{ skin.unstableMax }})</p>
                </div>

            <div>
                <h3 class="title">Atteintes muqueuses et oculaires</h3>
                <!-- 10 -->

                <input type="checkbox" name="mucousAndEyes1" id="mucousAndEyes1" v-on:change="toggleAndUpdate(mucousAndEyes, 0)">
                <label for="mucousAndEyes1">Ulcération bucale / granulome</label>
                
                <input type="checkbox" name="mucousAndEyes2" id="mucousAndEyes2" v-on:change="toggleAndUpdate(mucousAndEyes, 1)">
                <label for="mucousAndEyes2">Ulcération génitale</label>
                
                <input type="checkbox" name="mucousAndEyes3" id="mucousAndEyes3" v-on:change="toggleAndUpdate(mucousAndEyes, 2)">
                <label for="mucousAndEyes3">Inflammation lacrimale ou salivaire</label>
                
                <input type="checkbox" name="mucousAndEyes4" id="mucousAndEyes4" v-on:change="toggleAndUpdate(mucousAndEyes, 3)">
                <label for="mucousAndEyes4">Exophtalmie</label>
                
                <input type="checkbox" name="mucousAndEyes5" id="mucousAndEyes5" v-on:change="toggleAndUpdate(mucousAndEyes, 4)">
                <label for="mucousAndEyes5">Episclérite</label>
                
                <input type="checkbox" name="mucousAndEyes6" id="mucousAndEyes6" v-on:change="toggleAndUpdate(mucousAndEyes, 5)">
                <label for="mucousAndEyes6">Conjonctivite / blépharite / kératite</label>
                
                <input type="checkbox" name="mucousAndEyes7" id="mucousAndEyes7" v-on:change="toggleAndUpdate(mucousAndEyes, 6)">
                <label for="mucousAndEyes7">Baisse progressive d'acuité visuelle / vue trouble</label>
                
                <input type="checkbox" name="mucousAndEyes8" id="mucousAndEyes8" v-on:change="toggleAndUpdate(mucousAndEyes, 7)">
                <label for="mucousAndEyes8">Baisse brutale d'acuité visuelle / cécité</label>
                
                <input type="checkbox" name="mucousAndEyes9" id="mucousAndEyes9" v-on:change="toggleAndUpdate(mucousAndEyes, 8)">
                <label for="mucousAndEyes9">Uvéite</label>
                
                <input type="checkbox" name="mucousAndEyes10" id="mucousAndEyes10" v-on:change="toggleAndUpdate(mucousAndEyes, 9)">
                <label for="mucousAndEyes10">Vascularite rétinienne /  thrombose / hemorragie / exsudats rétiniens</label>
                
                <p v-if="stable">Sous total {{ mucousAndEyes.subTotal }} (max : {{ mucousAndEyes.stableMax }})</p>
                <p v-if="!stable">Sous total {{ mucousAndEyes.subTotal }} (max : {{ mucousAndEyes.unstableMax }})</p>                
            </div>

            <div>
                <h3 class="title">Singes ORL</h3>
                <!-- 5 -->

                <input type="checkbox" name="orl1" id="orl1" v-on:change="toggleAndUpdate(orl, 0)">
                <label for="orl1">Epistaxis / croûtes nasales / ulcération ou granulome nasal</label>
                
                <input type="checkbox" name="orl2" id="orl2" v-on:change="toggleAndUpdate(orl, 1)">
                <label for="orl2">Sinusite</label>
                
                <input type="checkbox" name="orl3" id="orl3" v-on:change="toggleAndUpdate(orl, 2)">
                <label for="orl3">Sténose sous-glottique</label>
                
                <input type="checkbox" name="orl4" id="orl4" v-on:change="toggleAndUpdate(orl, 3)">
                <label for="orl4">Baisse d'audition de transmission (conduction)</label>
                
                <input type="checkbox" name="orl5" id="orl5" v-on:change="toggleAndUpdate(orl, 4 )">
                <label for="orl5">Baisse d'audition de perception (sensorielle)</label>
                
                <p v-if="stable">Sous total {{ orl.subTotal }} (max : {{ orl.stableMax }}</p>
                <p v-if="!stable">Sous total {{ orl.subTotal }} (max : {{ orl.unstableMax }}</p>                
            </div>

            <div>
                <h3 class="title">Signes pulmonaires</h3>
                <!-- 7 -->

                <input type="checkbox" name="pulmonary1" id="pulmonary1" v-on:change="toggleAndUpdate(pulmonary, 0)">
                <label for="pulmonary1">Wheezing / sibilants</label>
                
                <input type="checkbox" name="pulmonary2" id="pulmonary2" v-on:change="toggleAndUpdate(pulmonary, 1)">
                <label for="pulmonary2">Nodule(s) / nodule(s) excavé(s)</label>
                
                <input type="checkbox" name="pulmonary3" id="pulmonary3" v-on:change="toggleAndUpdate(pulmonary, 2)">
                <label for="pulmonary3">Épanchement pleural</label>
                
                <input type="checkbox" name="pulmonary4" id="pulmonary4" v-on:change="toggleAndUpdate(pulmonary, 3)">
                <label for="pulmonary4">Infiltrat pulmonaire radiologique</label>
                
                <input type="checkbox" name="pulmonary5" id="pulmonary5" v-on:change="toggleAndUpdate(pulmonary, 4)">
                <label for="pulmonary5">Sténose endobronchique</label>
                
                <input type="checkbox" name="pulmonary6" id="pulmonary6" v-on:change="toggleAndUpdate(pulmonary, 5)">
                <label for="pulmonary6">Hémoragie intra-alvéolaire</label>
                
                <input type="checkbox" name="pulmonary7" id="pulmonary7" v-on:change="toggleAndUpdate(pulmonary, 6)">
                <label for="pulmonary7">Détresse respiratoire</label>
                
                <p v-if="stable">Sous total {{ pulmonary.subTotal }} (max : {{ pulmonary.stableMax }})</p>
                <p v-if="!stable">Sous total {{ pulmonary.subTotal }} (max : {{ pulmonary.unstableMax }})</p>                
            </div>

            <div>
                <h3 class="title">Signes cardiaques</h3>
                <!-- 6 -->

                <input type="checkbox" name="cardiac1" id="cardiac1" v-on:change="toggleAndUpdate(cardiac, 0)">
                <label for="cardiac1">Disparition d'un pouls</label>
                
                <input type="checkbox" name="cardiac2" id="cardiac2" v-on:change="toggleAndUpdate(cardiac, 1)">
                <label for="cardiac2">Atteinte valvulaire</label>
                
                <input type="checkbox" name="cardiac3" id="cardiac3" v-on:change="toggleAndUpdate(cardiac, 2)">
                <label for="cardiac3">Péricardite</label>
                
                <input type="checkbox" name="cardiac4" id="cardiac4" v-on:change="toggleAndUpdate(cardiac, 3)">
                <label for="cardiac4">Angor</label>
                
                <input type="checkbox" name="cardiac5" id="cardiac5" v-on:change="toggleAndUpdate(cardiac, 4)">
                <label for="cardiac5">Cardiomyopathie</label>
                
                <input type="checkbox" name="cardiac6" id="cardiac6" v-on:change="toggleAndUpdate(cardiac, 5)">
                <label for="cardiac6">Insufisance cardiaque congestive</label>
                
                <p v-if="stable">Sous total {{ cardiac.subTotal }} (max : {{ cardiac.stableMax }})</p>
                <p v-if="!stable">Sous total {{ cardiac.subTotal }} (max : {{ cardiac.unstableMax }})</p>
                </div>

            <div>
                <h3 class="title">Manifestations digestives</h3>
                <!-- 3 -->

                <input type="checkbox" name="digestive1" id="digestive1" v-on:change="toggleAndUpdate(digestive, 0)">
                <label for="digestive1">Péritonite</label>
                
                <input type="checkbox" name="digestive2" id="digestive2" v-on:change="toggleAndUpdate(digestive, 1)">
                <label for="digestive2">Diarrhée sanglante</label>
                
                <input type="checkbox" name="digestive3" id="digestive3" v-on:change="toggleAndUpdate(digestive, 2)">
                <label for="digestive3">Douleur abdominale (angor digestif)</label>
                
                <p v-if="stable">Sous total {{ digestive.subTotal }} (max : {{ digestive.stableMax }})</p>
                <p v-if="!stable">Sous total {{ digestive.subTotal }} (max : {{ digestive.unstableMax }})</p>                
            </div>

            <div>
                <h3 class="title">Signes rénaux</h3>
                <!-- 7 -->

                <input type="checkbox" name="renal1" id="renal1" v-on:change="toggleAndUpdate(renal, 0)">
                <label for="renal1">HTA</label>
                
                <input type="checkbox" name="renal2" id="renal2" v-on:change="toggleAndUpdate(renal, 1)">
                <label for="renal2">Protéinurie > 1+</label>
                
                <input type="checkbox" name="renal3" id="renal3" v-on:change="toggleAndUpdate(renal, 2)">
                <label for="renal3">Hématurie > 10 GR / champ</label>
                
                <input type="checkbox" name="renal4" id="renal4" v-on:change="toggleAndUpdate(renal, 3)">
                <label for="renal4">Créatininémie 125-249 μmol/L</label>
                
                <input type="checkbox" name="renal5" id="renal5" v-on:change="toggleAndUpdate(renal, 4)">
                <label for="renal5">Créatininémie 250-499 μmol/L</label>
                
                <input type="checkbox" name="renal6" id="renal6" v-on:change="toggleAndUpdate(renal, 5)">
                <label for="renal6">Créatininémie > 500 μmol/L</label>
                
                <input type="checkbox" name="renal7" id="renal7" v-on:change="toggleAndUpdate(renal, 6)">
                <label for="renal7">Augmentation de la créatininémie > 30% ou diminution de la clairance de la créatine > 25%</label>
                
                <p v-if="stable">Sous total {{ renal.subTotal }} (max : {{ renal.stableMax }})</p>
                <p v-if="!stable">Sous total {{ renal.subTotal }} (max : {{ renal.unstableMax }})</p> 
            </div>

            <div>
                <h3 class="title">Signes neurologiques</h3>
                <!-- 9 -->

                <input type="checkbox" name="neurologic1" id="neurologic1" v-on:change="toggleAndUpdate(neurologic, 0)">
                <label for="neurologic1">Céphalées</label>
                
                <input type="checkbox" name="neurologic2" id="neurologic2" v-on:change="toggleAndUpdate(neurologic, 1)">
                <label for="neurologic2">Méningite</label>
                
                <input type="checkbox" name="neurologic3" id="neurologic3" v-on:change="toggleAndUpdate(neurologic, 2)">
                <label for="neurologic3">Confusion, trouble de la conscience</label>
                
                <input type="checkbox" name="neurologic4" id="neurologic4" v-on:change="toggleAndUpdate(neurologic, 3)">
                <label for="neurologic4">Convulsions (non liées à l'HTA)</label>
                
                <input type="checkbox" name="neurologic5" id="neurologic5" v-on:change="toggleAndUpdate(neurologic, 4)">
                <label for="neurologic5">Atteinte médullaire (myélite)</label>
                
                <input type="checkbox" name="neurologic6" id="neurologic6" v-on:change="toggleAndUpdate(neurologic, 5)">
                <label for="neurologic6">Accident vasculaire cérébral</label>
                
                <input type="checkbox" name="neurologic7" id="neurologic7" v-on:change="toggleAndUpdate(neurologic, 6)">
                <label for="neurologic7">Atteinte de(s) paire(s) crânienne(s)</label>
                
                <input type="checkbox" name="neurologic8" id="neurologic8" v-on:change="toggleAndUpdate(neurologic, 7)">
                <label for="neurologic8">Aneuropathie périphérique sensitive</label>
                
                <input type="checkbox" name="neurologic9" id="neurologic9" v-on:change="toggleAndUpdate(neurologic, 8)">
                <label for="neurologic9">Neuropathie périphérique motrice</label>
                
                <p v-if="stable">Sous total {{ neurologic.subTotal }} (max : {{ neurologic.stableMax }})</p>
                <p v-if="!stable">Sous total {{ neurologic.subTotal }} (max : {{ neurologic.unstableMax }})</p>                
            </div>

            
                <input type="checkbox" name="stable" id="stable" v-on:change="toggleStable">
                <label for="stable">Toutes les atteintes notées sont anciennes et persistantes</label>
        </form>

        <card class="result" v-if="total < 11">Total {{ total }} </card>
        <card class="result" v-if="11 <= total && total < 30">{{ total }} </card>
        <card class="result" v-if="30 <= total && total < 50">{{ total }} </card>
        <card class="result" v-if="50 <= total">{{ total }} </card>
        <p>{{ total }}</p>

        <h3 class="title">Interprétation: </h3>
        <p>The Birmingham Vasculitis Activity Score (BVAS) is a method for assessing the activity of vasculitis. Note that scoring ranges are higher when any of the features are new or worse. Creatinine levels can be scored at patient’s first assessment only.</p>
    </div>

</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    mounted() {
        this.calcTotal();
    },
    data() {
        return {
            general: { 
                checked:    [false, false, false, false], //4
                stable:     [1,1,2,2],
                unstable:   [1,1,2,2],
                stableMax:  2,
                unstableMax: 3,
                subTotal:0,
            },

            skin: { 
                checked:    [false, false, false, false, false], //5
                stable:     [1,1,1,2,1],
                unstable:   [2,2,4,6,2],
                stableMax:  3,
                unstableMax: 6,
                subTotal:0,
            },

            mucousAndEyes: { 
                checked:    [false, false, false, false, false, false, false, false, false, false], //10
                stable:     [1,1,2,2,1,1,2,0,2,2],
                unstable:   [2,1,4,4,2,1,3,6,6,6],
                stableMax:  3,
                unstableMax: 6,
                subTotal:0,
            },

            orl: { 
                checked:    [false, false, false, false, false], //5
                stable:     [3,1,3,1,2],
                unstable:   [6,2,6,3,6],
                stableMax:  3,
                unstableMax: 6,
                subTotal:0,
            },

            pulmonary: { 
                checked:    [false, false, false, false, false, false, false], //7
                stable:     [1,0,2,2,2,3,3],
                unstable:   [2,3,4,4,4,6,6],
                stableMax:  3,
                unstableMax: 6,
                subTotal:0,
            },

            cardiac: { 
                checked:    [false, false, false, false, false, false, false], //6
                stable:     [1,2,1,2,3,3],
                unstable:   [4,4,3,4,6,6],
                stableMax:  3,
                unstableMax: 6,
                subTotal:0,
            },

            digestive: { 
                checked:    [false, false, false], //3
                stable:     [3,3,2],
                unstable:   [9,9,2],
                stableMax:  6,
                unstableMax: 9,
                subTotal:0,
            },

            renal: { 
                checked:    [false, false, false, false, false, false, false], //7
                stable:     [1,2,3,2,3,4,0],
                unstable:   [4,4,6,4,6,8,6],
                stableMax:  6,
                unstableMax: 12,
                subTotal:0,
            },

            neurologic: { 
                checked:    [false, false, false, false, false, false, false, false], //9
                stable:     [1,1,1,3,3,3,3,3,3],
                unstable:   [1,3,3,9,9,9,6,6,9],
                stableMax:  6,
                unstableMax: 9,
                subTotal:0,
            },

            stable: false,
            total: 0,
        };
    },
    methods: {
        toggleAndUpdate(categorie, key = null){
            categorie.checked[key] = !categorie.checked[key];
            this.subTotal(categorie);
            this.calcTotal();
        },
            
        toggleStable(){
            this.stable = !this.stable;
            this.updateAll();
        },        

        subTotal(categorie){    
            let values = [];
            let max = 0;
            let count = 0;
            
            if (this.stable) {
                values = categorie.stable;
                max = categorie.stableMax;
            } else {
                values = categorie.unstable;
                max = categorie.unstableMax;
            }
            
            for(let i = 0; i < categorie.checked.length; i++){              
                if (categorie.checked[i]){
                    count += values[i];
                }
            }

            if (count < max){
                categorie.subTotal = count;
            } else {
                categorie.subTotal = max;
            }
        },

        updateAll(){
            this.subTotal(this.general);
            this.subTotal(this.skin);
            this.subTotal(this.mucousAndEyes);
            this.subTotal(this.orl);
            this.subTotal(this.pulmonary);
            this.subTotal(this.cardiac);
            this.subTotal(this.digestive);
            this.subTotal(this.renal);
            this.subTotal(this.neurologic);

            this.calcTotal();
        },
        
        calcTotal(){
            this.total =
            this.general.subTotal +
            this.skin.subTotal +
            this.mucousAndEyes.subTotal +
            this.orl.subTotal +
            this.pulmonary.subTotal +
            this.cardiac.subTotal +
            this.digestive.subTotal +
            this.renal.subTotal +
            this.neurologic.subTotal;
        },
    }
});
</script>

<style></style>