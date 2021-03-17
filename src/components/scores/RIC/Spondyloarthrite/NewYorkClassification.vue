<template>
  <section>
    <h1 class="title">Classification de NewYok</h1>

    

    <form class="form">

      <h3 class="">Critère cliniques</h3>

      <label for="lombagies">Lombagies avec raideur de plus de trois mois,<br/> améliorées à l'éffort,<br/> mais ne cédant pas au repos.</label>
      <input id="lombagies" type="checkbox" v-on:click=changeCriterionScore>
      <br>
      <label for="rachis">Limitation des mouvements du rachis lombaire à la fois dans le plan frontal et sagittal</label>
      <input id="rachis" type="checkbox" v-on:click=changeCriterionScore>
      <br>
      <label for="rachis">Limitation de l'amplition thoracique par rapport aux valeurs normales corrigés pour l'âge et le sexe</label>
      <input id="rachis" type="checkbox" v-on:click=changeCriterionScore>

      <h3>Critère radiologiques</h3>

      <label for="bilatérale">Sacro-ilite bilatérale de grade > 2</label>
      <input id="bilatérale" type="checkbox" v-on:click=changRadiologyScore>

      <br>

      <label for="unilatérale">Sacro-ilite unilatérale de grade > 3</label>
      <input id="unilatérale" type="checkbox" v-on:click=changRadiologyScore>

      <br>
      <button v-on:click=showResult >Résultat </button>
      <br>

      <span v-if="this.result"><p>La spondylarthrite est possitive</p></span>
      <span v-else><p>La spondylarthrite est négative</p></span>


    </form>

  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  mounted() {},
   data() {
    return {
      // score de critère clinique
      totalCriterion: 0,
      // score de critère radiologique
      totalRadiology: 0,
      result: false
    };
  },
  methods: {
    // si un critére clinique et radiologique est supérieur à 0, alors la spondylarthrite est définie
    showResult() {
      this.totalCriterion >= 1 && this.totalRadiology >= 1 ? this.result = true : this.result = false;
    },
    changeCriterionScore(inputValue) {
      // la valeur du checkbox true ou false
      inputValue.target.checked ? this.totalCriterion ++ : this.totalCriterion --;
    },
    changRadiologyScore(inputValue) {
      // la valeur du checkbox true ou false
      inputValue.target.checked ? this.totalRadiology ++ : this.totalRadiology --;
    },
    
  }
});
</script>

<style></style>
