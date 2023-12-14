<style>
    .all:nth-child(n+12) {
        display: none;
    }
</style>

<template>
    <section class="d-none">
        <title>Charmying Blog</title>
        <meta name="description" content="Charmy 的部落格">
        <meta name="keywords" content="Charmy, 部落格, 部落格首頁, 前端, Front-End, 美食">
    </section>
    <Header />
    <div class="content">
        <main>
            <div class="allArticle">
                <Article />
            </div>
            <HomePageList />
        </main>
        <Wall />
    </div>
    <pageRate />
    <BackToTop />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Wall from "@/components/Wall.vue";
import BackToTop from "@/components/BackToTop.vue";
import Article from "@/components/Article.vue";
import HomePageList from "@/components/HomePageList.vue";
import pageRate from "@/components/pageRate.vue";
</script>