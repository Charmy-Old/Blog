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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                <a href="Chat_GameTheory-introduce" class="article">
                    <div class="article-icon">
                        <i class="fa-solid fa-book-open-reader"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 賽局理論(Game Theory)？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Chat<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-25</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>賽局理論(Game Theory)最初是研究策略遊戲的學問，因此又稱為對策論或博弈論，是經濟學的一個分支。</p>
                            <p>賽局理論是對決策者之間互動的分析。與傳統代表性決策者分析方式最大的不同之處，是在於將每位決策者對其他決策者行為的知識與預期納入分析架構。當我們極大化己方的報酬時，對手也正在極大化他的報酬。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                <a href="Chat_ODM-vs-OEM-vs-OBM-vs-IEM" class="article">
                    <div class="article-icon">
                        <i class="fa-solid fa-book-open-reader"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 ODM、OEM、OBM 和 IDM？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Chat<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-19</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>ODM、OEM、OBM 和 IDM 是現代製造業非常重要的概念，對於日常各種產品都有著重要影響。在這個競爭的市場中，品牌商需要不斷創新並提高生產效率，而 ODM、OEM、OBM 和 IDM 正是幫助品牌商實現目標的重要工具。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                <a href="Chat_B2B-vs-B2C-vs-B2B2C-vs-C2C" class="article">
                    <div class="article-icon">
                        <i class="fa-solid fa-book-open-reader"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 B2B、B2C、B2B2C 和 C2C？</div>
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