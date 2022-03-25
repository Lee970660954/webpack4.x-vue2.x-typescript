import Vue from "vue";
import App from "./App.vue";

import router from "./router/index";
// import store from "./store";
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

router.beforeEach(async (to: { [key: string]: any }, from: { [key: string]: any }, next: Function) => {
    (window as any).__qd__ &&
        (window as any).__qd__.page &&
        (window as any).__qd__.page(to.meta.qd, {
            ...to.query
        });
    document.title = to.meta?.title;
    try {
        next();
    } catch (error) {
        next();
    }
});

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount("#app");