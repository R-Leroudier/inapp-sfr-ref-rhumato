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
      <div>
        <label :for="`radio`+index+`x0`">
          <input type="radio" :value="malusScore[0]" :name="`radio`+index" :id="`radio`+index+`x0`" @click="radioChange($event)" checked/>
          Sans aucune difficulté
        </label>
      </div>
      <div>
        <label :for="`radio`+index+`x1`">
          <input type="radio" :value="malusScore[1]" :name="`radio`+index" :id="`radio`+index+`x1`" @click="radioChange($event)"/>
          Avec quelques difficultés
        </label>
      </div>
      <div>
        <label :for="`radio`+index+`x2`">
          <input type="radio" :value="malusScore[2]" :name="`radio`+index" :id="`radio`+index+`x2`" @click="radioChange($event)"/>
          Avec beaucoup de difficultés
        </label>
      </div>
      <div>
        <label :for="`radio`+index+`x3`">
          <input type="radio" :value="malusScore[3]" :name="`radio`+index" :id="`radio`+index+`x3`" @click="radioChange($event)"/>
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
    return {
       userScore: 0
      //answerValue: null,
    };
  },
  methods: {

    radioChange(e: any) {

      // this.$emit("upwardChange", {
      //   index: this.index,
      //   userScore: e.target.checked ? this.malusScore : 0,
      // });
    },

    change(e: any) {
      //  console.log(e.target.value)
      this.answerValue = e.target.value;
      //  this.$emit('questionChanged', { index: this.index, answerValue: this.answerValue })
    },
  },
  mounted() {

    console.log(this.malusScore)
  },
});
</script>
