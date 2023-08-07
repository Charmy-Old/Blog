<template>
    <Header />
    <div class="content">
        <main>
            
            <section>
                <div class="article-top">
                    <div class="article-icon">
                        <i class="fa-sharp fa-solid fa-desktop"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">Web</div>
                    </div>
                </div>
            </section>

            <section>
                <a href="WEB_CORS-introduce" class="article">
                    <div class="article-icon">
                        <i class="fa-sharp fa-solid fa-desktop"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 CORS？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-07</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>CORS(跨來源資源共用)是一種瀏覽器安全性機制，用於控制網頁應用程式在不同來源之間進行資源共用的方式。在網頁開發中，當一個網頁應用程式(域A)嘗試從另一個來源的網頁(域B)請求資源(例如 API 請求或嵌入的內容)，瀏覽器會實施 CORS 政策來確保安全性，以防止惡意攻擊和跨站點請求偽造(CSRF)等風險。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section>
                <a href="WEB_Proxy-introduce" class="article">
                    <div class="article-icon">
                        <i class="fa-sharp fa-solid fa-desktop"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 Proxy？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-06</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>在電腦和網路中，「Proxy」(代理伺服器)是指一種位於使用者與目標伺服器之間的中間伺服器，用於處理使用者與目標伺服器之間的資料傳輸。代理伺服器可以用來幫助用戶匿名瀏覽網路、提高網路安全性、加速網頁載入速度，以及控制或監視網路流量。</p>
                            <p>代理伺服器的運作方式是這樣的：當在瀏覽網頁或使用網路應用時，請求會先被送到代理伺服器，然後代理伺服器再轉送請求到目標伺服器。反之亦然，目標伺服器的回應會先送到代理伺服器，然後再轉送到設備上。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section>
                <a href="WEB_OWASP-introduce" class="article">
                    <div class="article-icon">
                        <i class="fa-sharp fa-solid fa-desktop"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 OWASP？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-31</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>開放式 Web 應用程式安全性專案 (OWASP) 是致力於 Web 應用程式安全性的國際非營利組織。OWASP 的核心原則之一是，他們的所有資料都免費提供並且可以在其網站上輕鬆存取，這使得任何人都能夠改善自己的 Web 應用程式安全性。他們提供的材料包括文件、工具、影片和論壇。也許他們最著名的專案是 OWASP Top 10。</p>
                            <p>簡單的說就是推動世界軟體的安全性。OWASP 也歸納出容易攻擊的弱點並彙整為十大資安問題、排名、防範措施。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section>
                <a href="WEB_web-noun" class="article">
                    <div class="article-icon">
                        <i class="fa-sharp fa-solid fa-desktop"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">淺談網頁技術名詞</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-19</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>為了增進使用者體驗，前端愈來愈複雜，現在就讓我們一起搞懂網頁技術名詞。</p>
                            <p>MVC：一種設計模式，目的是將雜亂的程式碼分開以好維護。原理是將任何與資料有關的操作都放到一個叫做 Model 的地方、所有跟顯示畫面有關的東西都放到 View，並在 View 裡面用一個 template 來放入資料。</p>
                            <p></p>
                        </div>
                    </div>
                </a>
            </section>

            <section>
                <a href="WEB_RESTfulAPI-introduce" class="article">
                    <div class="article-icon">
                        <i class="fa-sharp fa-solid fa-desktop"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 RESTful API？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-11</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>RESTful API 是一種能讓兩個電腦系統用來安全地透過網際網路交換資訊的介面。大多數商業應用程式必須與其它內部和第三方應用程式溝通，以執行各種任務。舉例來說，為了產生每月薪資單，您的內部帳戶系統必須與您客戶的銀行系統共用資料，以自動化提供薪資單的過程，並且與內部出勤卡應用程式進行通訊。多種 RESTful API 支援此類資訊交換，因為它們遵守安全、可靠、且有效率的通訊標準。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section>
                <a href="WEB_TCP-IP" class="article">
                    <div class="article-icon">
                        <i class="fa-sharp fa-solid fa-desktop"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 TCP/IP？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-09</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>TCP/IP（Transmission Control Protocol/Internet Protocol）是一組用於互聯網通信的通信協議。它是互聯網的核心協議套件，也是許多網絡通信的基礎。</p>
                            <p>TCP/IP協議套件由兩個主要協議組成：傳輸控制協議（TCP）和網際網路協議（IP）。這兩個協議一起工作，以確保數據的可靠傳輸。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section>
                <a href="WEB_SSL-and-TLS" class="article">
                    <div class="article-icon">
                        <i class="fa-sharp fa-solid fa-desktop"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 SSL和TLS？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-08</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>SSL（Secure Sockets Layer）是一種用於保護網絡通信的加密協議。它提供了安全的數據傳輸和身份驗證機制，用於保護在互聯網上傳輸的敏感信息。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section>
                <a href="WEB_HTTP-vs-HTTPS" class="article">
                    <div class="article-icon">
                        <i class="fa-sharp fa-solid fa-desktop"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">HTTP V.S. HTTPS</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-08</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>超文字傳輸通訊協定 (HTTP) 是全球資訊網的基礎，用於透過超文字連結載入網頁。HTTP 是一種應用程式層通訊協定，用於在聯網裝置之間傳輸資訊，並在網路通訊協定堆疊的其他層上執行。透過 HTTP 的典型流程涉及用戶端機器向伺服器發出請求，然後伺服器傳送回應訊息。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section>
                <a href="WEB_MVC-vs-MVVM" class="article">
                    <div class="article-icon">
                        <i class="fa-sharp fa-solid fa-desktop"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">MVC V.S. MVVM</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>文章會包含 MVC/MVVM的構成、原理、以及相關討論。</p>
                            <p>MVC（Model-View-Controller）和MVVM（Model-View-ViewModel）是兩種軟體架構模式，用於設計和組織應用程式的不同部分，使其易於維護和擴展。它們各自有自己的特點和用途。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section>
                <a href="WEB_api-introduce" class="article">
                    <div class="article-icon">
                        <i class="fa-sharp fa-solid fa-desktop"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 API？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>當你上Google搜尋 API，你會看到它解釋為 應用程式介面，也就是Application Programming Interface 的縮寫，扮演應用程式和應用程式之間的橋樑。</p>
                            <p>API 就像一個介面，可以幫助開發者節省精力，並很快的達到目的。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section>
                <a href="WEB_npm-introduce" class="article">
                    <div class="article-icon">
                        <i class="fa-sharp fa-solid fa-desktop"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 NPM？了解 node套件管理工具 npm install</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>在現代的網站中，使用他人開放原始碼的套件輔助開發已經是稀鬆平常的事情，無論是透過套件加速堆砌產品，或是在開發環境中加上協助工程師的各式工具，只需要稍加設定，一個專案便能輕易加載了成千上萬的外部程式；但如此方便的機制，究竟是怎麼實現的呢？</p>
                            <p>npm 即為 Node Package Manager 的縮寫，開發者可以透過 Node 隨附的 npm cli，進行套件的安裝及管理。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section>
                <a href="WEB_cdn-introduce" class="article">
                    <div class="article-icon">
                        <i class="fa-sharp fa-solid fa-desktop"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 CDN？| CDN 的工作原理是什麼？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>內容傳遞網路（CDN）是指一組分佈在不同地理位置的伺服器，協同工作以提供網際網路內容的快速交付。</p>
                            <p>CDN 允許快速傳輸載入網際網路內容所需的資源，包括HTML頁面、javascript檔、樣式表、圖像和視訊。CDN服務已得到不斷普及。如今，大多數web流量都通過CDN提供服務，包括來自Facebook、Netflix和亞馬遜等主要網站的流量。</p>
                            <p>正確設定的CDN也能協助保護網站，對抗常見的惡意攻擊，例如分散式阻斷服務(DDOS)攻擊。</p>
                        </div>
                    </div>
                </a>
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
    import { onMounted } from "vue";
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