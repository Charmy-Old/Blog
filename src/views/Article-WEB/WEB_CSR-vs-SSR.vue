<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 CSR 、 SSR 和 Hydration？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-11-15</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>CSR(Client-Side Rendering)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>CSR 的意思是瀏覽器端渲染。相較於 Server-Side Rendering(SSR)，CSR 是將網頁的 HTML、CSS、JavaScript 等檔案都下載到瀏覽器後，再由瀏覽器端進行渲染。</p>
                        <p>CSR 的優點是可以提高網頁的效能，因為網頁的渲染工作可以由瀏覽器端進行，而不需要等待伺服器回應。此外，CSR 也更容易進行動態更新，因為瀏覽器可以直接更新已下載的檔案，而不需要重新載入整個網頁。</p>
                        <p>CSR 的缺點是需要下載較多的檔案，因此在網路速度較慢的情況下，可能會導致網頁載入速度變慢。此外，CSR 也需要更複雜的程式碼，才能在瀏覽器端進行渲染。</p>
                        <p>CSR 的流程如下：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ol>
                            <li>1、瀏覽器向伺服器發出請求，取得網頁的 HTML、CSS、JavaScript 等檔案</li>
                            <li>2、瀏覽器下載檔案後，將 HTML 檔案解析成 DOM Tree</li>
                            <li>3、瀏覽器根據 DOM Tree，渲染網頁的內容</li>
                            <li>4、瀏覽器執行 JavaScript 程式碼，完成網頁的互動功能</li>
                        </ol>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>CSR 的應用範圍包括：</p>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-regular fa-note-sticky"></i>單頁應用(SPA)：SPA 是一種完全使用 JavaScript 來渲染網頁的應用程式。CSR 是 SPA 的最佳實現方式</p>
                        <p><i class="fa-regular fa-note-sticky"></i>動態網頁：動態網頁會根據使用者的操作或伺服器端的資料進行更新。CSR 可以讓動態網頁的更新更加即時</p>
                        <p><i class="fa-regular fa-note-sticky"></i>混合式應用程式(Hybrid App)：混合式應用程式是結合了 Web 應用程式和原生應用程式的應用程式。CSR 可以讓混合式應用程式在不同裝置上提供一致的使用體驗</p>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>CSR 是一種常用的前端渲染技術，具有提高效能、容易更新等優點。在適當的情況下，使用 CSR 可以為網頁的使用者帶來更好的體驗。</p>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>SSR(Server-Side Rendering)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>SSR 的意思是伺服器端渲染端渲染。與傳統的瀏覽器端渲染（Client-Side Rendering）不同，SSR 在使用者發送請求時，伺服器端會先將頁面渲染完成，並將完整的 HTML 響應給瀏覽器，瀏覽器只需將 HTML 解析並顯示即可。</p>
                        <p>SSR 的優點是可以提高頁面的初始加載速度，因為瀏覽器在載入頁面時，不需要從伺服器端獲取額外的資料，即可看到完整的頁面內容。此外，SSR 也可以提高頁面的 SEO 效果，因為搜尋引擎可以直接抓取伺服器端渲染的 HTML，並將其索引到搜尋結果中。</p>
                        <p>SSR 的缺點是會增加伺服器的負載，因為伺服器端需要渲染所有頁面，包括使用者不常訪問的頁面。此外，SSR 也可能會影響頁面的可用性，因為如果伺服器端的渲染速度較慢，可能會導致頁面顯示延遲。</p>
                        <p>SSR 的流程如下：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ol>
                            <li>1、使用者發送請求到伺服器</li>
                            <li>2、伺服器端根據請求路徑，選擇合適的渲染方式</li>
                            <li>3、伺服器端渲染頁面，並將完整的 HTML 響應給瀏覽器</li>
                            <li>4、瀏覽器解析 HTML，並顯示頁面內容</li>
                        </ol>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>SSR 的應用範圍包括：</p>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-regular fa-note-sticky"></i>需要提高頁面初始加載速度的應用，例如新聞網站、電商網站等</p>
                        <p><i class="fa-regular fa-note-sticky"></i>需要提高頁面 SEO 效果的應用，例如企業網站、產品網站等</p>
                        <p><i class="fa-regular fa-note-sticky"></i>需要展示大量資料的應用，例如圖片庫、數據可視化等</p>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>SSR 的實現方式有以下幾種：</p>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-regular fa-note-sticky"></i>模板渲染：使用模板引擎將資料渲染到 HTML 模板中</p>
                        <p><i class="fa-regular fa-note-sticky"></i>反向代理：使用反向代理將請求轉發到伺服器端渲染程式</p>
                        <p><i class="fa-regular fa-note-sticky"></i>前端框架：使用支援 SSR 的前端框架，例如 Next.js、Nuxt.js 等</p>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>SSR 是一種有效的提升頁面性能和 SEO 效果的技術，在一些特定的應用場景中具有優勢。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Hydration</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Hydration 是頁面在瀏覽器端與伺服器端渲染的內容進行同步的過程。在 Hydration 過程中，瀏覽器會將伺服器端渲染的內容注入到 DOM 中，並更新 DOM 中的狀態。</p>
                        <p>Hydration 的目的是在保留瀏覽器端的互動性和狀態的同時，提升頁面的初始渲染速度。</p>
                        <h4>SSR 與 Hydration 的關係</h4>
                        <p>SSR 和 Hydration 是兩個相互依存的過程。SSR 生成的內容是 Hydration 的基礎，Hydration 則可以將 SSR 生成的內容與瀏覽器端的狀態進行同步。</p>
                        <p>Hydration 可以使用不同的技術來實現，例如：</p>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-regular fa-note-sticky"></i>DOM 元素替換：DOM 元素替換是一種將伺服器端渲染的元素替換掉瀏覽器端的元素的技術</p>
                        <p><i class="fa-regular fa-note-sticky"></i>事件委派：事件委派是一種將事件委派給伺服器端渲染的元素的技術</p>
                        <p><i class="fa-regular fa-note-sticky"></i>狀態同步：狀態同步是一種將伺服器端渲染的狀態與瀏覽器端的狀態進行同步的技術</p>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>SSR 與 Hydration 的應用：</p>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-regular fa-note-sticky"></i>電子商務應用：電子商務應用需要快速加載，SSR 可以幫助提升頁面的初始渲染速度</p>
                        <p><i class="fa-regular fa-note-sticky"></i>新聞應用：新聞應用需要不斷更新內容，SSR 可以幫助改善頁面的 SEO 排名</p>
                        <p><i class="fa-regular fa-note-sticky"></i>社交媒體應用：社交媒體應用需要提供良好的互動性，SSR 可以幫助保留瀏覽器端的互動性</p>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>SSR 和 Hydration 是兩個重要的前端技術，可以用來改善前端應用的性能和體驗。在選擇使用 SSR 或 Hydration 時，需要根據應用的具體需求來決定。</p>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>SSL 和 TLS 的差別</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>SSL(Secure Sockets Layer)和 TLS(Transport Layer Security)之間的主要差別在於它們的版本和演進歷史。</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ol>
                            <li>1、版本：SSL 和 TLS 有多個版本。SSL 1.0 和 SSL 2.0 是最早的版本，然而它們存在嚴重的安全漏洞，已經被廣泛棄用。SSL 3.0 是一個改進版本，但也存在一些安全問題。隨後，TLS 1.0 被發佈作為SSL的後續版本，並引入了一些安全性改進。之後的 TLS 版本，如 TLS 1.1、TLS 1.2 和 TLS 1.3，進一步增強了安全性和性能。</li>
                            <li>2、名稱：儘管 TLS 被視為 SSL 的後續版本，但在實際使用中，人們經常混用這兩個術語。事實上，從 TLS 1.0 開始，協議的正式名稱被更改為Transport Layer Security。然而，出於歷史原因和廣泛使用的習慣，人們仍然將這兩個術語互換使用。</li>
                            <li>3、安全性：TLS 版本相對於 SSL 版本有更好的安全性。TLS 1.0 和 TLS 1.1 已經被認為不夠安全，由於它們存在一些漏洞和弱點，不推薦使用。TLS 1.2 和 TLS 1.3 被廣泛認為是更強大、更安全的版本，並提供了更好的保護和加密算法。</li>
                            <li>4、支持性：由於 SSL 存在安全漏洞和弱點，許多瀏覽器和服務器已經停止支持舊版 SSL，並只支持較新的TLS版本。因此，為了確保最佳的安全性和相容性，建議使用最新版本的TLS。</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>總結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-table" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <table>
                            <thead>
                                <tr>
                                    <th>特徵</th>
                                    <th>渲染方式</th>
                                    <th>渲染時機</th>
                                    <th>優點</th>
                                    <th>缺點</th>
                                    <th>應用場景</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>CSR</td>
                                    <td>客戶端渲染</td>
                                    <td>瀏覽器第一次載入頁面時</td>
                                    <td>效能較好，因為只需要渲染一次</td>
                                    <th>初始體驗較差，因為頁面內容需要等待瀏覽器渲染</th>
                                    <th>需要高效能的應用，例如遊戲</th>
                                </tr>
                                <tr>
                                    <td>SSR</td>
                                    <td>伺服器端渲染</td>
                                    <td>伺服器第一次處理請求時</td>
                                    <td>初始體驗較好，因為頁面內容可以立即顯示</td>
                                    <th>效能較差，因為需要渲染所有頁面內容</th>
                                    <th>需要良好初始體驗的應用，例如新聞網站</th>
                                </tr>
                                <tr>
                                    <td>Hydration</td>
                                    <td>混合渲染</td>
                                    <td>伺服器第一次處理請求時，部分內容由客戶端渲染</td>
                                    <td>兼顧效能和初始體驗</td>
                                    <th>複雜度較高，需要額外處理客戶端和伺服器端渲染</th>
                                    <th>一般應用，兼顧效能和初始體驗</th>
                                </tr>
                            </tbody>
                        </table>
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