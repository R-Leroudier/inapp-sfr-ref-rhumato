<template>
  <div style="display: flex; flex-direction: column; margin-top: 10px">
    <h3>Score Basdai</h3>
    <span
      >Pour chaque item, indiquez une valeur de 0 (absent) à 10 (extrême)
      concernant votre ressenti.</span
    >
    <form name="Form" id="Form">
      <table class="score_table">
        <tr>
          <td align="left" colspan="2">
            <br />1. Où situez-vous votre degré global de fatigue&nbsp;?
          </td>
        </tr>
        <tr>
          <td align="right"><label for="vItem1">Réponse :&nbsp;</label></td>
          <td align="left">
            <input
              name="vItem1"
              id="vItem1"
              type="number"
              @change="f_Calculer()"
              style="width: 2.3em"
              v-model="vItem1"
              min="0"
              max="10"
            /><span class="score_note"> (0=absent, 10=extrême)</span>
          </td>
        </tr>

        <tr>
          <td align="left" colspan="2">
            <br />2. Où situez-vous votre degré global de douleur au niveau du
            cou, du dos et des hanches dans le cadre de votre spondylarthrite
            ankylosante&nbsp;?
          </td>
        </tr>
        <tr>
          <td align="right"><label for="vItem2">Réponse :&nbsp;</label></td>
          <td align="left">
            <input
              name="vItem2"
              id="vItem2"
              type="number"
              @change="f_Calculer()"
              style="width: 2.3em"
              v-model="vItem2"
              min="0"
              max="10"
            /><span class="score_note"> (0=absent, 10=extrême)</span>
          </td>
        </tr>

        <tr>
          <td align="left" colspan="2">
            <br />3. Où situez-vous votre degré de gonflement articulaire en
            dehors du cou, du dos et des hanches&nbsp;?
          </td>
        </tr>
        <tr>
          <td align="right"><label for="vItem3">Réponse :&nbsp;</label></td>
          <td align="left">
            <input
              name="vItem3"
              id="vItem3"
              type="number"
              @change="f_Calculer()"
              style="width: 2.3em"
              v-model="vItem3"
              min="0"
              max="10"
            /><span class="score_note"> (0=absent, 10=extrême)</span>
          </td>
        </tr>

        <tr>
          <td align="left" colspan="2">
            <br />4. Où situez-vous votre degré de gêne pour les zones sensibles
            au toucher ou à la pression&nbsp;?
          </td>
        </tr>
        <tr>
          <td align="right"><label for="vItem4">Réponse :&nbsp;</label></td>
          <td align="left">
            <input
              name="vItem4"
              id="vItem4"
              type="number"
              @change="f_Calculer()"
              style="width: 2.3em"
              v-model="vItem4"
              min="0"
              max="10"
            /><span class="score_note"> (0=absent, 10=extrême)</span>
          </td>
        </tr>

        <tr>
          <td align="left" colspan="2">
            <br />5. Où situez-vous votre degré de raideur matinale depuis votre
            réveil&nbsp;?
          </td>
        </tr>
        <tr>
          <td align="right"><label for="vItem5">Réponse :&nbsp;</label></td>
          <td align="left">
            <input
              name="vItem5"
              id="vItem5"
              type="number"
              @change="f_Calculer()"
              style="width: 2.3em"
              v-model="vItem5"
              min="0"
              max="10"
            /><span class="score_note"> (0=absent, 10=extrême)</span>
          </td>
        </tr>

        <tr>
          <td align="left" colspan="2">
            <br />6. Quelle est la durée de votre raideur matinale à partir de
            votre réveil&nbsp;?
          </td>
        </tr>
        <tr>
          <td align="right">Réponse :&nbsp;</td>
          <td align="left">
            <input
              name="vDuree"
              id="vDuree1"
              type="radio"
              @change="f_Calculer()"
              value="0"
              v-model="picked"
              checked="checked"
            /><label for="vDuree1">Aucune</label><br />
            <input
              name="vDuree"
              id="vDuree2"
              type="radio"
              @change="f_Calculer()"
              v-model="picked"
              value="1.25"
            /><label for="vDuree2">15 minutes</label><br />
            <input
              name="vDuree"
              id="vDuree3"
              type="radio"
              @change="f_Calculer()"
              v-model="picked"
              value="2.5"
            /><label for="vDuree3">30 minutes</label><br />
            <input
              name="vDuree"
              id="vDuree4"
              type="radio"
              @change="f_Calculer()"
              v-model="picked"
              value="3.75"
            /><label for="vDuree4">45 minutes</label><br />
            <input
              name="vDuree"
              id="vDuree5"
              type="radio"
              @change="f_Calculer()"
              v-model="picked"
              value="5"
            /><label for="vDuree5">1 heure</label><br />
            <input
              name="vDuree"
              id="vDuree6"
              type="radio"
              @change="f_Calculer()"
              value="6.25"
              v-model="picked"
            /><label for="vDuree6">1 h 15</label><br />
            <input
              name="vDuree"
              id="vDuree7"
              type="radio"
              @change="f_Calculer()"
              value="7.5"
              v-model="picked"
            /><label for="vDuree7">1 h 30</label><br />
            <input
              name="vDuree"
              id="vDuree8"
              type="radio"
              @change="f_Calculer()"
              value="8.75"
              v-model="picked"
            /><label for="vDuree8">1 h 45</label><br />
            <input
              name="vDuree"
              id="vDuree9"
              type="radio"
              @change="f_Calculer() "
              value="10"
              v-model="picked"
            /><label for="vDuree9">2 h ou plus</label><br />
          </td>
        </tr>
      </table>

      <br />
      <hr width="80%" />
      <p align="center">
        <input
          name="Submit"
          type="button"
          @change="f_Calculer()"
          value="Calculer"
        />
      </p>
      <hr width="80%" />

      <p class="score_result">
        Score :
        <input
          name="Resultat"
          type="text"
          id="Resultat"
          style="width: 3em"
          readonly="readonly"
          v-model="result"
        />
      </p>
    </form>
  </div>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Basdai",
  data() {
    return {
      vItem1: 0,
      vItem2: 0,
      vItem3: 0,
      vItem4: 0,
      vItem5: 0,
      result: 0,
      picked: 0,
    };
  },
  methods:{
    f_Calculer()
{
	// calcul du résultat
  console.log(this.vItem1)
	var Dummy = (this.vItem5*1 + this.picked*1) / 2;
	var Res = (this.vItem1*1 + this.vItem2*1 + this.vItem3*1 + this.vItem4*1 + Dummy) / 5;

	// Affichage du résultat
	return this.result = Res;
}
  },
  mounted() {},
});
</script>

<style lang="scss">
.inputNumber {
  width: 30px;
}
</style>
