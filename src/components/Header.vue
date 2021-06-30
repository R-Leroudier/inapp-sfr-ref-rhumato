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
  box-shadow: 0 3px 6px rgba(196, 154, 108, 0.2980392156862745);
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  padding: 1rem 0.75rem;
  justify-content: space-between;
  display: flex;
  align-items: center;

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
