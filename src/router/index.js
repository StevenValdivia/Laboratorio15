import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },

    {
        path: '/user',
        name: 'user',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "user" */ '../views/user.vue')
    },
    {
        path: '/vendedor',
        name: 'vendedor',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "user" */ '../views/vendedor.vue')
    },
    {
        path: '/colaboradores',
        name: 'colaboradores',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "user" */ '../views/colaboradores.vue')
    },
    {
        path: '/catalogo',
        name: 'catalogo',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "user" */ '../views/catalogo.vue')
    },
    {
        path: '/producto',
        name: 'producto',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "user" */ '../views/producto.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router