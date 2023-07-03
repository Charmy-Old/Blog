<template>
    <Header />
    <div class="content">
        <main>
            
            <section>
                <div class="article-top">
                    <div class="article-icon">
                        <i class="fa-brands fa-css3-alt"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">CSS</div>
                    </div>
                </div>
            </section>

            <section class="all css">
                <a href="CSS_nth-child" class="article">
                    <div class="article-icon">
                        <i class="fa-brands fa-css3-alt"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">CSS選取第一個、最後一個、偶數、奇數、第n個標簽元素</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>CSS<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>CSS3 新增的選取器中，大概就屬:nth-child(n)功能最猛了，:nth-child(n)不僅可以不靠class或是ID來選取網頁項目外，還解決了網頁中清單資料規律性選取的問題，:nth-child(n)尤其對於表格資料的呈現上，真的是方便太多了</p>
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
    import { onMounted } from 'vue';
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