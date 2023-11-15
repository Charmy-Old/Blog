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
        path: '/Home4',
        name: 'Home4',
        component: () => import('../views/Home4.vue')
    },
    {
        path: '/Home5',
        name: 'Home5',
        component: () => import('../views/Home5.vue')
    },
    {
        path: '/Home6',
        name: 'Home6',
        component: () => import('../views/Home6.vue')
    },
    {
        path: '/Home7',
        name: 'Home7',
        component: () => import('../views/Home7.vue')
    },
    {
        path: '/Home8',
        name: 'Home8',
        component: () => import('../views/Home8.vue')
    },
    {
        path: '/About',
        name: 'About',
        component: () => import('../views/About.vue')
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
        path: '/Record',
        name: 'Record',
        component: () => import('../views/Record.vue')
    },
    {
        path: '/Weight-Record',
        name: 'Weight-Record',
        component: () => import('../views/Weight-Record.vue')
    },
    {
        path: '/Question',
        name: 'Question',
        component: () => import('../views/Question.vue')
    },

    {
        path: '/Article',
        name: 'Article',
        component: () => import('../views/Article/Article.vue')
    },

    // 分類文章頁面
    {
        path: '/Article-Git',
        name: 'Article-Git',
        component: () => import('../views/Article/Article-Git.vue')
    },
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
    {
        path: '/Article-Software',
        name: 'Article-Software',
        component: () => import('../views/Article/Article-Software.vue')
    },
    {
        path: '/Article-Chat',
        name: 'Article-Chat',
        component: () => import('../views/Article/Article-Chat.vue')
    },
    {
        path: '/Article-Food',
        name: 'Article-Food',
        component: () => import('../views/Article/Article-Food.vue')
    },

    // 置頂 文章
    {
        path: '/Programming-Language',
        name: 'Programming-Language',
        component: () => import('../views/Article-Programming/Programming-Language.vue')
    },

    // Git 文章
    {
        path: '/GIT_basic-instructions',
        name: 'GIT_basic-instructions',
        component: () => import('../views/Article-Git/GIT_basic-instructions.vue')
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
    {
        path: '/WEB_OWASP-introduce',
        name: 'WEB_OWASP-introduce',
        component: () => import('../views/Article-WEB/WEB_OWASP-introduce.vue')
    },
    {
        path: '/WEB_Proxy-introduce',
        name: 'WEB_Proxy-introduce',
        component: () => import('../views/Article-WEB/WEB_Proxy-introduce.vue')
    },
    {
        path: '/WEB_CORS-introduce',
        name: 'WEB_CORS-introduce',
        component: () => import('../views/Article-WEB/WEB_CORS-introduce.vue')
    },
    {
        path: '/WEB_WebSocket-introduce',
        name: 'WEB_WebSocket-introduce',
        component: () => import('../views/Article-WEB/WEB_WebSocket-introduce.vue')
    },
    {
        path: '/WEB_CSR-vs-SSR-vs-Hydration',
        name: 'WEB_CSR-vs-SSR-vs-Hydration',
        component: () => import('../views/Article-WEB/WEB_CSR-vs-SSR-vs-Hydration.vue')
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
    {
        path: '/JS_shallowCopy-vs-deepCopy',
        name: 'JS_shallowCopy-vs-deepCopy',
        component: () => import('../views/Article-JavaScript/JS_shallowCopy-vs-deepCopy.vue')
    },
    {
        path: '/JS_byValue-vs-byReference',
        name: 'JS_byValue-vs-byReference',
        component: () => import('../views/Article-JavaScript/JS_byValue-vs-byReference.vue')
    },
    {
        path: '/JS_OOP',
        name: 'JS_OOP',
        component: () => import('../views/Article-JavaScript/JS_OOP.vue')
    },
    {
        path: '/JS_BubblingEvents-vs-CapturingEvents',
        name: 'JS_BubblingEvents-vs-CapturingEvents',
        component: () => import('../views/Article-JavaScript/JS_BubblingEvents-vs-CapturingEvents.vue')
    },
    {
        path: '/JS_closure',
        name: 'JS_closure',
        component: () => import('../views/Article-JavaScript/JS_closure.vue')
    },
    {
        path: '/JS_sort',
        name: 'JS_sort',
        component: () => import('../views/Article-JavaScript/JS_sort.vue')
    },
    {
        path: '/JS_destructuring-assignment',
        name: 'JS_destructuring-assignment',
        component: () => import('../views/Article-JavaScript/JS_destructuring-assignment.vue')
    },
    {
        path: '/JS_setTimeout-vs-setInterval',
        name: 'JS_setTimeout-vs-setInterval',
        component: () => import('../views/Article-JavaScript/JS_setTimeout-vs-setInterval.vue')
    },
    {
        path: '/JS_setAttribute-vs-getAttribute',
        name: 'JS_setAttribute-vs-getAttribute',
        component: () => import('../views/Article-JavaScript/JS_setAttribute-vs-getAttribute.vue')
    },
    {
        path: '/JS_undefined-vs-undeclared-vs-null',
        name: 'JS_undefined-vs-undeclared-vs-null',
        component: () => import('../views/Article-JavaScript/JS_undefined-vs-undeclared-vs-null.vue')
    },
    {
        path: '/JS_RegularExpression',
        name: 'JS_RegularExpression',
        component: () => import('../views/Article-JavaScript/JS_RegularExpression.vue')
    },
    {
        path: '/JS_stack-vs-queue',
        name: 'JS_stack-vs-queue',
        component: () => import('../views/Article-JavaScript/JS_stack-vs-queue.vue')
    },
    {
        path: '/JS_bind-vs-call-vs-apply',
        name: 'JS_bind-vs-call-vs-apply',
        component: () => import('../views/Article-JavaScript/JS_bind-vs-call-vs-apply.vue')
    },
    {
        path: '/JS_Loop-vs-Iteration-vs-Traversal-vs-Recursion',
        name: 'JS_Loop-vs-Iteration-vs-Traversal-vs-Recursion',
        component: () => import('../views/Article-JavaScript/JS_Loop-vs-Iteration-vs-Traversal-vs-Recursion.vue')
    },
    {
        path: '/JS_traversal',
        name: 'JS_traversal',
        component: () => import('../views/Article-JavaScript/JS_traversal.vue')
    },
    {
        path: '/JS_TemplateStringInterpolation',
        name: 'JS_TemplateStringInterpolation',
        component: () => import('../views/Article-JavaScript/JS_TemplateStringInterpolation.vue')
    },
    {
        path: '/JS_indexOf',
        name: 'JS_indexOf',
        component: () => import('../views/Article-JavaScript/JS_indexOf.vue')
    },
    {
        path: '/JS_Axios-Interceptors',
        name: 'JS_Axios-Interceptors',
        component: () => import('../views/Article-JavaScript/JS_Axios-Interceptors.vue')
    },
    {
        path: '/JS_class',
        name: 'JS_class',
        component: () => import('../views/Article-JavaScript/JS_class.vue')
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
    {
        path: '/VUE_createVUEcli',
        name: 'VUE_createVUEcli',
        component: () => import('../views/Article-Vue/VUE_createVUEcli.vue')
    },
    {
        path: '/VUE_eventBus',
        name: 'VUE_eventBus',
        component: () => import('../views/Article-Vue/VUE_eventBus.vue')
    },
    {
        path: '/VUE_props',
        name: 'VUE_props',
        component: () => import('../views/Article-Vue/VUE_props.vue')
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
    {
        path: '/PY_Pandas-Series',
        name: 'PY_Pandas-Series',
        component: () => import('../views/Article-Python/PY_Pandas-Series.vue')
    },
    {
        path: '/PY_Pandas-DataFrame',
        name: 'PY_Pandas-DataFrame',
        component: () => import('../views/Article-Python/PY_Pandas-DataFrame.vue')
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

    // Software 文章
    {
        path: '/Software_recursion',
        name: 'Software_recursion',
        component: () => import('../views/Article-Software/Software_recursion.vue')
    },
    {
        path: '/Software_ORM-introduce',
        name: 'Software_ORM-introduce',
        component: () => import('../views/Article-Software/Software_ORM-introduce.vue')
    },

    // 雜談 文章
    {
        path: '/Chat_B2B-vs-B2C-vs-B2B2C-vs-C2C',
        name: 'Chat_B2B-vs-B2C-vs-B2B2C-vs-C2C',
        component: () => import('../views/Article-Chat/Chat_B2B-vs-B2C-vs-B2B2C-vs-C2C.vue')
    },
    {
        path: '/Chat_ODM-vs-OEM-vs-OBM-vs-IEM',
        name: 'Chat_ODM-vs-OEM-vs-OBM-vs-IEM',
        component: () => import('../views/Article-Chat/Chat_ODM-vs-OEM-vs-OBM-vs-IEM.vue')
    },
    {
        path: '/Chat_GameTheory-introduce',
        name: 'Chat_GameTheory-introduce',
        component: () => import('../views/Article-Chat/Chat_GameTheory-introduce.vue')
    },
    {
        path: '/Chat_IoT-vs-AIoT',
        name: 'Chat_IoT-vs-AIoT',
        component: () => import('../views/Article-Chat/Chat_IoT-vs-AIoT.vue')
    },

    // 美食札記 文章
    {
        path: '/FOOD_A-Ru',
        name: 'FOOD_A-Ru',
        component: () => import('../views/Article-Food/FOOD_A-Ru.vue')
    },
    {
        path: '/FOOD_Ping-Lu-Sushi',
        name: 'FOOD_Ping-Lu-Sushi',
        component: () => import('../views/Article-Food/FOOD_Ping-Lu-Sushi.vue')
    },
    {
        path: '/FOOD_Gong-Yuan-Road-Da-Mian-Geng',
        name: 'FOOD_Gong-Yuan-Road-Da-Mian-Geng',
        component: () => import('../views/Article-Food/FOOD_Gong-Yuan-Road-Da-Mian-Geng.vue')
    },
    {
        path: '/FOOD_Yi-Zhong-Fan-Fan',
        name: 'FOOD_Yi-Zhong-Fan-Fan',
        component: () => import('../views/Article-Food/FOOD_Yi-Zhong-Fan-Fan.vue')
    },
    {
        path: '/FOOD_12sukiyak',
        name: 'FOOD_12sukiyak',
        component: () => import('../views/Article-Food/FOOD_12sukiyak.vue')
    },
    {
        path: '/FOOD_Ba-An-Sushi',
        name: 'FOOD_Ba-An-Sushi',
        component: () => import('../views/Article-Food/FOOD_Ba-An-Sushi.vue')
    },
    {
        path: '/FOOD_SHIMADZU-Curry',
        name: 'FOOD_SHIMADZU-Curry',
        component: () => import('../views/Article-Food/FOOD_SHIMADZU-Curry.vue')
    },
    {
        path: '/FOOD_SOFT-EGG',
        name: 'FOOD_SOFT-EGG',
        component: () => import('../views/Article-Food/FOOD_SOFT-EGG.vue')
    },
    {
        path: '/FOOD_Tai-Chu',
        name: 'FOOD_Tai-Chu',
        component: () => import('../views/Article-Food/FOOD_Tai-Chu.vue')
    },
    {
        path: '/FOOD_Mao-Ni-Brunch',
        name: 'FOOD_Mao-Ni-Brunch',
        component: () => import('../views/Article-Food/FOOD_Mao-Ni-Brunch.vue')
    },
    {
        path: '/FOOD_La-Miette-Pizza&Kitchen',
        name: 'FOOD_La-Miette-Pizza&Kitchen',
        component: () => import('../views/Article-Food/FOOD_La-Miette-Pizza&Kitchen.vue')
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
