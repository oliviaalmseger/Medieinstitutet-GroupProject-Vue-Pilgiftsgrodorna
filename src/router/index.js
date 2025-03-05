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
            {
                path: '/startGame',
                name: 'start-game',
                component: () => import('../views/StartGameView.vue'),
            },
            {
                path: '/game',
                name: 'game',
                component: () => import('../views/GameView.vue'),

            },
            {
                path: '/contactView',
                name: 'contact-view',
                component: () => import('../views/ContactView.vue'),
            },
        ],
    })

    export default router

