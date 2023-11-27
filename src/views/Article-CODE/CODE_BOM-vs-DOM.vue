<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">BOM V.S. DOM</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-19</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>BOM (Browser Object Model)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>定義</h4>
                        <p>Browser Object Model 瀏覽器物件模型，簡稱 BOM，是瀏覽器所有功能的核心，與網頁的內容無關。</p>
                        <p>在早期沒有制定標準規範的時候，各家瀏覽器廠商幾乎各自在自家瀏覽器上實作功能，非常混亂。 直到最近幾年， W3C 把各家瀏覽器都有實作的部分，統一集合起來納入了 HTML5 的標準中，這也就是我們現在看到的 BOM API 的實作。</p>
                        <p>BOM 也有人非正式地稱它為「Level 0 DOM」。因為它在 DOM level 1 標準前就已存在，而不是真的有文件去規範這些，所以「Level 0 DOM」與「BOM」兩者實際上指的是同一個東西。</p>
                        <h5>簡單來說</h5>
                        <p>BOM，是 JavaScript 與瀏覽器溝通的橋樑，JavaScript 可以透過 BOM 對瀏覽器進行各種操作，包含開啟及關閉視窗、改變視窗大小、計時器、取得位址之類的。</p>
                    </div>
                    <div class="article-pic" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-js/BOM.webp" alt="">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>BOM 的核心是 window 物件，而 window 物件提供的特性主要為 document、location、navigator、screen、history 以及 frames。</p>
                        <h3>什麼是 window？</h3>
                        <div class="article-detailLine"></div>
                        <p>瀏覽器物件模型有著階層性的架構，最上層便是 window 物件，代表著瀏覽器視窗本身。</p>
                        <p>所有的 BOM 都可透過 window 來存取。window 物件的使用不須經過宣告，可以直接使用。事實上，在 JavcaScript 中，所有的全域變數、函式、物件，其實都是屬於 window 物件。</p>
                        <h4>常用的 window 功能</h4>
                        <h4 style="color: brown;">回上一頁、到下一頁 — window.history</h4>
                        <p>此功能可以應用在電商網站，引導使用者的購物流程。</p>
                        <p>回上一頁：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ol>
                            <li>1、指定 DOM</li>
                            <li>2、綁定 click 事件，點擊後執行函式，函式中寫入 window.history.back() 語法</li>
                        </ol>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
document.querySelector(".back").onclick = function(){
    window.history.back();
}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>使用 history 語法後，瀏覽器就會開始記錄使用者造訪的網頁、頁數等等。</p>
                        <p>到下一頁：</p>
                        <p>跟回上頁的做法雷同，差別只在 back() 要改成 forward()。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
document.querySelector(".next").onclick = function(){
    window.history.forward();
}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4 style="color: brown;">用 JS 設計列印功能 — print()</h4>
                        <p>常用在票券、QRcord、發票、訂單資訊的輸出。</p>
                        <p>點擊某元素即可列印的寫法：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ol>
                            <li>1、指定 DOM</li>
                            <li>2、綁定 click 事件並執行函式，裡面放入 window.print(); 語法</li>
                        </ol>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4 style="color: brown;">提供當前網頁的位址 — window.location</h4>
                        <p>寫法：window.location.href = "網址";</p>
                        <h4 style="color: brown;">另開新視窗 — window.open</h4>
                        <p>寫法：指定 DOM，綁定事件跟函式，放入 window.open("要前往的網址");</p>
                        <p>open() 裡面的參數很多，除了第一個參數是網址以外，第二個參數不寫的話<span style="font-weight: 900;">預設為另開視窗</span>。</p>
                        <h4 style="color: brown;">動態擷取瀏覽器高度 — innerHeight</h4>
                        <p>網頁 banner 製作滿版背景、圖片時可以用。</p>
                        <p>window.innerHeight 可以偵測到視窗高度（如果開 chrome 開發者工具，會佔掉視窗高度），而 window.outerHeight 則可以偵測整個瀏覽器的高度。此外，寬度的部分相對應地也有 innerWidth、outerWidth 喔。</p>
                        <h5>如何用 JS 讓圖片自適應視窗大小</h5>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ol>
                            <li>1、圖片插入方式用 CSS background 屬性</li>
                            <li>2、在 JS 中選取 DOM，動態更改 CSS 中的圖片高度 document.querySelector(".圖片class").style.height = window.innerHeight + "px";</li>
                            <li>3、如果希望使用者拖動瀏覽器大小的同時，圖片高度也能跟著變化的話，要再加上 onresize() 方法去啟動函式</li>
                        </ol>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
