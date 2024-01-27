<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">:has() 和 :not() 偽類選擇器</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2024-01-28</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                    data-aos-duration="1000">
                    <p>在 CSS 中，:has() 和 :not() 是兩個重要的偽類選取器，可以用來根據元素的子元素或不符合某些條件的元素來進行樣式設定。</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                    data-aos-duration="1000">
                    <h3>:has() 偽類選取器</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>:has() 偽類選取器用來選擇具有指定子元素的元素。:has()接受一個或多個子元素的選擇器作為參數。如果元素具有指定的所有子元素，則該元素將被選中。</p>
                        <h4>:has() 基本語法</h4>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
<pre>
selector :has(selectors)
</pre>
                        </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>selector：要檢查的元素選擇器</p>
                        <p>範例：</p>
                    </div>
                    
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
<pre>
div :has(.red) {
    background-color: red;
}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>上述 CSS 會將任何包含至少一個 .red 類別元素的 div 元素的背景顏色設定為紅色。</p>
                        <p>:has() 可以用於各種目的，包括：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>將樣式應用於包含特定元素的元素。例如，您可以使用 :has() 將特定的樣式應用於包含圖像的元素</li>
                            <li><i class="fa-regular fa-note-sticky"></i>檢測元素是否包含其他元素。例如，您可以使用 :has() 檢測是否存在包含至少一個子元素的元素</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>範例：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
<pre>
img :has(.caption) {
    border: 1px solid black;
}

div :has(ul) {
    padding: 10px;
}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>上述 CSS 會將包含 .caption 類別的圖像的邊框設定為 1px 黑色。:has還會將包含至少一個 ul 元素的 div 元素的內邊距設定為 10px。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                    data-aos-duration="1000">
                    <h3>:not() 偽類選取器</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>:not() 偽類選取器可用來選擇不符合指定選擇器的元素。例如：可以使用 :not() 選擇所有非 .red 類別的元素。</p>
                        <h4>:not() 基本語法</h4>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
<pre>
selector :not(selectors)
</pre>
                        </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>selector：要檢查的元素選擇器</p>
                        <p>範例：</p>
                    </div>
                    
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
<pre>
.red :not(img) {
    background-color: blue;
}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>上述 CSS 會將所有 .red 類別元素中非 img 元素的背景顏色設定為藍色。</p>
                        <p>:not() 可以用於各種目的，包括：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>將樣式應用於不符合特定條件的元素。例如，您可以使用 :not() 將特定的樣式應用於非 .red 類別的元素</li>
                            <li><i class="fa-regular fa-note-sticky"></i>檢測元素是否符合特定條件。例如，您可以使用 :not() 檢測是否存在非 img 元素的 .red 類別元素</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>範例：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
<pre>
img :not(.large) {
    width: 100px;
}

.red :not(:has(ul)) {
    font-size: 18px;
}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>上述 CSS 會將所有 img 元素中非 .large 類別元素的寬度設定為 100px。它還會將所有 .red 類別元素中不包含 ul 元素的字體大小設定為 18px。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                    data-aos-duration="1000">
                    <h3>:has() :not() 注意事項</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>:not() 在 IE8 及更早版本中不受支援</li>
                            <li><i class="fa-regular fa-note-sticky"></i>:not() 優先級為 10</li>
                        </ul>
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