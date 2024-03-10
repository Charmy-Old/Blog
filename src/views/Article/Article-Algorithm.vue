<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-top">
                    <div class="article-icon">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">Algorithm</div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                <a href="Algorithm_DFS-vs-BFS" class="article">
                    <div class="article-icon">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 DFS 和 BFS？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>演算法<i
                                class="fa-sharp fa-solid fa-calendar-days"></i>2024-03-11</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>深度優先搜尋（DFS）與廣度優先搜尋（BFS）是圖論中常用的兩種搜尋算法。兩者都是可以用來走訪或搜尋樹節點與圖頂點的演算法，但在搜尋的順序上有所不同。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                <a href="Algorithm_Curry" class="article">
                    <div class="article-icon">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 柯里化(Currying)和反柯里化(Uncurrying)？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>演算法<i
                                class="fa-sharp fa-solid fa-calendar-days"></i>2024-03-02</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>柯里化(Currying)和反柯里化(Uncurrying)是兩種常見的程式設計技巧，它們起源於計算機科學和數學領域，用於函數的處理和轉換。</p>
                        </div>
                    </div>
                </a>
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