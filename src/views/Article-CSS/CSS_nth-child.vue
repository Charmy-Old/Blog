<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">CSS 選取標簽元素</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-17</p>
                </div>
            </section>
            <section>
                <div class="article-detail">
                    <h3>:nth-child</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>CSS3 新增的選取器中，大概就屬:nth-child(n)功能最猛了，:nth-child(n)不僅可以不靠class或是ID來選取網頁項目外，還解決了網頁中清單資料規律性選取的問題，:nth-child(n)尤其對於表格資料的呈現上更加方便。</p>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>:nth-child(n)<br>表示選擇的第n個標簽。</li>
                            <li><i class="fa-solid fa-check"></i>:nth-child(2n-1)<br>表示選擇的奇數標簽。</li>
                            <li><i class="fa-solid fa-check"></i>:nth-child(odd)<br>表示選擇的奇數標簽。</li>
                            <li><i class="fa-solid fa-check"></i>:nth-child(2n)<br>表示選擇的偶數標簽。</li>
                            <li><i class="fa-solid fa-check"></i>:nth-child(even)<br>表示選擇的偶數標簽。</li>
                            <li><i class="fa-solid fa-check"></i>:nth-child(n+3)<br>表示選擇的標簽從第3個開始到最後。</li>
                            <li><i class="fa-solid fa-check"></i>:nth-child(-n+3)<br>表示選擇的標簽從0到3，即小於3的標簽。</li>
                            <li><i class="fa-solid fa-check"></i>:nth-last-child(3)<br>表示選擇的倒數第3個標簽。</li>
                            <li><i class="fa-solid fa-check"></i>:first-child<br>表示選擇的第一個標簽。</li>
                            <li><i class="fa-solid fa-check"></i>:last-child<br>表示選擇的最後一個標簽。</li>
                        </ul>
                    </div>
                    <div class="article-txt">
                        <h4>:nth-child 的進階用法</h4>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>:nth-child(-n+10)<br>表示選擇的前10個標簽。</li>
                            <li><i class="fa-solid fa-check"></i>:nth-child(n+11):nth-child(-n+20)<br>表示選擇第11~20個標簽。</li>
                            <li><i class="fa-solid fa-check"></i>:not(:nth-child(n+11):nth-child(-n+20))<br>表示選擇第11~20個以外的標簽。</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div class="article-detail">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <a class="article-reference" href="https://csscoke.com/2013/09/21/%E4%BD%BF%E7%94%A8css3-nth-childn-%E9%81%B8%E5%8F%96%E5%99%A8%E8%A9%B3%E8%A7%A3/" target="_blank"><i class="fa-solid fa-pen-to-square"></i>CSS可樂 - 使用CSS3 :nth-child(n) 選取器教學</a>
                    </div>
                </div>
            </section>
        </main>
        <Wall />
    </div>
    <BackToTop />
</template>
<script>
    import Header from "@/components/Header.vue";
    import Wall from "@/components/Wall.vue";
    import BackToTop from "@/components/BackToTop.vue";
    
    export default {
        components: {
            Header,
            Wall,
            BackToTop,
            // Footer,
        },
        setup() {}
    };
</script>