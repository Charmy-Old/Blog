<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 CSS box-sizing？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-12</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>CSS box-sizing</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>CSS 的 box-sizing 是一個屬性，用於控制元素的寬度和高度的計算方式。它決定了指定的寬度和高度是否包括元素的邊距(margin)、內邊距(padding)和邊框(border)。</p>
                        <h4>box-sizing 屬性可以有兩個值：</h4>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-pencil"></i>content-box (默認值)：這是標準的盒模型行為，指定的寬度和高度不包括外邊距、內邊距和邊框。換句話說，元素的總寬度和高度是通過將指定的寬度和高度值與外邊距、內邊距和邊框值相加而計算的。</li>
                            <li><i class="fa-solid fa-pencil"></i>border-box：使用這個值時，指定的寬度和高度包括內邊距和邊框，但不包括外邊距。換句話說，元素的總寬度和高度是通過從指定的寬度和高度中減去內邊距和邊框值來計算的。</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>box-sizing: content-box</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
.box {
    width: 200px;
    height: 100px;
    padding: 10px;
    border: 1px solid black;
    margin: 20px;
    box-sizing: content-box;
}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Box 總寬度計算如下：</p>
                        <p>總寬度 = 指定的寬度 + 左內邊距 + 右內邊距 + 左邊框 + 右邊框 + 左外邊距 + 右外邊距 = </p>
                        <p>200px + 10px + 10px + 1px + 1px + 20px + 20px = 262px</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>box-sizing: content-box</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
.box {
    width: 200px;
    height: 100px;
    padding: 10px;
    border: 1px solid black;
    margin: 20px;
    box-sizing: border-box;
}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Box 總寬度計算如下：</p>
                        <p>總寬度 = 指定的寬度 + 左內邊距 + 右內邊距 + 左邊框 + 右邊框 = </p>
                        <p>200px + 10px + 10px + 1px + 1px = 222px</p>
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