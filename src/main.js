import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// jQuery
import $ from "jquery";
window.$ = $;

// Bootstrap JS
import "bootstrap";

createApp(App).use(store).use(router).mount("#app")

router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
});



// 設定全局，抓Data
// app.config.globalProperties.$sharedData = {
// 	// AllArticleCount: 0,
// };
  
// app.mount("#app");