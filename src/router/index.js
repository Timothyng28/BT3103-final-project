import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomePage/Home.vue')
    },
    {
        path: '/games',
        name: 'GamesPage',
        component: () => import('@/views/GamesPage/GamesPage.vue')
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: () => import('@/views/LoginPage/LoginPage.vue')
    },
    {
        path: '/scorekeeperDashboard',
        name: 'ScorekeeperDashboard',
        component: () => import('@/views/Dashboards/ScoreKeeperDashboard.vue')
    },
    {
        path: '/residences',
        name: 'ResidencesPage',
        component: () => import('@/views/ResidencesPage/ResidencesPage.vue')
    },
    {
        path: '/schedule',
        name: 'SchedulePage',
        component: () => import('@/views/SchedulePage/SchedulePage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router