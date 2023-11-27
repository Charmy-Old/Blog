<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">JavaScript 的模板字串插值(Template String Interpolation)</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-09</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>${}</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在 JavaScript 中，${} 是一種稱為「模板字串插值」(Template String Interpolation)的語法，可以在字串中插入變數或運算式的值，不需要使用傳統的字串串接方法。</p>
                        <p>${} 可以想像成是一個特殊的區塊，用來包裹想要插入的變數或表達式。當 JavaScript 處理這些模板字串時，會將 ${} 內的內容解析並替換為實際的值。</p>
                        <p>${} 內字串串接範例：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const name = "Charmy";
const age = 26;

// 使用傳統的字串串接方法
const message1 = "我是 " + name + "，今年 " + age + " 歲。";

// 使用模板字串插值
const message2 = `我是 ${name}，今年 ${age} 歲。`;

console.log(message1);   // 我是 Charmy，今年 26 歲。
console.log(message2);   // 我是 Charmy，今年 26 歲。
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>${} 內執行運算式範例：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const num1 = 10;
const num2 = 5;

const result = `${num1} + ${num2} = ${num1 + num2}`;

console.log(result);   // 10 + 5 = 15
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

<script setup>
import Header from "@/components/Header.vue";
import Wall from "@/components/Wall.vue";
import BackToTop from "@/components/BackToTop.vue";
import pageRate from "@/components/pageRate.vue";
</script>