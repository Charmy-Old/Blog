<template>
    <Header />
    <div class="content">
        <main>
            
            <section>
                <div class="article-top">
                    <div class="article-icon">
                        <i class="fa-solid fa-book-open-reader"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">雜談</div>
                    </div>
                </div>
            </section>

            <section>
                <a href="Chat_B2B-vsB2C-vs-B2B2C-vs-C2C" class="article">
                    <div class="article-icon">
                        <i class="fa-solid fa-book-open-reader"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">B2B V.S. B2C V.S. B2B2C V.S. C2C</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Chat<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-19</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>B2B、B2C、C2C 和 B2B2C 都是商業模式的簡稱，屬於商業管理和行銷領域的專業範疇。</p>
                            <p>在數位化的時代下，行銷也從傳統的實體商店轉戰網路平台。對於想要嘗試電商的商家而言，B2B、B2C、C2C、B2B2C都是常常聽到的電商經營模式。</p>
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