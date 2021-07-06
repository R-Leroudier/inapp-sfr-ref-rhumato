<template>
  <div class="list">
    <span>Recherche: {{ mySearch }}</span>
    <div v-for="(elem, i) in MyResult" :key="i">
      <tree-menu
        :name="elem.name"
        :type="elem.type"
        :slug="elem.slug"
        :children="elem.children"
        :depth="0"
        :content="elem.content"
      ></tree-menu>
    </div>
  </div>
</template>

<script>
import searching from '@/utils/Searching';
import DataService from '@/service/DataService';
import TreeMenu from '@/components/TreeMenu.vue';

export default {
  name: 'Search',
  props: {},
  components: { TreeMenu },
  data() {
    return {
      mySearch: this.$route.params.search,

      MyResult: [],
    };
  },
  watch: {
    MyResult(newR, oldR) {
      console.log('new', newR);
      console.log('old', oldR);
    },
  },
  methods: {
    getMyResult(list) {
      return searching(list, this.mySearch);
    },
  },
  mounted() {
    DataService.load()
      .then(() => {
        console.log(DataService.$data.tree);
        this.MyResult = this.getMyResult(DataService.$data.tree);
      })
      .catch((e) => {
        console.log(e);
      });
    this.MyResult = this.getMyResult();
    console.log('mounted', this.list);
  },
};
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  div {
    width: 85%;
  }
}
</style>
