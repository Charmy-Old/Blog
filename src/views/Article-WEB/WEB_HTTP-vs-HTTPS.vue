<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">HTTP V.S. HTTPS</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-08</p>
                </div>
            </section>

            <!-- HTTP -->
            <section>
                <div class="article-detail">
                    <h3>HTTP</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>什麼是HTTP？</h4>
                        <p>超文字傳輸通訊協定 (HTTP) 是全球資訊網的基礎，用於透過超文字連結載入網頁。HTTP 是一種應用程式層通訊協定，用於在聯網裝置之間傳輸資訊，並在網路通訊協定堆疊的其他層上執行。透過 HTTP 的典型流程涉及用戶端機器向伺服器發出請求，然後伺服器傳送回應訊息。</p>
                        <h4>HTTP 請求中包含什麼內容？</h4>
                        <p>HTTP 請求是網際網路通訊平台（例如 Web 瀏覽器）索取其載入網站所需資訊的方式。</p>
                        <p>在網際網路上發出的每個 HTTP 請求都攜帶一系列編碼資料，這些資料帶有不同類型的資訊。典型的 HTTP 請求包含以下內容：</p>
                    </div>
                    <div class="article-list">
                        <ol>
                            <li>1、HTTP 版本類型</li>
                            <li>2、一個 URL</li>
                            <li>3、一個 HTTP 方法</li>
                            <li>4、HTTP 請求標頭</li>
                            <li>5、選用的 HTTP 主體。</li>
                        </ol>
                    </div>
                    <div class="article-txt">
                        <p>讓我們更深入地探索這些請求是如何運作的，以及如何使用請求的內容來分享資訊。</p>
                        <h4>什麼是 HTTP 方法？</h4>
                        <p>HTTP 方法有時也稱為 HTTP 指令動詞，表示 HTTP 請求期待被查詢的伺服器執行的動作。例如，兩種最常見的 HTTP 方法是「GET」和「POST」；「GET」請求期望返傳回資訊（通常以網站的形式），而「POST」請求通常表示用戶端正在向 Web 伺服器提交資訊（例如表單資訊，如提交的使用者名稱和密碼）。</p>
                        <h4>什麼是 HTTP 請求標頭？</h4>
                        <p>HTTP 標頭包含存儲在索引鍵/值組中的文字訊息，並且它們包含在每個 HTTP 請求中（以及回應中，詳見下文）。這些標頭可傳達核心資訊，如用戶端正在使用什麼瀏覽器以及正在請求什麼資料。</p>
                        <p>Google Chrome 網路索引標籤中的 HTTP 請求標頭範例：</p>
                    </div>
                    <div class="article-pic">
                        <img src="../../assets/images/article-web/http-request-headers.webp" alt="">
                    </div>
                    <div class="article-txt">
                        <h4>HTTP 請求主體中包含什麼內容？</h4>
                        <p>請求的主體部分包含請求正在傳輸的資訊的「正文」。HTTP 請求的主體包含提交到網頁伺服器的任何資訊，例如使用者名稱和密碼，或輸入到表單中的任何其他資料。</p>
                        <h4>HTTP 回應中包含什麼內容？</h4>
                        <p>HTTP 回應是 Web 用戶端（通常是瀏覽器）從網際網路伺服器收到的用於回答 HTTP 請求的內容。這些回應會根據 HTTP 請求中要求的內容傳達有價值的資訊。</p>    
                        <p>典型的 HTTP 回應包含以下內容：</p>
                    </div>
                    <div class="article-list">
                        <ol>
                            <li>1、一個 HTTP 狀態代碼</li>
                            <li>2、HTTP 回應標頭</li>
                            <li>3、選用的 HTTP 主體</li>
                        </ol>
                    </div>
                    <div class="article-txt">
                        <p>讓我們來逐一分析：</p>
                        <h4>什麼是 HTTP 狀態代碼？</h4>
                        <p>HTTP 狀態代碼是 3 位數代碼，最常用於指示 HTTP 請求是否已成功完成。狀態代碼分為以下 5 個區塊：</p>
                    </div>
                    <div class="article-list">
                        <ol>
                            <li>1、1xx 資訊內容</li>
                            <li>2、2xx 成功</li>
                            <li>3、3xx 重新導向</li>
                            <li>4、4xx 用戶端錯誤</li>
                            <li>5、5xx 伺服器錯誤</li>
                        </ol>
                    </div>
                    <div class="article-txt">
                        <p>「xx」是指 00 到 99 之間的不同數字。</p>
                        <p>如果回應以「4」或「5」開頭，則表示出現錯誤，且不會顯示網頁。以「4」開頭的狀態代碼表示用戶端錯誤（在 URL 中輸入錯字時，經常會遇到「404 NOT FOUND」狀態代碼）。以「5」開頭的狀態代碼意味著伺服器端出了問題。狀態代碼也可能以「1」或「3」開頭，分別表示資訊回應和重新導向。</p>
                        <h4>什麼是 HTTP 回應標頭？</h4>
                        <p>與 HTTP 請求非常相似，HTTP 回應也帶有標頭，用於傳達重要的資訊，例如在回應主體中傳送的資料的語言和格式。</p>
                        <p>Google Chrome 網路索引標籤中的 HTTP 回應標頭範例：</p>
                    </div>
                    <div class="article-pic">
                        <img src="../../assets/images/article-web/http-response-headers.webp" alt="">
                    </div>
                    <div class="article-txt">
                        <h4>HTTP 回應主體中包含什麼內容？</h4>
                        <p>對「GET」請求的成功 HTTP 回應通常有一個主體，其中包含請求的資訊。在大多數 Web 請求中，這是 HTML 資料，Web 瀏覽器會將其轉譯為網頁。</p>
                        <h4>DDoS 攻擊可以透過 HTTP 發動嗎？</h4>
                        <p>請記住，HTTP 是一個「無狀態」通訊協定，這意味著每個命令獨立於任何其他命令執行。在原始規範中，每個 HTTP 請求都會建立和關閉一個 TCP 連線。在較新版本的 HTTP 通訊協定（HTTP 1.1 及以上版本）中，持續連線允許多個 HTTP 請求透過一個持續 TCP 連線傳遞，進而改善資源消耗。在 DoS 或 DDoS 攻擊的情況下，大量 HTTP 請求可被用於對目標裝置發起攻擊，並可被視為應用程式層攻擊或第 7 層攻擊的一部分。</p>
                    </div>
                </div>
            </section>
            
            <!-- HTTPS -->
            <section>
                <div class="article-detail">
                    <h3>HTTPS</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>什麼是 HTTPS？</h4>
                        <p>超文字安全傳輸通訊協定 (HTTPS) 是 HTTP 的安全版本，HTTP 是用於在 Web 瀏覽器和網站之間傳送資料的主要通訊協定。HTTPS 經過加密，以提高資料傳輸的安全性。當使用者傳輸敏感性資料（例如透過登入銀行帳戶、電子郵件服務或健康保險提供者）時，這一點尤其重要。</p>
                        <p>任何網站（尤其是需要登入憑證的網站）都應使用 HTTPS。在現代的 Web 瀏覽器中（例如 Chrome），未使用 HTTPS 的網站會以不同的方式標記。請留意 URL 列中的綠色鎖頭，這表示網頁安全無虞。Web 瀏覽器相當嚴正看待 HTTPS；</p>
                    </div>
                    <div class="article-pic">
                        <img src="../../assets/images/article-web/https-not-secure.webp" alt="">
                    </div>
                    <div class="article-txt">
                        <h4>HTTPS 如何運作？</h4>
                        <p>HTTPS 使用加密通訊協定對通訊進行加密。該通訊協定稱為 Transport Layer Security (TLS)，但以前稱為安全通訊端層 (SSL)。該通訊協定透過使用所謂的非對稱公開金鑰基礎結構來保護通訊。這種類型的安全系統使用兩個不同的金鑰來加密兩方之間的通訊：</p>
                    </div>
                    <div class="article-list">
                        <ol>
                            <li>1、私密金鑰：此金鑰由網站擁有者控制，並且如讀者所推測的那樣，它是私有的。此金鑰位於 Web 伺服器上，用於解密透過公開金鑰加密的資訊。</li>
                            <li>2、公開金鑰：所有想要以安全方式與伺服器互動的人都可以使用此金鑰。用公開金鑰加密的資訊只能用私密金鑰解密。</li>
                        </ol>
                    </div>
                    <div class="article-txt">
                        <h4>為什麼 HTTPS 很重要？ 如果網站沒有 HTTPS，會發生什麼情況？</h4>
                        <p>HTTPS 讓網站不會以任何在網路上窺探的人都能輕鬆查看的方式廣播資訊。透過常規 HTTP 傳送資訊時，資訊會分解為封包，使用免費軟體即可輕鬆「嗅探」這些封包。這使得透過不安全媒介（例如公用 Wi-Fi）進行的通訊極易受到攔截。實際上，所有透過 HTTP 進行的通訊都是以純文字形式進行的，因而能夠為任何使用正確工具的人輕鬆存取，而且容易遭受中間人攻擊。</p>
                        <p>使用 HTTPS 時，流量會經過加密，即使嗅探到封包或以其他方式截取封包，它們也會呈現為無意義的字元。我們來看一個範例：</p>
                        <h4>加密前：</h4>
                    </div>
                    <div class="article-coding">
