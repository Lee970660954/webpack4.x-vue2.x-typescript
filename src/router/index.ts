import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        redirect: "index.html"
    },
    {
        path: "/index.html",
        name: "IndexPage",
        meta: {
            title: "首页",
            keepAlive: true
        },
        component: () => import(/* webpackChunkName: "indexPage" */ "@/views/index/index.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: "/m/",
    routes
})

export default router;