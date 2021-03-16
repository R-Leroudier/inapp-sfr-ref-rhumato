<template>
  <div class="SubListPage">
    <div class="sub-categories">
      <div v-for="node1 in nodes1" :key="node1.id">
        <div v-if="node1.type === 'list'">
          <div>{{ node1.name }}</div>
          <div v-for="node2 in node1.children" :key="node2.id">
            <div v-if="node2.type === 'list'">
              <div>>{{ node2.name }}</div>
              <div v-for="node3 in node2.children" :key="node3.id">
                <div v-if="node3.type === 'list'">
                  <div>>>{{ node3.name }}</div>
                  <div v-for="node4 in node3.children" :key="node4.id">
                    <router-link :to="'/score/' + node4.slug">>>>{{
                      node4.name
                    }}</router-link>
                  </div>
                </div>
                <div v-else>
                  <router-link :to="'/score/' + node3.slug">>>{{
                    node3.name
                  }}</router-link>
                </div>
              </div>
            </div>
            <div v-else>
              <router-link :to="'/score/' + node2.slug"
                >>{{ node2.name }}
              </router-link>
            </div>
          </div>
        </div>
        <div v-else>
          <router-link :to="'/score/' + node1.slug">{{
            node1.name
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DataService from "@/service/DataService";

export default Vue.extend({
  name: "SubListPage",
  data() {
    return {
      nodes1: [],
    };
  },
  mounted() {
    DataService.load()
      .then(() => {
        const slug = this.$route.params.slug;
        const dataTree = DataService.$data.tree;

        // Retrive component name from slug.
        for (let nodes0 of dataTree) {
          if (nodes0.slug === slug) {
            this.nodes1 = nodes0.children;
            break;
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },
});
</script>
