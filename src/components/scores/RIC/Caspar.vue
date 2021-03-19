<template>
  <div>
    <h2 class="title">
      Critères de classification de CASPAR pour le rhumatisme psoriasique
    </h2>
    <form>
      <section>
        <p>
          1. Atteinte rhumatologique inflammatoire (périphérique, axiale ou
          enthésitique)
        </p>
        <div>
          <label class="btn">
            <input type="checkbox" v-on:change="update(0)" v-model="isFirstCriteriaChecked"/>
            Oui
          </label>
        </div>
      </section>

      <section>
        <p>
          2. Présence explicite de psoriasis à l’examen ou dans les antécédents
          :
        </p>
        <div>
          <label class="btn">
            <input type="checkbox" v-on:change="update(1)" />
            lésion psoriasique cutanée ou du scalp diagnostiquée par un médecin
            à l’examen physique
          </label>
        </div>
        <div>
          <label class="btn">
            <input type="checkbox" v-on:change="update(2)" />
            Notion de psoriasis selon le patient ou un médecin
          </label>
        </div>
        <div>
          <label class="btn">
            <input type="checkbox" v-on:change="update(3)" />
            Antécédent familial de psoriasis au 1er ou 2nd degré
          </label>
        </div>
      </section>

      <section>
        <p>3. Atteinte unguéale</p>
        <div>
          <label class="btn">
            <input type="checkbox" v-on:change="update(4)" />
            Dystrophie unguéale psoriasique à l’examen clinique : onycholyse,
            ongles ponctués ou hyperkératose
          </label>
        </div>
      </section>

      <section>
        <p>4. Négativité du facteur rhumatoïde</p>
        <div>
          <label class="btn">
            <input type="checkbox" v-on:change="update(5)" />
            Absence de FR sérique (ELISA ou néphélométrie)
          </label>
        </div>
      </section>

      <section>
        <p>5. Présence ou antécédent de dactylite</p>
        <div>
          <label class="btn">
            <input type="checkbox" v-on:change="update(6)" /> Dactylite
            actuelle diagnostiquée par un médecin
          </label>
        </div>
        <div>
          <label class="btn">
            <input type="checkbox" v-on:change="update(7)" />
            Antécédent de dactylite constatée par un médecin
          </label>
        </div>
      </section>

      <section>
        <p>6.Aspect radiologique de construction osseuse</p>
        <div>
          <label class="btn">
            <input type="checkbox" v-on:change="update(8)" />
            Présence de signes radiographiques de construction osseuse
            juxta-articulaire (radiographies des mains et des pieds)
          </label>
        </div>
      </section>
      <button type="button" class="btn validate" v-on:click="calcScore">
        calculer
      </button>
    </form>
    <p>
      Pour retenir le diagnostic: Il faut le critère 1 + au moins 3 points
      (Se:91.4%, Sp: 98.7%).
    </p>
    <div class="result">
      <p>{{ score }}</p>
      <p>{{ interpretation }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Caspar",
  mounted() {},
  data() {
    return {
      isFirstCriteriaChecked: false,
      check: [false, false, false, false, false, false, false, false, false],
      values: [0, 2, 1, 1, 1, 1, 1, 1, 1],
      interpretation: "",
      score: 0,
    };
  },
  methods: {
    update(key) {
      this.check[key] = !this.check[key];
    },
    calcScore() {
      let count = 0;
      for (let index = 0; index < this.check.length; index++) {
        if (this.check[index]) {
          count += this.values[index];
        }
      }
      this.score = count;
      this.getInterpretation();
    },
    getInterpretation() {
      if (this.isFirstCriteriaChecked == true && this.score >= 3) {
        this.interpretation =
          "rhumatisme psoriasique POSITIF (Se:91.4%, Sp: 98.7%)";
      } else {
        this.interpretation = "rhumatisme psoriasique NEGATIF";
      }
    },
  },
});
</script>

<style></style>
