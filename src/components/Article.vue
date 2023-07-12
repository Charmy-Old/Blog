<template>
    <section class="d-none">
        <div class="container text-center">
            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-6">
                <div>
                    <button class="select-button" data-filter="all">All</button>
                </div>
                    
                <div>
                    <button class="select-button" data-filter="web">Web</button>
                </div>
                
                <div>
                    <button class="select-button" data-filter="html">HTML</button>
                </div>
                    
                <div>
                    <button class="select-button" data-filter="css">CSS</button>
                </div>
                    
                <div>
                    <button class="select-button" data-filter="javascript">JavaScript</button>
                </div>
                    
                <div>
                    <button class="select-button" data-filter="vue">Vue</button>
                </div>
            </div>
        </div>
    </section>
    
    <!-- 置頂貼文 -->
    <section class="all">
        <a href="Programming-Language" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-code"></i>
            </div>
            <div class="article-text">
                <div class="article-title"><i class="fa-sharp fa-solid fa-thumbtack"></i>【程式入門】該如何開始自學寫程式</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Programming Language<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>雖然程式語言學習的領域是學無止境的，但是若不先找到目標而先專攻一個方向，很難培養出自己的一套學習方式及方向的！</p>
                    <p>如果清楚了學習的目的及方向，接著我們就要選擇學習哪一種程式語言；以下是簡單的整理，讓新手、入門的程式語言自學者，能快速有個方向：</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_slice-vs-splice-vs-split" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">slice() V.S. splice() V.S. split()</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>CSS<i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-11</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>slice() V.S. splice() V.S. split()</p>
                    <p>Slice、Splice、Split 是處理 陣列 或 字串 常見的方法。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_delete-vs-splice" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">delete V.S. splice</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>CSS<i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-11</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>在 JavaScript 中，delete 和 splice 為刪除組數索引值的方法。</p>
                    <p>使用 delete 刪除數組中的元素時，該元素的值會變為 empty，但是數組的長度不會改變</p>
                    <p>使用 splice 方法刪除數組中的元素時，數組的長度會相應地減少。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_var-vs-let-vs-const" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">var V.S. let V.S. const</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>CSS<i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-11</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>在 JavaScript 中，var、let 和 const 是用於宣告變數的保留字，在 JavaScript 早期只有 var，直到 ES2015 (ES6) 時才加入了 let 與 const</p>
                    <p>var 與 let / const ，主要有幾項差異：</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all web">
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

    <section class="all web">
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

    <section class="all web">
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
                    <p>SSL使用了非對稱加密（公鑰加密）和對稱加密的組合來實現安全通信。它的主要目標是確保數據的機密性（加密數據以防止被未授權的人讀取）、完整性（確保數據在傳輸過程中不被修改）、身份驗證（確認通信方的身份）和可用性（確保通信的可靠性和連接的正確性）。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all web">
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

    <section class="all css javascript">
        <a href="CODE_Limit-Line-Width" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-file-code"></i>
            </div>
            <div class="article-text">
                <div class="article-title">限制內容字數寬度或行數</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>CSS<i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-05</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>限制內容字數寬度或行數，超過顯示刪節號…</p>
                    <p>透過 CSS 來限制字數寬度或行數做法，可以將長篇的文章進行截斷，並且結尾以...方式呈現在版面上，對排版來說是相當好用的方式。</p>
                    <p>但display: -webkit-box;語法在某些瀏覽器不支援，所以建議使用JavaScript寫法。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_Cookie-vs-LocalStorage-vs-SessionStorage" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">Cookie V.S. LocalStorage V.S. SessionStorage</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>Cookie、LocalStorage、SessionStorage 差異</p>
                    <p>Cookie：可設定失效時間。 預設是關閉瀏覽器後失效</p>
                    <p>LocalStorage：不會過期，除非手動清除</p>
                    <p>SessionStorage：每次分頁或瀏覽器關掉後就會清除</p>
                </div>
            </div>
        </a>
    </section>

</template>
<script>
    import { onMounted } from 'vue';
    export default {
        setup() {
            onMounted(() => {
                function selectArticle() {
                    const buttons = document.querySelectorAll(".select-button");
                    const cards = document.querySelectorAll(".all");
                    
                    function filter(category, items) {
                        items.forEach((item) => {
                            const isItemFiltered = !item.classList.contains(category);
                            const isShowAll = category.toLowerCase() === "all";
                            if (isItemFiltered && !isShowAll) {
                                item.classList.add("d-none");
                            } else {
                                item.classList.remove("d-none");
                            }
                        });
                    }
                    
                    buttons.forEach((button) => {
                        button.addEventListener("click", () => {
                            const currentCategory = button.dataset.filter;
                            console.log(currentCategory);
                            filter(currentCategory, cards);
                        });
                    });
                }
          
                selectArticle();
            });
        }
    };
</script>