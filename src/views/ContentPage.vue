<template>
  <div class="content-page">
      <keep-alive>
        <component v-bind:is="scoreName"></component>
      </keep-alive>
      <!-- <CllBallScore v-if="scoreName === 'cll-ball-3'"></CllBallScore> -->
  </div>
</template>

<script lang="ts">
import BinetScore from "@/components/scores/BinetScore.vue"
import Vue from "vue"
import CllBallScore from "@/components/scores/CllBallScore.vue"

export default Vue.extend({
    name: "Home",
    components: {
        BinetScore,
        CllBallScore,
    },
    data()
    {
        return {
            scoreName: null,
        }
    },
    mounted()
    {
        this.scoreName = this.$route.params.slug
        this.scoreName = "BinetScore"

    },
})
</script>
