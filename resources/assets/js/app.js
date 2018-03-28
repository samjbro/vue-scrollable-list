import './bootstrap';
import App from './App.vue';
import router from './routes';

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
