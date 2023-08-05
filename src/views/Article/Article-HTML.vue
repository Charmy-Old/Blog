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

            <section>
                <a href="CODE_BOM-vs-DOM" class="article">
                    <div class="article-icon">
                        <i class="fa-solid fa-file-code"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">BOM V.S. DOM</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>HTML<i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-19</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>BOM：JavaScript 和『瀏覽器』溝通的窗口，不涉及網頁內容；DOM：JavaScript 用來控制『網頁』的節點與內容的標準</p>
                            <p>『BOM』完全依賴瀏覽器廠商實作本身沒有標準規範，『DOM』有 W3C 所制定的標準來規範。</p>
                            <p>DOM 最重要的就是觀念，為了不讓網頁在渲染的過程中過度的 重畫頁面(Repaint) 甚至是 重構頁面(Reflow) 而讓網頁效能變差，在 DOM 的操作上可要非常小心，而 DOM 也可以說是網頁的核心。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section>
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

            <section>
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
                            <p>&lt;table&gt; 標籤做為表格的容器 (container)，裡面有不同用途的標籤像是 &lt;tr&gt;, &lt;td&gt; 組成一個完整的表格。</p>
                            <p>&lt;table&gt;中的標籤按照以下順序，組成一個表格：</p>
                        </div>
                    </div>
                </a>
            </section>

        </main>
        <Wall />
    </div>
    <BackToTop />
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