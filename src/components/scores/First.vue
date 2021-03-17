<template>
  <!-- http://medicalcul.free.fr/firstquest.html -->
  <div>
    <h3>Questionnaire FiRST</h3>
    <h5>Cocher les items présents</h5>
    <div>
      <input
        type="checkbox"
        id="toggle"
        class="visually-hidden"
        v-model="quest"
        value="1"
      />
      <label for="toggle"
        >Mes douleurs sont localisées partout dans tout mon corps.</label
      >
      <div class="control-me"></div>
    </div>
    <div>
      <input
        type="checkbox"
        id="toggle"
        class="visually-hidden"
        v-model="quest"
        value="2"
      />
      <label for="toggle"
        >Mes douleurs s'accompagnent d'une fatigue générale permanente.</label
      >
      <div class="control-me"></div>
    </div>
    <div>
      <input
        type="checkbox"
        id="toggle"
        class="visually-hidden"
        v-model="quest"
        value="3"
      />
      <label for="toggle"
        >Mes douleurs sont comme des brûlures, des décharges électriques ou des
        crampes.</label
      >
      <div class="control-me"></div>
    </div>
    <div>
      <input
        type="checkbox"
        id="toggle"
        class="visually-hidden"
        v-model="quest"
        value="4"
      />
      <label for="toggle"
        >Mes douleurs s'accompagnent d'autres sensations anormales comme des
        fourmillements, des picotements ou des sensations d'engourdissement,
        dans tout mon corps</label
      >
      <div class="control-me"></div>
    </div>
    <div>
      <input
        type="checkbox"
        id="toggle"
        class="visually-hidden"
        v-model="quest"
        value="5"
      />
      <label for="toggle"
        >Mes douleurs s'accompagnent d'autres problèmes de santé comme des
        problèmes digestifs, des problèmes urinaires, des maux de tête, ou des
        impatiences dans les jambes.</label
      >
      <div class="control-me"></div>
    </div>
    <div>
      <input
        type="checkbox"
        id="toggle"
        class="visually-hidden"
        v-model="quest"
        value="6"
      />
      <label for="toggle"
        >Mes douleurs ont un retentissement important dans ma vie : en
        particulier, sur mon sommeil, ma capacité à me concentrer avec une
        impression de fonctionner au ralenti.</label
      >
      <div class="control-me"></div>
    </div>
    <div>
      <hr />
      <label for="Items">Items présents :</label>
      <input type="text" v-model="quest.length" />
      <hr />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Score1",
  data() {
    return {
      quest: [],
    };
  },
  mounted() {},
});
</script>

<style></style>
