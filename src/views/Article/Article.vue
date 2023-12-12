<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="container text-center">
                    <div class="row row-cols-2 row-cols-sm-3 row-cols-md-5">
                        <div>
                            <button class="select-button" data-filter="all">All</button>
                        </div>
                        <div>
                            <button class="select-button" data-filter="web">Web</button>
                        </div>
                        <div>
                            <button class="select-button" data-filter="html-css">HTML / CSS</button>
                        </div>
                        <div>
                            <button class="select-button" data-filter="javascript">JavaScript</button>
                        </div>
                        <div>
                            <button class="select-button" data-filter="vue">Vue</button>
                        </div>
                        <div>
                            <button class="select-button" data-filter="python">Python</button>
                        </div>
                        <div>
                            <button class="select-button" data-filter="others">Others</button>
                        </div>
                        <div>
                            <button class="select-button" data-filter="chat">雜談</button>
                        </div>
                        <div>
                            <button class="select-button" data-filter="food">美食札記</button>
                        </div>
                    </div>
                </div>
            </section>
            <Article />
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
import pageRate from "@/components/pageRate.vue";
import { onMounted } from "vue";

onMounted(() => {
    function selectArticle() {
        const buttons = document.querySelectorAll(".select-button");
        const cards = document.querySelectorAll(".all");
        
        function filter(category, items) {
            items.forEach((item) => {
                const isItemFiltered = !item.classList.contains(category);
                const isShowAll = category.toLowerCase() === "all";
                if (isItemFiltered && !isShowAll) {
                    item.classList.add("d-none");
                } else {
                    item.classList.remove("d-none");
                }
            });
        }
        
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const currentCategory = button.dataset.filter;
                console.log(currentCategory);
                filter(currentCategory, cards);
            });
        });
    }

    selectArticle();
})
</script>