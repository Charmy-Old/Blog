<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">undefined V.S. undeclared V.S. null</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-02</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>undefined undeclared null 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在 JavaScript 中，undefined、undeclared 和 null 是三個與變數相關的概念。這些概念代表了不同的情況和值。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Undefined(未定義)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>代表變數已經被宣告，但目前尚未賦予任何值，或者表示對象屬性不存在的情況</li>
                            <li><i class="fa-solid fa-check"></i>當宣告一個變數，但尚未賦值時，該變數的值就是 undefined</li>
                            <li><i class="fa-solid fa-check"></i>當嘗試訪問一個對象的不存在屬性時，返回的值也是 undefined</li>
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
let x;   // 宣告變數 x，但沒有賦值，此時 x 的值為 undefined
console.log(x); // undefined

const obj = { name: "Charmy", age: 26 };
console.log(obj.gender);   // undefined，因為obj对象沒有gender属性
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Undeclared(未宣告)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>代表變數尚未被宣告，意即嘗試使用一個還未宣告的變數</li>
                            <li><i class="fa-solid fa-check"></i>使用未宣告的變數會引發 ReferenceError(參考錯誤)</li>
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
console.log(y);   // Uncaught ReferenceError: y is not defined
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Null(空值)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>代表變數已經被宣告，但被賦值為 null，表示值為空或不存在。</li>
                            <li><i class="fa-solid fa-check"></i>null 是一個表示 "空值" 的特殊值</li>
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
let z = null;   // 將變量 z 賦值為 null，表示 z 為空值
console.log(z);   // null
</pre>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>總結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>Undefined(未定義)表示變數已經被宣告，但尚未賦值或對象屬性不存在</li>
                            <li><i class="fa-solid fa-check"></i>Undeclared(未宣告)表示變數尚未被宣告，試圖訪問會引發 ReferenceError(參考錯誤)</li>
                            <li><i class="fa-solid fa-check"></i>Null(空值)表示變數已經被宣告且賦值為 null，表示它是一個空值。</li>
                        </ul>
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