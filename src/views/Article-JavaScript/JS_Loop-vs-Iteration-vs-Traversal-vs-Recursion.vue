<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 迴圈、迭代、遍歷、遞迴？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-31</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>迴圈(Loop)、迭代(Iteration)、遍歷(Traversal)、遞迴(Recursion) 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在 JavaScript 中，迴圈(Loop)、迭代(Iteration)、遍歷(Traversal)、遞迴(Recursion)是處理資料和執行程式碼的不同方式。</p>
                    </div>
                </div>
            </section>

            <!-- 迴圈(Loop) -->
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>迴圈(Loop)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>迴圈是一種重複執行程式碼塊的方法，直到指定的條件滿足為止。在 JavaScript 中，通常使用 for、while 和 do...while 來實現迴圈。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// 使用 for 迴圈印出 1 到 5
for (let i = 1; i &lt;= 5; i++) {
    console.log(i);
}
</pre>
                    </div>
                </div>
            </section>

            <!-- 迭代(Iteration) -->
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>迭代(Iteration)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>迭代是指重複處理資料集合中的每個元素，並對每個元素執行相同或類似的操作。迭代可以透過迴圈、遍歷和遞迴來實現。</p>
                    </div>
                </div>
            </section>

            <!-- 遍歷(Traversal) -->
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>遍歷(Traversal)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>遍歷是迭代的一種方式，專指逐一訪問資料集合中的每個元素，並對每個元素進行處理。遍歷通常用於對資料進行讀取、修改或分析等操作。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// 使用 forEach 遍歷陣列並印出每個元素
const array = [1, 2, 3, 4, 5];
array.forEach(item => {
    console.log(item);
});
</pre>
                    </div>
                </div>
            </section>

            <!-- 遞迴(Recursion) -->
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>遞迴(Recursion)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>遞迴是一種將問題分解成更小的子問題並以相同的方法解決的技巧。在程式設計中，遞迴通常是函式自身調用自身的過程。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// 使用遞迴計算階乘
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));   // 120
</pre>
                    </div>
                </div>
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