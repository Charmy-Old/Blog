import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/Home2',
        name: 'Home2',
        component: () => import('../views/Home2.vue')
    },
    {
        path: '/Home3',
        name: 'Home3',
        component: () => import('../views/Home3.vue')
    },
    {
        path: '/Resume',
        name: 'Resume',
        component: () => import('../views/Resume.vue')
    },
    {
        path: '/Side-Project',
        name: 'Side-Project',
        component: () => import('../views/Side-Project.vue')
    },
    {
        path: '/Reference',
        name: 'Reference',
        component: () => import('../views/Reference.vue')
    },
    {
        path: '/Article',
        name: 'Article',
        component: () => import('../views/Article/Article.vue')
    },

    // 分類文章頁面
    {
        path: '/Article-Web',
        name: 'Article-Web',
        component: () => import('../views/Article/Article-Web.vue')
    },
    {
        path: '/Article-HTML',
        name: 'Article-HTML',
        component: () => import('../views/Article/Article-HTML.vue')
    },
    {
        path: '/Article-CSS',
        name: 'Article-CSS',
        component: () => import('../views/Article/Article-CSS.vue')
    },
    {
        path: '/Article-JavaScript',
        name: 'Article-JavaScript',
        component: () => import('../views/Article/Article-JavaScript.vue')
    },
    {
        path: '/Article-Vue',
        name: 'Article-Vue',
        component: () => import('../views/Article/Article-Vue.vue')
    },
    {
        path: '/Article-Database',
        name: 'Article-Database',
        component: () => import('../views/Article/Article-Database.vue')
    },
    {
        path: '/Article-Python',
        name: 'Article-Python',
        component: () => import('../views/Article/Article-Python.vue')
    },

    // 置頂 文章
    {
        path: '/Programming-Language',
        name: 'Programming-Language',
        component: () => import('../views/Article-Programming/Programming-Language.vue')
    },

    // Web 文章
    {
        path: '/WEB_cdn-introduce',
        name: 'WEB_cdn-introduce',
        component: () => import('../views/Article-WEB/WEB_cdn-introduce.vue')
    },
    {
        path: '/WEB_npm-introduce',
        name: 'WEB_npm-introduce',
        component: () => import('../views/Article-WEB/WEB_npm-introduce.vue')
    },
    {
        path: '/WEB_api-introduce',
        name: 'WEB_api-introduce',
        component: () => import('../views/Article-WEB/WEB_api-introduce.vue')
    },
    {
        path: '/WEB_MVC-vs-MVVM',
        name: 'WEB_MVC-vs-MVVM',
        component: () => import('../views/Article-WEB/WEB_MVC-vs-MVVM.vue')
    },
    {
        path: '/WEB_HTTP-vs-HTTPS',
        name: 'WEB_HTTP-vs-HTTPS',
        component: () => import('../views/Article-WEB/WEB_HTTP-vs-HTTPS.vue')
    },
    {
        path: '/WEB_SSL-and-TLS',
        name: 'WEB_SSL-and-TLS',
        component: () => import('../views/Article-WEB/WEB_SSL-and-TLS.vue')
    },
    {
        path: '/WEB_TCP-IP',
        name: 'WEB_TCP-IP',
        component: () => import('../views/Article-WEB/WEB_TCP-IP.vue')
    },
    {
        path: '/WEB_RESTfulAPI-introduce',
        name: 'WEB_RESTfulAPI-introduce',
        component: () => import('../views/Article-WEB/WEB_RESTfulAPI-introduce.vue')
    },
    {
        path: '/WEB_web-noun',
        name: 'WEB_web-noun',
        component: () => import('../views/Article-WEB/WEB_web-noun.vue')
    },

    // HTML 文章
    {
        path: '/HTML_tableTag',
        name: 'HTML_tableTag',
        component: () => import('../views/Article-HTML/HTML_tableTag.vue')
    },
    {
        path: '/HTML_codeTag',
        name: 'HTML_codeTag',
        component: () => import('../views/Article-HTML/HTML_codeTag.vue')
    },

    // CSS 文章
    {
        path: '/CSS_nth-child',
        name: 'CSS_nth-child',
        component: () => import('../views/Article-CSS/CSS_nth-child.vue')
    },
    {
        path: '/CSS_box-sizing',
        name: 'CSS_box-sizing',
        component: () => import('../views/Article-CSS/CSS_box-sizing.vue')
    },

    // JS 文章
    {
        path: '/JS_map-vs-forEach',
        name: 'JS_map-vs-forEach',
        component: () => import('../views/Article-JavaScript/JS_map-vs-forEach.vue')
    },
    {
        path: '/JS_Cookie-vs-LocalStorage-vs-SessionStorage',
        name: 'JS_Cookie-vs-LocalStorage-vs-SessionStorage',
        component: () => import('../views/Article-JavaScript/JS_Cookie-vs-LocalStorage-vs-SessionStorage.vue')
    },
    {
        path: '/JS_var-vs-let-vs-const',
        name: 'JS_var-vs-let-vs-const',
        component: () => import('../views/Article-JavaScript/JS_var-vs-let-vs-const.vue')
    },
    {
        path: '/JS_delete-vs-splice',
        name: 'JS_delete-vs-splice',
        component: () => import('../views/Article-JavaScript/JS_delete-vs-splice.vue')
    },
    {
        path: '/JS_slice-vs-splice-vs-split',
        name: 'JS_slice-vs-splice-vs-split',
        component: () => import('../views/Article-JavaScript/JS_slice-vs-splice-vs-split.vue')
    },
    {
        path: '/JS_AJAX',
        name: 'JS_AJAX',
        component: () => import('../views/Article-JavaScript/JS_AJAX.vue')
    },
    {
        path: '/JS_Asynchronous',
        name: 'JS_Asynchronous',
        component: () => import('../views/Article-JavaScript/JS_Asynchronous.vue')
    },

    // Vue 文章
    {
        path: '/VUE_LifeCycle',
        name: 'VUE_LifeCycle',
        component: () => import('../views/Article-Vue/VUE_LifeCycle.vue')
    },
    {
        path: '/VUE_syntax',
        name: 'VUE_syntax',
        component: () => import('../views/Article-Vue/VUE_syntax.vue')
    },

    // Database 文章
    {
        path: '/DB_CRUD',
        name: 'DB_CRUD',
        component: () => import('../views/Article-Database/DB_CRUD.vue')
    },

    // Python 文章
    {
        path: '/PY_arithmetic',
        name: 'PY_arithmetic',
        component: () => import('../views/Article-Python/PY_arithmetic.vue')
    },
    {
        path: '/PY_loop',
        name: 'PY_loop',
        component: () => import('../views/Article-Python/PY_loop.vue')
    },

    // 技術合併 文章
    {
        path: '/CODE_Limit-Line-Width',
        name: 'CODE_Limit-Line-Width',
        component: () => import('../views/Article-CODE/CODE_Limit-Line-Width.vue')
    },
    {
        path: '/CODE_BOM-vs-DOM',
        name: 'CODE_BOM-vs-DOM',
        component: () => import('../views/Article-CODE/CODE_BOM-vs-DOM.vue')
    },
    
]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        //切換不同頁面，滾軸永遠在最上面
        if (to.name !== from.name)
            return {
                top: 0,
                left: 0,
                behavior: "smooth",
            };
    },
});




export default router
