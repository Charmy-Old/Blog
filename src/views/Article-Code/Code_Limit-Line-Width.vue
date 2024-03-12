<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">限制內容字數寬度或行數</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-05</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>CSS 限制內容字數寬度或行數</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>過 CSS 來限制字數寬度或行數做法，可以將長篇的文章進行截斷，並且結尾以...方式呈現在版面上，對排版來說是相當好用的方式。</p>
                        <p>限制最大寬度：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
.horizontalCSS {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>限制最多三行：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
.verticalCSS {
    width: 200px;
    overflow: hidden;
    line-height: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-regular fa-note-sticky"></i>語法解說：</p>
                        <p><i class="fa-regular fa-note-sticky"></i>overflow:hidden; ：將超過的部分進行隱藏</p>
                        <p><i class="fa-regular fa-note-sticky"></i>text-overflow: ellipsis; ：在被overflow的內容加上…，在Chrome及IE都可以顯示出…；Firefox可能僅會產生截斷，不會出現…</p>
                        <p><i class="fa-regular fa-note-sticky"></i>webkit-line-clamp：限制內容行數</p>
                        <p><i class="fa-regular fa-note-sticky"></i>max-width：設定最大寬度</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>JS 限制內容字數寬度或行數</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>display: -webkit-box;語法在某些瀏覽器不支援，所以建議使用JavaScript寫法。</p>
                        <p>限制寬度：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
/* CSS */

.horizontalJS {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</pre>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// JS

window.addEventListener("horizontalJS", function() {
    adjustLinkWidth();
});
    
function adjustLinkWidth() {
    const horizontalJS = document.querySelector(".horizontalJS");
    const link = horizontalJS.querySelector("p");
    const horizontalJSWidth = horizontalJS.offsetWidth;
    link.style.maxWidth = horizontalJSWidth + "px";
}
    
adjustLinkWidth();
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>限制行數：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
/* CSS */

.verticalJS {
    width: 200px;
    /* max-height: 60px; */
    overflow: hidden;
    line-height: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
</pre>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
/* JS */

window.addEventListener("verticalJS", function() {
    adjustContainerHeight();
});

function adjustContainerHeight() {
    const container = document.querySelector(".verticalJS");
    const lineHeight = parseInt(getComputedStyle(verticalJS).lineHeight);
    const maxLines = parseInt(getComputedStyle(verticalJS).webkitLineClamp);
    const containerHeight = lineHeight * maxLines;
    container.style.maxHeight = containerHeight + "px";
}
    
adjustContainerHeight();
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Demo連結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a class="article-reference" href="https://codepen.io/Charmy_ing/pen/mdQMbZQ" target="_blank"><i class="fa-solid fa-pen-to-square"></i>CodePen</a>
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