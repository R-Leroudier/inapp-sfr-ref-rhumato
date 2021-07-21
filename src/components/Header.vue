<template>
  <div class="header">
    <div @click="$router.go(-1)" class="back">
      <i class="far fa-chevron-circle-left"></i>
    </div>

    <div>
      <img
        class="test"
        :src="require('@/assets/logo-sfr.png')"
        alt="Logo sfr"
      />
      <img :src="require('@/assets/logo-ref.png')" alt="Logo ref" />
    </div>
    <div class="quit">
      <a href="cmd://webview-close">
        <i class="far fa-times-circle"></i>
      </a>
    </div>
  </div>
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
@import 'src/sass/global.scss';
.header {
  margin-bottom: 1em;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0 0 1.06em 1.06em;
  padding: 1rem 0.75rem;
  justify-content: space-between;
  display: flex;
  align-items: center;
  background-color: #F1F1F6;

  img {
    height: 40px;
  }

  .back {
    font-size: 24px;
    color: #38bbec;
  }
}
.fa-times-circle {
  font-size: 24px;
  color: #38bbec;
}
</style>
