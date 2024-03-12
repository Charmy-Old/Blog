<style>
.all:not(:nth-child(n+22):nth-child(-n+31)) {
    display: none;
}
</style>

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

<script setup>
import Header from "@/components/Header.vue";
import Wall from "@/components/Wall.vue";
import BackToTop from "@/components/BackToTop.vue";
import Article from "@/components/Article.vue";
import HomePageList from "@/components/HomePageList.vue";
import pageRate from "@/components/pageRate.vue";
</script>