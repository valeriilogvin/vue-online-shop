import Vue from 'vue'
import Router from 'vue-router'
import Catalogue from "../components/Catalogue"
import Cart from "../components/Cart"

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: Catalogue
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
            props: true
        }
    ]
})


export default router;