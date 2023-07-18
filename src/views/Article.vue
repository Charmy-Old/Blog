<template>
    <Header />
    <div class="content">
        <main>
            
            <section>
                <div class="container text-center">
                    <div class="row row-cols-2 row-cols-sm-3 row-cols-md-6">
                        <div>
                            <button class="select-button" data-filter="all">All</button>
                        </div>
                            
                        <div>
                            <button class="select-button" data-filter="web">Web</button>
                        </div>

                        <div>
                            <button class="select-button" data-filter="html">HTML</button>
                        </div>
                            
                        <div>
                            <button class="select-button" data-filter="css">CSS</button>
                        </div>
                            
                        <div>
                            <button class="select-button" data-filter="javascript">JavaScript</button>
                        </div>
                            
                        <div>
                            <button class="select-button" data-filter="vue">Vue</button>
                        </div>
                    </div>
                </div>
            </section>

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
    import { onMounted } from "vue";
    export default {
        components: {
            Header,
            Wall,
            BackToTop,
            Article,
            // Footer,
        },
        setup() {
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
        }
    };
</script>