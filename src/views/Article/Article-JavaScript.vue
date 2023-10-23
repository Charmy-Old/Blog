<template>
    <Header />
    <div class="content">
        <main>
            
            <section>
                <div class="article-top">
                    <div class="article-icon">
                        <i class="fa-brands fa-square-js"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">JavaScript</div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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
                            <p>Axios 是 Ajax 其中一個方式，在流程不外乎就是 包裝請求 (建立 Request) → 伺服器回傳相應資訊 (回傳 Response)，所以在建立 Request 的過程中需要進行相應的設定來告知 Axios 該怎麼組成請求，並針對請求回傳 Promise，在使用上可以透過 then/catch/finally 來獲取請求完成狀態，相較 XMLHttpRequest 在使用上來的更加精簡，當然因為是 Promise 物件所以可以透過 async/await 進行同步等待。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                <a href="JS_indexOf" class="article">
                    <div class="article-icon">
                        <i class="fa-brands fa-square-js"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">JavaScript 的 indexOf()</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-09-01</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>在 JavaScript 中，indexOf是一個用於字串或陣列的方法，用於尋找特定元素在該字串或陣列中的位置索引。如果該元素存在於字串或陣列中，則 indexOf() 會返回該元素的第一個出現的索引位置；如果該元素不存在，則返回 -1。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                <a href="JS_TemplateStringInterpolation" class="article">
                    <div class="article-icon">
                        <i class="fa-brands fa-square-js"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">JavaScript 的模板字串插值(Template String Interpolation)</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-09-01</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>在 JavaScript 中，${} 是一種稱為「模板字串插值」(Template String Interpolation)的語法，可以在字串中插入變數或運算式的值，不需要使用傳統的字串串接方法。</p>
                            <p>${} 可以想像成是一個特殊的區塊，用來包裹想要插入的變數或表達式。當 JavaScript 處理這些模板字串時，會將 ${} 內的內容解析並替換為實際的值。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                <a href="JS_RegularExpression" class="article">
                    <div class="article-icon">
                        <i class="fa-brands fa-square-js"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">JavaScript 的正規表達式 (Regular Expression)</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>JavaScript<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-09</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>正規表達式(Regular Expression，簡稱為 RegExp 或 RegEx)是一種強大的文本處理工具，用於搜尋、匹配和替換文字模式。在 JavaScript 中，可以使用RegExp物件來創建和操作正規表達式</p>
                        </div>
                    </div>
                </a>
            </section>

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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
            
            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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
                            <p>傳統的Web應用允許使用者端填寫表單 (form)，當送出表單時就向網頁伺服器傳送一個請求。伺服器接收並處理傳來的表單，然後送回一個新的網頁，但這個做法浪費了許多頻寬，因為在前後兩個頁面中的大部分HTML碼往往是相同的。由於每次應用的溝通都需要向伺服器傳送請求，應用的回應時間依賴於伺服器的回應時間。這導致了使用者介面的回應比本機應用慢得多。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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