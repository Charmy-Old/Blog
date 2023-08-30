<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">JavaScript 中陣列(Array)的遍歷方法</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-31</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>遍歷(Traversal) 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>遍歷是迭代的一種方式，專指逐一訪問資料集合中的每個元素，並對每個元素進行處理。遍歷通常用於對資料進行讀取、修改或分析等操作。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>for 迴圈</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>使用傳統的 for 迴圈遍歷陣列，通常透過索引來訪問元素。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// 使用 for 迴圈印出 1 到 5
const array = [1, 2, 3, 4, 5];

for (let i = 0; i &lt; array.length; i++) {
    console.log(array[i]);
}
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>forEach 方法</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>陣列的 forEach 方法是一種簡單的遍歷方式，用於執行給定的函式對每個元素進行處理。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// 使用 for 迴圈印出 1 到 5
const array = [1, 2, 3, 4, 5];

for (let i = 0; i &lt; array.length; i++) {
    console.log(array[i]);
}
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>for...of 迴圈</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>for...of 迴圈允許直接遍歷元素值而不是索引。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// 使用 for 迴圈印出 1 到 5
const array = [1, 2, 3, 4, 5];

for (const item of array) {
    console.log(item);
}
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>map 方法</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>使用 map 方法可以遍歷陣列並返回一個新陣列，新陣列的每個元素是根據原陣列元素進行處理後的結果。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const array = [1, 2, 3, 4, 5];

const squaredArray = array.map(item => item * item);
console.log(squaredArray);   // (5) [1, 4, 9, 16, 25]
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>filter 方法</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>filter 方法用於遍歷陣列並返回符合指定條件的元素所組成的新陣列。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const array = [1, 2, 3, 4, 5];

const evenNumbers = array.filter(item => item % 2 === 0);
console.log(evenNumbers);   // (2) [2, 4]
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>reduce 方法</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>reduce 方法將陣列中的元素進行累積處理，返回一個最終的累積結果。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const array = [1, 2, 3, 4, 5];

const sum = array.reduce((accumulator, item) => accumulator + item, 0);
console.log(sum);   // 15
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>find 方法</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>find 方法用於找出符合指定條件的第一個元素，並返回該元素。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const array = [1, 2, 3, 4, 5];

const found = array.find(item => item > 2);
console.log(found);   // 3
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>some 方法</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>some 方法用於檢查陣列中是否存在符合指定條件的元素，只要有一個符合即返回 true。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const array = [1, 2, 3, 4, 5];

const hasEvenNumber = array.some(item => item % 2 === 0);
console.log(hasEvenNumber);   // true
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>every 方法</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>every 方法用於檢查陣列中的所有元素是否都符合指定條件，只有所有元素都符合才返回 true。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const array = [1, 2, 3, 4, 5];

const allGreaterThanZero = array.every(item => item > 0);
console.log(allGreaterThanZero);   // true
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