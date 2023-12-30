import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/auth/login.vue'
import Register from '../components/auth/register.vue'
import ContactUs from '../components/others/contactUs.vue'
import Documentation from '../components/others/documentation.vue'
import NotFound from '../components/others/notFound.vue'

const routes = [
    {
        path:'/',
        component: Login
    },
    {
        path:'/register',
        component: Register
    },
    {
        path:'/contact-us',
        component: ContactUs
    },
    {
        path:'/documentation',
        component: Documentation
    },
    {
        path:'/:pathMatch(.*)*',
        component: NotFound
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
