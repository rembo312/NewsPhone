import {createRouter, createWebHistory} from "vue-router";
import Home from "./page/Home.vue";
import News from "./page/News.vue";
import Catalog from "./page/Catalog.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path:"/news/:id",
            component: News,
        },
        {
            path:"/catalog/:type",
            component: Catalog,
        }
    ]
});

export default router;