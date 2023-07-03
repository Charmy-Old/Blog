<template>
    <Header />
    <div class="content">
        <main>
            
            <section>
                <div class="article-top">
                    <div class="article-icon">
                        <i class="fa-brands fa-html5"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">HTML</div>
                    </div>
                </div>
            </section>

            <section class="all html">
                <a href="HTML_codeTag" class="article">
                    <div class="article-icon">
                        <i class="fa-brands fa-html5"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">HTML &lt;code&gt; 顯示程式碼內容</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>HTML<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>&lt;code&gt; 標籤 (tag) 用來顯示電腦程式碼 (computer code) 內容，而瀏覽器預設會以 monospace 等寬字型 (fixed-width font) 來顯示 &lt;code&gt; 中的內容。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section class="all html">
                <a href="HTML_tableTag" class="article">
                    <div class="article-icon">
                        <i class="fa-brands fa-html5"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">HTML 表格 (table)</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>HTML<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>HTML &lt;table&gt; 標籤 (tag) 用來建立表格，也就是用來呈現二維的資料表資訊。</p>
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