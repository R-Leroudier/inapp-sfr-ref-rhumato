<template>
  <div class="Bvas">
    <h2 class="title">Vascularite - BVAS</h2>
    <p class="line"></p>

    <form class="form">
      <p class ="details">Ne cocher que les manifestations témoignant d’une maladie active (les séquelles présentes depuis plus de 3 mois sont appréciées par le VDI). Si toutes les manifestations représentent une maladie chronique active, mais faiblement (smoldering/grumbling disease) et qu’il n’y aucune manifestation nouvelle récente ou d’aggravation franche, ne cocher pas de cases. Le score indiqué est celui pour une maladie active récemment.</p>

      <div>
        <h3 class="title">Signes généraux</h3>

        <div>
          <input type="checkbox" name="general1" id="general1" v-on:change="toggleAndUpdate(general, 0)">
          <label class="btn" :class="{selected: general.checked[0] === true}" for="general1">Myalgies</label>
        </div>

        <div>
          <input type="checkbox" name="general2" id="general2" v-on:change="toggleAndUpdate(general, 1)">
          <label class="btn" :class="{selected: general.checked[1] === true}" for="general2">Arthralgies ou arthrites</label>
        </div>

        <div>
          <input type="checkbox" name="general3" id="general3" v-on:change="toggleAndUpdate(general, 2)">
          <label class="btn" :class="{selected: general.checked[2] === true}" for="general3">Fièvre  ≥ 38°C</label>
        </div>

        <div>
          <input type="checkbox" name="general4" id="general4" v-on:change="toggleAndUpdate(general, 3)">
          <label class="btn" :class="{selected: general.checked[3] === true}" for="general4">Amaigrissement  ≥ 2kg</label>
        </div>

        <p v-if="stable">Sous total {{ general.subTotal }} (max : {{ general.stableMax }})</p>
        <p v-if="!stable">Sous total {{ general.subTotal }} (max : {{ general.unstableMax }})</p>
      </div>

      <div>
        <h3 class="title">Signes cutanés</h3>

        <div>
          <input type="checkbox" name="skin1" id="skin1" v-on:change="toggleAndUpdate(skin, 0)">
          <label class="btn" :class="{selected: skin.checked[0] === true}" for="skin1">Nécrose</label>
        </div>

        <div>
          <input type="checkbox" name="skin2" id="skin2" v-on:change="toggleAndUpdate(skin, 1)">
          <label class="btn" :class="{selected: skin.checked[1] === true}" for="skin2">Purpura</label>
        </div>

        <div>
          <input type="checkbox" name="skin3" id="skin3" v-on:change="toggleAndUpdate(skin, 2)">
          <label class="btn" :class="{selected: skin.checked[2] === true}" for="skin3">Ulcération(s)</label>
        </div>

        <div>
          <input type="checkbox" name="skin4" id="skin4" v-on:change="toggleAndUpdate(skin, 3)">
          <label class="btn" :class="{selected: skin.checked[3] === true}" for="skin4">Gangrène</label>
        </div>

        <div>
          <input type="checkbox" name="skin5" id="skin5" v-on:change="toggleAndUpdate(skin, 4)">
          <label class="btn" :class="{selected: skin.checked[4] === true}" for="skin5">Autre(s) lésion(s) liée(s) à la vasculatite</label>
        </div>

        <p v-if="stable">Sous total {{ skin.subTotal }} (max : {{ skin.stableMax }})</p>
        <p v-if="!stable">Sous total {{ skin.subTotal }} (max : {{ skin.unstableMax }})</p>
      </div>

      <div>
        <h3 class="title">Atteintes muqueuses et oculaires</h3>
        <!-- 10 -->

        <div>
          <input type="checkbox" name="mucousAndEyes1" id="mucousAndEyes1" v-on:change="toggleAndUpdate(mucousAndEyes, 0)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[0] === true}" for="mucousAndEyes1">Ulcération bucale / granulome</label>
        </div>

        <div>
          <input type="checkbox" name="mucousAndEyes2" id="mucousAndEyes2" v-on:change="toggleAndUpdate(mucousAndEyes, 1)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[1] === true}" for="mucousAndEyes2">Ulcération génitale</label>
        </div>

        <div>
          <input type="checkbox" name="mucousAndEyes3" id="mucousAndEyes3" v-on:change="toggleAndUpdate(mucousAndEyes, 2)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[2] === true}" for="mucousAndEyes3">Inflammation lacrimale ou salivaire</label>
        </div>

        <div>
          <input type="checkbox" name="mucousAndEyes4" id="mucousAndEyes4" v-on:change="toggleAndUpdate(mucousAndEyes, 3)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[3] === true}" for="mucousAndEyes4">Exophtalmie</label>
        </div>

        <div>
          <input type="checkbox" name="mucousAndEyes5" id="mucousAndEyes5" v-on:change="toggleAndUpdate(mucousAndEyes, 4)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[4] === true}" for="mucousAndEyes5">Episclérite</label>
        </div>

        <div>
          <input type="checkbox" name="mucousAndEyes6" id="mucousAndEyes6" v-on:change="toggleAndUpdate(mucousAndEyes, 5)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[5] === true}" for="mucousAndEyes6">Conjonctivite / blépharite / kératite</label>
        </div>

        <div>
          <input type="checkbox" name="mucousAndEyes7" id="mucousAndEyes7" v-on:change="toggleAndUpdate(mucousAndEyes, 6)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[6] === true}" for="mucousAndEyes7">Baisse progressive d'acuité visuelle / vue trouble</label>
        </div>

        <div>
          <input type="checkbox" name="mucousAndEyes8" id="mucousAndEyes8" v-on:change="toggleAndUpdate(mucousAndEyes, 7)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[7] === true}" for="mucousAndEyes8">Baisse brutale d'acuité visuelle / cécité</label>
        </div>

        <div>
          <input type="checkbox" name="mucousAndEyes9" id="mucousAndEyes9" v-on:change="toggleAndUpdate(mucousAndEyes, 8)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[8] === true}" for="mucousAndEyes9">Uvéite</label>
        </div>

        <div>
          <input type="checkbox" name="mucousAndEyes10" id="mucousAndEyes10" v-on:change="toggleAndUpdate(mucousAndEyes, 9)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[9] === true}" for="mucousAndEyes10">Vascularite rétinienne /  thrombose / hemorragie / exsudats rétiniens</label>
        </div>

        <p v-if="stable">Sous total {{ mucousAndEyes.subTotal }} (max : {{ mucousAndEyes.stableMax }})</p>
        <p v-if="!stable">Sous total {{ mucousAndEyes.subTotal }} (max : {{ mucousAndEyes.unstableMax }})</p>
      </div>

      <div>
        <h3 class="title">Signes ORL</h3>
        <!-- 5 -->

        <div>
          <input type="checkbox" name="orl1" id="orl1" v-on:change="toggleAndUpdate(orl, 0)">
          <label class="btn" :class="{selected: orl.checked[0] === true}" for="orl1">Epistaxis / croûtes nasales / ulcération ou granulome nasal</label>
        </div>

        <div>
          <input type="checkbox" name="orl2" id="orl2" v-on:change="toggleAndUpdate(orl, 1)">
          <label class="btn" :class="{selected: orl.checked[1] === true}" for="orl2">Sinusite</label>
        </div>

        <div>
          <input type="checkbox" name="orl3" id="orl3" v-on:change="toggleAndUpdate(orl, 2)">
          <label class="btn" :class="{selected: orl.checked[2] === true}" for="orl3">Sténose sous-glottique</label>
        </div>

        <div>
          <input type="checkbox" name="orl4" id="orl4" v-on:change="toggleAndUpdate(orl, 3)">
          <label class="btn" :class="{selected: orl.checked[3] === true}" for="orl4">Baisse d'audition de transmission (conduction)</label>
        </div>

        <div>
          <input type="checkbox" name="orl5" id="orl5" v-on:change="toggleAndUpdate(orl, 4 )">
          <label class="btn" :class="{selected: orl.checked[4] === true}" for="orl5">Baisse d'audition de perception (sensorielle)</label>
        </div>

        <p v-if="stable">Sous total {{ orl.subTotal }} (max : {{ orl.stableMax }})</p>
        <p v-if="!stable">Sous total {{ orl.subTotal }} (max : {{ orl.unstableMax }})</p>
      </div>

      <div>
        <h3 class="title">Signes pulmonaires</h3>
        <!-- 7 -->

        <div>
          <input type="checkbox" name="pulmonary1" id="pulmonary1" v-on:change="toggleAndUpdate(pulmonary, 0)">
          <label class="btn" :class="{selected: pulmonary.checked[0] === true}" for="pulmonary1">Wheezing / sibilants</label>
        </div>

        <div>
          <input type="checkbox" name="pulmonary2" id="pulmonary2" v-on:change="toggleAndUpdate(pulmonary, 1)">
          <label class="btn" :class="{selected: pulmonary.checked[1] === true}" for="pulmonary2">Nodule(s) / nodule(s) excavé(s)</label>
        </div>

        <div>
          <input type="checkbox" name="pulmonary3" id="pulmonary3" v-on:change="toggleAndUpdate(pulmonary, 2)">
          <label class="btn" :class="{selected: pulmonary.checked[2] === true}" for="pulmonary3">Épanchement pleural</label>
        </div>

        <div>
          <input type="checkbox" name="pulmonary4" id="pulmonary4" v-on:change="toggleAndUpdate(pulmonary, 3)">
          <label class="btn" :class="{selected: pulmonary.checked[3] === true}" for="pulmonary4">Infiltrat pulmonaire radiologique</label>
        </div>

        <div>
          <input type="checkbox" name="pulmonary5" id="pulmonary5" v-on:change="toggleAndUpdate(pulmonary, 4)">
          <label class="btn" :class="{selected: pulmonary.checked[4] === true}" for="pulmonary5">Sténose endobronchique</label>
        </div>

        <div>
          <input type="checkbox" name="pulmonary6" id="pulmonary6" v-on:change="toggleAndUpdate(pulmonary, 5)">
          <label class="btn" :class="{selected: pulmonary.checked[5] === true}" for="pulmonary6">Hémoragie intra-alvéolaire</label>
        </div>

        <div>
          <input type="checkbox" name="pulmonary7" id="pulmonary7" v-on:change="toggleAndUpdate(pulmonary, 6)">
          <label class="btn" :class="{selected: pulmonary.checked[6] === true}" for="pulmonary7">Détresse respiratoire</label>
        </div>

        <p v-if="stable">Sous total {{ pulmonary.subTotal }} (max : {{ pulmonary.stableMax }})</p>
        <p v-if="!stable">Sous total {{ pulmonary.subTotal }} (max : {{ pulmonary.unstableMax }})</p>
      </div>

      <div>
        <h3 class="title">Signes cardiaques</h3>
        <!-- 6 -->

        <div>
          <input type="checkbox" name="cardiac1" id="cardiac1" v-on:change="toggleAndUpdate(cardiac, 0)">
          <label class="btn" :class="{selected: cardiac.checked[0] === true}" for="cardiac1">Disparition d'un pouls</label>
        </div>

        <div>
          <input type="checkbox" name="cardiac2" id="cardiac2" v-on:change="toggleAndUpdate(cardiac, 1)">
          <label class="btn" :class="{selected: cardiac.checked[1] === true}" for="cardiac2">Atteinte valvulaire</label>
        </div>

        <div>
          <input type="checkbox" name="cardiac3" id="cardiac3" v-on:change="toggleAndUpdate(cardiac, 2)">
          <label class="btn" :class="{selected: cardiac.checked[2] === true}" for="cardiac3">Péricardite</label>
        </div>

        <div>
          <input type="checkbox" name="cardiac4" id="cardiac4" v-on:change="toggleAndUpdate(cardiac, 3)">
          <label class="btn" :class="{selected: cardiac.checked[3] === true}" for="cardiac4">Angor</label>
        </div>

        <div>
          <input type="checkbox" name="cardiac5" id="cardiac5" v-on:change="toggleAndUpdate(cardiac, 4)">
          <label class="btn" :class="{selected: cardiac.checked[4] === true}" for="cardiac5">Cardiomyopathie</label>
        </div>

        <div>
          <input type="checkbox" name="cardiac6" id="cardiac6" v-on:change="toggleAndUpdate(cardiac, 5)">
          <label class="btn" :class="{selected: cardiac.checked[5] === true}" for="cardiac6">Insufisance cardiaque congestive</label>
        </div>

        <p v-if="stable">Sous total {{ cardiac.subTotal }} (max : {{ cardiac.stableMax }})</p>
        <p v-if="!stable">Sous total {{ cardiac.subTotal }} (max : {{ cardiac.unstableMax }})</p>
      </div>

      <div>
        <h3 class="title">Manifestations digestives</h3>
        <!-- 3 -->

        <div>
          <input type="checkbox" name="digestive1" id="digestive1" v-on:change="toggleAndUpdate(digestive, 0)">
          <label class="btn" :class="{selected: digestive.checked[0] === true}" for="digestive1">Péritonite</label>
        </div>

        <div>
          <input type="checkbox" name="digestive2" id="digestive2" v-on:change="toggleAndUpdate(digestive, 1)">
          <label class="btn" :class="{selected: digestive.checked[1] === true}" for="digestive2">Diarrhée sanglante</label>
        </div>

        <div>
          <input type="checkbox" name="digestive3" id="digestive3" v-on:change="toggleAndUpdate(digestive, 2)">
          <label class="btn" :class="{selected: digestive.checked[2] === true}" for="digestive3">Douleur abdominale (angor digestif)</label>
        </div>

        <p v-if="stable">Sous total {{ digestive.subTotal }} (max : {{ digestive.stableMax }})</p>
        <p v-if="!stable">Sous total {{ digestive.subTotal }} (max : {{ digestive.unstableMax }})</p>
      </div>

      <div>
        <h3 class="title">Signes rénaux</h3>
        <!-- 7 -->

        <div>
          <input type="checkbox" name="renal1" id="renal1" v-on:change="toggleAndUpdate(renal, 0)">
          <label class="btn" :class="{selected: renal.checked[0] === true}" for="renal1">HTA</label>
        </div>

        <div>
          <input type="checkbox" name="renal2" id="renal2" v-on:change="toggleAndUpdate(renal, 1)">
          <label class="btn" :class="{selected: renal.checked[1] === true}" for="renal2">Protéinurie > 1+</label>
        </div>

        <div>
          <input type="checkbox" name="renal3" id="renal3" v-on:change="toggleAndUpdate(renal, 2)">
          <label class="btn" :class="{selected: renal.checked[2] === true}" for="renal3">Hématurie > 10 GR / champ</label>
        </div>

        <div>
          <input type="checkbox" name="renal4" id="renal4" v-on:change="toggleAndUpdate(renal, 3)">
          <label class="btn" :class="{selected: renal.checked[3] === true}" for="renal4">Créatininémie 125-249 μmol/L</label>
        </div>

        <div>
          <input type="checkbox" name="renal5" id="renal5" v-on:change="toggleAndUpdate(renal, 4)">
          <label class="btn" :class="{selected: renal.checked[4] === true}" for="renal5">Créatininémie 250-499 μmol/L</label>
        </div>

        <div>
          <input type="checkbox" name="renal6" id="renal6" v-on:change="toggleAndUpdate(renal, 5)">
          <label class="btn" :class="{selected: renal.checked[5] === true}" for="renal6">Créatininémie > 500 μmol/L</label>
        </div>

        <div>
          <input type="checkbox" name="renal7" id="renal7" v-on:change="toggleAndUpdate(renal, 6)">
          <label class="btn" :class="{selected: renal.checked[6] === true}" for="renal7">Augmentation de la créatininémie > 30% ou diminution de la clairance de la créatine > 25%</label>
        </div>

        <p v-if="stable">Sous total {{ renal.subTotal }} (max : {{ renal.stableMax }})</p>
        <p v-if="!stable">Sous total {{ renal.subTotal }} (max : {{ renal.unstableMax }})</p>
      </div>

      <div>
        <h3 class="title">Signes neurologiques</h3>
        <!-- 9 -->

        <div>
          <input type="checkbox" name="neurologic1" id="neurologic1" v-on:change="toggleAndUpdate(neurologic, 0)">
          <label class="btn" :class="{selected: neurologic.checked[0] === true}" for="neurologic1">Céphalées</label>
        </div>

        <div>
          <input type="checkbox" name="neurologic2" id="neurologic2" v-on:change="toggleAndUpdate(neurologic, 1)">
          <label class="btn" :class="{selected: neurologic.checked[1] === true}" for="neurologic2">Méningite</label>
        </div>

        <div>
          <input type="checkbox" name="neurologic3" id="neurologic3" v-on:change="toggleAndUpdate(neurologic, 2)">
          <label class="btn" :class="{selected: neurologic.checked[2] === true}" for="neurologic3">Confusion, trouble de la conscience</label>
        </div>

        <div>
          <input type="checkbox" name="neurologic4" id="neurologic4" v-on:change="toggleAndUpdate(neurologic, 3)">
          <label class="btn" :class="{selected: neurologic.checked[3] === true}" for="neurologic4">Convulsions (non liées à l'HTA)</label>
        </div>

        <div>
          <input type="checkbox" name="neurologic5" id="neurologic5" v-on:change="toggleAndUpdate(neurologic, 4)">
          <label class="btn" :class="{selected: neurologic.checked[4] === true}" for="neurologic5">Atteinte médullaire (myélite)</label>
        </div>

        <div>
          <input type="checkbox" name="neurologic6" id="neurologic6" v-on:change="toggleAndUpdate(neurologic, 5)">
          <label class="btn" :class="{selected: neurologic.checked[5] === true}" for="neurologic6">Accident vasculaire cérébral</label>
        </div>

        <div>
          <input type="checkbox" name="neurologic7" id="neurologic7" v-on:change="toggleAndUpdate(neurologic, 6)">
          <label class="btn" :class="{selected: neurologic.checked[6] === true}" for="neurologic7">Atteinte de(s) paire(s) crânienne(s)</label>
        </div>

        <div>
          <input type="checkbox" name="neurologic8" id="neurologic8" v-on:change="toggleAndUpdate(neurologic, 7)">
          <label class="btn" :class="{selected: neurologic.checked[7] === true}" for="neurologic8">Aneuropathie périphérique sensitive</label>
        </div>

        <div>
          <input type="checkbox" name="neurologic9" id="neurologic9" v-on:change="toggleAndUpdate(neurologic, 8)">
          <label class="btn" :class="{selected: neurologic.checked[8] === true}" for="neurologic9">Neuropathie périphérique motrice</label>
        </div>

        <p v-if="stable">Sous total {{ neurologic.subTotal }} (max : {{ neurologic.stableMax }})</p>
        <p v-if="!stable">Sous total {{ neurologic.subTotal }} (max : {{ neurologic.unstableMax }})</p>
      </div>


      <div>
        <input type="checkbox" name="stable" id="stable" v-on:change="toggleStable">
        <label class="btn" :class="{selected: stable === true}" for="stable">Toutes les atteintes notées sont anciennes et persistantes</label>
      </div>
    </form>

    <p class="result">Total {{ total }} </p>

    <div class="info">
      <span>Interprétation: The Birmingham Vasculitis Activity Score (BVAS) is a method for assessing the activity of vasculitis. Note that scoring ranges are higher when any of the features are new or worse. Creatinine levels can be scored at patient’s first assessment only.</span>
    </div>

    <ReferenceScore  :scoreResult="total"/>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SubListPage from "@/views/SubListPage.vue";
import ReferenceScore from "@/components/ReferenceScore.vue";

export default Vue.extend({
  name: "Bvas",
  components: {
    SubListPage,
    ReferenceScore
  },
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

<style scoped lang="scss">
@import "src/sass/global.scss";

.Bvas {
  [type="checkbox"] {
   display: none;
  }
}

</style>
