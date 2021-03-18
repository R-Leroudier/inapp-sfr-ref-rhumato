<template>
  <div>
    <!-- <div>{{ question.question }} <b>{{index}}</b></div>
      <div v-for="(value,i) in question.values" :key="i">
          <input :name="'x'+index" type="radio" v-bind:value="value" @click="change($event)"> {{labels[i]}}
      </div> -->

    <section>
      <div class="question">
        <h2>1</h2>
        <label class="text" for="checkbox1">Scales</label>
        <label class="switch">
          <input id="checkbox1" type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SelenaSledaiCheckBox",
  props: ["question", "malusScore", "answer"],
  data() {
    return {
      // answerValue: null,
      // labels: [
      //   "Sans aucune difficulté",
      //   "Avec quelques difficultés" ,
      //   "Avec x difficultés" ,
      //   "Avec x3 difficultés !!" ,
      // ]
    };
  },
  methods: {
    change(e: any) {
      //  console.log(e.target.value)
      //this.answerValue = e.target.value
      //this.$emit('questionChanged', { index: this.index, answerValue: this.answerValue })
    },
  },
  mounted() {},
});
</script>
<style lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;

  input:checked + .slider {
    background-color: #f37221;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #f37221;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(23px);
    -ms-transform: translateX(23px);
    transform: translateX(23px);
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 19px;
    width: 19px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider.round {
    border-radius: 25px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.question {
  h2 {
    display: contents;
  }
  .text {
    padding-left: 10px;
    padding-right: 15px;
  }
}
</style>
