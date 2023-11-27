<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">JavaScript 的 indexOf()</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-09</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>indexOf() 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在 JavaScript 中，indexOf是一個用於字串或陣列的方法，用於尋找特定元素在該字串或陣列中的位置索引。如果該元素存在於字串或陣列中，則 indexOf() 會返回該元素的第一個出現的索引位置；如果該元素不存在，則返回 -1。</p>
                        <p>字串中的使用：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const str = "Charmy 寫了一個部落格";

const search1 = "部落格";
const result1 = str.indexOf(search1);
if (result1 !== -1) {
    console.log(`關鍵詞 "${search1}" 第一次出現的索引位置為 ${result1}`);   // 關鍵詞 "部落格" 第一次出現的索引位置為 11
} else {
    console.log(`字串中未找到關鍵詞 "${search1}"`);
}

const search2 = "部落客";
const result2 = str.indexOf(search2);
if (result2 !== -1) {
    console.log(`關鍵詞 "${search2}" 第一次出現的索引位置為 ${result2}`);
} else {
    console.log(`字串中未找到關鍵詞 "${search2}"`);   // 字串中未找到關鍵詞 "部落客"
}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>陣列中的使用：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const arr = ["AAA", "BBB", "CCC", "DDD"];

const search1 = "BBB";
const result1 = arr.indexOf(search1);
if (result1 !== -1) {
    console.log(`"${search1}" 在陣列中的索引位置為 ${result1}`);   // "BBB" 在陣列中的索引位置為 1
} else {
    console.log(`陣列中未找到 "${search1}"`);
}

const search2 = "bbb";
const result2 = arr.indexOf(search2);
if (result2 !== -1) {
    console.log(`"${search2}" 在陣列中的索引位置為 ${result2}`);
} else {
    console.log(`陣列中未找到 "${search2}"`);   // 陣列中未找到 "bbb"
}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在上面的範例中，indexOf() 方法會搜尋指定的關鍵詞或元素，並返回在字串或陣列中的第一次出現的索引位置。如果找不到該關鍵詞或元素，則返回 -1。這可以幫助你確定特定內容是否存在於字串或陣列中，並找出其位置。</p>
                    </div>
                </div>
            </section>
        </main>
        <Wall />
    </div>
    <pageRate />
    <BackToTop />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Wall from "@/components/Wall.vue";
import BackToTop from "@/components/BackToTop.vue";
import pageRate from "@/components/pageRate.vue";
</script>