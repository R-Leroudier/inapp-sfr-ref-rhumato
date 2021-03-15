<template>
  <div class="SubListPage">
        <div class="sub-categories">
            <div v-for="item in categories" :key="item.id">
                <div>{{item.name}}</div>
                <div v-for="subItem in item.children" :key="subItem.id">
                    <router-link :to="'/score/'+subItem.slug">{{subItem.name}}</router-link>
                </div>
            </div>
        </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import DataService from "@/service/DataService"

export default Vue.extend({
  name: "SubListPage",
    data()
    {
        return {
            categories: []
        }
    },
    mounted()
    {
        DataService.load()
            .then(() => {
                this.categories = DataService.$data.tree
            }).catch(e => {
                console.log(e)
            })
    },
})
</script>
