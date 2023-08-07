<template>
    <Header />
    <div class="content">
        <main>
            <Article />
            <HomePageList />
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
    import Article from "@/components/Article.vue";
    import HomePageList from "@/components/HomePageList.vue";
    import pageRate from "@/components/pageRate.vue";
    export default {
        components: {
            Header,
            Wall,
            BackToTop,
            Article,
            HomePageList,
            pageRate,
            // Footer,
        },
        setup() {}
    };
</script>

<style>
    .all:not(:nth-child(n+12):nth-child(-n+21)) {
        display: none;
    }
</style>