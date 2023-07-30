<template>
    <!-- 置頂貼文 -->
    <section class="ALL">
        <div class="article-title">【程式入門】該如何開始自學寫程式</div>
    </section>

    <section class="ALL WEB">
        <div class="article-title">什麼是 OWASP？</div>
    </section>

    <section class="ALL JS">
        <div class="article-title">陣列中的物件資料選取與排序</div>
    </section>

    <section class="ALL VUE">
        <div class="article-title">什麼是 Event Bus？</div>
    </section>

    <section class="ALL VUE">
        <div class="article-title">如何建立 Vue-CLI？</div>
    </section>

    <section class="ALL JS">
        <div class="article-title">什麼是 閉包(Closure)？</div>
    </section>

    <section class="ALL JS">
        <div class="article-title">事件捕獲(Capturing Events) V.S. 冒泡事件(Bubbling Events)</div>
    </section>
    
    <section class="ALL JS">
        <div class="article-title">JavaScript 的物件導向</div>
    </section>

    <section class="ALL JS">
        <div class="article-title">By Value V.S. By Reference</div>
    </section>

    <section class="ALL JS">
        <div class="article-title">淺拷貝(Shallow Copy) V.S. 深拷貝(Deep Copy)</div>
    </section>

    <section class="ALL VUE">
        <div class="article-title">Vue 模板語法</div>
    </section>

    <section class="ALL PYTHON">
        <div class="article-title">迴圈基礎 & 迴圈控制</div>
    </section>

    <section class="ALL PYTHON">
        <div class="article-title">if 判斷式和簡易的四則運算</div>
    </section>

    <section class="ALL DB">
        <div class="article-title">什麼是 CRUD？</div>
    </section>

    <section class="ALL WEB">
        <div class="article-title">淺談網頁技術名詞</div>
    </section>

    <section class="ALL HTML JS">
        <div class="article-title">BOM V.S. DOM</div>
    </section>

    <section class="ALL CSS">
        <div class="article-title">CSS選取第一個、最後一個、偶數、奇數、第n個標簽元素</div>
    </section>
    
    <section class="ALL JS">
        <div class="article-title">JavaScript 的非同步 (Asynchronous)</div>
    </section>

    <section class="ALL JS">
        <div class="article-title">什麼是 AJAX？</div>
    </section>

    <section class="ALL CSS">
        <div class="article-title">什麼是 CSS box-sizing？</div>
    </section>

    <section class="ALL JS">
        <div class="article-title">slice() V.S. splice() V.S. split()</div>
    </section>

    <section class="ALL JS">
        <div class="article-title">delete V.S. splice</div>
    </section>

    <section class="ALL JS">
        <div class="article-title">var V.S. let V.S. const</div>
    </section>

    <section class="ALL WEB">
        <div class="article-title">什麼是 RESTful API？</div>
    </section>

    <section class="ALL WEB">
        <div class="article-title">什麼是 TCP/IP？</div>
    </section>

    <section class="ALL WEB">
        <div class="article-title">什麼是 SSL和TLS？</div>
    </section>

    <section class="ALL WEB">
        <div class="article-title">HTTP V.S. HTTPS</div>
    </section>

    <section class="ALL CSS JS">
        <div class="article-title">限制內容字數寬度或行數</div>
    </section>

    <section class="ALL JS">
        <div class="article-title">Cookie V.S. LocalStorage V.S. SessionStorage</div>
    </section>

    <section class="ALL JS">
        <div class="article-title">map() V.S. forEach()</div>
    </section>

    <section class="ALL WEB">
        <div class="article-title">MVC V.S. MVVM</div>
    </section>

    <section class="ALL VUE">
        <div class="article-title">元件的生命週期與更新機制</div>
    </section>

    <section class="ALL WEB">
        <div class="article-title">什麼是 API？</div>
    </section>

    <section class="ALL WEB">
        <div class="article-title">什麼是 NPM？了解 node套件管理工具 npm install</div>
    </section>

    <section class="ALL WEB">
        <div class="article-title">什麼是 CDN？| CDN 的工作原理是什麼？</div>
    </section>

    <section class="ALL HTML">
        <div class="article-title">HTML &lt;code&gt; 顯示程式碼內容</div>
    </section>

    <section class="ALL HTML">
        <div class="article-title">HTML 表格 (table)</div>
    </section>
</template>
<script>
    import { ref, onMounted } from "vue";
    export default {
        setup() {
            // 算 全部 文章
            const allArticleCount = ref(0);
            const CountallArticle = () => {
                const Countall = document.querySelectorAll(".ALL");
                allArticleCount.value = Countall.length;
            };
            // 算 web 文章
            const webArticleCount = ref(0);
            const CountwebArticle = () => {
                const Countweb = document.querySelectorAll(".WEB");
                webArticleCount.value = Countweb.length;
            };
            // 算 html 文章
            const htmlArticleCount = ref(0);
            const CounthtmlArticle = () => {
                const Counthtml = document.querySelectorAll(".HTML");
                htmlArticleCount.value = Counthtml.length;
            };
            // 算 css 文章
            const cssArticleCount = ref(0);
            const CountcssArticle = () => {
                const Countcss = document.querySelectorAll(".CSS");
                cssArticleCount.value = Countcss.length;
            };
            // 算 js 文章
            const jsArticleCount = ref(0);
            const CountjsArticle = () => {
                const Countjs = document.querySelectorAll("JS");
                jsArticleCount.value = Countjs.length;
            };
            // 算 vue 文章
            const vueArticleCount = ref(0);
            const CountvueArticle = () => {
                const Countvue = document.querySelectorAll(".VUE");
                vueArticleCount.value = Countvue.length;
            };

            // 算 database 文章
            const databaseArticleCount = ref(0);
            const CountdatabaseArticle = () => {
                const Countdatabase = document.querySelectorAll(".DB");
                databaseArticleCount.value = Countdatabase.length;
            };

            // 算 python 文章
            const pythonArticleCount = ref(0);
            const CountpythonArticle = () => {
                const Countpython = document.querySelectorAll(".PYTHON");
                pythonArticleCount.value = Countpython.length;
            };

            onMounted(() => {
                CountallArticle();
                CountwebArticle();
                CounthtmlArticle();
                CountcssArticle();
                CountjsArticle();
                CountvueArticle();
                CountdatabaseArticle();
                CountpythonArticle();
            });

            return {
                allArticleCount,
                webArticleCount,
                htmlArticleCount,
                cssArticleCount,
                jsArticleCount,
                vueArticleCount,
                databaseArticleCount,
                pythonArticleCount,
            };
        }
    };
</script>