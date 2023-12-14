<style>
    .all:nth-child(n+12) {
        display: none;
    }
</style>

<template>
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