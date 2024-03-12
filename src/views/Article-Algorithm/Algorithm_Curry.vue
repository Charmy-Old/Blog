<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 柯里化和反柯里化？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2024-03-02</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>柯里化(Currying)和反柯里化(Uncurrying)是兩種常見的程式設計技巧，它們起源於計算機科學和數學領域，用於函數的處理和轉換。</p>
                        <p>柯里化這個名詞是以數學家 Haskell Curry 命名的，他是邏輯學、計算機科學和數學邏輯領域的先驅之一。他在 20 世紀提出了這個概念，並將其應用於不同領域。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>柯里化(Currying)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>柯里化又稱為 parital application 或 partial evaluation，是個「將一個接受 n 個參數的 function，轉變成 n 個只接受一個參數的 function」的過程。</p>
                        <p>原理是將傳入 function 的參數，利用 closure(閉包)特性，將它們存放在另一個 function 中並當做回傳值，而這些 function 會形成一個鏈(chain)，待最後參數傳入，完成運算。</p>
                        <p>可以理解為提前接收部分參數，延遲執行，不立即輸出結果，而是返回一個接受剩余參數的函數。因為這樣的特性，也被稱為部分計算函數。柯里化，是一個逐步接收參數的過程。</p>
                        <h4>優缺點</h4>
                        <p>優點：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>簡化參數的處理，基本上是一次處理一個參數，藉以提高程式的彈性和可讀性</li>
                            <li><i class="fa-regular fa-note-sticky"></i>將程式碼依功能拆解成更細的片段，有助於重複利用</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>缺點：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>有時可能會增加程式碼的複雜性，特別是在理解多個層次的柯里化時</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>JavaScript 範例：</h4>
                        <p>假設有一個接受兩個參數的函數 add：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
function add(x, y) {
    return x + y;
}

console.log(add(2, 3));   // 5
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>使用柯里化轉換為接受一個參數的函數：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
function curriedAdd(x) {
    return function(y) {
        return x + y;
    };
}

// 使用柯里化函數
const addFive = curriedAdd(5);
console.log(addFive(3));   // 8
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>curriedAdd 並沒有計算結果，而是回傳一個 function 作為未來計算結果之用。 也就是說，待之後呼叫 addFive 傳入參數後才回傳計算結果。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const curried = function (a) {
    return function (b) {
        return a * a + b * b;
    }
}

console.log((curried(3))(4));   // 25
console.log(curried(3)(4));   // 25
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>反柯里化(Uncurrying)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>反柯里化是柯里化的反向操作，是一個泛型化的過程，使得被反柯里化的函數，可以接收更多參數。目的是創建一個更普適性的函數，可以被不同的對象使用。</p>
                        <p>也就是說反柯里化是將一系列接受單個參數的函數轉換為一個接受多個參數的函數。</p>
                        <h4>優缺點</h4>
                        <p>優點：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>使得接受多個參數的函數更容易重用</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>缺點：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>在某些情況下，可能使得函數的呼叫方式較為笨重</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>JavaScript 範例：</h4>
                        <p>假設有一個接受兩個參數的函數 add：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
function curriedAdd(x) {
    return function(y) {
        return x + y;
    };
}

// 反柯里化
function uncurriedAdd(x, y) {
    return x + y;
}

// 使用反柯里化函數
console.log(uncurriedAdd(5, 6));   // 11
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
                            <li><i class="fa-regular fa-note-sticky"></i>柯里化是一種將多參數函數轉換為一系列單參數函數的技術，增加了可組合性和程式碼的彈性，但有時也可能增程式碼的複雜性</li>
                            <li><i class="fa-regular fa-note-sticky"></i>反柯里化是柯里化的反向操作，將一系列接受單個參數的函數轉換為一個接受多個參數的函數，使得函數更容易重用</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a class="article-reference" href="https://www.cythilya.tw/2017/02/27/currying-in-javascript/" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Summer。桑莫。夏天 - Currying in JavaScript（柯里化）</a>
                        <a class="article-reference" href="https://juejin.cn/post/6844903645222273037" target="_blank"><i class="fa-solid fa-pen-to-square"></i>稀土掘金 - 柯里化与反柯里化</a>
                        <a class="article-reference" href="https://zh.wikipedia.org/zh-tw/%E6%9F%AF%E9%87%8C%E5%8C%96" target="_blank"><i class="fa-solid fa-pen-to-square"></i>維基百科 - 柯里化</a>
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