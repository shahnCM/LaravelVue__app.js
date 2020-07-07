/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


import store from './store';
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Form, HasError, AlertSuccess, AlertError} from 'vform'
import swal from 'sweetalert2';

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', swal.stopTimer)
        toast.addEventListener('mouseleave', swal.resumeTimer)
    }
})


window.Vue = require('vue');
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Form = Form;
window.swal = swal;
window.toast = toast;

require('./bootstrap');
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component(HasError.name, HasError);
Vue.component(AlertSuccess.name, AlertSuccess);
Vue.component(AlertError.name, AlertError);
Vue.component('app-container', require('./appContainer.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    store,
    router,
    el: '#app',
});
