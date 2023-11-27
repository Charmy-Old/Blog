<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 閉包(Closure)？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-28</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>閉包(Closure) 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>閉包(Closure)是 JavaScript 中一個重要的概念，涉及函式的作用域和變數的保存。在理解閉包之前，需要先了解 JavaScript 中的作用域和函式定義。</p>
                        <p>作用域是一個定義了變數可見性和生存期的區域。在 JavaScript 中，有全域作用域和區域(函式)作用域兩種。當在一個函式內宣告一個變數時，只能在該函式內部訪問，這就是區域作用域。</p>
                        <p>函式定義了程式碼塊，並且可以在程式碼中重複使用。在 JavaScript 中，函式是第一類對象，這意味著可以像其他值一樣被賦值給變數、作為參數傳遞給函式和從函式中返回。這就可以在函式中定義其他函式。</p>
                        <p>閉包是指當一個函式(稱為內部函式)可以訪問其外部函式(稱為外部函式)的變數，即使外部函式已經結束執行，這些變數仍然存在並且保留在內存中。換句話說，內部函式「捕捉」了外部函式的作用域，形成了一個閉包，這樣就可以在以後的執行中使用這些變數。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
function outerFunction() {
    const outerVariable = "from the outerFunction";
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}
const closureFunction = outerFunction();
closureFunction();   // from the outerFunction
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在這個範例中，outerFunction 是一個外部函式，它定義了一個變數 outerVariable 和一個內部函式 innerFunction。innerFunction 被返回(不是被立即執行)，並且被賦值給 closureFunction 變數。這樣就創建了一個閉包。</p>
                        <p>即使 outerFunction 已經執行完畢，當調用 closureFunction 時，仍可以訪問 outerVariable，並且在控制台上顯示它的值。這是因為 innerFunction 在閉包中保留了對 outerVariable 的引用，使得 outerVariable 不會被回收，並且可以在 innerFunction 中使用。</p>
                        <p>閉包在 JavaScript 中的使用場景很多，例如可以用來實現私有變數、工廠函式、模塊模式等。</p>
                        <p>需要注意的是，閉包可能會導致一些內存管理的問題，因為閉包中的變數不會被自動回收，直到閉包本身不再被引用時才會被釋放。因此，在使用閉包時，要特別注意避免內存洩漏。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>閉包(Closure) 範例：計數器</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>閉包可以用來實現一個簡單的計數器，以保持計數的狀態。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
function createCounter() {
    let count = 0;
    function increment() {
        count++;
        console.log(count);
    }
    return increment;
}
const counter = createCounter();
counter();   // 1
counter();   // 2
counter();   // 3
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在這個例子中，createCounter 函式建立了一個閉包，其中包含一個 count 變數和一個 increment 函式。每次調用 increment 函式時，它都可以訪問並修改 count 變數的值，並在控制台上顯示更新後的計數。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>閉包(Closure) 範例：私有變數</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>閉包也可以用來實現私有變數，這些變數無法在外部訪問和修改。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
function createSecretHolder(secret) {
    return {
        getSecret: function() {
        return secret;
        },
        setSecret: function(newSecret) {
            secret = newSecret;
        }
    };
}
const secretHolder = createSecretHolder("mySecret");
console.log(secretHolder.getSecret());   // mySecret
secretHolder.setSecret("newSecret");
console.log(secretHolder.getSecret());   // newSecret
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在這個例子中，createSecretHolder 函式返回了一個包含 getSecret 和 setSecret 方法的物件。這兩個方法形成了閉包，可以訪問並修改 secret 變數的值，但是該變數對於外部程式碼是不可見的。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>閉包(Closure) 範例：工廠函式</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>閉包可以用來創建和返回具有特定設置的函式，這在工廠函式模式中很有用。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5));   // 10
console.log(triple(5));   // 15
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在這個例子中，createMultiplier 函式是一個工廠函式，它返回一個閉包。這個閉包乘以外部傳遞給 createMultiplier 函式的 multiplier 參數，並將其應用於內部函式的 number 參數。這樣，我們可以輕鬆地創建具有不同乘數的函式。</p>
                        <p>這些例子展示了閉包在 JavaScript 中的使用方式，閉包的威力在於它允許我們在函式中保持狀態，並在需要時進行存取和修改。</p>
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