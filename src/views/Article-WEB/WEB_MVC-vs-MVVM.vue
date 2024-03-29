<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">MVC V.S. MVVM</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</p>
                </div>
            </section>
            <!-- MVC -->
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>MVC(Model-View-Controller)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>組成</h4>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ol>
                            <li>M = Model：處理應用程式的數據邏輯，包括數據處理和存取(存取DB)</li>
                            <li>V = View：負責用戶界面的顯示，通常是應用程式的視覺部分</li>
                            <li>C = Controller：處理用戶輸入，將其映射到相應的 Model 或 View，同時處理應用程式的業務邏輯</li>
                        </ol>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>簡介</h4>
                        <p>最早在 1978 年提出的一種架構心法，希望解決大雜燴義大利麵程式撰寫方式，把程式拆分成介面、資料與邏輯三層。</p>
                        <p>運作方式是 View(透過model)呈現資料給與 user，user 透過 controller 觸發事件，Model 接收事件調整 DB，調整完畢後再通知(e.g. 觀察者模式) View 更新頁面呈現。</p>
                    </div>
                    <div class="article-pic" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-web/web-mvc.svg" alt="">
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
/* wikipedia 上面的範例 */
/* 模擬 Model, View, Controller */
const M = {}, V = {}, C = {};
                                
/* Model 負責存放資料 */
M.data = "hello world";
                                
/* View 負責將資料輸出給用戶 */
V.render = (M) => { alert(M.data); }
                                
/* Controller 作為連接 M 和 V 的橋梁 */
C.handleOnload = () => { V.render(M); }
                                
/* 在網頁讀取的時候呼叫 Controller */
window.onload = C.handleOnload;
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>PROs</h4>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>幾乎是最知名的架構模式，應用在非常多的軟體開發上</li>
                            <li><i class="fa-regular fa-note-sticky"></i>模組間可以拆開、替換(e.g. Model更換DB)而不影響程式整體</li>
                            <li><i class="fa-regular fa-note-sticky"></i>易於換皮，快速套版予新客戶</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>CONs</h4>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>原理複雜，開發前期需要花一些時間規劃</li>
                            <li><i class="fa-regular fa-note-sticky"></i>模組間沒有定義明確，又要使人依據抽象觀念去建立明確的模組，對於初學者有一定學習門檻(或者容易誤用)
                            </li>
                            <li><i class="fa-regular fa-note-sticky"></i>商業邏輯可能會跟UI混雜</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>結論</h4>
                        <p>MVC 的主要優點是它提供了良好的分離性，允許團隊成員在不互相干擾的情況下進行工作。然而，MVC 的控制器可能會變得龐大且難以維護，特別是在較大的應用程式中。</p>
                    </div>
                </div>
            </section>
            <!-- MVVM -->
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>MVVM(Model-View-ViewModel)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>組成</h4>
                        <ol>
                            <li>M = Model：與MVC中的Model相同，處理數據邏輯 (存取DB)</li>
                            <li>V = View : 頁面顯示</li>
                            <li>VM = ViewModule : 中間層，轉換原始資料成顯示用資料</li>
                        </ol>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>簡介</h4>
                        <p>在 MVC 後才推出的架構心法，在 web 前端很受歡迎，比起 MVC 更注重於使用者端的介面，把程式拆成三層:介面、資料、與轉換資料層。</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>運作方式：</h4>
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>view 透過 viewModel 的資料渲染頁面</li>
                            <li><i class="fa-regular fa-note-sticky"></i>當 user 操作頁面時，view 層接收事件給 viewModel 處理，viewModel 呼叫 model 處理資料</li>
                            <li><i class="fa-regular fa-note-sticky"></i>model 處理完畢後，呼叫 viewModel 更新資料</li>
                            <li><i class="fa-regular fa-note-sticky"></i>viewModel 資料變動，觸發 view 更新畫面</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>最主要差異為用資料驅動 view 的更新，當資料異動時，去更新 view</h4>
                    </div>
                    <div class="article-pic" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000"><img src="../../assets/images/article-web/MVVMPattern.webp" alt=""></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>通常多用於與 UI 較相關的前端部分</h4>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>PROs</h4>
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>降低學習門檻，更好理解</li>
                            <li><i class="fa-regular fa-note-sticky"></i>用 binding 方式連結 view，使 viewModel 可以不用知道是哪個 view，而 view 自行去更新</li>
                            <li><i class="fa-regular fa-note-sticky"></i>商業邏輯不用相依於 UI</li>
                            <li><i class="fa-regular fa-note-sticky"></i>相對易於 unit test, 重用 component</li>
                        </ul>
                    </div>

                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>CONs</h4>
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>大型的應用程式中，dataBinding 會導致相當大的記憶體消耗</li>
                            <li><i class="fa-regular fa-note-sticky"></i>無法簡單暴力的重用 view，因為綁定 viewModel 緣故</li>
                            <li><i class="fa-regular fa-note-sticky"></i>並無強硬規定 view 跟 viewModel 的關係(ex: 單向影響 or 雙向綁定)</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>結論</h4>
                        <p>MVVM 的主要優點是它使 View 和 Model 之間實現了完全的分離，同時也減少了 Controller 的複雜性。ViewModel 的引入使得界面邏輯可以獨立於 View 進行測試和維護，同時也提高了程式碼的重用性。</p>
                        <p>MVVM 在許多現代前端框架中被廣泛使用，例如 Angular 和 Vue.js。它們提供了強大的數據綁定和響應式特性，使開發人員能夠更輕松地管理界面狀態和交互。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>總結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>MVC 是較早的模式，用於分離數據、界面和控制邏輯。多注重在於"全端"商業邏輯與資料庫的分離上。而 View 發展越來複雜之後，為了更方便的管理"前端資料"與 UI 互動，以及複用 component，才出現 MVVM。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>MVVM 是一種演化自 MVC 的模式，引入了 ViewModel 的概念，實現了更好的分離和可維護性。它在現代前端開發中得到廣泛應用。</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a class="article-reference" href="https://front-chef.coderbridge.io/2021/02/27/mvc-mvvm" target="_blank"><i class="fa-solid fa-pen-to-square"></i>前端食堂 - MVC V.S. MVVM 學習筆記</a>
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