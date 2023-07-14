<template>
    <Header />
    <div class="content">
        <main>
            <Article3 />
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
    import Article3 from "@/components/Article3.vue";
    import HomePageList from "@/components/HomePageList.vue";

    
    export default {
        components: {
            Header,
            Wall,
            BackToTop,
            Article3,
            HomePageList,
            // Footer,
        },
        setup() {}
    };
</script>