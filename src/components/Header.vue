<template>
  <header class="header">
    <div @click="goBack" class="header__return">
      <i class="far fa-chevron-circle-left"></i>
    </div>
    <router-link  to="/">
      <img class="header__logo" :src="require('@/assets/logo-sfr.png')" alt="Logo sfr" />
      <img class="header__logo" :src="require('@/assets/logo-ref.png')" alt="Logo ref" />
    </router-link>
    <div>
      <a href="cmd://webview-close" class="header__exit">
        <i class="far fa-times-circle"></i>
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { goBack, isMobile } from '@/global';

export default Vue.extend({
  props: [],
  mounted() {},
  methods: {
    goBack,
    isMobile,
  },
});
</script>

<style scoped lang="scss">
  .header {
      margin-bottom: 1em;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 0 0 1.06em 1.06em;
      padding: 1rem 0.75rem;
      justify-content: space-between;
      display: flex;
      align-items: center;
      background-color: #F1F1F6;
      &__logo {
          height: 40px;
      }
      &__return {
        font-size: 24px;
        color: #38bbec;
      }
      &__exit {
        font-size: 24px;
        color: #38bbec;
      }
  }
</style>
