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
import GeneraliteGrossesse from "@/components/conception/desir_grossesse/GeneraliteGrossesse.vue";
import MethotrexateGrossesse from "@/components/conception/desir_grossesse/tttIndique/Methotrexate.vue";
import LeflunomideGrossesse from "@/components/conception/desir_grossesse/tttIndique/Leflunomide.vue";
import MycophénolateMofetil from "@/components/conception/desir_grossesse/tttIndique/MycophénolateMofetil.vue";
import Cyclophosphamide from "@/components/conception/desir_grossesse/tttIndique/Cyclophosphamide.vue";
import TofacitinibBaricitinib from "@/components/conception/desir_grossesse/tttIndique/TofacitinibBaricitinib.vue";
import AbataceptCondition from "@/components/conception/desir_grossesse/tttAutoriseSousCondition/AbataceptCondition.vue";
import Tocilizumab from "@/components/conception/desir_grossesse/tttAutoriseSousCondition/Tocilizumab.vue";
import Belimumab from "@/components/conception/desir_grossesse/tttAutoriseSousCondition/Belimumab.vue";
import Anakinra from "@/components/conception/desir_grossesse/tttAutoriseSousCondition/Anakinra.vue";
import Ustekinumab from "@/components/conception/desir_grossesse/tttAutoriseSousCondition/Ustekinumab.vue";
import Rituximab from "@/components/conception/desir_grossesse/tttAutoriseSousCondition/Rituximab.vue";
import AntiTNFCondition from "@/components/conception/desir_grossesse/tttAutoriseSousCondition/AntiTNFCondition.vue";
import HydroxychloroquineAutorise from "@/components/conception/desir_grossesse/tttAutorise/HydroxychloroquineAutorise.vue";
import SulfasalazineAutorise from "@/components/conception/desir_grossesse/tttAutorise/SulfasalazineAutorise.vue";
import AzathioprineAutorise from "@/components/conception/desir_grossesse/tttAutorise/AzathioprineAutorise.vue";
import Ciclosporine from "@/components/conception/desir_grossesse/tttAutorise/Ciclosporine.vue";
import Tacrolimus from "@/components/conception/desir_grossesse/tttAutorise/Tacrolimus.vue";
import ColchicineAutorise from "@/components/conception/desir_grossesse/tttAutorise/ColchicineAutorise.vue";
import CorticoidesAutorise from "@/components/conception/desir_grossesse/tttAutorise/CorticoidesAutorise.vue";
import AntiInflammatoires from "@/components/conception/desir_grossesse/tttAutorise/AntiInflammatoires.vue";
import tttPousseeGrossesse from "@/components/conception/desir_grossesse/tttPousseeGrossesse.vue";
import recapGrossesse from "@/components/conception/desir_grossesse/recapGrossesse.vue";
import AJI from "@/components/conception/rhumato/AJI.vue";
import CalendrierVaccinal from "@/components/conception/rhumato/CalendrierVaccinal.vue";
import GeneraliteRhumato from "@/components/conception/rhumato/GeneraliteRhumato.vue";
import tttRhumato from "@/components/conception/rhumato/tttRhumato.vue";
import AINS from "@/components/tttMedicamenteux/AINS.vue";
import Glucocorticoides from "@/components/tttMedicamenteux/Glucocorticoides.vue";
import Corticoides from "@/components/tttMedicamenteux/Corticoides.vue";
import Apremilast from "@/components/tttMedicamenteux/sDMARD/Apremilast.vue";
import Hydroxychloroquine from "@/components/tttMedicamenteux/sDMARD/Hydroxychloroquine.vue";
import Leflunomide from "@/components/tttMedicamenteux/sDMARD/Leflunomide.vue";
import Methotrexate from "@/components/tttMedicamenteux/sDMARD/Methotrexate.vue";
import Sulfasalazine from "@/components/tttMedicamenteux/sDMARD/Sulfasalazine.vue";
import Baricitinib from "@/components/tttMedicamenteux/sDMARD/inhibiteurs/Baricitinib.vue";
import Tofacitinib from "@/components/tttMedicamenteux/sDMARD/inhibiteurs/Tofacitinib.vue";
import Upadacitinib from "@/components/tttMedicamenteux/sDMARD/inhibiteurs/Upadacitinib.vue";
import Filgotinib from "@/components/tttMedicamenteux/sDMARD/inhibiteurs/Filgotinib.vue";
import AntiBaff from "@/components/tttMedicamenteux/bDMARD/AntiBaff.vue";
import AntiCD20 from "@/components/tttMedicamenteux/bDMARD/AntiCD20.vue";
import AntiIL1 from "@/components/tttMedicamenteux/bDMARD/AntiIL1.vue";
import AntiIL6R from "@/components/tttMedicamenteux/bDMARD/AntiIL6R.vue";
import AntiIL12_13 from "@/components/tttMedicamenteux/bDMARD/AntiIL12_23.vue";
import AntiIL17 from "@/components/tttMedicamenteux/bDMARD/AntiIL17.vue";
import AntiIL23 from "@/components/tttMedicamenteux/bDMARD/AntiIL23.vue";
import AntiTNF from "@/components/tttMedicamenteux/bDMARD/AntiTNF.vue";
import BilanPreBiotherapie from "@/components/tttMedicamenteux/bDMARD/BilanPreBiotherapie.vue";
import Abatacept from "@/components/tttMedicamenteux/bDMARD/Abatacept.vue";
import SPONDYLOARTHRITE from "@/components/tttMedicamenteux/bDMARD/choix/SPONDYLOARTHRITE.vue";
import POLYARTHRITE_RHUMATOIDE from "@/components/tttMedicamenteux/bDMARD/choix/POLYARTHRITE_RHUMATOIDE.vue";
import Colchicine from "@/components/tttMedicamenteux/Colchicine.vue";
import IMUREL from "@/components/tttMedicamenteux/autres/IMUREL.vue";
import CELLCEPT from "@/components/tttMedicamenteux/autres/CELLCEPT.vue";
import Denosumab from "@/components/tttMedicamenteux/AntiOsteoporotiques/Denosumab.vue";
import Teriparatide from "@/components/tttMedicamenteux/AntiOsteoporotiques/Teriparatide.vue";
import Raloxifene from "@/components/tttMedicamenteux/AntiOsteoporotiques/Raloxifene.vue";
import Alendronate from "@/components/tttMedicamenteux/AntiOsteoporotiques/Biphosphonates/Alendronate.vue";
import Risedronate from "@/components/tttMedicamenteux/AntiOsteoporotiques/Biphosphonates/Risedronate.vue";
import AcideZoledronique from "@/components/tttMedicamenteux/AntiOsteoporotiques/Biphosphonates/AcideZoledronique.vue";

export default Vue.extend({
  name: "ContentPage",
  components: {
    AntiInflammatoires,
    Alendronate,
    Risedronate,
    AcideZoledronique,
    Denosumab,
    Raloxifene,
    Colchicine,
    Teriparatide,
    IMUREL,
    CELLCEPT,
    POLYARTHRITE_RHUMATOIDE,
    SPONDYLOARTHRITE,
    Abatacept,
    AntiTNF,
    AntiIL23,
    AntiIL17,
    AntiIL12_13,
    AntiIL6R,
    AntiCD20,
    AntiIL1,
    AntiBaff,
    BilanPreBiotherapie,
    Baricitinib,
    Apremilast,
    Filgotinib,
    Upadacitinib,
    Tofacitinib,
    Sulfasalazine,
    AINS,
    Hydroxychloroquine,
    Leflunomide,
    Methotrexate,
    Glucocorticoides,
    Corticoides,
    CalendrierVaccinal,
    GeneraliteRhumato,
    AJI,
    tttRhumato,
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
