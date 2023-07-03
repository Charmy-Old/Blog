<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 CDN？| CDN 的工作原理是什麼？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</p>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>CDN 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>內容傳遞網路（CDN）是指一組分佈在不同地理位置的伺服器，協同工作以提供網際網路內容的快速交付。</p>
                        <p>CDN 允許快速傳輸載入網際網路內容所需的資源，包括HTML頁面、javascript檔、樣式表、圖像和視訊。CDN服務已得到不斷普及。如今，大多數web流量都通過CDN提供服務，包括來自Facebook、Netflix和亞馬遜等主要網站的流量。</p>
                        <p>正確設定的CDN也能協助保護網站，對抗常見的惡意攻擊，例如分散式阻斷服務(DDOS)攻擊。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>CDN 是否與網頁主機相同？</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>由於CDN不會代管內容，也無法取代對於適當虛擬主機的需求，但能協助在網路邊緣快取內容，藉此改善網站效能。許多網站難以透過傳統的代管服務來達到其效能需求，因此選擇使用CDN。</p>
                        <p>利用快取以降低代管頻寬，藉此協助防止服務中斷，並改善安全性，這讓CDN成為熱門選項，用來緩解伴隨傳統虛擬主機而來的主要痛點。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>使用 CDN 有哪些優點？</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>雖然使用CDN的優點取決於網際網路設備的大小和需求，但對於大部分的使用者而言，主要優點可分為4個不同部分：</p>
                    </div>
                    <div class="article-list">
                        <ol>
                            <li>1、改善網站載入時間 - 通過將內容分發到訪問者附近的CDN伺服器（以及其他優化措施），訪問者體驗到更快的頁面載入時間。由於訪客更傾向離開載入速度慢的網站，CDN可以減少退回率並增加人們在網站上花費的時間長度。換言之，網站速度越快，使用者停留的時間越長。</li>
                            <li>2、減少頻寬成本 - 網站代管的頻寬取用成本是網站的主要費用。透過快取和其他最佳化，CDN可以降低來源伺服器必須提供的資料量，藉此減少網站擁有者的代管成本。</li>
                            <li>3、增加內容可用性和備援 - 大量流量或硬體故障會中斷正常網站運作。由於CDN的分佈性質，CDN可以處理更多流量，且對於硬體故障的承受情況也比許多來源伺服器更好。</li>
                            <li>4、改善網站安全性 - CDN可提供DDoS防護、改善安全性憑證及其他最佳化，以改善安全性。</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>CDN 如何運作？</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>在其核心，CDN是共同連結的伺服器網路，目標是盡可能快速、便宜、可靠且安全地傳遞內容。為了改善速度和連線性，CDN會將伺服器置於不同網路之間的交換點。</p>
                        <p>這些網際網路交換點(IXPs)是不同網際網路提供商連接的主要位置，以便彼此提供對來自其不同網路的流量的訪問。連線到這些高速且高度互連的位置後，CDN提供者就能夠以高速資料傳遞過程來減少成本和傳輸時間。</p>
                    </div>
                    <div class="article-pic">
                        <img src="../assets/images/article-web/web-cdn.png" alt="">
                    </div>
                    <div class="article-txt">
                        <p>除了在IXP中放置伺服器，CDN還對標準用戶端/伺服器資料傳輸進行了諸多優化。CDN將資料中心放置在全球的戰略位置，增強安全性，並設計成可承受各種類型的故障和網際網路擁塞。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>延遲 - CDN如何改善網站載入時間？</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>在網站載入內容方面，網站速度越慢，使用者數量越少。 CDN服務可以通過以下方式幫助減少載入時間：</p>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>CDN的全球分佈性可縮短用戶與網站資源之間的距離。CDN使得用戶不必連接到網站原始伺服器的所在地，而是連接到一個地理位置更近的資料中心。更短的傳輸時間代表更快的服務</li>
                            <li><i class="fa-solid fa-check"></i>有效率的負載平衡和固態硬碟等硬體和軟體最佳化可協助資料更快傳遞至使用者。</li>
                            <li><i class="fa-solid fa-check"></i>CDN 可使用縮製和檔案壓縮等策略減少檔案大小，以降低傳輸的資料量。較小的檔案代表更快的載入時間。</li>
                            <li><i class="fa-solid fa-check"></i>CDN 也能最佳化連線再利用並啟用TLS假起動，以加速使用 TLS/SSL憑證的網站。</li>
                        </ul>
                    </div>
                    <div class="article-txt d-none">
                        <a href="https://www.cloudflare.com/zh-tw/learning/cdn/performance/">探索CDN協助網站更快載入的所有方式</a>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>可靠性和備援 - CDN如何讓網站永遠保持連線？</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>對於具有網際網路設備的任何人而言，運作時間都是重要元素。惡意攻擊或者只是熱門度提升所造成的硬體故障和流量尖峰，都有可能降低網頁伺服器效能，並讓使用者無法存取網站或服務。全面性的 CDN 具有幾個可將停機時間降到最低的功能：</p>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>負載平衡可在數個伺服器之間均勻分散網路流量，更輕鬆地調整迅速增加的流量。</li>
                            <li><i class="fa-solid fa-check"></i>即使其中一個或多個CDN伺服器由於硬體故障而離線，智慧容錯移轉也能提供不中斷的服務；容錯移轉可將流量重新分散到其他作業中的伺服器。</li>
                            <li><i class="fa-solid fa-check"></i>若整個資料中心發生技術問題，Anycast 路由傳送會將流量傳輸至另一個可用的資料中心，以確保所有用戶都能繼續訪問網站。</li>
                        </ul>
                    </div>
                    <div class="article-txt d-none">
                        <a href="https://www.cloudflare.com/zh-tw/learning/cdn/cdn-load-balance-reliability/">進一步瞭解CDN如何協助網站保持連線</a>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>資料安全性 - CDN如何保護資料？</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>資訊安全性是CDN不可或缺的一部分。CDN可透過確保高標準驗證、加密和完整性的新型TLS/SSL憑證來保持網站安全。瞭解有關CDN的安全問題，並探索可以採取什麼措施來安全地交付內容。瞭解CDN SSL/TLS安全性</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>頻寬成本 - CDN 如何減少頻寬成本？</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>每次原始伺服器回應要求時，都會取用頻寬。看看Cloudflare CDN等CDN如何削減對原始伺服器的要求並降低頻寬成本</p>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="article-detail">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <a class="article-reference" href="https://www.cloudflare.com/zh-tw/learning/cdn/what-is-a-cdn/" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Cloudflare - 什麼是 CDN？| CDN 的工作原理是什麼？</a>
                    </div>
                </div>
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