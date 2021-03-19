<template>
  <div>
    <h2 class="title">Critères de classification de CASPAR pour le rhumatisme psoriasique</h2>
    <form>
      <section>
        <p>1. Atteinte rhumatologique inflammatoire (périphérique, axiale ou enthésitique)</p>
        <div>
          <label class="btn">
          <input type="radio" value="yes" v-model="isFirstCriteriaIsChecked"/>
          Oui
          </label>
      </div>
      </section>

      <section>
        <p>2. Présence explicite de psoriasis à l’examen ou dans les antécédents :</p>
        <div>
        <label class="btn">
          <input type="checkbox" v-model="checkedValues" value="value.a1"/>
          lésion psoriasique cutanée ou du scalp diagnostiquée par un médecin à l’examen physique
        </label>
      </div>
      <div>
        <label class="btn">
          <input type="checkbox" v-model="checkedValues" value="value.a2"/>
          Notion de psoriasis selon le patient ou un médecin
        </label>
      </div>
      <div>
        <label class="btn">
          <input type="checkbox" v-model="checkedValues" value="value.a3"/>
          Antécédent familial de psoriasis au 1er ou 2nd degré
        </label>
      </div>
      </section>

      <section>
        <p>3. Atteinte unguéale</p>
        <div>
        <label class="btn">
          <input type="checkbox" v-model="checkedValues" value="value.a4"/>
          Dystrophie unguéale psoriasique à l’examen clinique : onycholyse, ongles ponctués ou hyperkératose
        </label>
      </div>       
      </section>

      <section>
        <p>4. Négativité du facteur rhumatoïde</p>
        <div>
        <label class="btn">
          <input type="checkbox" v-model="checkedValues" value="value.a5"/>
          Absence de FR sérique (ELISA ou néphélométrie)
        </label>
      </div>      
      </section>

      <section>
        <p>5. Présence ou antécédent de dactylite</p>
        <div>
        <label class="btn">
          <input type="checkbox" v-model="checkedValues" value="value.a6"/>
          Dactylite actuelle diagnostiquée par un médecin
        </label>
      </div>
      <div>
        <label class="btn">
          <input type="checkbox" v-model="checkedValues" value="value.a7"/>
          Antécédent de dactylite constatée par un médecin
        </label>
      </div>      
      </section>

      <section>
        <p>6.Aspect radiologique de construction osseuse</p>
        <div>
        <label class="btn">
          <input type="checkbox" v-model="checkedValues" value="value.a8"/>
          Présence de signes radiographiques de construction osseuse juxta-articulaire (radiographies des mains et des pieds)
        </label>
      </div>
        
      </section>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name:"Caspar",
  mounted() {},
  data()
  {
    return{
      isFirstCriteriaChecked:false,
      checkedValues:[],
      values:
      {
        a1:2,
        a2:1,
        a3:1,
        a4:1,
        a5:1,
        a6:1,
        a7:1,
        a8:1
      },
    }
  },
  methods:
  {
    calcScore()
    {

    },
  }
})

</script>

<style></style>
