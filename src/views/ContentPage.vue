<template>
  <div class="content-page">
    <keep-alive>
      <component v-bind:is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DataService from "@/service/DataService";
import Score1 from "@/components/scores/Score1.vue";
import Haq from "@/components/scores/RIC/PolyarthriteRhumatoide/Haq.vue";
import Basdai from "@/components/scores/RIC/Spondyloarthrite/Basdai.vue"
import Behcet from '@/components/scores/MaladiesSystemiques/Behcet.vue';
import PathologieOsseuse from "@/components/scores/PathologieOsseuse.vue";
import Sharp from "@/components/scores/MaladiesSystemiques/Sharp.vue";
import SystemicSclerodermaAcrEular from "@/components/scores/MaladiesSystemiques/SystemicSclerodermaAcrEular.vue";
import Das28 from "@/components/scores/RIC/Polyarthrite rhumatoide/Das28.vue";
import AcrEular2010 from "@/components/scores/RIC/Polyarthrite rhumatoide/AcrEular2010.vue";
import Asas from "@/components/scores/RIC/Spondyloarthrite/Asas.vue";
import NewYorkClassification from "@/components/scores/RIC/Spondyloarthrite/NewYorkClassification.vue";
import Amor from "@/components/scores/RIC/Spondyloarthrite/Amor.vue";
import Asdas from "@/components/scores/RIC/Spondyloarthrite/Asdas.vue";
import IMC from "@/components/scores/Imc.vue";
import Cdai from "@/components/scores/RIC/PolyarthriteRhumatoide/Cdai.vue";
import Gsla from "@/components/scores/Gsla.vue";
import DasPpr from "@/components/scores/RIC/DasPpr.vue";
import Sdai from "@/components/scores/RIC/PolyarthriteRhumatoide/Sdai.vue";
import First from "@/components/scores/First.vue"
import Sapl from "@/components/scores/MaladiesSystemiques/SAPL.vue";
import ArthritisAcr1990 from "@/components/scores/MaladiesSystemiques/ArthritisAcr1990.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Score1,
    Haq,
    Basdai,
    Behcet,
    PathologieOsseuse,
    Sharp,
    SystemicSclerodermaAcrEular,
    Das28,
    AcrEular2010,
    Asas,
    NewYorkClassification,
    Amor,
    Asdas
    IMC,
    Cdai,
    Gsla,
    DasPpr,
    Sdai,
    First,
    Sapl,
    ArthritisAcr1990,
  },
  methods: {
    searchComponentName(nodes, slug) {
      for (let node of nodes) {
        if (node.slug === slug) {
          this.componentName = node.component;
          break;
        }
        if (node.children) {
          this.searchComponentName(node.children, slug);
        }
      }
    },
  },
  data() {
    return {
      componentName: null,
    };
  },
  mounted() {
    DataService.load()
      .then(() => {
        const slug = this.$route.params.slug;
        const dataTree = DataService.$data.tree;
        this.searchComponentName(dataTree, slug);
      })
      .catch((e) => {
        console.log(e);
      });
  },
});
</script>
