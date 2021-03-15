import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import ListPage from '@/views/ListPage.vue'
import SubListPage from '@/views/SubListPage.vue'
import ContentPage from '@/views/ContentPage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'ListPage',
        component: ListPage
    },
    {
        path: '/sublist/:slug',
        name: 'SubListPage',
        component: SubListPage
    },
    {
        path: '/score/:slug',
        name: 'ContentPage',
        component: ContentPage
    },
]

const router = new VueRouter({
    routes,
    //do NOT user mode: "history" or "abstract", we need hastags
    //mode: "history",
    mode: "hash",
})

export default router
