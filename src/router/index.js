    import { createRouter, createWebHistory} from "vue-router";
    import StartPageView from "../views/StartPageView.vue";

    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL), 
        routes: [
            {
                path: '/start',
                name: 'start',
                component: StartPageView,
            },
        ],
    })

    export default router

