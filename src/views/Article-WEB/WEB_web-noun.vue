<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">淺談網頁技術名詞</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-19</p>
                </div>
            </section>
            <!-- 概述 -->
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>概述</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>為了增進使用者體驗，前端愈來愈複雜，現在就讓我們一起搞懂網頁技術名詞。</p>
                    </div>
                </div>
            </section>
            <!-- MVC -->
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>MVC</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>一種設計模式，目的是將雜亂的程式碼分開以好維護。原理是將任何與資料有關的操作都放到一個叫做 Model 的地方、所有跟顯示畫面有關的東西都放到 View，並在 View 裡面用一個 template 來放入資料。</p>
                        <p>當 Controller 接收到請求與參數，就會轉交給 Model 處理，Model 接收到參數後，再將結果通知 View，View 具有監視 Model 的行為，會以此將結果顯示。</p>
                        <a href="./WEB_MVC-vs-MVVM.vue">詳細介紹<span>→</span></a>
                    </div>
                </div>
            </section>
            <!-- SPA -->
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>SPA</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>單頁式應用 (Single Page Application)，利用 AJAX 非同步的特性跟後端同步資料，將不同的資料動態輸向同一個頁面，達到網頁操作不換頁。</p>
                        <p>SPA 缺點：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>少了後端的渲染回傳，如果使用者操作太快，前端就不能保證每次都能得到正確的 Server 資料(點進電影 A → 快速按上一頁 → 快速點進電影 B → 畫面顯示電影 A 資料)。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>因為內容由 JavaScript 動態產生，在遊覽器載入並且執行 JavaScript、等 Response 回傳後才會看到畫面，因此有較差的 SEO。</li>
                        </ul>
                    </div>
                </div>
            </section>
            <!-- SSR -->
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>SSR</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>伺服器端渲染 (Server side render)。為避免 SPA 讓 SEO 變差，先渲染網頁內容，再將後續操作交給 JavaScript，雖然使用者一樣能享受到 SPA 不用換頁的好處，不過首次加載的時間增加了，在 SSR 的開發上也要需要會一點後端技術。</p>
                    </div>
                </div>
            </section>
            <!-- AMP -->
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>AMP</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>加速行動網頁 (Accelerated Mobile Pages)。由 Google 推出，目的是透過格式的優化和 Google 引擎的快取，提升行動裝置網頁的載入速度。因為網頁速度會影響 SEO 排序，所以使用 AMP，SEO 排序也會提高。</p>
                        <p>AMP 缺點：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>網站被 AMP 優化後，網站已經變為 Google 快取網頁，除了不容易回到原始網站，也有流量被 Google 吸走的疑慮。</li>
                        </ul>
                    </div>
                </div>
            </section>
            <!-- PWA -->
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>PWA</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>漸進式網頁應用程式 (Progressive Web App)。為增進使用者體驗，讓網頁不再只是網頁，而是要用起來像個 App，看起來也像個 App。除了讓網頁得到安裝、推播等其他功能，甚至利用Skeleton 先把畫面的骨架顯示出來，以及用 Service Worker 搭配快取，在沒有網路時也能夠使用部分功能。</p>
                        <p>PWA 能帶給使用者更好的網頁瀏覽體驗是無庸置疑的，和 App 相比，不需要安裝、不佔手機空間，也不需要頻繁的更新。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a class="article-reference" href="https://vocus.cc/article/5d4d8d31fd89780001faf03c" target="_blank"><i class="fa-solid fa-pen-to-square"></i>vocus(Ray C) - 搞懂網頁技術名詞：MVC、SPA、SSR、AMP 及 PWA</a>
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