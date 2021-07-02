<template>
  <div class="list">
    <list-fiche :key="mySearch" :submenu="MyResult" />
  </div>
</template>

<script>
import ListFiche from '@/components/search/ListFiche.vue';
import searching from '@/utils/Searching';
import DataService from '@/service/DataService';

export default {
  name: 'Search',
  props: {},
  components: { ListFiche },
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

<style scoped>
.source {
  font-size: 10px;
  margin: 3px;
}
</style>
