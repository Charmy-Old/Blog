<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 IIFE？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2024-03-10</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>IIFE 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>IIFE 是「Immediately Invoked Function Expression」的縮寫，中文是「立即調用函式表達式」，指的是一種在宣告的當下就會馬上被執行的函數，通常用於創建一個局部作用域，避免全局污染。</p>
                        <h4>IIFE 的語法：</h4>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
(function () {
    // 函式程式碼
})();
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>IIFE 的優缺點</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>IIFE 的優點</h4>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h5><i class="fa-regular fa-note-sticky"></i>創建局部作用域</h5>
                        <p>通過使用 IIFE 可以創建一個局部作用域，避免全局變量的污染。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
let count = 1;

(function () {
    let count = 2;
    console.log(count);   // 2
})();

console.log(count);   // 1
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h5><i class="fa-regular fa-note-sticky"></i>避免命名衝突</h5>
                        <p>IIFE 可以為變量創建了一個單獨的命名空間，避免函式名和變量名的衝突。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
let variable = "全域變數";

(function () {
    let variable = "區域變數";
    console.log(variable);   // 區域變數
})();

console.log(variable);   // 全域變數
</pre>

                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h5><i class="fa-regular fa-note-sticky"></i>形成一個私有作用域</h5>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
for (var i = 1; i &lt= 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    })(i);
}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在以上程式碼中，如果沒有使用 IIFE，那麼每次迴圈的 i 值都會被覆寫，導致最後輸出的結果都是 6。使用 IIFE 之後，每個迴圈都會形成一個私有作用域，因此 i 值可以被正確保留。</p>
                        <p>如果不使用 IIFE 也想做到每隔一秒印出0 1 2 3 4 5 6，可以將 var 改成 let 或使用閉包(Closure)的方法。</p>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h5><i class="fa-regular fa-note-sticky"></i>程式碼模組化</h5>
                        <p>IIFE 可以將程式碼分為獨立的模組，方便了程式碼的管理和維護。在前端模組化開始發展、並且還沒有前端模組化工具時，一開始就是使用 IIFE 作為模組化的實踐方式。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// Module1
(function () {
    var module1Variable = "module 1";
    function module1Function() {
        console.log(module1Variable);
    }
    window.module1 = {
        module1Function: module1Function,
    };
})();

// Module2
(function () {
    var module2Variable = "module 2";
    function module2Function() {
        console.log(module2Variable);
    }
    window.module2 = {
        module2Function: module2Function,
    };
})();

// Usage
module1.module1Function();   // module 1
module2.module2Function();   // module 2
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在以上程式碼中，通過兩個 IIFE 分別創建了兩個模組。每個模組內部都有自己的變量和函式，而 IIFE 的作用是創建局部作用域，避免了變量的污染。接著在 window 添加對應的模組對象，實現了對模組的公開。使用時可以直接通過 window 對象訪問模組中的函式實現模組化。</p>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h5><i class="fa-regular fa-note-sticky"></i>提高程式碼執行效率</h5>
                        <p>IIFE 可以在定義時立即執行，避免了函式的不必要的存儲和調用，提高了程式碼的執行效率。</p>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>IIFE 的缺點</h4>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>程式碼不易維護：當程式碼變得更加複雜時，IIFE 的程式碼容易變得龐大，不易於維護和閱讀。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>不利於重複使用：IIFE 的程式碼通常是一次性的，無法復用，因此在需要多次調用時不太方便。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>增加程式碼複雜度：使用 IIFE 可能會使程式碼變得更加複雜，特別是當程式碼量很大時。</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a class="article-reference" href="https://www.explainthis.io/zh-hant/swe/what-is-class" target="_blank"><i class="fa-solid fa-pen-to-square"></i>ExplainThis - JavaScript 立即調用函式 IIFE (Immediately Invoked Function Expression) 是什麼？優缺點是什麼？</a>
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