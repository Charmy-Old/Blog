<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">setAttribute V.S. getAttribute</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-02</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                    data-aos-duration="1000">
                    <h3>setAttribute 和 getAttribute 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>setAttribute 和 getAttribute 是用於操作 HTML 元素屬性的兩種不同方法。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                    data-aos-duration="1000">
                    <h3>setAttribute</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>setAttribute 是 DOM(文檔物件模型)提供的方法，它用於設置 HTML 元素的屬性。這個方法允許你動態地將屬性添加到 HTML 元素中，或者修改現有屬性的值。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <pre>
element.setAttribute(attributeName, attributeValue);
</pre>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>element 是要設置屬性的 HTML 元素對象</li>
                            <li><i class="fa-regular fa-note-sticky"></i>attributeName 是要設置的屬性名稱，作為字串</li>
                            <li><i class="fa-regular fa-note-sticky"></i>attributeValue 是要設置的屬性值，也作為字串</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>以下是演示如何使用 setAttribute 設置一個 &lt;div> 元素的 class 屬性</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <pre>
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
    // head 的內容
&lt;/head>
&lt;body>
    &lt;div id="div">div 標籤&lt;/div>
    
    &lt;script>
        const div = document.getElementById("div");
        div.setAttribute("class", "aaa");
    &lt;/script>
&lt;/body>
&lt;/html>
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>用 setAttribute 方法將 class 屬性的值設置為 "highlight"，使得該元素應用了名為 "highlight" 的 CSS 樣式。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                    data-aos-duration="1000">
                    <h3>getAttribute</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>getAttribute 也是 DOM 提供的方法，它用於獲取HTML元素的屬性值。你可以通過 getAttribute 方法來獲取指定屬性的值。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <pre>
const attributeValue = element.getAttribute(attributeName);
</pre>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>element 是要獲取屬性值的 HTML 元素對象。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>attributeName 是要獲取的屬性名稱，作為字串。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>attributeValue 是該屬性的值。</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>以下是演示如何使用 getAttribute 的例子，獲取一個 &lt;div> 元素的 class 屬性值</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <pre>
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
    // head 的內容
&lt;/head>
&lt;body>
    &lt;div id="div" class="aaa">div 標籤&lt;/div>

    &lt;script>
        const div = document.getElementById("div");
        const classValue = div.getAttribute("class");
        console.log(classValue);   // aaa
    &lt;/script>
&lt;/body>
&lt;/html>
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>用 getAttribute 方法獲取了 class 屬性的值，並將其賦值給 classValue 變數，然後輸出到 console</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                    data-aos-duration="1000">
                    <h3>總結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>setAttribute 用於設置 HTML 元素的屬性，可以添加新的屬性或修改現有屬性的值</li>
                            <li><i class="fa-regular fa-note-sticky"></i>getAttribute 用於獲取 HTML 元素的屬性值，可以通過它來獲取指定屬性的值</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                    data-aos-duration="1000">
                    <p>※ 現在的 JavaScript 和 HTML 開發中，通常更推薦使用屬性直接賦值的方式(例如 element.className = "aaa";)來設置屬性值，或者使用更強大的
                        element.dataset 屬性來處理自定義數據屬性。 setAttribute 和 getAttribute 主要在處理較舊的瀏覽器和特殊情況時才會使用。</p>
                </div>
            </div>
        </section>
    </main>
    <Wall />
</div>
<pageRate />
<BackToTop /></template>

<script setup>
import Header from "@/components/Header.vue";
import Wall from "@/components/Wall.vue";
import BackToTop from "@/components/BackToTop.vue";
import pageRate from "@/components/pageRate.vue";
</script>