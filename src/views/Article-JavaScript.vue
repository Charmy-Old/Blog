<template>
    <Header />
    <div class="content">
        <main>
            
            <section>
                <div class="article-top">
                    <div class="article-icon">
                        <i class="fa-brands fa-square-js"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">JavaScript</div>
                    </div>
                </div>
            </section>

            <section>
                <a href="CODE_Limit-Line-Width" class="article">
                    <div class="article-icon">
                        <i class="fa-solid fa-file-code"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">限制內容字數寬度或行數</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>CSS<i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-05</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>限制內容字數寬度或行數，超過顯示刪節號…</p>
                            <p>透過 CSS 來限制字數寬度或行數做法，可以將長篇的文章進行截斷，並且結尾以...方式呈現在版面上，對排版來說是相當好用的方式。</p>
                            <p>但display: -webkit-box;語法在某些瀏覽器不支援，所以建議使用JavaScript寫法。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section>
                <a href="JS_Cookie-vs-LocalStorage-vs-SessionStorage" class="article">
                    <div class="article-icon">
                        <i class="fa-brands fa-square-js"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">Cookie V.S. LocalStorage V.S. SessionStorage</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>Cookie、LocalStorage、SessionStorage 差異</p>
                            <p>Cookie：可設定失效時間。 預設是關閉瀏覽器後失效</p>
                            <p>LocalStorage：不會過期，除非手動清除</p>
                            <p>SessionStorage：每次分頁或瀏覽器關掉後就會清除</p>
                        </div>
                    </div>
                </a>
            </section>

            <section>
                <a href="JS_map-vs-forEach" class="article">
                    <div class="article-icon">
                        <i class="fa-brands fa-square-js"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">map() V.S. forEach()</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>map()和forEach()的區別和理解</p>
                            <p>如果你已經有使用JavaScript的經驗，你可能已經知道這兩個看似相同的方法：</p>
                            <p>Array.prototype.map()和Array.prototype.forEach()</p>
                            <p>那麼，它們到底有什麼區別呢？</p>
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