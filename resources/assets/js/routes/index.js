import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Products from '@/pages/Products';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/products',
        component: Products
    }
];

export default new VueRouter({
    routes
});