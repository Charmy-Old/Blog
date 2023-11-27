<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">HTML &lt;code&gt; 顯示程式碼內容</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>&lt;code&gt; 顯示程式碼內容</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>&lt;code&gt; 標籤 (tag) 用來顯示電腦程式碼 (computer code) 內容，而瀏覽器預設會以 monospace 等寬字型 (fixed-width font) 來顯示 &lt;code&gt; 中的內容。</p>
                        <p>舉例：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;pre&gt;
    p {
        color: #333;
        font-family: Helvetica, sans-serif;
        font-size: 16px;
    }
&lt;/pre&gt;
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>顯示結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
Regular text. This is code. Regular text.
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>&lt;code&gt; 也常用來和 &lt;pre&gt; 一起使用，讓 &lt;code&gt; 裡面的程式碼的空白和換行都可以被保留。</p>
                        <p>例如：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;pre&gt;
    p {
        color: #333;
        font-family: Helvetica, sans-serif;
        font-size: 16px;
    }
&lt;/pre&gt;
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>顯示結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
p {
    color: #333;
    font-family: Helvetica, sans-serif;
    font-size: 16px;
}
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a class="article-reference" href="https://www.fooish.com/html/code-tag.html" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Fooish 程式技術 - HTML &lt;code&gt; 顯示程式碼內容</a>
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