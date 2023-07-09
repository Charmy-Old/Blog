<template>
    <!-- 置頂貼文 -->
    
    <section class="ALL">
        <div class="article-title">【程式入門】該如何開始自學寫程式</div>
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

    <section class="ALL CSS">
        <div class="article-title">CSS選取第一個、最後一個、偶數、奇數、第n個標簽元素</div>
    </section>

    <section class="ALL HTML">
        <div class="article-title">HTML &lt;code&gt; 顯示程式碼內容</div>
    </section>

    <section class="ALL HTML">
        <div class="article-title">HTML 表格 (table)</div>
    </section>
</template>
<script>
    import { ref, onMounted } from 'vue';
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

            onMounted(() => {
                CountallArticle();
                CountwebArticle();
                CounthtmlArticle();
                CountcssArticle();
                CountjsArticle();
                CountvueArticle();
            });

            return {
                allArticleCount,
                webArticleCount,
                htmlArticleCount,
                cssArticleCount,
                jsArticleCount,
                vueArticleCount,
            };
        }
    };
</script>