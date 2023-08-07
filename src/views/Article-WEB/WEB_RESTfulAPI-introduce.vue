<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 RESTful API？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-11</p>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>RESTful API 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>RESTful API 是一種能讓兩個電腦系統用來安全地透過網際網路交換資訊的介面。大多數商業應用程式必須與其它內部和第三方應用程式溝通，以執行各種任務。舉例來說，為了產生每月薪資單，您的內部帳戶系統必須與您客戶的銀行系統共用資料，以自動化提供薪資單的過程，並且與內部出勤卡應用程式進行通訊。多種 RESTful API 支援此類資訊交換，因為它們遵守安全、可靠、且有效率的通訊標準。</p>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="article-detail">
                    <h3>什麼是 API？</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>API 全名為 Application Programming Interface，最簡單的理解為，我們不需要知道他實際上是如何實作的，只要知道要怎麼使用它即可。</p>
                        <p>所以比起在意它實際上怎麼被製作出來的，我們更在意怎麼獲得想要的東西，因此會更在意：「輸入的方法」以及「輸出的結果」。</p>
                        <p>詳細介紹可以參考：</p>
                    </div>
                    <div class="article-txt">
                        <a class="article-reference" href="https://charmying-blog.onrender.com/WEB_api-introduce" target="_blank"><i class="fa-solid fa-pen-to-square"></i>什麼是 API？</a>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>什麼是 REST？</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>REST 全名為 Representational State Transfer，是一種軟體架構，他最初是用來管理複雜網路上的通訊指導方針指導方針建立。而 RESTful API 意旨遵循著 REST 架構風格的 API ，而 REST 架構風格需含以下原則：</p>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>統一介面：將操作的細節作抽象，並提供統一的操作方式和規格。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>無狀態：無狀態意旨伺服器獨立於所有之前的請求，所以用戶端可以按任何順序去請求資源。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>分層系統：用戶端不清楚伺服器端有幾層，甚至伺服器端可以再向其他伺服器端請求資源。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>可快取性：用戶端在獲得第一次回應後快取一些資訊，然後後續會直接使用快取中獲得資訊。（例如：網站中每個頁首、頁尾、LOGO 等）</li>
                            <li><i class="fa-regular fa-note-sticky"></i>隨需編碼（code on demand）：Server 可以隨時擴充功能，因應 Client 的即時需求。</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>什麼是 RESTful API？</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>是一種風格，他描述了如何實現 Web API 的架構，基於 HTTP 協定，用來建立分散式系統，並支援多種程式語言，他的優點包含：</p>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-pencil"></i>可擴展性：由於系統無需保留 Client 狀態，因此可以提高擴展效能。</li>
                            <li><i class="fa-solid fa-pencil"></i>靈活性：由於 Client 與 Server 完全分離，因此分層的應用程式功能可以提供靈活性。</li>
                            <li><i class="fa-solid fa-pencil"></i>獨立性：可以使用各種程式語言來編寫程式，不影響 API 的設計。</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>RESTful API 請求資源的方法</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>需要包含的元件為：：</p>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>唯一資源識別符： 伺服器通常使用統一的 URL 來執行資源識別。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>方法：通常用 HTTP 來實作，因此需要告訴 Server 用什麼樣的方法操作</li>
                            <ul>
                                <li><i class="fa-solid fa-check"></i>GET：用戶端使用 GET 來存取位於伺服器上指定 URL 的資源。可以快取 GET 請求，並在 RESTful API 請求中傳送參數，以指示伺服器篩選資料後再傳送。</li>
                                <li><i class="fa-solid fa-check"></i>POST：用戶端使用 POST 向伺服器傳送資料。其包含請求中的資料呈現。多次傳送相同 POST 請求的連帶結果是，具有多次建立相同資源的。</li>
                                <li><i class="fa-solid fa-check"></i>PUT：用戶端使用 PUT 更新伺服器上的現有資源。與 POST 不同，在 RESTful Web 服務中多次傳送相同的 PUT 請求會得到相同的結果。</li>
                                <li><i class="fa-solid fa-check"></i>DELETE：用戶端使用 DELETE 請求來移除資源。DELETE 請求可變更伺服器狀態。但是，如果使用者沒有適當的身分驗證，則請求會失敗。</li>
                                <li><i class="fa-solid fa-check"></i>HTTP 標頭：請求標頭是用戶端與伺服器之間交換的中繼資料。例如，請求標頭會指示請求和回應的格式，提供有關請求狀態的資訊等。</li>
                            </ul>
                        </ul>
                    </div>
                    <div class="article-txt">
                        <h4>資料</h4>
                        <p>REST API 請求可能包含 POST、PUT 和其他 HTTP 方法成功運作的資料。</p>
                        <h4>參數</h4>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-pencil"></i>指定 URL 詳細資訊的路徑參數。</li>
                            <li><i class="fa-solid fa-pencil"></i>請求更多資源相關資訊的查詢參數。</li>
                            <li><i class="fa-solid fa-pencil"></i>快速驗證用戶端的 Cookie 參數。</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>回應狀態碼</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>狀態碼為 Server 對於 Client 請求的回應，用一個三位數的整數來表示伺服器回應的狀態。</p>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>1xx：代表 Request 已被接受，但需要繼續處理，由於 HTTP / 1.0 的協議中並沒有任何 1xx 得狀態碼，因此除了試驗以外，都禁止回傳 1xx 的回應。</li>
                            <li><i class="fa-solid fa-check"></i>2xx：表示 Request 已成功被接受。</li>
                            <li><i class="fa-solid fa-check"></i>3xx：代表 Client 需要再進一步的操作才能完成 Request，通常用來重新導向。</li>
                            <li><i class="fa-solid fa-check"></i>4xx：Client 端錯誤，包含未授權、無資源、參數錯誤等。</li>
                            <li><i class="fa-solid fa-check"></i>5xx：Server 端錯誤，無法完成對 Request 的處理。</li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="article-detail">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <a class="article-reference" href="https://www.explainthis.io/zh-hant/interview-guides/backend/restful-api" target="_blank"><i class="fa-solid fa-pen-to-square"></i>ExplainThis - 什麼是 RESTful API？</a>
                        <a class="article-reference" href="https://aws.amazon.com/tw/what-is/restful-api/" target="_blank"><i class="fa-solid fa-pen-to-square"></i>AWS - 什麼是 RESTful API？</a>
                        <a class="article-reference" href="https://www.explainthis.io/zh-hant/interview-guides/backend/restful-api" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Medium(Written by itsems) - API 是什麼？RESTful API 又是什麼？</a>
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