<pre>
This is a string of text that is completely readable
</pre>
                    </div>
                    <div class="article-txt">
                        <h4>加密後：</h4>
                    </div>
                    <div class="article-coding">
<pre>
ITM0IRyiEhVpa6VnKyExMiEgNveroyWBPlgGyfkflYjDaaFf/Kn3bo3OfghBPDWo6AfSHlNtL8N7ITEwIXc1gU5X73xMsJormzzXlwOyrCs+9XCPk63Y+z0=
</pre>
                    </div>
                    <div class="article-txt">
                        <p>在不使用 HTTPS 的網站中，網際網路服務提供者 (ISP) 或其他中間人有可以在未經網站擁有者核准的情況下將內容插入網頁。這通常採用廣告形式，希望增加收入的 ISP 將付費廣告插入其客戶的網頁中。毋庸置疑，當這種情況發生時，絕不會與網站擁有者分享廣告的利潤和這些廣告的品質控制。HTTPS 杜絕了未經審核的第三方將廣告插入Web 內容的可能。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>HTTPS 與 HTTP 有何不同？</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>從技術上來講，HTTPS 並不是獨立於 HTTP 的通訊協定。它只是在 HTTP 通訊協定的基礎上使用 TLS/SSL 加密，使其更加安全可靠。HTTPS 基於 TLS/SSL 憑證的傳輸而發生，該憑證驗證特定提供者就是他們所聲稱的身分。</p>
                        <p>任當使用者連接網頁時，該網頁將透過其 SSL 憑證傳送，憑證包含啟動安全工作階段所需的公開金鑰。然後，兩台電腦（用戶端和伺服器）將經歷一個稱為 SSL/TLS 交握的過程，即用於建立安全連線的一系列來回通訊。要更深入地瞭解加密和 SSL/TLS 交握，請閱讀 TLS 交握期間會發生什麼。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>為什麼要使用 HTTPS？</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4><i class="fa-solid fa-pencil"></i>使用 HTTPS 的網站對使用者來說更加值得信賴。</h4>
                        <p>HTTPS 使用 SSL/TLS 通訊協定對通訊進行加密，使攻擊者無法竊取資料。SSL/TLS 還可確認網站伺服器是其所聲稱的身分，從而防止假冒。這可以阻止多種網路攻擊。</p>
                        <p>任當使用者連接網頁時，該網頁將透過其 SSL 憑證傳送，憑證包含啟動安全工作階段所需的公開金鑰。然後，兩台電腦（用戶端和伺服器）將經歷一個稱為 SSL/TLS 交握的過程，即用於建立安全連線的一系列來回通訊。要更深入地瞭解加密和 SSL/TLS 交握，請閱讀 TLS 交握期間會發生什麼。</p>
                        <p>儘管有些使用者可能不知道 SSL/TLS 的好處，但現代瀏覽器確保他們無論如何都知道網站的可信度。</p>
                        <h5>Chrome 和其他瀏覽器將所有 HTTP 網站標記為「不安全」。</h5>
                        <p>多年來，Google 逐步採取措施使網站逐漸整合 HTTPS。Google 還在傳回搜尋結果時將 HTTPS 用作一個品質因素；網站越安全，訪客因點擊 Google 提供的連結而犯錯的可能性就越小。</p>
                        <p>從 2018 年 7 月發佈的 Chrome 68 開始，所有不安全的 HTTP 流量在 URL 欄中都會標記為「不安全」。對於沒有有效 SSL 憑證的網站，也都會顯示此通知。其他瀏覽器也紛紛效仿。</p>
                        <h4><i class="fa-solid fa-pencil"></i>HTTPS 對於使用者和網站擁有者來說都更安全。</h4>
                        <p>使用 HTTPS 時，資料在傳輸的兩個方向上都會得到加密，不論是傳到來源伺服器還是從中傳出。通訊協定確保通訊安全，使惡意方無法觀察到正在傳送的資料。因此，使用者在表單中輸入的使用者名稱和密碼不會在傳輸過程中被盜取。如果網站或 Web 應用程式必須向使用者傳送敏感性資料或個人資料（例如，銀行帳號資訊），加密也可以保護這些資料。</p>
                        <h4><i class="fa-solid fa-pencil"></i>HTTPS 對網站進行驗證。</h4>
                        <p>Uber 和 Lyft 等拼車應用程式的使用者不會僅僅是因為司機說可以來接他們，就毫不懷疑地坐進陌生的汽車。相反，應用程式會告訴他們司機的相關資訊，如姓名和外貌、駕駛的車型和車牌號等。使用者可以檢查這些資訊，並確定他們將會進入正確的汽車，儘管每輛共乘用車都各不相同，而且他們從未見過司機。</p>
                        <p>同樣，當使用者導覽到網站時，他們實際上在做的事情就是連接他們不認識的、由未見過的人維護的遠端電腦。啟用 HTTPS 的 SSL 憑證就與拼車應用程式中的司機資訊類似。它代表由可信賴的第三方進行了外部驗證，證明 Web 伺服器是其聲稱的身分。</p>
                        <p>這可以防止這樣的攻擊：攻擊者冒充或模仿網站，使用者以為自己在想要存取的網站上，而實際上他們在一個虛假網站上。HTTPS 驗證還可以幫助公司網站看起來合法，這會影響使用者對公司本身的態度。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <a class="article-reference" href="https://www.cloudflare.com/zh-tw/learning/ddos/glossary/hypertext-transfer-protocol-http/" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Cloudflare - What is HTTP?</a>
                        <a class="article-reference" href="https://www.cloudflare.com/zh-tw/learning/ssl/what-is-https/" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Cloudflare - 什麼是 HTTPS？</a>
                        <a class="article-reference" href="hhttps://www.cloudflare.com/zh-tw/learning/ssl/why-use-https/" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Cloudflare - 為什麼要使用 HTTPS？</a>
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