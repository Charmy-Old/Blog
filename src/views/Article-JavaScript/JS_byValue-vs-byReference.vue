<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">By Value V.S. By Reference</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-24</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>By Value 和 By Reference 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>當談到 JavaScript 中的參數傳遞方式時，有兩種不同的方法：「按值傳遞」和「按引用傳遞」。這兩者之間的主要差異在於傳遞參數時，參數的值或引用如何被複製和傳遞的。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>By Value(按值傳遞)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>當使用按值傳遞時，函式會複製傳遞給它的實際參數的值，而不會影響原始值。在函式內部對參數進行修改不會影響到函式外部的原始值。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
function modifyValue(value) {
    value = 42;
}

let x = 10;
modifyValue(x);
console.log(x);   // 輸出 10，原始值並未受到影響
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>By Reference(按引用傳遞)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>當使用按引用傳遞時，函式會傳遞參數的引用(記憶體位址)，而不是參數的實際值。這表示在函式內部對參數進行修改將直接影響原始值。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
function modifyArray(array) {
    array.push(4);
}
  
let newArray = [1, 2, 3];
modifyArray(newArray);
console.log(newArray);   // 輸出 [1, 2, 3, 4]，原始陣列被修改
</pre>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>總結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>JavaScript 中的基本資料型別（例如數字、字串、布林值等）是 By Value(按值傳遞)的，而物件、陣列等複雜資料型別則是 By Reference(按引用傳遞)的。</p>
                        <p>但嚴格來說，在 JavaScript 中並不存在真正的按引用傳遞。實際上，按引用傳遞是透過共享傳遞(pass-by-sharing)來實現的。這意味著傳遞給函式的引用(記憶體位址)是被複製的，但是函式內部操作的是同一個物件(或陣列)的引用，因此對物件或陣列的修改在函式外部也會被反映出來。</p>
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