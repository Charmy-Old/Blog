<template>
    <Header />
    <div class="content">
        <main>
            
            <section>
                <div class="article-top">
                    <div class="article-icon">
                        <i class="fa-brands fa-python"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">Python</div>
                    </div>
                </div>
            </section>

            <section>
                <a href="PY_arithmetic" class="article">
                    <div class="article-icon">
                        <i class="fa-brands fa-python"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">if 判斷式和簡易的四則運算</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-20</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>Python的 if 判斷式和用 if 判斷式完成最簡易的四則運算</p>
                        </div>
                    </div>
                </a>
            </section>

        </main>
        <Wall />
        <BackToTop />
    </div>
</template>
<script>
    import Header from "@/components/Header.vue";
    import Wall from "@/components/Wall.vue";
    import BackToTop from "@/components/BackToTop.vue";
    import { onMounted } from "vue";
    export default {
        components: {
            Header,
            Wall,
            BackToTop,
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