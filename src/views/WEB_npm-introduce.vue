<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 NPM？了解 node套件管理工具 npm install</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</p>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>套件管理工具 npm</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>在現代的網站中，使用他人開放原始碼的套件輔助開發已經是稀鬆平常的事情，無論是透過套件加速堆砌產品，或是在開發環境中加上協助工程師的各式工具，只需要稍加設定，一個專案便能輕易加載了成千上萬的外部程式；但如此方便的機制，究竟是怎麼實現的呢？</p>
                        <p style="color: red;">npm 即為 Node Package Manager 的縮寫，開發者可以透過 Node 隨附的 npm cli，進行套件的安裝及管理。</p>
                        <p>在程式開發的領域中，有許多開發者會開發好用的 JavaScript 工具，分享給大家使用。像是多數人熟知的 jQuery, Express, Vue, React 等等，實際上還有更多更多的工具包可以使用。為了把這些工具都統整在一個地方，讓開發者方便搜尋和使用，於是就有了 Node 套件管理器。</p>
                        <p>例如在專案資料夾的終端機中輸入 npm install express，npm 便會自動從 Registry 中尋找 express 這個非常熱門的 Node.js Web Server 框架，取得最新版本，下載到專案中的 node_modules 資料夾中。</p>
                        <p>然而在專案中，不可能每次都透過開發者自行指定套件安裝，不但無法管理，也很沒有效率；開發者可以透過專案中的 package.json，羅列出專案需要哪些套件，之後安裝時只需要 npm install，npm 便會自動依照 package.json 的內容下載套件。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>npm Install 的執行過程</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>在透過這些套件管理工具進行安裝時，背後的機制究竟是什麼呢？下面將執行 npm install 的過程拆成五個步驟，也許各家套件管理工具實作會略有不同，但不外乎都會經過這些階段：</p>
                        <h4>1. 計算缺少的套件</h4>
                    </div>
                    <div class="article-list">
                        <p>npm 會從專案中的三隻檔案，計算出本次 npm install 需要重新下載安裝的內容：</p>
                        <ul>
                            <li><i class="fa-solid fa-check"></i>專案內的 node_modules 結構</li>
                            <li><i class="fa-solid fa-check"></i>開發者設定的 package.json</li>
                            <li><i class="fa-solid fa-check"></i>npm install 後自動生成的 package-lock.json</li>
                        </ul>
                    </div>
                    <div class="article-txt">
                        <p>由於 package.json 中的套件版本可能會是使用 Semantic Versioning 描述的，npm 需要以 package.json 描述的版本為基礎，與 node_modules 及 package-lock.json 相互比對後，才能計算出需要更新的套件。</p>
                        <h4>2. 從 Registry 取得套件資訊</h4>
                        <p>計算出來缺少套件列表後，npm 向指定的 Registry 獲取各目標套件的 package.json、查詢可用版本，並解析出下載 URL。</p>
                        <h4>3. 計算差異</h4>
                        <p>由於套件本身也是專案，也可能引用其他套件，不同的套件引用到相同的套件這種事，自然也是稀鬆平常；npm 在這步驟會去計算各套件的 package.json，整理各套件個別需要下載的版本（有可能同套件需要多版本）最後產出整個專案所使用的的套件結構樹（package-lock.json）。</p>
                        <h4>4. 下載、提取真正需要的套件</h4>
                        <p>有了前面這麼多步驟的整理，接著就開始依序下載套件，並將下載的內容解壓縮，提取到 node_modules 資料夾中；這個步驟是 npm install 需時最長、最耗效能的步驟，主要是因為 下載、解壓縮、寫入硬碟分別需要網路、CPU 及硬碟 IO 的支撐，只要硬體設備的其中一環資源較缺乏，開發者馬上就會有感，速度自然也就快不起來。</p>
                        <p>為了解決這個問題，如同我們 昨天聊的網頁快取，npm 本身也擁有本地快取機制，在寫入到 node_modules 時，同時會寫入一份到電腦的本地快取中，未來如果有其他專案需要用到同一個版本的套件，npm 會在向 Registry 確認版本未更新（ETag 相符，回傳 304）後，直接複製快取的套件到 node_modules。</p>
                        <h4>5. 執行每個套件的 install。</h4>
                        <p>檔案全部都寫入到 node_modules 後，npm 會執行所有套件的 npm install，讓套件本身的依賴被正確的連結到下載的套件上，並觸發各套件 install、postinstall 的 npm-scripts hook，最後完成 npm install 指令。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>安全性問題</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>注意到了嗎？前述執行的過程中，即使在 npm 有快取的情況下，仍然不會使用同一份檔案，而是複製一份套件到 node_modules 中；也因為這樣的特性，加上套件依賴套件再依賴套件的層層相依，node_modules 非常容易莫名的塞好塞滿，長成誇張的容量黑洞。</p>
                    </div>
                    <div class="article-pic">
                        <img src="../assets/images/article-web/web-npm.webp" alt="">
                    </div>
                    <div class="article-txt">
                        <p>除此之外，層層相依同時也帶來了風險，開發者很容易在不知情中安裝了有風險，甚至含有惡意程式的套件，從去年的 getcookies、Event-Stream，到前幾個月的 bb-builder，甚至是熱門的工具庫套件 lodash 先前都有資安風險，例子不勝枚舉。</p>
                        <p>開發者在使用套件時，還是要盡可能掌握清楚專案中所使用的套件，並透過 Semantic Versioning 指定套件版本，以及將 package-lock.json 放進版控，徹底將套件版本鎖住，以避免重要的專案莫名遭到池魚之殃。</p>
                        <h4>版本控制</h4>
                        <p>由於套件本身也是由開發者撰寫，也需要持續的更新迭代，公開出來的套件往往不會只有一個版本，套件管理工具自然也要能紀錄並提供各版本的套件供開發者使用；在 npm 的設計中，要求套件開發者透過 Semantic Versioning 的規範來定義套件版本：</p>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>主版號：當你做了 不相容 的 API 修改</li>
                            <li><i class="fa-solid fa-check"></i>次版號：當你做了向下相容的 功能性新增</li>
                            <li><i class="fa-solid fa-check"></i>修訂號：當你做了向下相容的 問題修正</li>
                        </ul>
                    </div>
                    <div class="article-txt">
                        <p>而使用套件的開發者，則需透過指定的字元，在 package.json 中設定專案欲使用的套件版本，例如下列的例子：</p>
                    </div>
                    <div class="article-coding">
