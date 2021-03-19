<template>
  <div>
    <div v-if="title">
      <h3 class="title">{{ title }}</h3>
    </div>
    <h4 class="title">Êtes-vous capable de :</h4>
    <section>
      <p class="details">
        {{ question }}
      </p>
      <div class="radio-choise">
        <label :for="`radio` + index + `x0`">
          <input
            type="radio"
            :value="malusScore[0]"
            :name="`radio` + index"
            :id="`radio` + index + `x0`"
            @click="radioChange($event)"
            checked
          />
          Sans aucune difficulté
        </label>
      </div>
      <div class="radio-choise">
        <label :for="`radio` + index + `x1`">
          <input
            type="radio"
            :value="malusScore[1]"
            :name="`radio` + index"
            :id="`radio` + index + `x1`"
            @click="radioChange($event)"
          />
          Avec quelques difficultés
        </label>
      </div>
      <div class="radio-choise">
        <label :for="`radio` + index + `x2`">
          <input
            type="radio"
            :value="malusScore[2]"
            :name="`radio` + index"
            :id="`radio` + index + `x2`"
            @click="radioChange($event)"
          />
          Avec beaucoup de difficultés
        </label>
      </div>
      <div class="radio-choise">
        <label :for="`radio` + index + `x3`">
          <input
            type="radio"
            :value="malusScore[3]"
            :name="`radio` + index"
            :id="`radio` + index + `x3`"
            @click="radioChange($event)"
          />
          Incapable de le faire
        </label>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HaqQuestion",
  props: ["index", "title", "question", "malusScore"],
  data() {
    return {};
  },
  methods: {
    radioChange(e: any) {
      this.$emit("upwardChange", {
        index: this.index,
        userScore: e.target.value,
      });
    },
  },
  mounted() {},
});
</script>
<style scoped lang="scss">
.radio-choise {
  border-color: #8f3ab138;
  border-width: 3px;
  border-style: solid;
  border-radius: 5px;
  max-width: 250px;
  margin: auto;
  margin-top: 6px;
  margin-bottom: 6px;
  cursor: pointer;

  label {
    width: 100%;
    background-color: #e0b5f10a;
    display: block;
    cursor: pointer;
    padding-top: 10px;
    padding-bottom: 10px;

    input:checked + :parent {
      background-color: red !important;
    }


  }

}
</style>
