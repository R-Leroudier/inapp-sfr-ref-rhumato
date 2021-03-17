<template>
  <!-- fai2r.org/les-pathologies-rares/maladie-de-horton-pseudo-polyarthrite-rhizomelique/criteres/criteres-de-classification-de-larterite-a-cellules-geantes-de-lacr-1990 -->
  <div>
    <h3>
      Critères de classification de l’Artérite à Cellules Géantes de l’ACR 1990
    </h3>
    <div>
      <label for="toggle">Age au diagnostic ≥ 50 ans</label>
      <input
        type="checkbox"
        id="toggle"
        class="visually-hidden"
        value="1"
        v-model="questions"
        @change="total()"
      />
      <div class="control-me"></div>
    </div>
    <div>
      <label for="toggle">Céphalées inhabituelles</label>
      <input
        type="checkbox"
        id="toggle"
        class="visually-hidden"
        value="2"
        v-model="questions"
        @change="total()"
      />
      <div class="control-me"></div>
    </div>
    <div>
      <label for="toggle"
        >Artère temporale anormale: douleur à la palpation ou diminution de la
        pulsatilité, non due à de l'athérosclérose</label
      >
      <input
        type="checkbox"
        id="toggle"
        class="visually-hidden"
        value="3"
        v-model="questions"
        @change="total()"
      />
      <div class="control-me"></div>
    </div>
    <div>
      <label for="toggle">VS ≥ 50 mm / 1ere heure</label>
      <input
        type="checkbox"
        id="toggle"
        class="visually-hidden"
        value="4"
        v-model="questions"
        @change="total()"
      />
      <div class="control-me"></div>
    </div>
    <div>
      <label for="toggle"
        >Anomalies de la biopsie d'artère temporale: vascularite; infiltration à
        prédominance de cellules mononucléées ou granulomateuse, habituellement
        avec des cellules géantes multinucléées</label
      >
      <input
        type="checkbox"
        id="toggle"
        class="visually-hidden"
        value="5"
        v-model="questions"
        @change="total()"
      />
      <div class="control-me"></div>
    </div>
    <div>
      <p>{{ total() }} Points</p>
      <p>0 Critère d'exclusion</p>
      <p v-if="total() >= 3">Positif</p>
      <p v-else>Négatif</p>
      <p>Si 3 critères sont présents, la sensibilité est de 93,5% et la spécificité est de 91,2%</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ArthritisAcr1990",
  data() {
    return {
      questions: [],
    };
  },
  mounted() {},
  methods: {
    total() {
      return this.questions.length;
    },
  },
});
</script>

<style></style>
