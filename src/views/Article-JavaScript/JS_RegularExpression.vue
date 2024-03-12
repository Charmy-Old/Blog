<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">JavaScript 的正規表達式(Regular Expression)</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-09</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>正規表達式 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>正規表達式(Regular Expression，簡稱為 RegExp 或 RegEx)是一種強大的文本處理工具，用於搜尋、匹配和替換文字模式。在 JavaScript 中，可以使用RegExp物件來創建和操作正規表達式</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>JavaScript 的正規表達式用法</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4><i class="fa-solid fa-bars-staggered"></i>基本概念：</h4>
                        <p>正規表達式的基本元素包括字符、特殊字符和量詞。例如，/abc/ 是一個簡單的正規表達式，用於匹配字符串中的 "abc"。</p>
                        <div class="article-detailLine"></div>
                        <h4><i class="fa-solid fa-bars-staggered"></i>文字匹配：</h4>
                        <p>使用普通字符來進行文字匹配。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const regex = /Charmy/;
console.log(regex.test("Hello Charmy"));   // true
console.log(regex.test("Hi Johnny"));   // false
</pre>
                    </div>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4><i class="fa-solid fa-bars-staggered"></i>字符類別：</h4>
                        <p>使用方括號 [] 來指定一個字符集合，可以匹配集合中的任何字符(英文大小寫有分)。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const regex = /[aeiou]/;   // 匹配任何元音字母
console.log(regex.test("aaa"));   // true
console.log(regex.test("qqq"));   // false
</pre>
                    </div>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4><i class="fa-solid fa-bars-staggered"></i>量詞：</h4>
                        <p>量詞指定匹配的次數。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const regex = /\d{3}-\d{2}-\d{4}/;   // 匹配號碼格式：123-45-6789
console.log(regex.test("555-12-3456"));   // true
console.log(regex.test("12345"));   // false
</pre>
                    </div>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4><i class="fa-solid fa-bars-staggered"></i>量修飾符：</h4>
                        <p>修飾符用於指定匹配方式的修改。常見的修飾符包括：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>i：忽略大小寫</li>
                            <li><i class="fa-regular fa-note-sticky"></i>g：全局匹配</li>
                            <li><i class="fa-regular fa-note-sticky"></i>m：多行匹配</li>
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const regex = /abc/gi;
const text = "ABC abc AbC";
const matches = text.match(regex);
console.log(matches);   // ["ABC", "abc", "AbC"]
</pre>
                    </div>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4><i class="fa-solid fa-bars-staggered"></i>特殊字符簡介：</h4>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>.：匹配任意單個字符，除了換行符</li>
                            <li><i class="fa-regular fa-note-sticky"></i>^：匹配行的開頭</li>
                            <li><i class="fa-regular fa-note-sticky"></i>$：匹配行的結尾</li>
                            <li><i class="fa-regular fa-note-sticky"></i>\w：匹配任何單詞字符(字母、數字、下劃線)</li>
                            <li><i class="fa-regular fa-note-sticky"></i>\d：匹配任何數字字符</li>
                            <li><i class="fa-regular fa-note-sticky"></i>$\s：匹配任何空白字符</li>
                            <li><i class="fa-regular fa-note-sticky"></i>*：匹配前一個元素零次或更多次</li>
                            <li><i class="fa-regular fa-note-sticky"></i>+：匹配前一個元素一次或更多次</li>
                            <li><i class="fa-regular fa-note-sticky"></i>?：匹配前一個元素零次或一次</li>
                            <li><i class="fa-regular fa-note-sticky"></i>()：捕獲子表達式</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>匹配電子郵件地址範例</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
const email = "user@example.com";
console.log(emailRegex.test(email));   // true
</pre>
                    </div>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h5>可以使用 regex101 或 RegExr 等在線的正規表達式測試器來測試正規表達式。這些工具可以調試和測試正規表達式，並提供詳細的解釋和匹配結果。</h5>
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