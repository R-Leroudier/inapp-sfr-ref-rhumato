<template>
<div class="Amor">
  <!-- <h3>http://www.rhumato.info/fiches-pratiques2/166-spondylarthrite-ankylosante/1747-criteres-damor-des-spondylarthropathies</h3> -->
  <h2 class="title">Critères d’AMOR DES SPONDYLARTHROPATHIES</h2>
  <span class="line"></span>

  <div class="form">
    <div>
      <label for="inp1">Douleurs nocturnes ou raideur matinale de siège lombaire ou dorsal (1 points)</label>
      <input id="inp1" type="checkbox"  v-model="toggle[1]" @click="toggle[1] == false ? calcPlus(1) : calcLess(1)">
    </div>

    <div>
      <label for="inp2">Oligoarthrite asymétrique (1 points)</label>
      <input id="inp2" type="checkbox" v-model="toggle[2]" @click="toggle[2] == false ? calcPlus(1) : calcLess(1)">
    </div>

    <div>
      <label for="inp3">Douleurs fessières sans précision  (1 points)</label>
      <input id="inp3" type="checkbox" v-model="toggle[3]" @click="toggle[3] == false ? calcPlus(1) : calcLess(1)">
    </div>

    <div>
      <label for="inp4">Douleurs fessières à bascule  (2 points)</label>
      <input id="inp4" type="checkbox" v-model="toggle[4]"  @click="toggle[4] == false ? calcPlus(2) : calcLess(2)">
    </div>

    <div>
      <label for="inp5">Doigt ou orteil en saucisse  (2 points)</label>
      <input id="inp5" type="checkbox" v-model="toggle[5]"  @click="toggle[5] == false ? calcPlus(2) : calcLess(2)">
    </div>

    <div>
      <label for="inp6">Talalgies ou autre enthésopathie  (2 points)</label>
      <input id="inp6" type="checkbox" v-model="toggle[6]" @click="toggle[6] == false ? calcPlus(2) : calcLess(2)">
    </div>

    <div>
      <label for="inp7">Iritis  (2 points)</label>
      <input id="inp7" type="checkbox" v-model="toggle[7]" @click="toggle[7] == false ? calcPlus(2) : calcLess(2)">
    </div>

    <div>
      <label for="inp8">Urétrite non gonococcique ou cervicite (< 1 mois avant arthrite)  (1 points)</label>
      <input id="inp8" type="checkbox" v-model="toggle[8]" @click="toggle[8] == false ? calcPlus(1) : calcLess(1)">
    </div>

    <div>
      <label for="inp9">Diarrhée moins d'un moins avant une arthrite  (1 points)</label>
      <input id="inp9" type="checkbox" v-model="toggle[9]" @click="toggle[9] == false ? calcPlus(1) : calcLess(1)">
    </div>

    <div>
      <label for="inp10">Présence ou antécédents : psoriasis et/ou balanite et/ou entérocolopathie  (2 points)</label>
      <input id="inp10" type="checkbox" v-model="toggle[10]" @click="toggle[10] == false ? calcPlus(2) : calcLess(2)">
    </div>

    <div>
      <label for="inp11">Sacro-iliite radiologique unilatérale (stade 3) ou bilatérale (stade 2)  (3 points)</label>
      <input id="inp11" type="checkbox" v-model="toggle[11]" @click="toggle[11] == false ? calcPlus(3) : calcLess(3)">
    </div>

    <div>
      <label for="inp12">Présence de l'antigène HLA B27 et/ou antécédent familial : SPA Reiter psoriasis uvéite entérocolopathie  (2 points)</label>
      <input id="inp12" type="checkbox" v-model="toggle[12]" @click="toggle[12] == false ? calcPlus(2) : calcLess(2)">
    </div>

    <div>
      <label for="inp13">Efficacité rapide (48 h) des AINS ou rechute rapide (48 h) après arrêt  (2 points)</label>
      <input id="inp13" type="checkbox" v-model="toggle[13]" @click="toggle[13] == false ? calcPlus(2) : calcLess(2)">
    </div>

  </div>

  <span class="line"></span>
  <div id="example">
    <span>Spondylarthropathie si 6 points</span>
    <br>
    <span>Sensibilité : 92 % Spécificité : 98 %</span>
    <br>
    <span>Points total: {{ total }}</span>
  </div>

</div>


</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return{
    toggle: {
      1:false,
      2:false,
      3:false,
      4:false,
      5:false,
      6:false,
      7:false,
      8:false,
      9:false,
      10:false,
      11:false,
      12:false,
      13:false,
    },
    total: 0,
  }
  },
  methods: {
    calcPlus(num){
      this.total+=num
    },
    calcLess(num){
      this.total-=num
    }
  }
});
</script>

<style scoped lang="scss">
@import "src/sass/global";

.Amor {
  .form {
    padding: 5px;

    div {
      display: flex;
      justify-content: space-between;
      text-align: left;
      margin: 10px 0;
    }
  }
}
</style>
