<template>
    <div class="NewYorkCriteria">


      <table>
        <tbody>
        <tr>
          <th class='left-entry' >Critères cliniques </th>
        </tr>
        <tr>
          <td>Lombalgies avec raideur de plus de trois mois, améliorées à l'effort, mais ne cédant pas au repos
            Limitation des mouvements du rachis lombaire à la fois dans le plan frontal et sagital
            Limitation de l'ampliation thoracique par rapport aux valeurs normales corrigées pour l'âge et le sexe</td>
        </tr>
        </tbody>
      </table>

      <table>
        <tbody>
        <tr>
          <th class='left-entry' >Critères radiologiques</th>
        </tr>
        <tr>
          <td>Sacro-ilite bilatérale de grade &#8805; 2, ou sacro-ilite unilatérale de grade &#8805; 3</td>
        </tr>
        </tbody>
      </table>

      <table class="button">
        <tbody>
        <tr>
          <th class='button'>Score</th>
        </tr>
        <tr>
          <td>La spondylarthrite est définie si le critère radiologique est associé à au moins un des critères cliniques</td>
        </tr>
        </tbody>
      </table>

    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NewYorkCriteria",
  data() {
    return {
      result: null,
    };
  },
  mounted() {},
});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.NewYorkCriteria {}
.criteria{
  &__table {
    border: 1px solid #707070;
  }
  &__row{
    border: 1px solid #707070;
  }
}

table {
  margin: 10px 0;
  empty-cells: hide;
  //table-layout: fixed;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table th,
table td {
  border: 1px solid #D3D3D3;
  padding: 8px;
}

.table{
  color: red;
  &__title {
    color: blue;
  }
}
</style>
