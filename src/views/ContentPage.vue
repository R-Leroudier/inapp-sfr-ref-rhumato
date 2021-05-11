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
import Haq from "@/components/scores/RIC/PolyarthriteRhumatoide/Haq.vue";
import Basdai from "@/components/scores/RIC/Spondyloarthrite/Basdai.vue";
import Basfi from "@/components/scores/RIC/Spondyloarthrite/Basfi.vue";
import Behcet from "@/components/scores/MaladiesSystemiques/Behcet.vue";
import ClairanceCreatinine from "@/components/scores/PathologieOsseuse/ClairanceCreatinine.vue";
import Sharp from "@/components/scores/MaladiesSystemiques/Sharp.vue";
import SystemicSclerodermaAcrEular from "@/components/scores/MaladiesSystemiques/SystemicSclerodermaAcrEular.vue";
import Das28 from "@/components/scores/RIC/PolyarthriteRhumatoide/Das28.vue";
import AcrEular2010 from "@/components/scores/RIC/PolyarthriteRhumatoide/AcrEular2010.vue";
import Asas from "@/components/scores/RIC/Spondyloarthrite/Asas.vue";
import NewYorkClassification from "@/components/scores/RIC/Spondyloarthrite/NewYorkClassification.vue";
import Amor from "@/components/scores/RIC/Spondyloarthrite/Amor.vue";
import Asdas from "@/components/scores/RIC/Spondyloarthrite/Asdas.vue";
import IMC from "@/components/scores/Imc.vue";
import Cdai from "@/components/scores/RIC/PolyarthriteRhumatoide/Cdai.vue";
import Gsla from "@/components/scores/Gsla.vue";
import FautrelClassification from "@/components/scores/MaladiesSystemiques/FautrelClassification.vue";
import DasPpr from "@/components/scores/RIC/DasPpr.vue";
import Sdai from "@/components/scores/RIC/PolyarthriteRhumatoide/Sdai.vue";
import First from "@/components/scores/First.vue";
import Sapl from "@/components/scores/MaladiesSystemiques/SAPL.vue";
import ArthritisAcr1990 from "@/components/scores/MaladiesSystemiques/ArthritisAcr1990.vue";
import HipLequesnes from "@/components/scores/PathologieMecanique/HipLequesnes.vue";
import KneeLequesnes from "@/components/scores/PathologieMecanique/KneeLequesnes.vue";
import Caspar from "@/components/scores/RIC/Caspar.vue";
import GoutteAcrEular from "@/components/scores/RhumatismesChristallins/GoutteAcrEular.vue";
import SelenaSledai from "@/components/scores/MaladiesSystemiques/SelenaSledai.vue";
import Ffs from  "@/components/scores/MaladiesSystemiques/Ffs.vue";
import Rodnan from "@/components/scores/MaladiesSystemiques/Rodnan.vue";
import Bvas from "@/components/scores/MaladiesSystemiques/Bvas.vue";
import Dapsa from "@/components/scores/RIC/Dapsa.vue";
import PprEularAcr2012 from "@/components/scores/RIC/PprEularAcr2012.vue";
import Essdai from "@/components/scores/MaladiesSystemiques/Essdai.vue";
import FRAX from "@/components/scores/PathologieOsseuse/FRAX.vue";
import CalculCalcemie from "@/components/scores/PathologieOsseuse/CalculCalcemie.vue";
import Ldl from "@/components/scores/Ldl.vue";
import Polyarthrite from "@/components/bilans/Polyarthrite.vue";
import MonoArthrite from "@/components/bilans/Mono-arthrite.vue";
import LesionOsseuse from "@/components/bilans/LesionOsseuse.vue";
import Iombalgie from "@/components/bilans/Iombalgie.vue";
import Osteoporose from "@/components/bilans/Osteoporose.vue";
import GeneraliteGrossesse from "@/components/conception/GeneraliteGrossesse.vue";
import MethotrexateGrossesse from "@/components/conception/tttIndique/Methotrexate.vue";
import LeflunomideGrossesse from "@/components/conception/tttIndique/Leflunomide.vue";
import MycophénolateMofetil from "@/components/conception/tttIndique/MycophénolateMofetil.vue";
import Cyclophosphamide from "@/components/conception/tttIndique/Cyclophosphamide.vue";
import TofacitinibBaricitinib from "@/components/conception/tttIndique/TofacitinibBaricitinib.vue";
import AbataceptCondition from "@/components/conception/tttAutoriseSousCondition/AbataceptCondition.vue";
import Tocilizumab from "@/components/conception/tttAutoriseSousCondition/Tocilizumab.vue";
import Belimumab from "@/components/conception/tttAutoriseSousCondition/Belimumab.vue";
import Anakinra from "@/components/conception/tttAutoriseSousCondition/Anakinra.vue";
import Ustekinumab from "@/components/conception/tttAutoriseSousCondition/Ustekinumab.vue";
import Rituximab from "@/components/conception/tttAutoriseSousCondition/Rituximab.vue";
import AntiTNFCondition from "@/components/conception/tttAutoriseSousCondition/AntiTNFCondition.vue";
import HydroxychloroquineAutorise from "@/components/conception/tttAutorise/HydroxychloroquineAutorise.vue";
import SulfasalazineAutorise from "@/components/conception/tttAutorise/SulfasalazineAutorise.vue";
import AzathioprineAutorise from "@/components/conception/tttAutorise/AzathioprineAutorise.vue";
import Ciclosporine from "@/components/conception/tttAutorise/Ciclosporine.vue";
import Tacrolimus from "@/components/conception/tttAutorise/Tacrolimus.vue";
import ColchicineAutorise from "@/components/conception/tttAutorise/ColchicineAutorise.vue";
import CorticoidesAutorise from "@/components/conception/tttAutorise/CorticoidesAutorise.vue";
import AntiInflammatoires from "@/components/conception/tttAutorise/AntiInflammatoires.vue";
import tttPousseeGrossesse from "@/components/conception/tttPousseeGrossesse.vue";
import recapGrossesse from "@/components/conception/recapGrossesse.vue";

