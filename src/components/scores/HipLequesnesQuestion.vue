<template>
  <div>
    <div v-if="title">
      <h3 class="title">{{ title }}</h3>
    </div>
    <section>
        <p class="details">
        {{ question }}
        </p>
        <!-- <p>
            {{ response }} <br>
        </p> -->
            <div v-for="(item, i) in response" :key="item.value">
                <label :for="`radio` + index + `x`[i] "> {{ item }}</label>
                <input
                    type="radio"
                    :value="malusScore[i]"
                    :name="`radio` + index"
                    :id="`radio` + index + `x`[i]"
                    @click="radioChange($event)"
                />
                
            </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HipLequesnesQuestion",
  props: ["index", "title", "question", "response", "malusScore"],
  data() {
    return {};
  },
  methods: {
    radioChange(e: any) {
        this.$emit("upwardChange", {
            index: this.index,
            userScore: e.target.value,        
        });
        console.log(e.target.value)
    },
  },
  mounted() {},
});
</script>

<style>

</style>