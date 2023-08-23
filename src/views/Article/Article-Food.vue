<template>
    <Header />
    <div class="content">
        <main>
            
            <section>
                <div class="article-top">
                    <div class="article-icon">
                        <i class="fa-solid fa-utensils"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">美食手札</div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                <a href="FOOD_A-RU" class="article">
                    <div class="article-icon">
                        <i class="fa-solid fa-utensils"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">【美食札記】阿如早餐店</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>美食札記<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-23</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>阿如早餐店位於台中的一中街、太平國小、台中科技大學後門和中國醫藥大學附近巷弄裡，因為有著高 CP 值的特點所以是許多學生早餐店的口袋名單，但是從一中街用走的到早餐店大概需要 15 分鐘左右，所以用走路的還是需要稍微考量一下。</p>
                            <p>店內沒有華麗裝潢和舒適的用餐環境，靠的是那高 CP 值又美味的餐點，蛋餅、吐司、中式餐點和飲料都不錯，不愧是台中隱藏版超佛系早餐店。</p>
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