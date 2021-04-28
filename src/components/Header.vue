<template>
  <div class="header">
    <div v-if="headerQuitApp" class="quit">
      <a v-if="isMobile()" href="cmd://webview-close" >
        <i class="fal fa-times-circle"></i>
      </a>
    </div>
    <div v-else @click="goBack(this,2)" class="back">
      <i class="fal fa-chevron-circle-left"></i>
    </div>

    <div>
      <img class="test" :src="require('@/assets/logo-sfr.png')" alt="Logo sfr">
      <img :src="require('@/assets/logo-ref.png')" alt="Logo ref">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { goBack, isMobile } from "@/global";

export default Vue.extend({
  props: [ "headerQuitApp" ],
  mounted() {},
  methods: {
    goBack,
    isMobile
  }
})
</script>

<style lang="scss">
.header {
  height: 40px;
  top: -20px;
  padding: 30px 30px 10px 30px;
  position: relative;
  background-color: #f2f1f6;
  box-shadow: 1px 1px 1px 1px lightgray;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 40px;

  img {
    height: 40px;
  }


  .quit a {
    font-size: 24px;
    color: #cb2080;
  }

  .back {
    font-size: 24px;
    color: #58b4d9;
  }
}
</style>
