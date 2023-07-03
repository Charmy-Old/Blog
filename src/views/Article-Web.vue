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

            <section class="all web">
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

            <section class="all web">
                <a href="WEB_api-introduce" class="article">
                    <div class="article-icon">
                        <i class="fa-sharp fa-solid fa-desktop"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">API 到底是什麼？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>當你上Google搜尋 API，你會看到它解釋為 應用程式介面，也就是Application Programming Interface 的縮寫，扮演應用程式和應用程式之間的橋樑。</p>
                            <p>API 就像一個介面，可以幫助開發者節省精力，並很快的達到目的。舉個例子，假日出去玩總是玩到很累，口乾舌燥，讓人很想去飲料販賣機投瓶奶茶來解渴。好，現在你面前有一台飲料販賣機，接下來你會這麼做：</p>
                        </div>
                    </div>
                </a>
            </section>

            <section class="all web">
                <a href="WEB_npm-introduce" class="article">
                    <div class="article-icon">
                        <i class="fa-sharp fa-solid fa-desktop"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">NPM是什麼？了解 node套件管理工具 npm install</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>在現代的網站中，使用他人開放原始碼的套件輔助開發已經是稀鬆平常的事情，無論是透過套件加速堆砌產品，或是在開發環境中加上協助工程師的各式工具，只需要稍加設定，一個專案便能輕易加載了成千上萬的外部程式；但如此方便的機制，究竟是怎麼實現的呢？</p>
                            <p>npm 即為 Node Package Manager 的縮寫，開發者可以透過 Node 隨附的 npm cli，進行套件的安裝及管理。</p>
                            <p>在程式開發的領域中，有許多開發者會開發好用的 JavaScript 工具，分享給大家使用。像是多數人熟知的 jQuery, Express, Vue, React 等等，實際上還有更多更多的工具包可以使用。為了把這些工具都統整在一個地方，讓開發者方便搜尋和使用，於是就有了 Node 套件管理器。</p>
                        <p>例如在專案資料夾的終端機中輸入 npm install express，npm 便會自動從 Registry 中尋找 express 這個非常熱門的 Node.js Web Server 框架，取得最新版本，下載到專案中的 node_modules 資料夾中。</p>
                        <p>然而在專案中，不可能每次都透過開發者自行指定套件安裝，不但無法管理，也很沒有效率；開發者可以透過專案中的 package.json，羅列出專案需要哪些套件，之後安裝時只需要 npm install，npm 便會自動依照 package.json 的內容下載套件。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section class="all web">
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
        <BackToTop />
    </div>
</template>
<script>
    import Header from "@/components/Header.vue";
    import Wall from "@/components/Wall.vue";
    import BackToTop from "@/components/BackToTop.vue";
    import { onMounted } from 'vue';
    export default {
        components: {
            Header,
            Wall,
            BackToTop,
            // Footer,
        },
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
            })
        }
    };
</script>