<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 AJAX？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-14</p>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>AJAX 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>AJAX (Asynchronous JavaScript and XML) 指的是一套綜合了多項技術的瀏覽器端網頁開發技術。</p>
                        <p>傳統的 Web 應用允許使用者端填寫表單 (form)，當送出表單時就向網頁伺服器傳送一個請求。伺服器接收並處理傳來的表單，然後送回一個新的網頁，但這個做法浪費了許多頻寬，因為在前後兩個頁面中的大部分 HTML 碼往往是相同的。由於每次應用的溝通都需要向伺服器傳送請求，應用的回應時間依賴於伺服器的回應時間。這導致了使用者介面的回應比本機應用慢得多。</p>
                        <p>與此不同，AJAX應用可以僅向伺服器傳送並取回必須的資料，並在客戶端採用 JavaScript 處理來自伺服器的回應。因為在伺服器和瀏覽器之間交換的資料大量減少，伺服器回應更快了。同時，很多的處理工作可以在發出請求的客戶端機器上完成，因此 Web 伺服器的負荷也減少了。</p>
                        <p>類似於 DHTML 或 LAMP，AJAX 不是指一種單一的技術，而是有機地利用了一系列相關的技術。雖然其名稱包含 XML，但實際上資料格式可以由 JSON 代替以進一步減少資料量。而客戶端與伺服器也並不需要非同步。一些基於 AJAX 的「衍生／合成」式 (derivative/composite) 的技術也正在出現，如 AFLAX。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>AJAX 應用</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>運用 XHTML + CSS 來表達資訊</li>
                            <li><i class="fa-regular fa-note-sticky"></i>運用 JavaScript 操作DOM (Document Object Model) 來執行動態效果</li>
                            <li><i class="fa-regular fa-note-sticky"></i>運用 XML 和 XSLT 操作資料</li>
                            <li><i class="fa-regular fa-note-sticky"></i>運用 XMLHttpRequest 或新的 Fetch API 與網頁伺服器進行非同步資料交換；</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>AJAX 優缺點</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>優點</h4>
                        <p>使用 Ajax 的最大優點，就是能在不更新整個頁面的前提下維護資料。這使得 Web 應用程式更為迅捷地回應使用者動作，並避免了在網路上傳送那些沒有改變的資訊。</p>
                        <p>傳 Ajax 不需要任何瀏覽器外掛程式，但需要使用者允許 JavaScript 在瀏覽器上執行。就像 DHTML 應用程式那樣，Ajax 應用程式必須在眾多不同的瀏覽器和平台上經過嚴格的測試。隨著 Ajax 的成熟，一些簡化 Ajax 使用方法的程式庫也相繼問世。同樣，也出現了另一種輔助程式設計的技術，為那些不支援 JavaScript 的使用者提供替代功能。</p>
                        <h4>缺點</h4>
                        <p>Ajax 可能破壞瀏覽器的後退與加入收藏書籤功能。在動態更新頁面的情況下，使用者無法回到前一個頁面狀態，這是因為瀏覽器僅能記下歷史記錄中的靜態頁面。一個被完整讀入的頁面與一個已經被動態修改過的頁面之間的可能差別非常微妙；使用者通常都希望單擊後退按鈕，就能夠取消他們的前一次操作，但是在 Ajax 應用程式中，卻無法這樣做。不過開發者已想出了種種辦法來解決這個問題，HTML5 之前的方法大多是在使用者單擊後退按鈕訪問歷史記錄時，通過建立或使用一個隱藏的IFRAME來重現頁面上的變更 (例如，當使用者在 Google Maps 中單擊後退時，它在一個隱藏的 IFRAME 中進行搜尋，然後將搜尋結果反映到 Ajax 元素上，以便將應用程式狀態恢復到當時的狀態)。</p>
                        <p style="color: #666666;">關於無法將狀態加入收藏或書籤的問題，HTML5 之前的一種方式是使用 URL 片斷識別碼（通常被稱為錨點，即 URL 中 # 後面的部分）來保持追蹤，允許使用者回到指定的某個應用程式狀態。(許多瀏覽器允許JavaScript動態更新錨點，這使得Ajax應用程式能夠在更新顯示內容的同時更新錨點。) HTML5 以後可以直接操作瀏覽歷史，並以字串形式儲存網頁狀態，將網頁加入網頁收藏夾或書籤時狀態會被隱形地保留。上述兩個方法也可以同時解決無法後退的問題。</p>
                        <p style="color: #800000;">進行Ajax開發時，網路延遲 —— 即使用者發出請求到伺服器發出回應之間的間隔 —— 需要慎重考慮。如果不給予使用者明確的回應，沒有恰當的預讀資料，或者對 XMLHttpRequest 的不恰當處理，都會使使用者感到厭煩。通常的解決方案是，使用一個視覺化的組件來告訴使用者系統正在進行後台操作並且正在讀取資料和內容。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>總結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>Ajax 是以非同步的方式向伺服器提交需求。對伺服器而言，其與傳統的提交表單需求並無不同，而且由於是以非同步之方式提交，如果同時有多個 Ajax 需求及表單提交需求，將無法保證哪一個需求先獲得伺服器的回應。這會造成應用程式典型的多行程 (process) 或多執行緒 (thread) 的競爭 (racing) 問題。程式設計師因此必須自行處理或在 JavaScript 裡面動手腳以避免這類競爭問題的發 (如 Ajax 需求未回應之前，先 disable 送出按鈕)，這又不必要的增加了程式設計師的負擔。目前已知有自動處理此問題之開發框架似乎只有 ZK。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <a class="article-reference" href="https://zh.wikipedia.org/wiki/AJAX" target="_blank"><i class="fa-solid fa-pen-to-square"></i>維基百科 - AJAX</a>
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