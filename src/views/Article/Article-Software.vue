<template>
    <Header />
    <div class="content">
        <main>
            
            <section>
                <div class="article-top">
                    <div class="article-icon">
                        <i class="fa-solid fa-laptop-code"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">Software</div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                <a href="Software_ORM-introduce" class="article">
                    <div class="article-icon">
                        <i class="fa-solid fa-laptop-code"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 ORM(Object-Relational Mapping)？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Software<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-22</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>ORM 代表物件關聯映射(Object-Relational Mapping)，是一種軟體開發模式，用於在關聯式資料庫和程式語言中的物件導向程式碼之間建立一個映射，使開發者能夠使用物件來操作資料庫，而不需要直接處理 SQL 語句。這樣的模式有助於減少開發過程中的重複性工作，並提高程式碼的可讀性和維護性。</p>
                            <p>簡單來說，ORM 允許用程式語言中的類別和物件來表示資料庫中的表格和記錄，並提供方法來執行常見的 CRUD 操作以及資料查詢，同時隱藏了底層資料庫的細節。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                <a href="Software_recursion" class="article">
                    <div class="article-icon">
                        <i class="fa-solid fa-laptop-code"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 遞迴(Recursion)？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Software<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-22</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>遞迴又稱遞歸，是一種在程式設計中常見的概念與技巧，指的是一個函式在其定義中使用自己本身的方法，用來解決需要重複執行相似任務的問題。也就是說，一個遞迴函式在解決問題時，會將大問題分解為一個或多個類似但規模較小的子問題，然後遞迴地呼叫自己來處理這些子問題，直到某個停止條件，稱為「基案」(Base Case)，遞迴才會停止，最終這些子問題的解決方案會被合併，得到原始問題的解。遞迴可以使程式碼更簡潔、易讀，但也需要小心處理，以避免無限循環造成程式崩潰。</p>
                        </div>
                    </div>
                </a>
            </section>



        </main>
        <Wall />
    </div>
    <pageRate />
    <BackToTop />
</template>
<script>
    import Header from "@/components/Header.vue";
    import Wall from "@/components/Wall.vue";
    import BackToTop from "@/components/BackToTop.vue";
    import pageRate from "@/components/pageRate.vue";
    export default {
        components: {
            Header,
            Wall,
            BackToTop,
            pageRate,
            // Footer,
        },
        setup() {}
    };
</script>