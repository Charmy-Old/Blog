<template>
    <Header />
    <div class="content">
        <main>
            
            <section>
                <div class="article-top">
                    <div class="article-icon">
                        <i class="fa-brands fa-react"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">React</div>
                    </div>
                </div>
            </section>

            <section>
                <a href="CODE_props" class="article">
                    <div class="article-icon">
                        <i class="fa-solid fa-file-code"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 props？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-solid fa-tag"></i>Vue<i class="fa-solid fa-tag"></i>React<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-06</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>在 JavaScript 中，props 是 properties(屬性)的縮寫，用於在組件(conponent)之間傳遞數據。在 VUE、React、Angular 等框架中，props 是用於在組件(conponent)向組件(conponent)傳遞數據的一種機制。通過 props，可以將組件A信息傳遞給組件B，組件B可以讀取這些訊息並在其渲染中使用。</p>
                        </div>
                    </div>
                </a>
            </section>

        </main>
        <Wall />
    </div>
    <pageRate />
    <BackToTop />
</template>
<script>
    import Header from "@/components/Header.vue";
    import Wall from "@/components/Wall.vue";
    import BackToTop from "@/components/BackToTop.vue";
    import pageRate from "@/components/pageRate.vue";
    export default {
        components: {
            Header,
            Wall,
            BackToTop,
            pageRate,
            // Footer,
        },
        setup() {}
    };
</script>