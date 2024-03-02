<template>
    <section class="d-none">
        <div class="container text-center">
            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-5">
                <div>
                    <button class="select-button" data-filter="all">All</button>
                </div>
                <div>
                    <button class="select-button" data-filter="web">Web</button>
                </div>
                <div>
                    <button class="select-button" data-filter="html-css">HTML / CSS</button>
                </div>
                <div>
                    <button class="select-button" data-filter="javascript">JavaScript</button>
                </div>
                <div>
                    <button class="select-button" data-filter="vue">Vue</button>
                </div>
                <div>
                    <button class="select-button" data-filter="python">Python</button>
                </div>
                <div>
                    <button class="select-button" data-filter="others">Others</button>
                </div>
                <div>
                    <button class="select-button" data-filter="chat">雜談</button>
                </div>
                <div>
                    <button class="select-button" data-filter="food">美食札記</button>
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

    <section class="all others">
        <a href="Algorithm_Curry" class="article">
            <div class="article-icon">
                <i class="fa-regular fa-pen-to-square"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 柯里化(Currying)和反柯里化(Uncurrying)？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>演算法<i
                        class="fa-sharp fa-solid fa-calendar-days"></i>2024-03-02</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>柯里化(Currying)和反柯里化(Uncurrying)是兩種常見的程式設計技巧，它們起源於計算機科學和數學領域，用於函數的處理和轉換。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all chat">
        <a href="Chat_TPS" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-book-open-reader"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 豐田式管理？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Chat<i class="fa-sharp fa-solid fa-calendar-days"></i>2024-02-20</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>被製造業中的生產管理者譽為必須了解的生產重要觀念與完善產線結構的管理落實，就是豐田式管理，又稱豐田式生產管理，但實際上豐田式管理有許多技巧與概念是不僅運用在生產作業，也能運用在其他產業的作業模式。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all vue">
        <a href="VUE_v-for-introduce" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-vuejs"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 v-for？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Vue<i class="fa-sharp fa-solid fa-calendar-days"></i>2024-02-14</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>v-for 是 Vue.js 中的一個指令，它允許你在 Vue 的模板中根據一個數據源（如陣列或物件）來生成重複的 HTML 元素或 Vue 組件。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all html-css">
        <a href="CSS_has-and-not" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-css3-alt"></i>
            </div>
            <div class="article-text">
                <div class="article-title">:has() 和 :not() 偽類選擇器</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>CSS<i class="fa-sharp fa-solid fa-calendar-days"></i>2024-01-28</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>在 CSS 中，:has() 和 :not() 是兩個重要的偽類選取器，可以用來根據元素的子元素或不符合某些條件的元素來進行樣式設定。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all food">
        <a href="Food_King-Young" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-utensils"></i>
            </div>
            <div class="article-text">
                <div class="article-title">【美食札記】京悅港式飲茶</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>美食札記<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-12-13</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>功夫粵菜.精緻港點. 絕美景觀餐廳.中友百貨美食，供應推車港點、百道佳餚。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_sort-vs-toSorted" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">sort() V.S. toSorted()</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-12-01</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>JavaScript 中的 sort() 和 toSorted() 都是用來對陣列進行排序的函數。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all chat">
        <a href="Chat_ICs-Photolithography-vs-Etching-vs-Diffusion-vs-Deposition" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-book-open-reader"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 半導體的黃光、蝕刻、擴散和薄膜？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Chat<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-11-24</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>半導體製程是製造積體電路(Integrated
                        Circuits，ICs)的過程，其中包括了一系列步驟，如黃光(Photolithography)、蝕刻(Etching)、擴散(Diffusion)、薄膜(Deposition)等。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all web">
        <a href="WEB_CSR-vs-SSR-vs-Hydration" class="article">
            <div class="article-icon">
                <i class="fa-sharp fa-solid fa-desktop"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 CSR 、 SSR 和 Hydration？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-11-15</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>前端的 SSR(Server-Side Rendering)和 CSR(Client-Side Rendering)是兩種不同的渲染方式，它們分別發生在伺服器和客戶端。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all food">
        <a href="Food_La-Miette-Pizza&Kitchen" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-utensils"></i>
            </div>
            <div class="article-text">
                <div class="article-title">【美食札記】冪x2 La Miette Pizza&Kitchen</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>美食札記<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-11-06</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>冪x2 La Miette Pizza&Kitchen，隱身於新竹火車站附近的仁愛街，臨進新竹女中，店面有植物攀附作為裝飾使得招牌不太明顯。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all food">
        <a href="Food_Mao-Ni-Brunch" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-utensils"></i>
            </div>
            <div class="article-text">
                <div class="article-title">【美食札記】貓匿 MAONI Brunch｜早餐｜早午餐｜輕食｜下午茶｜咖啡茶飲</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>美食札記<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-11-06</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>一日之計在於晨，早餐要吃得像國王，這次這間早午餐是我高中同學特地打電話叫我起床推薦要一起去吃的，貓匿位於新竹竹科附近的金山街，是 2021
                        年底創立的早午餐品牌，是不少竹科人的愛店口袋名單之一，店家也非常貼心的在平日提早到 6:45 開始營業。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all chat">
        <a href="Chat_IoT-vs-AIoT" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-book-open-reader"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 IoT(物聯網) 和 AIoT(人工智慧物聯網)？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Chat<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-11-03</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>IoT 全名：Internet of Things，是指連接著各種裝置的集體網路和幫助裝置與雲端和裝置之間互相通訊的技術，這些裝置範圍涵蓋一般家庭物件到精密的工業工具。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_class" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 JavaScript 的 class？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-10-25</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>JavaScript 的類別(class)是在 ECMAScript 6 中引入，用來作為建立新物件的模板。class 能將程式碼封裝起來便於處理。
                        類別基於原型(prototype)，但在語法和定義上，與 ES5 的類類別(class-like)有所不同，可以使 JavaScript 的程式碼更加清晰、簡潔和可維護。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all food">
        <a href="Food_Tai-Chu" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-utensils"></i>
            </div>
            <div class="article-text">
                <div class="article-title">【美食札記】太初 麵食りようり</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>美食札記<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-10-23</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>太初麵食是輕井澤集團下的一個品牌，坐落在台中美食重鎮區的公益路，最一開始跟朋友去吃的時候，想說竟然會有麵店在消費相對高的公益路上，該不會是很貴的麵店吧，沒想到看到菜單會是對公益路來說意想不到的平價。
                    </p>
                    <p>最近一次吃是在下午兩點左右，還要排 11 組客人，等了大約 20 分鐘，之前也有在用餐尖峰時刻現場排隊，直接等了 40 多分鐘，建議確定有要吃的話可以直接電話或線上訂位。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all food">
        <a href="Food_SOFT-EGG" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-utensils"></i>
            </div>
            <div class="article-text">
                <div class="article-title">【美食札記】軟蛋醬 蛋包飯專門製作所</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>美食札記<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-10-18</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>這次要介紹的是我在新竹非常喜歡的美食，軟蛋醬 蛋包飯專門製作所，是竹科附近很受歡迎的店家，只會在平日營業，除了是下班晚餐的優質選擇外，也是許多上班族午餐的口袋名單之一。</p>
                    <p>這裡使用多種最到地的特殊口味，堅持使用台灣當天現宰溫體舒肥雞，這裡的招牌餐點是使用舒肥肌肉的蛋包飯，蛋包飯的蛋皮吃起來滑嫩好入口，舒肥雞吃起來也很嫩完全不乾柴，平日有機會可以到竹科金山街品嘗看看。
                    </p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_Axios-Interceptors" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">Axios 攔截器(Axios Interceptors)</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-10-17</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>Axios 實體是透過封裝 `XMLHttpRequest` 、 `HttpModule` 來進行實作，這些方式都是一些原生的類別，所以您可以理解成在兼容性不會有其他阿咂的問題。</p>
                    <p>Axios 是 Ajax 其中一個方式，在流程不外乎就是 包裝請求 (建立 Request) → 伺服器回傳相應資訊 (回傳 Response)，所以在建立 Request
                        的過程中需要進行相應的設定來告知 Axios 該怎麼組成請求，並針對請求回傳 Promise，在使用上可以透過 then/catch/finally 來獲取請求完成狀態，相較
                        XMLHttpRequest 在使用上來的更加精簡，當然因為是 Promise 物件所以可以透過 async/await 進行同步等待。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all food">
        <a href="Food_SHIMADZU-Curry" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-utensils"></i>
            </div>
            <div class="article-text">
                <div class="article-title">【美食札記】島津和牛咖哩</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>美食札記<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-10-05</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>這次要分享的是位於新竹東區的島津日式咖哩，是在新竹非常有名的道地日本咖哩定食，不只有竹製燈籠跟日式拉門，店內採木質調為主的設計也多了更多的日系氛圍。</p>
                    <p>招牌咖哩醬經過十數種辛香料熬煮後再經過 48
                        小時熟成。經過熟成的咖哩醬口感滑順又有層次，尾韻帶點辛口，實在很有魅力，一入口就能感受到濃厚的咖哩滋味，此外米飯是產地低溫直送的北海道夢美人米，搭配肉質細膩的日本和牛跟 Q
                        彈口感的澳洲和牛非常加分，內用的話飯跟咖哩可以各加一次，雞湯也可以無限續碗。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all food">
        <a href="Food_Ba-An-Sushi" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-utensils"></i>
            </div>
            <div class="article-text">
                <div class="article-title">【美食札記】八庵壽司割烹</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>美食札記<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-09-15</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>來新竹工作後，為了趕快上手工作就一直沒有機會好好平常新竹的美食，這次是在因緣際會下收到之前台積電員工的吃飯邀請才知道這間店的，聽說也是他在新竹的日式料理愛店！</p>
                    <p>聽說八庵壽司割烹在新竹有著相當不錯的口碑，老闆聽說之前是日本料理師傅出身的，目前在新竹好像有三間分店。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all food">
        <a href="Food_12sukiyak" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-utensils"></i>
            </div>
            <div class="article-text">
                <div class="article-title">【美食札記】十二段鍋物堂</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>美食札記<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-09-06</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>十二段太平店位於台中太平的中山路上，是北太平的精華路段之一，鄰近 74 號快速道路，附近也有
                        Starbucks、郵局、Adidas等，也是勤益科大學生前往一中街的主要幹道之一，但距離勤益科大還是有點距離，騎車開車會比較方便。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_indexOf" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">JavaScript 的 indexOf()</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-09-01</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>在 JavaScript 中，indexOf是一個用於字串或陣列的方法，用於尋找特定元素在該字串或陣列中的位置索引。如果該元素存在於字串或陣列中，則 indexOf()
                        會返回該元素的第一個出現的索引位置；如果該元素不存在，則返回 -1。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_TemplateStringInterpolation" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">JavaScript 的模板字串插值(Template String Interpolation)</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-09-01</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>在 JavaScript 中，${} 是一種稱為「模板字串插值」(Template String Interpolation)的語法，可以在字串中插入變數或運算式的值，不需要使用傳統的字串串接方法。
                    </p>
                    <p>${} 可以想像成是一個特殊的區塊，用來包裹想要插入的變數或表達式。當 JavaScript 處理這些模板字串時，會將 ${} 內的內容解析並替換為實際的值。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_traversal" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">JavaScript 中陣列(Array)的遍歷方法</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-31</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>遍歷是迭代的一種方式，專指逐一訪問資料集合中的每個元素，並對每個元素進行處理。遍歷通常用於對資料進行讀取、修改或分析等操作。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_Loop-vs-Iteration-vs-Traversal-vs-Recursion" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 迴圈、迭代、遍歷、遞迴？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-31</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>在 JavaScript 中，迴圈(Loop)、迭代(Iteration)、遍歷(Traversal)、遞迴(Recursion)是處理資料和執行程式碼的不同方式。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all food">
        <a href="Food_Yi-Zhong-Fan-Fan" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-utensils"></i>
            </div>
            <div class="article-text">
                <div class="article-title">【美食札記】飯飯 一中店</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>美食札記<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-29</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>飯飯是能夠滿足愛吃肉人的丼飯專家，一中店位於一中街水利大樓附近，走路約一分鐘就可以到達，不只好吃還有著超高的 CP
                        值，店內座位是吧檯式，能夠隨時看見做飯的區域，對客人也是一種保障，是非常推薦放入口袋名單的店家。</p>
                    <p>店內的點餐方式是採用機器自助點餐，如果有問題店員也會親切提供協助，店門口也有螢幕顯示目前的叫號狀況。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all food">
        <a href="Food_Gong-Yuan-Road-Da-Mian-Geng" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-utensils"></i>
            </div>
            <div class="article-text">
                <div class="article-title">【美食札記】台中公園路大麵𥺧</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>美食札記<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-29</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>大麵羹(大麵𥺧)是臺中市獨有的特色小吃，因為有著獨特的鹹味和口感，所以算是評價兩極的食物，但對大多數老台中人來說，是相當親切的在地特色美食。</p>
                    <p>位於台中公園路上的這間大麵羹，附近就是台中公園，也在一中商圈的外圍，是從小跟著老爸在台中「闖蕩」時會去光顧的愛店之一，連平日都會有著不少的客人，但是私心覺得衛生方面還有加強的空間。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all chat">
        <a href="Chat_GameTheory-introduce" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-book-open-reader"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 賽局理論(Game Theory)？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Chat<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-25</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>賽局理論(Game Theory)最初是研究策略遊戲的學問，因此又稱為對策論或博弈論，是經濟學的一個分支。</p>
                    <p>賽局理論是對決策者之間互動的分析。與傳統代表性決策者分析方式最大的不同之處，是在於將每位決策者對其他決策者行為的知識與預期納入分析架構。當我們極大化己方的報酬時，對手也正在極大化他的報酬。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all food">
        <a href="Food_Ping-Lu-Sushi" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-utensils"></i>
            </div>
            <div class="article-text">
                <div class="article-title">【美食札記】平祿壽司</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>美食札記<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-24</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>平祿壽司創立於西元 1967 年(昭和 42 年)的仙台，有著東日本最老牌迴轉壽司的稱號，在北海道和東北等地擁有 50
                        間分店，選擇進駐台灣的第一間店就選在台中市北區五權路上，不同於日本當地店面單獨使用壽司迴轉台，台灣分店展現傳統與現代的結合，另外加上智能送餐車搭配平板點餐，餐點的傳送更加迅速。</p>
                    <p>平祿壽司五權店位於台中的五權路上，鄰近中國醫藥大學、中友百貨等地標，平日晚上和假日的用餐時段抽號碼牌大約要等 40 分鐘起跳，是台中高人氣的迴轉壽司。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all food">
        <a href="Food_A-Ru" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-utensils"></i>
            </div>
            <div class="article-text">
                <div class="article-title">【美食札記】阿如早餐店</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>美食札記<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-23</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>阿如早餐店位於台中的一中街、太平國小、台中科技大學後門和中國醫藥大學附近巷弄裡，因為有著高 CP 值的特點所以是許多學生早餐店的口袋名單，但是從一中街用走的到早餐店大概需要 15
                        分鐘左右，所以用走路的還是需要稍微考量一下。</p>
                    <p>店內沒有華麗裝潢和舒適的用餐環境，靠的是那高 CP 值又美味的餐點，蛋餅、吐司、中式餐點和飲料都不錯，不愧是台中隱藏版超佛系早餐店。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all python">
        <a href="PY_Pandas-DataFrame" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-python"></i>
            </div>
            <div class="article-text">
                <div class="article-title">【Pandas】Pandas DataFrame 處理雙維度資料方法</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Python<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-23</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>DataFrame 主要用來處理雙維度的資料，也就是具有列(row)與欄(column)的表格式資料集，所以經常應用於讀取 CSV 檔案、網頁表格或資料庫等，來進行其中的資料分析或處理。</p>
                    <p>在相較於 Pandas Series 處理單維度或單一欄位的資料的部分，Pandas DataFrame 可以處理雙維度或多欄位的資料，就像是 Excel
                        的表格(Table)，具有資料索引(列)及欄位標題(欄)</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all python">
        <a href="PY_Pandas-Series" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-python"></i>
            </div>
            <div class="article-text">
                <div class="article-title">【Pandas】Pandas Series 處理單維度資料方法</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Python<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-22</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>Pandas 套件則是其中一種常用的資料分析處理工具，是基於 Python 程式語言建立的，非常容易使用且強大，主要應用於單維度(Series)與二維度(DataFrame)的資料處理。</p>
                    <p>Pandas Series 適用於處理單維度或單一欄位的資料，，就像是 Excel 中的某一欄，在開始使用 Pandas 套件需先進行安裝，在終端機(Terminal)中輸入以下程式碼：</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all others">
        <a href="Software_ORM-introduce" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-laptop-code"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 ORM(Object-Relational Mapping)？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Software<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-22</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>ORM 代表物件關聯映射(Object-Relational
                        Mapping)，是一種軟體開發模式，用於在關聯式資料庫和程式語言中的物件導向程式碼之間建立一個映射，使開發者能夠使用物件來操作資料庫，而不需要直接處理 SQL
                        語句。這樣的模式有助於減少開發過程中的重複性工作，並提高程式碼的可讀性和維護性。</p>
                    <p>簡單來說，ORM 允許用程式語言中的類別和物件來表示資料庫中的表格和記錄，並提供方法來執行常見的 CRUD 操作以及資料查詢，同時隱藏了底層資料庫的細節。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all others">
        <a href="Software_recursion" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-laptop-code"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 遞迴(Recursion)？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Software<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-22</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>遞迴又稱遞歸，是一種在程式設計中常見的概念與技巧，指的是一個函式在其定義中使用自己本身的方法，用來解決需要重複執行相似任務的問題。也就是說，一個遞迴函式在解決問題時，會將大問題分解為一個或多個類似但規模較小的子問題，然後遞迴地呼叫自己來處理這些子問題，直到某個停止條件，稱為「基案」(Base
                        Case)，遞迴才會停止，最終這些子問題的解決方案會被合併，得到原始問題的解。遞迴可以使程式碼更簡潔、易讀，但也需要小心處理，以避免無限迴圈造成程式崩潰。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_bind-vs-call-vs-apply" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">bind V.S. call V.S. apply</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-20</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>在 JavaScript 中，bind、call 和 apply 都是用來操作函數的方法，它們主要用於設定函數的上下文（即 this 的值）以及傳遞參數。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all chat">
        <a href="Chat_ODM-vs-OEM-vs-OBM-vs-IEM" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-book-open-reader"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 ODM、OEM、OBM 和 IDM？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Chat<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-19</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>ODM、OEM、OBM 和 IDM 是現代製造業非常重要的概念，對於日常各種產品都有著重要影響。在這個競爭的市場中，品牌商需要不斷創新並提高生產效率，而 ODM、OEM、OBM 和 IDM
                        正是幫助品牌商實現目標的重要工具。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all chat">
        <a href="Chat_B2B-vs-B2C-vs-B2B2C-vs-C2C" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-book-open-reader"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 B2B、B2C、B2B2C 和 C2C？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Chat<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-19</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>B2B、B2C、C2C 和 B2B2C 都是商業模式的簡稱，屬於商業管理和行銷領域的專業範疇。</p>
                    <p>在數位化的時代下，行銷也從傳統的實體商店轉戰網路平台。對於想要嘗試電商的商家而言，B2B、B2C、C2C、B2B2C都是常常聽到的電商經營模式。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all others">
        <a href="Git_basic-instructions" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-github"></i>
            </div>
            <div class="article-text">
                <div class="article-title">Git 常用指令</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Git<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-15</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>Git 是一種分散式版本控制系統，被廣泛用於軟體開發領域。主要目的是幫助開發人員有效地協同工作，追蹤程式碼變更，並確保程式碼的版本歷史得以妥善管理。相較於傳統的集中式版本控制系統，如
                        Subversion，Git 具有更大的靈活性和強大的分支管理功能。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all web">
        <a href="WEB_WebSocket-introduce" class="article">
            <div class="article-icon">
                <i class="fa-sharp fa-solid fa-desktop"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 WebSocket？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-12</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>WebSocket 是一種在網際網路上實現全雙工通訊的通訊協定。傳統的 HTTP
                        協議是一種單向的請求-響應協議，也就是說當客戶端需要更新資料時，必須發送請求到伺服器，然後伺服器再回傳響應。這樣的模式在某些應用場景中效率不高，特別是當需要實時通訊、即時更新資料或交互式應用時。
                    </p>
                    <p>WebSocket 的主要特點是它建立了一個持久的連接，允許伺服器和客戶端在不同時間點之間互相推送資料，而無需每次都發送請求和響應。這使得 WebSocket
                        適合於實時的應用，如聊天應用、即時遊戲、股票報價、遠程控制等。WebSocket 協議的設計使得伺服器和客戶端可以進行低延遲的雙向通訊，並且節省了許多額外的網絡資源。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_stack-vs-queue" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">stack(堆疊) V.S. queue(佇列)</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-09</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>在 JavaScript 中，stack(堆疊)和 queue(佇列)是兩種常見的資料結構，用於管理資料的儲存和訪問方式。兩者在如何處理和存取資料方面有著不同的特點</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_RegularExpression" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">JavaScript 的正規表達式 (Regular Expression)</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-09</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>正規表達式(Regular Expression，簡稱為 RegExp 或 RegEx)是一種強大的文本處理工具，用於搜尋、匹配和替換文字模式。在 JavaScript
                        中，可以使用RegExp物件來創建和操作正規表達式</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all web">
        <a href="WEB_CORS-introduce" class="article">
            <div class="article-icon">
                <i class="fa-sharp fa-solid fa-desktop"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 CORS？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-07</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>CORS(跨來源資源共用)是一種瀏覽器安全性機制，用於控制網頁應用程式在不同來源之間進行資源共用的方式。在網頁開發中，當一個網頁應用程式(域A)嘗試從另一個來源的網頁(域B)請求資源(例如 API
                        請求或嵌入的內容)，瀏覽器會實施 CORS 政策來確保安全性，以防止惡意攻擊和跨站點請求偽造(CSRF)等風險。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all web">
        <a href="WEB_Proxy-introduce" class="article">
            <div class="article-icon">
                <i class="fa-sharp fa-solid fa-desktop"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 Proxy？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-06</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>在電腦和網路中，「Proxy」(代理伺服器)是指一種位於使用者與目標伺服器之間的中間伺服器，用於處理使用者與目標伺服器之間的資料傳輸。代理伺服器可以用來幫助用戶匿名瀏覽網路、提高網路安全性、加速網頁載入速度，以及控制或監視網路流量。
                    </p>
                    <p>代理伺服器的運作方式是這樣的：當在瀏覽網頁或使用網路應用時，請求會先被送到代理伺服器，然後代理伺服器再轉送請求到目標伺服器。反之亦然，目標伺服器的回應會先送到代理伺服器，然後再轉送到設備上。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all vue">
        <a href="VUE_props" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-vuejs"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 props？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Vue<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-06</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>在 JavaScript 中，props 是 properties(屬性)的縮寫，用於在組件(conponent)之間傳遞數據。在 VUE、React、Angular 等框架中，props 是用於在組件(conponent)向組件(conponent)傳遞數據的一種機制。通過 props，可以將組件A信息傳遞給組件B，組件B可以讀取這些訊息並在其渲染中使用。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_undefined-vs-undeclared-vs-null" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">undefined V.S. undeclared V.S. null</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-02</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>在 JavaScript 中，undefined、undeclared 和 null 是三個與變數相關的概念。這些概念代表了不同的情況和值。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_setAttribute-vs-getAttribute" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">setAttribute V.S. getAttribute</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-02</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>setAttribute 和 getAttribute 是用於操作 HTML 元素屬性的兩種不同方法。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_setTimeout-vs-setInterval" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">setTimeout V.S. setInterval</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-01</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>setTimeout 和 setInterval 都是 JavaScript 中用於執行延遲或重複執行程式碼的方法，它們的差異在於執行的次數和頻率。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_destructuring-assignment" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 解構賦值(Destructuring Assignment)？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-01</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>解構賦值是 JavaScript 在 ES6(ECMAScript 2015)引入的功能，這可以從陣列或物件中提取值，並將這些值賦給對應的變數。這使得從複雜的資料結構中取得資料變得更簡潔方便。</p>
                    <p>解構賦值可以用於陣列和物件，並且可以在變數宣告和賦值語句中使用。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all web">
        <a href="WEB_OWASP-introduce" class="article">
            <div class="article-icon">
                <i class="fa-sharp fa-solid fa-desktop"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 OWASP？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-31</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>開放式 Web 應用程式安全性專案 (OWASP) 是致力於 Web 應用程式安全性的國際非營利組織。OWASP
                        的核心原則之一是，他們的所有資料都免費提供並且可以在其網站上輕鬆存取，這使得任何人都能夠改善自己的 Web 應用程式安全性。他們提供的材料包括文件、工具、影片和論壇。也許他們最著名的專案是 OWASP
                        Top 10。</p>
                    <p>簡單的說就是推動世界軟體的安全性。OWASP 也歸納出容易攻擊的弱點並彙整為十大資安問題、排名、防範措施。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_sort" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">陣列中的物件資料選取與排序</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-30</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>2023/07/26 面試時遇到的題目，是關於 JavaScript 中，const 一個變數後，在裡面賦予一個 array 後再其中包含了 Object，在進行 key value
                        的選取與排序，以下題目有做些許的改變。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all vue">
        <a href="VUE_eventBus" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-vuejs"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 Event Bus？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Vue<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-29</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>Vue.js Event Bus
                        是一種事件機制，可用於在不同組件之間進行通信。可以將事件發佈到一個中央實例，並在需要時從其他組件中訂閱這些事件。這種方式可以有效地解耦不同組件之間的邏輯，使其更易於維護和擴展。</p>
                    <p>在 Vue.js 中，可以使用一個簡單的 Vue 實例作為事件中心，並通過 $emit、$on、$off 等方法來進行事件的發佈、訂閱和取消訂閱。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all vue">
        <a href="VUE_createVUEcli" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-vuejs"></i>
            </div>
            <div class="article-text">
                <div class="article-title">如何建立 Vue-CLI？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Vue<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-29</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>在安裝 Vue CLI 之前，必須先安裝 Node.js，可直接至 Node.js 的官網下載並安裝</p>
                    <p>Vue CLI 4.x 需要 Node.js v8.9 或更高版本，可在 Terminal 或 cmd 中使用 node -v 查看版本</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_closure" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 閉包(Closure)？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-28</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>閉包(Closure)是 JavaScript 中一個重要的概念，涉及函式的作用域和變數的保存。在理解閉包之前，需要先了解 JavaScript 中的作用域和函式定義。</p>
                    <p>作用域是一個定義了變數可見性和生存期的區域。在 JavaScript 中，有全域作用域和區域(函式)作用域兩種。當在一個函式內宣告一個變數時，只能在該函式內部訪問，這就是區域作用域。</p>
                    <p>函式定義了程式碼塊，並且可以在程式碼中重複使用。在 JavaScript 中，函式是第一類對象，這意味著可以像其他值一樣被賦值給變數、作為參數傳遞給函式和從函式中返回。這就可以在函式中定義其他函式。
                    </p>
                    <p>閉包是指當一個函式(稱為內部函式)可以訪問其外部函式(稱為外部函式)的變數，即使外部函式已經結束執行，這些變數仍然存在並且保留在內存中。換句話說，內部函式「捕捉」了外部函式的作用域，形成了一個閉包，這樣就可以在以後的執行中使用這些變數。
                    </p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_BubblingEvents-vs-CapturingEvents" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">事件捕獲(Capturing Events) V.S. 冒泡事件(Bubbling Events)</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-25</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>在 JavaScript 中，事件處理涉及兩個主要階段：事件捕獲(Capturing Events)和冒泡事件(Bubbling Events)。這兩個階段描述了事件在 DOM Tree
                        中傳播的方式，允許在事件發生時捕獲或處理。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_OOP" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">JavaScript 的物件導向</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-25</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>物件導向是一種程式設計典範，將程式的結構和邏輯組織成一個個獨立的物件，每個物件都有自己的屬性和方法。物件導向程式設計(Object-Oriented Programming，簡稱
                        OOP)的主要目的是模擬現實世界中的事物和其相互之間的關係，使得程式更易於理解、維護和擴展。</p>
                    <p>當談論 JavaScript 的物件導向時，通常是指 ES6(ECMAScript 2015)引入的新特性，在 JavaScript
                        中，物件是鍵值對的集合，其中鍵是屬性名稱，值是屬性的數值或函數。物件的屬性可以是基本數據類型(例如數字、字符串等)或其他物件，而屬性的函數稱為方法，用於操作該物件的屬性或執行特定的功能。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_byValue-vs-byReference" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">By Value V.S. By Reference</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-24</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>當談到 JavaScript 中的參數傳遞方式時，有兩種不同的方法：「按值傳遞」和「按引用傳遞」。這兩者之間的主要差異在於傳遞參數時，參數的值或引用如何被複製和傳遞的。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_shallowCopy-vs-deepCopy" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">淺拷貝(Shallow Copy) V.S. 深拷貝(Deep Copy)</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-23</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>淺拷貝：共用同一個記憶體空間</p>
                    <p>深拷貝：兩個不同的記憶體空間</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all vue">
        <a href="VUE_syntax" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-vuejs"></i>
            </div>
            <div class="article-text">
                <div class="article-title">Vue 模板語法</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Vue<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-21</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>Vue.js 使用了基於 HTML 的模板語法，允許開發者聲明式地將 DOM 綁定至底層 Vue 實例的數據。</p>
                    <p>Vue.js 的核心是一個允許你采用簡潔的模板語法來聲明式的將數據渲染進 DOM。</p>
                    <p>結合響應系統，在應用狀態改變時， Vue 能夠智能地計算出重新渲染組件的最小代價並應用到 DOM 操作上。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all python">
        <a href="PY_loop" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-python"></i>
            </div>
            <div class="article-text">
                <div class="article-title">迴圈基礎 & 迴圈控制</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Python<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-20</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>while 迴圈和 for 迴圈的基礎應用</p>
                    <p>break、、continue和else的範例</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all python">
        <a href="PY_arithmetic" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-python"></i>
            </div>
            <div class="article-text">
                <div class="article-title">if 判斷式和簡易的四則運算</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Python<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-20</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>Python的 if 判斷式和用 if 判斷式完成最簡易的四則運算</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all others">
        <a href="DB_CRUD" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-database"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 CRUD？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>SQL<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-20</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>CRUD，中文是增刪查改。</p>
                    <p>CRUD 是對後端工程師的最最最基本要求，至少要會做增加資料、刪除資料、查資料、改資料的功能，畢竟絕大多數的功能都和 CRUD 有關。</p>
                    <p>大家熟悉的網購，都會有超重要的購物車，購物車需要的功能就是：新增商品到購物車、修改購物車商品（數量、顏色等等）、刪除購物車商品以及檢視購物車的商品，這就是 CRUD。</p>
                    <p>對資料的操作也是一樣，大部分的動作都脫離不了 CRUD，CRUD 對比到 SQL 語法會像下表：</p>
                </div>
            </div>
        </a>
    </section>


    <section class="all web">
        <a href="WEB_web-noun" class="article">
            <div class="article-icon">
                <i class="fa-sharp fa-solid fa-desktop"></i>
            </div>
            <div class="article-text">
                <div class="article-title">淺談網頁技術名詞</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-19</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>為了增進使用者體驗，前端愈來愈複雜，現在就讓我們一起搞懂網頁技術名詞。</p>
                    <p>MVC：一種設計模式，目的是將雜亂的程式碼分開以好維護。原理是將任何與資料有關的操作都放到一個叫做 Model 的地方、所有跟顯示畫面有關的東西都放到 View，並在 View 裡面用一個
                        template 來放入資料。</p>
                    <p>SPA：單頁式應用 (Single Page Application)，利用 AJAX 非同步的特性跟後端同步資料，將不同的資料動態輸向同一個頁面，達到網頁操作不換頁。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all html-css javascript">
        <a href="Code_BOM-vs-DOM" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-file-code"></i>
            </div>
            <div class="article-text">
                <div class="article-title">BOM V.S. DOM</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>HTML<i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-19</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>BOM：JavaScript 和『瀏覽器』溝通的窗口，不涉及網頁內容；DOM：JavaScript 用來控制『網頁』的節點與內容的標準</p>
                    <p>『BOM』完全依賴瀏覽器廠商實作本身沒有標準規範，『DOM』有 W3C 所制定的標準來規範。</p>
                    <p>DOM 最重要的就是觀念，為了不讓網頁在渲染的過程中過度的 重畫頁面(Repaint) 甚至是 重構頁面(Reflow) 而讓網頁效能變差，在 DOM 的操作上可要非常小心，而 DOM
                        也可以說是網頁的核心。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all html-css">
        <a href="CSS_nth-child" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-css3-alt"></i>
            </div>
            <div class="article-text">
                <div class="article-title">CSS 選取第一個、最後一個、偶數、奇數、第n個標簽元素</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>CSS<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-17</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>CSS3新增的選取器中，大概就屬:nth-child(n)功能最猛了，:nth-child(n)不僅可以不靠 class 或是 ID 來選取網頁項目外，還解決了網頁中清單資料規律性選取的問題，:nth-child(n) 尤其對於表格資料的呈現上，真的是方便太多了</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_Asynchronous" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">JavaScript 的非同步 (Asynchronous)</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-15</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>JavaScript 是屬於同步的程式語言，因此一次僅能做一件事情，但遇到非同步的事件時，就會將非同步的事件移動到程式碼的最後方，等到所有的原始碼運行完以後才會執行非同步的事件。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all javascript">
        <a href="JS_AJAX" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 AJAX？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-14</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>AJAX(Asynchronous JavaScript and XML) 指的是一套綜合了多項技術的瀏覽器端網頁開發技術。</p>
                    <p>傳統的Web應用允許使用者端填寫表單(form)，當送出表單時就向網頁伺服器傳送一個請求。伺服器接收並處理傳來的表單，然後送回一個新的網頁，但這個做法浪費了許多頻寬，因為在前後兩個頁面中的大部分HTML碼往往是相同的。由於每次應用的溝通都需要向伺服器傳送請求，應用的回應時間依賴於伺服器的回應時間。這導致了使用者介面的回應比本機應用慢得多。
                    </p>
                </div>
            </div>
        </a>
    </section>

    <section class="all html-css">
        <a href="CSS_box-sizing" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-css3-alt"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 CSS box-sizing？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>CSS<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-12</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>CSS 的 box-sizing 是一個屬性，用於控制元素的寬度和高度的計算方式。它決定了指定的寬度和高度是否包括元素的邊距(margin)、內邊距(padding)和邊框(border)。</p>
                    <p>box-sizing 屬性可以有兩個值：content-box (默認值)、border-box</p>
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
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-11</div>
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
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-11</div>
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
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-11</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>在 JavaScript 中，var、let 和 const 是用於宣告變數的保留字，在 JavaScript 早期只有 var，直到 ES2015 (ES6) 時才加入了 let 與 const
                    </p>
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
                    <p>RESTful API
                        是一種能讓兩個電腦系統用來安全地透過網際網路交換資訊的介面。大多數商業應用程式必須與其它內部和第三方應用程式溝通，以執行各種任務。舉例來說，為了產生每月薪資單，您的內部帳戶系統必須與您客戶的銀行系統共用資料，以自動化提供薪資單的過程，並且與內部出勤卡應用程式進行通訊。多種
                        RESTful API 支援此類資訊交換，因為它們遵守安全、可靠、且有效率的通訊標準。</p>
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
                <div class="article-title">什麼是 SSL 和 TLS？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-08</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>SSL（Secure Sockets Layer）是一種用於保護網絡通信的加密協議。它提供了安全的數據傳輸和身份驗證機制，用於保護在互聯網上傳輸的敏感信息。</p>
                    <p>SSL使用了非對稱加密（公鑰加密）和對稱加密的組合來實現安全通信。它的主要目標是確保數據的機密性（加密數據以防止被未授權的人讀取）、完整性（確保數據在傳輸過程中不被修改）、身份驗證（確認通信方的身份）和可用性（確保通信的可靠性和連接的正確性）。
                    </p>
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
                    <p>超文字傳輸通訊協定 (HTTP) 是全球資訊網的基礎，用於透過超文字連結載入網頁。HTTP 是一種應用程式層通訊協定，用於在聯網裝置之間傳輸資訊，並在網路通訊協定堆疊的其他層上執行。透過 HTTP
                        的典型流程涉及用戶端機器向伺服器發出請求，然後伺服器傳送回應訊息。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all html-css javascript">
        <a href="Code_Limit-Line-Width" class="article">
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
        <a href="JS_map-vs-forEach" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">map() V.S. forEach()</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>map()和forEach()的區別和理解</p>
                    <p>如果你已經有使用JavaScript的經驗，你可能已經知道這兩個看似相同的方法：</p>
                    <p>Array.prototype.map()和Array.prototype.forEach()</p>
                    <p>那麼，它們到底有什麼區別呢？</p>
                </div>
            </div>
        </a>
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
                    <p>MVC（Model-View-Controller）和MVVM（Model-View-ViewModel）是兩種軟體架構模式，用於設計和組織應用程式的不同部分，使其易於維護和擴展。它們各自有自己的特點和用途。
                    </p>
                </div>
            </div>
        </a>
    </section>

    <section class="all vue">
        <a href="VUE_LifeCycle" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-vuejs"></i>
            </div>
            <div class="article-text">
                <div class="article-title">元件的生命週期與更新機制</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Vue<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>如同生物一般， Vue 的實體物件從建立、掛載、更新，到銷毀移除，這一連串的過程，我們將它稱作生命週期。在這個過程中， Vue.js 提供了開發者在這些週期階段做對應處理的 callback
                        function，這些 callback function 我們就稱它叫生命週期的 Hooks function。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all web">
        <a href="WEB_Cookie-vs-LocalStorage-vs-SessionStorage" class="article">
            <div class="article-icon">
                <i class="fa-sharp fa-solid fa-desktop"></i>
            </div>
            <div class="article-text">
                <div class="article-title">Cookie V.S. LocalStorage V.S. SessionStorage</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
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

    <section class="all web">
        <a href="WEB_api-introduce" class="article">
            <div class="article-icon">
                <i class="fa-sharp fa-solid fa-desktop"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 API？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>當你上Google搜尋 API，你會看到它解釋為 應用程式介面，也就是Application Programming Interface 的縮寫，扮演應用程式和應用程式之間的橋樑。</p>
                    <p>API 就像一個介面，可以幫助開發者節省精力，並很快的達到目的。</p>
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
                <div class="article-title">什麼是 NPM？了解 node套件管理工具 npm install</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>在現代的網站中，使用他人開放原始碼的套件輔助開發已經是稀鬆平常的事情，無論是透過套件加速堆砌產品，或是在開發環境中加上協助工程師的各式工具，只需要稍加設定，一個專案便能輕易加載了成千上萬的外部程式；但如此方便的機制，究竟是怎麼實現的呢？
                    </p>
                    <p>npm 即為 Node Package Manager 的縮寫，開發者可以透過 Node 隨附的 npm cli，進行套件的安裝及管理。</p>
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
                    <p>CDN
                        允許快速傳輸載入網際網路內容所需的資源，包括HTML頁面、javascript檔、樣式表、圖像和視訊。CDN服務已得到不斷普及。如今，大多數web流量都通過CDN提供服務，包括來自Facebook、Netflix和亞馬遜等主要網站的流量。
                    </p>
                    <p>正確設定的CDN也能協助保護網站，對抗常見的惡意攻擊，例如分散式阻斷服務(DDOS)攻擊。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all html-css">
        <a href="HTML_codeTag" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-html5"></i>
            </div>
            <div class="article-text">
                <div class="article-title">HTML &lt;code&gt; 顯示程式碼內容</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>HTML<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>&lt;code&gt; 標籤 (tag) 用來顯示電腦程式碼 (computer code) 內容，而瀏覽器預設會以 monospace 等寬字型 (fixed-width font) 來顯示
                        &lt;code&gt; 中的內容。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all html-css">
        <a href="HTML_tableTag" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-html5"></i>
            </div>
            <div class="article-text">
                <div class="article-title">HTML 表格 (table)</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>HTML<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>HTML &lt;table&gt; 標籤 (tag) 用來建立表格，也就是用來呈現二維的資料表資訊。</p>
                    <p>&lt;table&gt; 標籤做為表格的容器 (container)，裡面有不同用途的標籤像是 &lt;tr&gt;, &lt;td&gt; 組成一個完整的表格。</p>
                    <p>&lt;table&gt;中的標籤按照以下順序，組成一個表格：</p>
                </div>
            </div>
        </a>
    </section>
</template>

<script setup>
import { onMounted } from "vue";

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
</script>