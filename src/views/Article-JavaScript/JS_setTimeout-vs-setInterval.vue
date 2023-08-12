<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">setTimeout V.S. setInterval</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-01</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>setTimeout 和 setInterval 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>setTimeout 和 setInterval 都是 JavaScript 中用於執行延遲或重複執行程式碼的方法，差異在於執行的次數和頻率。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>setTimeout</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>setTimeout 用於在指定的時間後執行一次程式碼</li>
                            <li><i class="fa-solid fa-check"></i>語法：setTimeout(callback, delay)</li>
                            <li><i class="fa-solid fa-check"></i>callback 是一個函式，代表要執行的程式碼</li>
                            <li><i class="fa-solid fa-check"></i>delay 是延遲的毫秒數，也就是多久後執行 callback 函式</li>
                            <li><i class="fa-solid fa-check"></i>執行一次後，setTimeout 就會結束，並且不會再次觸發</li>
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
console.log("Start");
setTimeout(function() {
    console.log("Delayed message");
}, 2000);
console.log("End");
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>顯示結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
Start
End
Delayed message   // 經過 2 秒後才輸出這個訊息
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>setInterval</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>setInterval 用於在指定的時間間隔內重複執行一次程式碼</li>
                            <li><i class="fa-solid fa-check"></i>語法：setInterval(callback, interval)</li>
                            <li><i class="fa-solid fa-check"></i>callback 是一個函式，代表要重複執行的程式碼</li>
                            <li><i class="fa-solid fa-check"></i>interval 是每次重複執行的間隔時間，以毫秒為單位</li>
                            <li><i class="fa-solid fa-check"></i>setInterval 會持續不斷地重複執行，直到使用 clearInterval 停止它</li>
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
let count = 1;
const intervalId = setInterval(function() {
    console.log("Interval message:", count);
    count++;
    if (count > 5) {
        clearInterval(intervalId);   // 在計數達到 5 時停止重複執行
    }
}, 1000);
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>顯示結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
Interval message: 1   // 第 1 秒結束出現
Interval message: 2   // 第 2 秒結束出現
Interval message: 3   // 第 1 秒結束出現
Interval message: 4   // 第 1 秒結束出現
Interval message: 5   // 第 1 秒結束出現，計數達到 5 時停止
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
                            <li><i class="fa-solid fa-check"></i>setTimeout 用於延遲一段時間後執行程式碼，只執行一次</li>
                            <li><i class="fa-solid fa-check"></i>setInterval 用於每隔一段時間重複執行程式碼，持續執行直到使用 clearInterval 停止</li>
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
<script>
    import Header from "@/components/Header.vue";
    import Wall from "@/components/Wall.vue";
    import BackToTop from "@/components/BackToTop.vue";
    import pageRate from "@/components/pageRate.vue";
    export default {
        components: {
            Header,
            Wall,
            BackToTop,
            pageRate,
            // Footer,
        },
        setup() {}
    };
</script>