window.onresize = function(){
    document.querySelector(".圖片class").style.height = window.innerHeight + "px"
}
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>DOM (Document Object Model)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>定義</h4>
                        <p>DOM 全名為 Document Object Model 中文翻譯為 文件物件模型，是 HTML、XML 和 SVG 文件的程式介面。它提供了一個文件（樹）的結構化表示法，並定義讓程式可以存取並改變文件架構、風格和內容的方法。DOM 提供了文件以擁有屬性與函式的節點與物件組成的結構化表示。節點也可以附加事件處理程序，一旦觸發事件就會執行處理程序。本質上，它將網頁與腳本或程式語言連結在一起。</p>
                        <h5>簡單來說：</h5>
                        <p>DOM 是一個將 HTML 文件以樹狀的結構來表示的模型，而組合起來的樹狀圖，稱為「DOM Tree」。</p>
                    </div>
                    <div class="article-pic" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-js/DOM-Tree.webp" alt="">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>為何需要 DOM</h4>
                        <p>網頁是由瀏覽器負責運行，因此可以知道瀏覽器其實就是一種編譯器負責去編譯我們寫的網頁程式，有非常多間公司都在設計瀏覽器，因此 W3C 出現了， W3C 定義了非常多的網頁規則好讓各大瀏覽器可以按照這些規則去設計瀏覽器，其中 DOM 就是其中的一個定義。</p>
                        <h4>DOM 解析</h4>
                        <p>既然上面都提到 DOM 會形成一個樹狀結構，而樹狀結構最重要的就是各個節點(node)。</p>
                    </div>
                    <div class="article-pic" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-js/DOM-node.webp" alt="">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>範例</h4>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1 class="txt"&gt;Hello World&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>首先是最一開始的 document，往下開始遇到 &lt;html&gt; 這個 element，這個 &lt;html&gt; 包含了 &lt;head&gt; 以及 &lt;body&gt; 這兩個 element ，其中 &lt;head&gt; 這個 element 包含了 &lt;title&gt; 這個 element 而 &lt;title&gt; 的 text 為 example，再來是 &lt;body&gt; 這個 element 包含了 &lt;h1&gt; 這個 element 而 &lt;h1&gt; 的 text 為 Hello World attribute 為 class。</p>
                    </div>
                    <div class="article-pic" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-js/DOM-example.webp" alt="">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>DOM 遍歷</h4>
                        <p>由於 DOM 為樹狀結構，樹狀結構最重要的觀念就是 Node 彼此之間的關係，這邊可以分成以下兩種關係：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>父子關係(Parent and Child)：簡單來說就是上下層節點，上層為 Parent Node ，下層為 Child Node </li>
                            <li><i class="fa-solid fa-check"></i>兄弟關係(Siblings)：簡單來說就是同一層節點，彼此間只有 Previous 以及 Next 兩種</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>DOM 操作</h4>
                        <p>講了那麼多觀念接下來就是要實際操作了，這邊會介紹一些常用的 DOM API ，首先先從抓取 Nodes 開始。</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>document.getElementById("idName")：找尋 DOM 中符合此 id 名稱的元素，並回傳相對應的 element</li>
                            <li><i class="fa-solid fa-check"></i>document.getElementsBytagName("tag")：找尋 DOM 中符合此 tag 名稱的所有元素，並回傳相對應的 element 集合，集合為 HTMLCollection</li>
                            <li><i class="fa-solid fa-check"></i>document.getElementsByClassName("className")：找尋 DOM 中符合此 class 名稱的所有元素，並回傳相對應的 element 集合，集合為 HTMLCollection</li>
                            <li><i class="fa-solid fa-check"></i>document.querySelector("selector")：利用 selector 來找尋 DOM 中的元素，並回傳相對應的第一個 element</li>
                            <li><i class="fa-solid fa-check"></i>document.querySelectorAll("selector")：利用 selector 來找尋 DOM 中的所有元素，並回傳相對應的第一個 element ，集合為 NodeList</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>HTMLCollection 和 NodeList 的差異</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>HTMLCollection：集合內元素為 HTML element ，也因此 Node type 只能接受 Element</li>
                            <li><i class="fa-solid fa-check"></i>NodeList：集合內元素為 Node ，也因此全部的 Node 都可以存放在 NodeLists 內</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>常用的 DOM API 大概也就這幾種而已。</p>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>總結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>BOM：JavaScript 和『瀏覽器』溝通的窗口，不涉及網頁內容；DOM：JavaScript 用來控制『網頁』的節點與內容的標準</li>
                            <li><i class="fa-solid fa-check"></i>『BOM』完全依賴瀏覽器廠商實作本身沒有標準規範，『DOM』有 W3C 所制定的標準來規範。</li>
                            <li><i class="fa-solid fa-check"></i>DOM 最重要的就是觀念，為了不讓網頁在渲染的過程中過度的 重畫頁面(Repaint) 甚至是 重構頁面(Reflow) 而讓網頁效能變差，在 DOM 的操作上可要非常小心，而 DOM 也可以說是網頁的核心。</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a class="article-reference" href="https://hsuchihting.github.io/javascript/20201108/2987667911/" target="_blank"><i class="fa-solid fa-pen-to-square"></i>TimCodingBlog - JS 筆記 - 認識 BOM</a>
                        <a class="article-reference" href="https://medium.com/%E9%A6%AC%E6%A0%BC%E8%95%BE%E7%89%B9%E7%9A%84%E5%86%92%E9%9A%AA%E8%80%85%E6%97%A5%E8%AA%8C/js-bom-%E7%AD%86%E8%A8%98-6dedea7155ea" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Medium(Written by 馬格蕾特的樹洞) - [JS] 瀏覽器物件模型 (BOM) 筆記</a>
                        <a class="article-reference" href="https://hsuchihting.github.io/javascript/20200615/1316819935/" target="_blank"><i class="fa-solid fa-pen-to-square"></i>TimCodingBlog - JS 筆記 - 認識 DOM 文件物件模型</a>
                        <a class="article-reference" href="https://ithelp.ithome.com.tw/articles/10202689" target="_blank"><i class="fa-solid fa-pen-to-square"></i>iT邦幫忙(陳奕帆 Andy Chen) - Day03-深入理解網頁架構：DOM</a>
                        <a class="article-reference" href="https://hsuchihting.github.io/javascript/20201108/2987667911/" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Medium(Written by ck100pro) - 瀏覽器的物件模型：Bom vs Dom</a>
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