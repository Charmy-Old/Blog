<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 API？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</p>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>API 到底是什麼？</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>當你上Google搜尋 API，你會看到它解釋為 應用程式介面，也就是Application Programming Interface 的縮寫，扮演應用程式和應用程式之間的橋樑。</p>
                        <p>API 就像一個介面，可以幫助開發者節省精力，並很快的達到目的。舉個例子，假日出去玩總是玩到很累，口乾舌燥，讓人很想去飲料販賣機投瓶奶茶來解渴。好，現在你面前有一台飲料販賣機，接下來你會這麼做：</p>
                    </div>
                    <div class="article-list">
                        <ol>
                            <li>1、你想喝一瓶奶茶</li>
                            <li>2、你按了飲料機上的奶茶按鈕</li>
                            <li>3、你從取物口拿出奶茶</li>
                        </ol>
                    </div>
                    <div class="article-txt">
                        <p>這其中就蘊含了 API 的概念，我們更進一步思考，剛剛例子中的奶茶就是「你想取得的資料」。而飲料機上的按鈕就是 API ，按下去飲料機就收到了你的需求，並將奶茶從取物口送出，你也就得到了你想要的資料了。</p>
                        <p>用上面飲料機例子的觀點來思考另外一個範例：「店面與倉庫」；通常，一間商店店面的「商品擺設、配置」，和後面倉庫的擺設配置會是不一樣的，今天如果有一個負責把貨物從倉庫擺放到店面的員工，他必須要知道擺放的規則，可能是要配合商店的行銷企劃，可能是要擺的整整齊齊、一目了然。</p>
                        <p>在這個「店面與倉庫」的例子裡，商品就可以想成是數據，而倉庫就好比是資料庫，店面則好比是我們平常使用的網頁或是APP，而負責把商品從倉庫擺放到店面的員工就扮演著 API 的角色，依照著某種規則、協定(行銷企劃、商品的擺放規則)在運作著，而我們不必知道他是怎麼運作的。</p>
                        <p>如果一直從字面上的介面去思考，AP「I」 (Interface) ，其實有點難搞懂它的概念。簡單來說，它就像是可以讓你用的一個函式庫。呼叫你想要使用的函式，並給予相對應的參數，函式便回傳給你結果，流程大概是像這樣。</p>
                        <p>基本上，不管做什麼事情、寫什麼樣的程式都會用到 API 這個概念，除非你從頭開始編寫每一行程式碼，否則你一定會和外面的一些組件進行互動，而幫助你能夠和這些組件互動的接口就是 API。</p>
                        <p>即使你完全是從頭開始寫你的程式，一個漂亮的應用程式也會有供內部使用的 API 來幫助組織你的程式碼，除了方便維護程式碼，也能讓特定的功能重複使用性提高，增加效率。最重要的是，使用 API 的過程時，你不需要知道其內部程式運作的邏輯或演算法，你只要告訴 API 它需要知道的事，它就會把你想知道的結果帶來給你。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>API 常用工具</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i><a href="javascript:;">Postman</a> – Postman是一個很受歡迎的API開發環境。它允許你輕鬆傳送API請求和查看回應。</li>
                            <li><i class="fa-solid fa-check"></i><a href="javascript:;">Insomnia</a> – 與Postman類似，Insomnia是一個GUI平台，用於測試和開發API。它允許你導入/導出數據、保存環境、使用插件等。</li>
                            <li><i class="fa-solid fa-check"></i><a href="javascript:;">Paw</a> – Paw是一個全功能的API開發工具，適用於Mac。它提供了一個乾淨的界面來傳送請求、保存API、查看文件、使用變數/腳本等功能。</li>
                            <li><i class="fa-solid fa-check"></i><a href="javascript:;">rapidapi</a> – rapidapi平台允許你找到和連接數千個API。它處理身份驗證、快取、監控等。你可以按類別瀏覽API，或搜尋要在應用程序中使用的特定API。</li>
                            <li><i class="fa-solid fa-check"></i><a href="javascript:;">Mockable</a> – Mockable是一個API模擬伺服器。它允許你輕鬆創建自定義的API回應(模擬)，所以你可以在API實際準備就緒之前開發和測試你的應用程序。</li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="article-detail">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <a class="article-reference" href="https://tw.alphacamp.co/blog/understand-api" target="_blank"><i class="fa-solid fa-pen-to-square"></i>ALPHA Camp - API 是什麼？ 3分鐘快速認識 API 應用程式介面</a>
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