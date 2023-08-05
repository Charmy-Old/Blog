<template>
    <section class="d-none">
        <div class="container text-center">
            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-6">
                <div>
                    <button class="select-button" data-filter="all">All</button>
                </div>
                    
                <div>
                    <button class="select-button" data-filter="web">Web</button>
                </div>
                
                <div>
                    <button class="select-button" data-filter="html">HTML</button>
                </div>
                    
                <div>
                    <button class="select-button" data-filter="css">CSS</button>
                </div>
                    
                <div>
                    <button class="select-button" data-filter="javascript">JavaScript</button>
                </div>
                    
                <div>
                    <button class="select-button" data-filter="vue">Vue</button>
                </div>

                <div>
                    <button class="select-button" data-filter="react">React</button>
                </div>

                <div>
                    <button class="select-button" data-filter="database">Database</button>
                </div>

                <div>
                    <button class="select-button" data-filter="python">Python</button>
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

    <section class="all javascript vue react">
        <a href="CODE_props" class="article">
            <div class="article-icon">
                <i class="fa-solid fa-file-code"></i>
            </div>
            <div class="article-text">
                <div class="article-title">什麼是 props？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-solid fa-tag"></i>Vue<i class="fa-solid fa-tag"></i>React<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-06</div>
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
                    <p>開放式 Web 應用程式安全性專案 (OWASP) 是致力於 Web 應用程式安全性的國際非營利組織。OWASP 的核心原則之一是，他們的所有資料都免費提供並且可以在其網站上輕鬆存取，這使得任何人都能夠改善自己的 Web 應用程式安全性。他們提供的材料包括文件、工具、影片和論壇。也許他們最著名的專案是 OWASP Top 10。</p>
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
                    <p>2023/07/26 面試時遇到的題目，是關於 JavaScript 中，const 一個變數後，在裡面賦予一個 array 後再其中包含了 Object，在進行 key value 的選取與排序，以下題目有做些許的改變。</p>
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
                    <p>Vue.js Event Bus 是一種事件機制，可用於在不同組件之間進行通信。可以將事件發佈到一個中央實例，並在需要時從其他組件中訂閱這些事件。這種方式可以有效地解耦不同組件之間的邏輯，使其更易於維護和擴展。</p>
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
                    <p>函式定義了程式碼塊，並且可以在程式碼中重複使用。在 JavaScript 中，函式是第一類對象，這意味著可以像其他值一樣被賦值給變數、作為參數傳遞給函式和從函式中返回。這就可以在函式中定義其他函式。</p>
                    <p>閉包是指當一個函式(稱為內部函式)可以訪問其外部函式(稱為外部函式)的變數，即使外部函式已經結束執行，這些變數仍然存在並且保留在內存中。換句話說，內部函式「捕捉」了外部函式的作用域，形成了一個閉包，這樣就可以在以後的執行中使用這些變數。</p>
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
                    <p>在 JavaScript 中，事件處理涉及兩個主要階段：事件捕獲(Capturing Events)和冒泡事件(Bubbling Events)。這兩個階段描述了事件在 DOM Tree 中傳播的方式，允許在事件發生時捕獲或處理。</p>
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
                    <p>物件導向是一種程式設計典範，將程式的結構和邏輯組織成一個個獨立的物件，每個物件都有自己的屬性和方法。物件導向程式設計(Object-Oriented Programming，簡稱 OOP)的主要目的是模擬現實世界中的事物和其相互之間的關係，使得程式更易於理解、維護和擴展。</p>
                    <p>當談論 JavaScript 的物件導向時，通常是指 ES6(ECMAScript 2015)引入的新特性，在 JavaScript 中，物件是鍵值對的集合，其中鍵是屬性名稱，值是屬性的數值或函數。物件的屬性可以是基本數據類型(例如數字、字符串等)或其他物件，而屬性的函數稱為方法，用於操作該物件的屬性或執行特定的功能。</p>
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

    <section class="all database">
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
                    <p>MVC：一種設計模式，目的是將雜亂的程式碼分開以好維護。原理是將任何與資料有關的操作都放到一個叫做 Model 的地方、所有跟顯示畫面有關的東西都放到 View，並在 View 裡面用一個 template 來放入資料。</p>
                    <p>SPA：單頁式應用 (Single Page Application)，利用 AJAX 非同步的特性跟後端同步資料，將不同的資料動態輸向同一個頁面，達到網頁操作不換頁。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all html javascript">
        <a href="CODE_BOM-vs-DOM" class="article">
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
                    <p>DOM 最重要的就是觀念，為了不讓網頁在渲染的過程中過度的 重畫頁面(Repaint) 甚至是 重構頁面(Reflow) 而讓網頁效能變差，在 DOM 的操作上可要非常小心，而 DOM 也可以說是網頁的核心。</p>
                </div>
            </div>
        </a>
    </section>
    
    <section class="all css">
        <a href="CSS_nth-child" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-css3-alt"></i>
            </div>
            <div class="article-text">
                <div class="article-title">CSS 選取第一個、最後一個、偶數、奇數、第n個標簽元素</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>CSS<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-17</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>CSS3 新增的選取器中，大概就屬:nth-child(n)功能最猛了，:nth-child(n)不僅可以不靠class或是ID來選取網頁項目外，還解決了網頁中清單資料規律性選取的問題，:nth-child(n)尤其對於表格資料的呈現上，真的是方便太多了</p>
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
                <p>JavaScript 是屬於同步的程式語言，因此一次僅能做一件事情，但遇到非同步的事件時，就會將非同步的事件移動到程式碼的最後方，等到所有的原始碼運行完以後才會執行非同步的事件。</p></div>
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
                    <p>傳統的Web應用允許使用者端填寫表單(form)，當送出表單時就向網頁伺服器傳送一個請求。伺服器接收並處理傳來的表單，然後送回一個新的網頁，但這個做法浪費了許多頻寬，因為在前後兩個頁面中的大部分HTML碼往往是相同的。由於每次應用的溝通都需要向伺服器傳送請求，應用的回應時間依賴於伺服器的回應時間。這導致了使用者介面的回應比本機應用慢得多。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all css">
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
                    <p>在 JavaScript 中，var、let 和 const 是用於宣告變數的保留字，在 JavaScript 早期只有 var，直到 ES2015 (ES6) 時才加入了 let 與 const</p>
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
                    <p>RESTful API 是一種能讓兩個電腦系統用來安全地透過網際網路交換資訊的介面。大多數商業應用程式必須與其它內部和第三方應用程式溝通，以執行各種任務。舉例來說，為了產生每月薪資單，您的內部帳戶系統必須與您客戶的銀行系統共用資料，以自動化提供薪資單的過程，並且與內部出勤卡應用程式進行通訊。多種 RESTful API 支援此類資訊交換，因為它們遵守安全、可靠、且有效率的通訊標準。</p>
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
                <div class="article-title">什麼是 SSL和TLS？</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>Web<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-08</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>SSL（Secure Sockets Layer）是一種用於保護網絡通信的加密協議。它提供了安全的數據傳輸和身份驗證機制，用於保護在互聯網上傳輸的敏感信息。</p>
                    <p>SSL使用了非對稱加密（公鑰加密）和對稱加密的組合來實現安全通信。它的主要目標是確保數據的機密性（加密數據以防止被未授權的人讀取）、完整性（確保數據在傳輸過程中不被修改）、身份驗證（確認通信方的身份）和可用性（確保通信的可靠性和連接的正確性）。</p>
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
                    <p>超文字傳輸通訊協定 (HTTP) 是全球資訊網的基礎，用於透過超文字連結載入網頁。HTTP 是一種應用程式層通訊協定，用於在聯網裝置之間傳輸資訊，並在網路通訊協定堆疊的其他層上執行。透過 HTTP 的典型流程涉及用戶端機器向伺服器發出請求，然後伺服器傳送回應訊息。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all css javascript">
        <a href="CODE_Limit-Line-Width" class="article">
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
        <a href="JS_Cookie-vs-LocalStorage-vs-SessionStorage" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-square-js"></i>
            </div>
            <div class="article-text">
                <div class="article-title">Cookie V.S. LocalStorage V.S. SessionStorage</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
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
                    <p>MVC（Model-View-Controller）和MVVM（Model-View-ViewModel）是兩種軟體架構模式，用於設計和組織應用程式的不同部分，使其易於維護和擴展。它們各自有自己的特點和用途。</p>
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
                    <p>如同生物一般， Vue 的實體物件從建立、掛載、更新，到銷毀移除，這一連串的過程，我們將它稱作生命週期。在這個過程中， Vue.js 提供了開發者在這些週期階段做對應處理的 callback function，這些 callback function 我們就稱它叫生命週期的 Hooks function。</p>
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
                    <p>在現代的網站中，使用他人開放原始碼的套件輔助開發已經是稀鬆平常的事情，無論是透過套件加速堆砌產品，或是在開發環境中加上協助工程師的各式工具，只需要稍加設定，一個專案便能輕易加載了成千上萬的外部程式；但如此方便的機制，究竟是怎麼實現的呢？</p>
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
                    <p>CDN 允許快速傳輸載入網際網路內容所需的資源，包括HTML頁面、javascript檔、樣式表、圖像和視訊。CDN服務已得到不斷普及。如今，大多數web流量都通過CDN提供服務，包括來自Facebook、Netflix和亞馬遜等主要網站的流量。</p>
                    <p>正確設定的CDN也能協助保護網站，對抗常見的惡意攻擊，例如分散式阻斷服務(DDOS)攻擊。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all html">
        <a href="HTML_codeTag" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-html5"></i>
            </div>
            <div class="article-text">
                <div class="article-title">HTML &lt;code&gt; 顯示程式碼內容</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>HTML<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>&lt;code&gt; 標籤 (tag) 用來顯示電腦程式碼 (computer code) 內容，而瀏覽器預設會以 monospace 等寬字型 (fixed-width font) 來顯示 &lt;code&gt; 中的內容。</p>
                </div>
            </div>
        </a>
    </section>

    <section class="all html">
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
<script>
    import { onMounted } from "vue";
    export default {
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
            });
        }
    };
</script>