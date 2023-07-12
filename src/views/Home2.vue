<template>
    <Header />
    <div class="content">
        <main>
            <Article2 />
            <HomePageList />
        </main>
        <Wall />
        <BackToTop />
    </div>
</template>
<script>
    import Header from "@/components/Header.vue";
    import Wall from "@/components/Wall.vue";
    import BackToTop from "@/components/BackToTop.vue";
    import Article2 from "@/components/Article2.vue";
    import HomePageList from "@/components/HomePageList.vue";

    
    export default {
        components: {
            Header,
            Wall,
            BackToTop,
            Article2,
            HomePageList,
            // Footer,
        },
        setup() {}
    };
</script>