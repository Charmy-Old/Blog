<template>
    <Header />
    <div class="content">
        <main>
            <Article />
            <HomePageList />
            <p>Total items with class "all": {{ allItemsCount }}</p>
            <p>First three items with class "all": {{ firstThreeItems }}</p>
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
    import HomePageList from "@/components/HomePageList.vue";

    import { ref, onMounted, computed } from 'vue';
    export default {
        components: {
            Header,
            Wall,
            BackToTop,
            Article,
            HomePageList,
            // Footer,
        },
        setup() {
    const allItems = ref([]);

    onMounted(() => {
        allItems.value = Array.from(document.getElementsByClassName('all'));
    });

    const allItemsCount = computed(() => allItems.value.length);
    const firstThreeItems = computed(() => allItems.value.slice(0, 3));

    return {
        allItemsCount,
        firstThreeItems
    };
  }
    };
</script>