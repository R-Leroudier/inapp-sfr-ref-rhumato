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

<style scoped lang="scss">
@import "src/sass/global.scss";;
.header {
  margin-bottom: 1em;
  box-shadow: 0 3px 6px rgba(196,154,108,.2980392156862745);
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  padding: 1rem .75rem;
  justify-content: space-between;
  display: flex;
  align-items: center;

  img {
    height: 40px;
  }


  .quit {
    height: 3em;

    a {
      display: inline-block;
      font-weight: 400;
      line-height: 1.5;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: .375rem .75rem;
      font-size: 1rem;
      border-radius: .5rem;
      transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
      color: #cb2080;
      align-items: center !important;
    }
  }

  .back {
    font-size: 24px;
    color: #58b4d9;
  }
}
</style>
