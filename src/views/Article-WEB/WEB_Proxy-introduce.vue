<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 Proxy？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-06</p>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>Proxy 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>在電腦和網路中，「Proxy」(代理伺服器)是指一種位於使用者與目標伺服器之間的中間伺服器，用於處理使用者與目標伺服器之間的資料傳輸。代理伺服器可以用來幫助用戶匿名瀏覽網路、提高網路安全性、加速網頁載入速度，以及控制或監視網路流量。</p>
                        <p>代理伺服器的運作方式是這樣的：當在瀏覽網頁或使用網路應用時，請求會先被送到代理伺服器，然後代理伺服器再轉送請求到目標伺服器。反之亦然，目標伺服器的回應會先送到代理伺服器，然後再轉送到設備上。</p>
                        <h4>代理伺服器的幾個主要用途包括：</h4>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>匿名瀏覽：代理伺服器可以隱藏你的真實 IP 地址，使你在瀏覽網頁時更難被追蹤，增加了網路隱私</li>
                            <li><i class="fa-solid fa-check"></i>網路安全：代理伺服器可以擔任防火牆的角色，過濾惡意網路流量、攔截惡意軟體，提升網路安全性</li>
                            <li><i class="fa-solid fa-check"></i>網路加速：代理伺服器可以快取常用的網頁內容，減少資料的傳輸量，從而加快網頁載入速度</li>
                            <li><i class="fa-solid fa-check"></i>存取限制內容：代理伺服器可以讓你存取被封鎖或限制的網站，例如在某些國家無法訪問的網站。</li>
                            <li><i class="fa-solid fa-check"></i>監控與過濾：在企業或教育機構中，代理伺服器可以被用來監視員工或學生的網路活動，並且可以過濾特定類型的內容或應用。</li>
                        </ul>
                    </div>
                </div>
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