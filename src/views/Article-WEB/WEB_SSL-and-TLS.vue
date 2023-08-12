<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 SSL和TLS？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-08</p>
                </div>
            </section>

            <!-- SSL -->
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>SSL(Secure Sockets Layer)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>SSL 簡介</h4>
                        <p>SSL（Secure Sockets Layer）是一種用於保護網絡通信的加密協議。它提供了安全的數據傳輸和身份驗證機制，用於保護在互聯網上傳輸的敏感信息。</p>
                        <p>SSL使用了非對稱加密（公鑰加密）和對稱加密的組合來實現安全通信。它的主要目標是確保數據的機密性（加密數據以防止被未授權的人讀取）、完整性（確保數據在傳輸過程中不被修改）、身份驗證（確認通信方的身份）和可用性（確保通信的可靠性和連接的正確性）。</p>
                        <p>當用戶與網站建立安全連接時，SSL協議通過以下步驟實現安全通信：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ol>
                            <li>1、握手階段：客戶端和服務器之間進行握手，協商加密算法和確認身份。</li>
                            <li>2、金鑰交換：客戶端和服務器交換密鑰，用於加密和解密數據。</li>
                            <li>3、身份驗證：服務器向客戶端提供數字證書，證明其身份的真實性。證書由可信的第三方機構（稱為證書授權機構，Certificate Authority，CA）簽署。</li>
                            <li>4、數據傳輸：在握手階段完成後，客戶端和服務器之間的數據傳輸將使用加密算法進行加密和解密。</li>
                        </ol>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>透過SSL協議，用戶可以在瀏覽器和網站之間建立安全的加密連接，從而保護敏感信息（如個人資料、信用卡號碼等）不被未授權的人士獲取。儘管在現代，TLS已經取代了SSL成為主流的加密協議，但SSL仍然被廣泛使用的術語，用於描述用於保護網絡通信的加密技術和協議。</p>
                    </div>
                </div>
            </section>
            
            <!-- TLS -->
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>TLS(Transport Layer Security)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>TSL 簡介</h4>
                        <p>TLS（Transport Layer Security）是一種用於保護網絡通信的加密協議，它是SSL（Secure Sockets Layer）的後續版本。TLS提供了安全的數據傳輸和身份驗證機制，用於保護在互聯網上傳輸的敏感信息。</p>
                        <p>TLS使用了非對稱加密（公鑰加密）和對稱加密的組合來實現安全通信。它的主要目標是確保數據的機密性（加密數據以防止被未授權的人讀取）、完整性（確保數據在傳輸過程中不被修改）、身份驗證（確認通信方的身份）和可用性（確保通信的可靠性和連接的正確性）。</p>
                        <p>當用戶與網站建立安全連接時，TLS協議通過以下步驟實現安全通信：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ol>
                            <li>1、握手階段：客戶端和服務器之間進行握手，協商加密算法和確認身份。</li>
                            <li>2、金鑰交換：客戶端和服務器交換密鑰，用於加密和解密數據。</li>
                            <li>3、身份驗證：服務器向客戶端提供數字證書，證明其身份的真實性。證書由可信的第三方機構（稱為證書授權機構，Certificate Authority，CA）簽署。</li>
                            <li>4、數據傳輸：在握手階段完成後，客戶端和服務器之間的數據傳輸將使用加密算法進行加密和解密。</li>
                        </ol>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>透過TLS協議，用戶可以在瀏覽器和網站之間建立安全的加密連接，從而保護敏感信息（如個人資料、信用卡號碼等）不被未授權的人士獲取。由於TLS提供了更強大的安全性和改進的協議版本管理，它已經取代了SSL成為主流的加密協議。然而，由於歷史原因和廣泛使用的術語，人們仍然經常使用SSL一詞來泛指用於保護網絡通信的加密技術和協議。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>SSL和TLS的差別</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>SSL（Secure Sockets Layer）和TLS（Transport Layer Security）之間的主要差別在於它們的版本和演進歷史。</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ol>
                            <li>1、版本：SSL和TLS有多個版本。SSL 1.0和SSL 2.0是最早的版本，然而它們存在嚴重的安全漏洞，已經被廣泛棄用。SSL 3.0是一個改進版本，但也存在一些安全問題。隨後，TLS 1.0被發佈作為SSL的後續版本，並引入了一些安全性改進。之後的TLS版本，如TLS 1.1、TLS 1.2和TLS 1.3，進一步增強了安全性和性能。</li>
                            <li>2、名稱：儘管TLS被視為SSL的後續版本，但在實際使用中，人們經常混用這兩個術語。事實上，從TLS 1.0開始，協議的正式名稱被更改為Transport Layer Security。然而，出於歷史原因和廣泛使用的習慣，人們仍然將這兩個術語互換使用。</li>
                            <li>3、安全性：TLS版本相對於SSL版本有更好的安全性。TLS 1.0和TLS 1.1已經被認為不夠安全，由於它們存在一些漏洞和弱點，不推薦使用。TLS 1.2和TLS 1.3被廣泛認為是更強大、更安全的版本，並提供了更好的保護和加密算法。</li>
                            <li>4、支持性：由於SSL存在安全漏洞和弱點，許多瀏覽器和服務器已經停止支持舊版SSL，並只支持較新的TLS版本。因此，為了確保最佳的安全性和相容性，建議使用最新版本的TLS。</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>總結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>TLS是SSL的後續版本，它引入了安全性和性能改進。儘管這兩個術語在現實中經常互換使用，但TLS 1.2和TLS 1.3被廣泛接受為更安全和推薦使用的版本。</p>
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