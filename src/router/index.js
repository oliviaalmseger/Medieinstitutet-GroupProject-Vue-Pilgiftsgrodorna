    import { createRouter, createWebHistory} from "vue-router";
    import StartPageView from "../views/StartPageView.vue";
    import ContactView from "../views/ContactView.vue";

    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL), 
        routes: [
            {
                path: '/start',
                name: 'start',
                component: StartPageView,
            },
            {
                path: '/contact',
                name: 'contact',
                component: ContactView,
            },
        ],
    })

    export default router