<pre>
“dendencies”: {
    “accepts”: “~1.3.7”,
    “array-flatten”: “1.1.1”,
    “body-parser”: “^1.19.0”,
    // …
}
</pre>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>1.1.1：指定為 1.1.1 的版本</li>
                            <li><i class="fa-solid fa-check"></i>~1.3.7：指定為 >= 1.3.7 且 &lt; 1.4.0 的版本</li>
                            <li><i class="fa-solid fa-check"></i>^1.19.0：指定為 >= 1.19.0 且 &lt; 2.0.0 的版本</li>
                        </ul>
                    </div>
                    <div class="article-txt">
                        <h4>Yarn</h4>
                        <p>除了預設的 npm，另一個廣為人知的套件管理工具是由 Facebook 開源出來的 Yarn，會聲名大噪的原因，一方面是 Facebook 及眾多開源大神共同開發的品牌效應，另外也因為早期的 npm （&lt; npm @5）在套件版本控制上，時常沒有正確的效果，而當時的 Yarn 就透過一個 yarn.lock 檔，鎖定所有依賴套件的版本，完美解決了這個問題；但現在版本的 npm 也效仿 Yarn 的作法，預設會產出 package-lock.json 來固定套件版本，當時的嚴重缺陷也早已被解決，整體來說，使用 Yarn 的帶來的便利性也已經沒有那麼大，就筆者目前的感受，是沒有太大明顯差異的。</p>
                        <p>套件管理在成熟專案的重要性早已不言而喻，除了前述的 npm 及 Yarn，一直以來也有許多開發者投身其中，鑽研出其他的套件管理工具；例如 Bower、volo、pnpm 等等，有興趣的讀者也可以個別深入研究，這邊就不詳述了。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>套件管理的未來</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>npm 很方便，但也有著不少問題；npm 的前核心開發者 Kat Marchán 在 JSConf EU 2019 正式公開了 Tink，號稱是下一代的套件管理工具，它的核心概念是利用 JavaScript 直譯的特性， 將套件管理的機制從編譯階段移到執行階段，也如同其他程式語言的套件管理方式，將全部專案的套件統一管理，讓專案中幾乎不再需要獨立的 node_modules 資料夾。</p>
                        <p>“/node_modules” is massive. And is also where dreams go to die” — Kat Marchán, 2019.</p>
                        <p>看起來一切美好，加上 npm 也將此 Tink 排進了未來的 Roadmap 上；雖然目前還只在相對早期的開發狀態，但仍然非常值得開發者持續關注後續發展！</p>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="article-detail">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <a class="article-reference" href="https://tw.alphacamp.co/blog/npm-node-package-manager" target="_blank"><i class="fa-solid fa-pen-to-square"></i>ALPHA Camp - NPM是什麼？了解 node套件管理工具 npm install</a>
                        <a class="article-reference" href="http://www.ruanyifeng.com/blog/2016/01/npm-install.html" target="_blank"><i class="fa-solid fa-pen-to-square"></i>阮一峰 – npm 模塊安裝機制簡介</a>
                        <a class="article-reference" href="https://docs.npmjs.com/cli/v9/commands/npm-install" target="_blank"><i class="fa-solid fa-pen-to-square"></i>npm-install – Algorithm</a>
                        <a class="article-reference" href="https://docs.npmjs.com/cli/v9/using-npm/scripts" target="_blank"><i class="fa-solid fa-pen-to-square"></i>npm-scripts hook</a>
                        <a class="article-reference" href="https://www.youtube.com/watch?v=SHIci8-6_gs" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Tink: A Next Generation Package Manager by Kat Marchán | JSConf EU 2019</a>
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