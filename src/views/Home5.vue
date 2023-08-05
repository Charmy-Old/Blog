<template>
    <Header />
    <div class="content">
        <main>
            <Article />
            <HomePageList />
        </main>
        <Wall />
    </div>
    <BackToTop />
</template>
<script>
    import Header from "@/components/Header.vue";
    import Wall from "@/components/Wall.vue";
    import BackToTop from "@/components/BackToTop.vue";
    import Article from "@/components/Article.vue";
    import HomePageList from "@/components/HomePageList.vue";

    
    export default {
        components: {
            Header,
            Wall,
            BackToTop,
            Article,
            HomePageList,
            // Footer,
        },
        setup() {}
    };
</script>

<style>
    .all:not(:nth-child(n+42):nth-child(-n+51)) {
        display: none;
    }
</style>