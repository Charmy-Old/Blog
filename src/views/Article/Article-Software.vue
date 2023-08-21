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