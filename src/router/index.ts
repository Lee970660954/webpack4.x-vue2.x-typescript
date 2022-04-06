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
        component: () => import(/* webpackChunkName "indexPage" */ "@/views/index/index.vue"),
        beforeEnter: (to, from, next) => {
            console.log("路由 IndexPage beforeEnter");
            next();
        }
    },
    {
        path: "/detail.html",
        name: "DetailPage",
        meta: {
            title: "详情页",
            keepAlive: true
        },
        component: () => import(/** webpackChunkName "detailPage" */ "@/views/detail/index.vue"),
        beforeEnter: (to, from, next) => {
            console.log("路由 DetailPage beforeEnter");
            next();
        }
    }
];

const router = new VueRouter({
    mode: "history",
    base: "/m/",
    routes
})
router.beforeEach((to, from, next) => {
    // if (to?.name === "DetailPage" && to.query?.id === "2") {
    //     return false;
    // }
    console.log("router.beforeEach");
    next();
    // setTimeout(() => {
    //     console.log("to1", to, "from1", from);
    //     next();
    // }, 5000);
})
// router.beforeEach((to, from, next) => {
//     setTimeout(() => {
//         console.log("to2", to, "from2", from);
//         next();
//     }, 5000);
// })

router.beforeResolve((to, from, next) => {
    console.log("router.beforeResolve");
    next();
})

router.afterEach((to, from) => {
    console.log("router.afterEach");
})

export default router;