import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)



// jQuery
import $ from 'jquery';
window.$ = $;

// Bootstrap JS
import 'bootstrap';






createApp(App).use(store).use(router).mount('#app')





router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
});