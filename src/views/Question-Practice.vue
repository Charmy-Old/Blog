<template>
    <Header />
    <div class="content">
        <main>
            
            <section>
                <div class="article-top">
                    <div class="article-icon">
                        <i class="fa-solid fa-book"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">題目練習</div>
                    </div>
                </div>
            </section>

            <section class="article-block">
                <a href="#" class="article">
                    <div class="article-text">
                        <div class="article-title">待續</div>
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

<style scoped>
.article-block {
    transition: all 0.5s linear;
}

.article-block:hover {
    background-color: #222223;
    box-shadow: 0 0 15px #FFFAFA;
}

.article-title {
    text-align: center;
    transition: all 0.5s linear;
}

.article-title:hover {
    color: #FFFAFA;
}

.article-content {
    text-align: center;
}

a .article-text {
    width: 100%;
}
</style>