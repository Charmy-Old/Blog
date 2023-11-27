<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 遞迴(Recursion)？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-22</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>遞迴(Recursion) 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>遞迴又稱遞歸，是一種在程式設計中常見的概念與技巧，指的是一個函式在其定義中使用自己本身的方法，用來解決需要重複執行相似任務的問題。也就是說，一個遞迴函式在解決問題時，會將大問題分解為一個或多個類似但規模較小的子問題，然後遞迴地呼叫自己來處理這些子問題，直到某個停止條件，稱為「基案」(Base Case)，遞迴才會停止，最終這些子問題的解決方案會被合併，得到原始問題的解。遞迴可以使程式碼更簡潔、易讀，但也需要小心處理，以避免無限迴圈造成程式崩潰。</p>
                        <h4>遞迴必須包含兩個重要的部分：</h4>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>基本情況(Base Case)：遞迴必須有一個或多個基本情況，也稱為終止條件。這些基本情況指的是問題已經簡化到無法再分解，此時不再呼叫遞迴函數，而是直接返回一個值</li>
                            <li><i class="fa-solid fa-check"></i>遞迴情況(Recursive Case)：遞迴情況指的是問題可以進一步分解的情況。在這種情況下，函數會呼叫自身，但傳遞的參數應該是比原始問題更小的子問題。這樣，函數在遞迴的過程中會逐步接近基本情況。</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>遞迴的運行過程可以通過以下步驟來理解：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ol>
                            <li>1、檢查是否達到基本情況，如果是，返回基本情況的值</li>
                            <li>2、如果沒有達到基本情況，則將問題分解成較小的子問題</li>
                            <li>3、使用遞迴呼叫處理這些子問題，得到它們的結果</li>
                            <li>4、將子問題的結果組合起來，得到原始問題的解</li>
                            <li>5、返回結果</li>
                        </ol>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>※ 遞迴的實現需要小心處理，因為如果遞迴沒有達到基本情況，將會無限地遞迴下去。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Python 範例</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>計算階乘</h4>
                        <p>階乘是一個經典的遞迴範例。階乘 n 的定義是 n! = n * (n - 1) * (n - 2) * ... * 1。以下是一個計算階乘的遞迴函式範例：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
def factorial(n):
    # Base case
    if n == 0:
        return 1
    # Recursive case
    else:
        return n * factorial(n - 1)

result = factorial(5)
print(result)   # 120
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>這個遞迴函數中，基本情況是當 n 為 0 時，直接返回 1。否則，遞迴情況中的遞迴呼叫會將問題縮小，直到達到基本情況。最終，所有的遞迴呼叫都會被展開，並且階乘的計算結果被返回。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>JavaScript 範例</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>計算階乘</h4>
                        <p>階乘是一個經典的遞迴範例。階乘 n 的定義是 n! = n * (n - 1) * (n - 2) * ... * 1。以下是一個計算階乘的遞迴函式範例：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
function factorial(n) {
    // 基案：當 n 等於 0 或 1 時，階乘為 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // 遞迴：計算 n * (n - 1) 的階乘
    return n * factorial(n - 1);
}

const result = factorial(5);   // 計算 5!
console.log(result);   // 120
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在這個例子中，factorial 函式計算 n 的階乘。它首先檢查是否達到基案（n 為 0 或 1），如果是，直接返回 1。否則將呼叫自身來計算 n * (n - 1) 的階乘。</p>
                        <h4>計算斐波那契數列</h4>
                        <p>另一個常見的遞迴範例是計算斐波那契數列。斐波那契數列是一個數列，每個數字是前兩個數字的和（除了前兩個數字是 0 和 1）。以下是一個計算斐波那契數的遞迴函式範例：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
function fibonacci(n) {
    // 基案：當 n 等於 0 時，斐波那契數為 0；當 n 等於 1 時，斐波那契數為 1
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
  
    // 遞迴：計算第 n 個斐波那契數
    return fibonacci(n - 1) + fibonacci(n - 2);
}
  
const result = fibonacci(6);   // 計算第 6 個斐波那契數
console.log(result);   // 8
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