export default Vue.extend({
  name: "ContentPage",
  components: {
    AntiInflammatoires,
    recapGrossesse,
    tttPousseeGrossesse,
    CorticoidesAutorise,
    HydroxychloroquineAutorise,
    SulfasalazineAutorise,
    ColchicineAutorise,
    Tacrolimus,
    AzathioprineAutorise,
    Ciclosporine,
    AbataceptCondition,
    Tocilizumab,
    Belimumab,
    Anakinra,
    Ustekinumab,
    Rituximab,
    AntiTNFCondition,
    Haq,
    Basdai,
    Basfi,
    Behcet,
    ClairanceCreatinine,
    Sharp,
    SystemicSclerodermaAcrEular,
    Das28,
    AcrEular2010,
    Asas,
    NewYorkClassification,
    Amor,
    Asdas,
    IMC,
    Cdai,
    Gsla,
    FautrelClassification,
    Rodnan,
    DasPpr,
    Sdai,
    First,
    Sapl,
    ArthritisAcr1990,
    HipLequesnes,
    KneeLequesnes,
    Caspar,
    SelenaSledai,
    Ffs,
    GoutteAcrEular,
    Bvas,
    Dapsa,
    PprEularAcr2012,
    Essdai,
    FRAX,
    CalculCalcemie,
    Ldl,
    Polyarthrite,
    Osteoporose,
    Iombalgie,
    LesionOsseuse,
    MonoArthrite,
    GeneraliteGrossesse,
    MethotrexateGrossesse,
    LeflunomideGrossesse,
    MycophénolateMofetil,
    Cyclophosphamide,
    TofacitinibBaricitinib
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
