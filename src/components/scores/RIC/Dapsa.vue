<template class="scrollable-content">
  <div>
    <h2 class="title">DAPSA (Disease Activity in PSoriatic Arthritis) Score</h2>

    <form class="form">
      <h4 class="categorie">1. Tender Joints Count (0-68), TJ: s</h4>
  
      <input
        id="input-tender"
        class=""
        v-model="tender"
        type="number"
        min="0"
        max="68"
        @change="valueInputNumber('tender', 'input-')"
      />

      <h4 class="categorie">2. Swollen Joints Count (0-66), SJ:</h4>
    
      <input
        id="input-swollen"
        class=""
        v-model="swollen"
        type="number"
        min="0"
        max="66"
        @change="valueInputNumber('swollen', 'input-')"
      />
      <h4 class="categorie">3. CRP (mg/dl):</h4>
      <input v-model="crp" 
       min="0"
        
      type="number" />

      <h4 class="categorie">
        4. Patient’s assessment of disease activity and pain:
      </h4>
      <h5>
        How active was your rheumatic disease on average during the last week?
        0 to 10
      </h5>
      <input
        id="input-rheumatic"
        v-model="rheumatic"
        type="number"
        min="0"
        max="10"
        @change="valueInputNumber('rheumatic', 'input-')"
      />

      <h5>
        How would you describe the overall level of joint pain during the last
        week? 0 to 10
      </h5>
      <input
        id="input-joint"
        v-model="joint"
        type="number"
        min="0"
        max="10"
        @change="valueInputNumber('joint', 'input-')"
      />
      <p>DAPSA résultat : {{ resultInput }}</p>
      <button id="button-valide" v-on:click="calculeInput" class="btn">
        valider
      </button>
    </form>
    <span>
      Disease Activity: 0-4 Remission, 5-14 low, 15-28 moderate, >28 high
      Disease Activity
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  mounted() {},
  data() {
    return {
      
      swollen: "",
      tender: "",
      score: "",
      rheumatic: "",
      joint: "",
      crp: "",
      resultInput: "",

      
    };
  },

  methods: {

    //calcule des inputs
    calculeInput() {
      if (
        this.swollen &&
        this.tender &&
        this.rheumatic &&
        this.joint &&
        this.crp
      ) {
        this.resultInput =
          parseInt(this.swollen) +
          parseInt(this.tender) +
          parseInt(this.rheumatic) +
          parseInt(this.joint) +
          parseInt(this.crp);
        this.removeError();
      } else {
        this.errorNumber("valide", "button-");
      }
    },

   //Gestion des erreurs form
    removeError() {

      var elementParas = document.querySelector(".erreur-message");
      var elementStyle = document.querySelector(".input-erreur");
      elementStyle.classList.remove("input-erreur");
      elementParas.remove();

    },

    errorNumber(valueInput, elementHtml) {
     
     if (document.querySelector(`#error-${valueInput}`) == null) {
        var element = document.getElementById(elementHtml + valueInput);
        element.classList.add(elementHtml + "erreur");
        var p = document.createElement("p");
        p.className = "erreur-message";
        p.setAttribute("id", "error-" + valueInput);
        if (elementHtml == "input-") {
          p.textContent = "erreur score maximum de " + this.score;
        } else {
          p.textContent = "vous n'avez pas rempli les champs obligatoires";
        }
        element.after(p);
      }

    },

    valueInputNumber(valueInput, elementHtml) {
      switch (valueInput) {
        case "swollen":
          this.score = 66;
          if (this.swollen > this.score || this.swollen < 0) {
            this.swollen = this.score;
            this.errorNumber(valueInput, elementHtml);
          }
        case "tender":
          this.score = 68;
          if (this.tender > this.score || this.tender < 0) {
            this.tender = this.score;
            this.errorNumber(valueInput, elementHtml);
          }

          break;
        case "rheumatic":
        case "joint":
          if (this.joint < 0 || this.joint > 10) {
            this.score = 10;
            this.joint = this.score;
            this.errorNumber(valueInput, elementHtml);
          } else if (this.rheumatic < 0 || this.rheumatic > 10) {
            this.score = 10;
            this.rheumatic = this.score;
            this.errorNumber(valueInput, elementHtml);
          }
          break;
      }
    },
  },
});
</script>

<style>
.scrollable-content {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.input-erreur {
  border: 2px solid #ff0000;
}

.erreur-message {
  color: #ff0000;
}
</style>

