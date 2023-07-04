import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
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
        path: '/Article',
        name: 'Article',
        component: () => import('../views/Article.vue')
    },

    // 分類文章頁面
    {
        path: '/Article-Web',
        name: 'Article-Web',
        component: () => import('../views/Article-Web.vue')
    },
    {
        path: '/Article-HTML',
        name: 'Article-HTML',
        component: () => import('../views/Article-HTML.vue')
    },
    {
        path: '/Article-CSS',
        name: 'Article-CSS',
        component: () => import('../views/Article-CSS.vue')
    },
    {
        path: '/Article-JavaScript',
        name: 'Article-JavaScript',
        component: () => import('../views/Article-JavaScript.vue')
    },
    {
        path: '/Article-Vue',
        name: 'Article-Vue',
        component: () => import('../views/Article-Vue.vue')
    },

    // 置頂 文章
    {
        path: '/Programming-Language',
        name: 'Programming-Language',
        component: () => import('../views/Programming-Language.vue')
    },

    // Web 文章
    {
        path: '/WEB_MVC-vs-MVVM',
        name: 'WEB_MVC-vs-MVVM',
        component: () => import('../views/WEB_MVC-vs-MVVM.vue')
    },
    {
        path: '/WEB_npm-introduce',
        name: 'WEB_npm-introduce',
        component: () => import('../views/WEB_npm-introduce.vue')
    },
    {
        path: '/WEB_cdn-introduce',
        name: 'WEB_cdn-introduce',
        component: () => import('../views/WEB_cdn-introduce.vue')
    },

    // HTML 文章
    {
        path: '/HTML_codeTag',
        name: 'HTML_codeTag',
        component: () => import('../views/HTML_codeTag.vue')
    },
    {
        path: '/HTML_tableTag',
        name: 'HTML_tableTag',
        component: () => import('../views/HTML_tableTag.vue')
    },

    // CSS 文章
    {
        path: '/CSS_nth-child',
        name: 'CSS_nth-child',
        component: () => import('../views/CSS_nth-child.vue')
    },

    // JS 文章
    {
        path: '/JS_Cookie-vs-LocalStorage-vs-SessionStorage',
        name: 'JS_Cookie-vs-LocalStorage-vs-SessionStorage',
        component: () => import('../views/JS_Cookie-vs-LocalStorage-vs-SessionStorage.vue')
    },
    {
        path: '/JS_map-vs-forEach',
        name: 'JS_map-vs-forEach',
        component: () => import('../views/JS_map-vs-forEach.vue')
    },
    {
        path: '/WEB_api-introduce',
        name: 'WEB_api-introduce',
        component: () => import('../views/WEB_api-introduce.vue')
    },


    // Vue 文章
    {
        path: '/VUE_LifeCycle',
        name: 'VUE_LifeCycle',
        component: () => import('../views/VUE_LifeCycle.vue')
    },

    // 技術合併 文章
    {
        path: '/CODE_Limit-Line-Width',
        name: 'CODE_Limit-Line-Width',
        component: () => import('../views/CODE_Limit-Line-Width.vue')
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
