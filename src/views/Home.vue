<template>
    <Header />
    <div class="content">
        <main>
            <Article />
        </main>
        <Wall />
        <BackToTop />
    </div>
</template>
<script>
    import Header from "@/components/Header.vue";
    import Wall from "@/components/Wall.vue";
    import BackToTop from "@/components/BackToTop.vue";
    import Article from "@/components/Article.vue";

    
    export default {
        components: {
            Header,
            Wall,
            BackToTop,
            Article,
            // Footer,
        },
        setup() {}
    };
</script>