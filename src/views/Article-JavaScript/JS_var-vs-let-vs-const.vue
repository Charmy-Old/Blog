<template>
    <Header />
    <div class="content">
        <main>
            
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">var V.S. let V.S. const</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-11</p>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>var、let、const 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>在 JavaScript 中，var、let 和 const 是用於宣告變數的保留字，在 JavaScript 早期只有 var，直到 ES2015 (ES6) 時才加入了 let 與 const</p>
                        <h4>var 與 let / const ，主要有幾項差異：</h4>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>在作用域上，var 可以是全域、也可以是以函式作為範圍；let 與 const 則是以區塊作為範圍。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>在宣告上，var 可以被重複宣告，但是 let 與 const 則不行。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>在提升上，var 宣告的變數會自動初始化值為 undefined，因此在宣告前就使用變數，不會出現錯誤，而會是 undefined ；但是 let 與 const 宣告的變數則不會自動初始化，而是會進到暫時死區 (TDZ)，因此在 let 與 const 宣告變數前使用該變數，會出現錯誤。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>let 與 const 在絕多數面向都是一樣，兩者的一大區別在於，用 let 宣告的變數可以重新賦值，但是用 const 的不行。</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>var 是函式作用域，let / const 是區塊作用域</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-pencil"></i>var 具有「函式作用域」，亦即在函式中宣告的變數，有效作用範圍會被限制在該函式中。但不具有區塊作用域，所以在區塊中宣告的變數，依然會作用到區塊之外，並不會被區塊限制住。</li>
                            <li><i class="fa-solid fa-pencil"></i>let / const 具有「區塊作用域」，亦即在區塊中宣告的變數，有效作用範圍會被限制在該區塊中。</li>
                        </ul>
                    </div>
                    <div class="article-txt">
                        <p><i class="fa-sharp fa-solid fa-asterisk"></i>{ }大括號範圍代表區塊 </p>
                    </div>
                    <div class="article-coding">
<pre>
// 「var」不受區塊限制，區塊外變數存取成功
{
    var name = "Charmy";
}
console.log(name);
// Charmy
</pre>
                    </div>
                    <div class="article-coding">
<pre>
// 「let」會受區塊限制，區塊外變數存取失敗
{
    let name = "Charmy";
}
console.log(name);
// ReferenceError: name is not defined
</pre>
                    </div>
                    <div class="article-txt">
                        <p>雖然 var 不受區塊限制，但會受到函式範圍限制，如下:</p>
                    </div>
                    <div class="article-coding">
<pre>
// 「var」 受函式限制，函式外變數存取失敗
function callName() {
    var name = "Charmy";
}
console.log(name);
// ReferenceError: name is not defined
</pre>
                    </div>
                    <div class="article-coding">
<pre>
// 即使用 var 宣告相同的變數名稱 name，但因為「 函式作用域 」，所以不會讓同名變數衝突
// 將 name 命名為 Chamy，之後用 callName() 呼叫
function callName() {
    var name = "Charmy";
    console.log(name);
}

// 將 num 命名為 123，之後用 callNum() 呼叫
function callNum() {
  var num = 123;
  console.log(num);
}

callName();   // Charmy
callNum();   // 123
</pre>
                    </div>
                    <div class="article-txt">
                        <p>限定作用域範圍有兩個好處：</p>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-pencil"></i>避免同名變數的衝突。</li>
                            <li><i class="fa-solid fa-pencil"></i>能維持最小權限的原則，以避免變數資料被不當存取。</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>var 與 let ，for 迴圈的綁定（bind）差異</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-coding">
<pre>
// 用 for 迴圈執行五次，每隔 0.1 秒會印出 i
for (var i = 0; i &lt; 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}
// 3 3 3
</pre>
                    </div>
                    <div class="article-txt">
                        <p>為什麼結果不是 0 1 2 而是 3 3 3，正與宣告變數語法 var / let 有關。要解釋這個問題，要分成兩點討論：</p>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-pencil"></i>setTimeout() 的時間延遲，與 function 中 console.log(i) 的「 執行時間點 」。</li>
                            <li><i class="fa-solid fa-pencil"></i>function 中 console.log(i) 的「 值怎麼來 」的。</li>
                        </ul>
                    </div>
                    <div class="article-txt">
                        <p>首先來看第一點，當進入 for 迴圈時，宣告變數 var i = 0 ，並開始條件判斷，當 i &lt; 3 時， i + 1，執行完後，接著需要等待 0.1 秒的時間，才會進行 setTimeout() 內的 function() { console.log( i ) ; }。</p>
                        <p>而 JavaScript 是非同步(異步)語言，因此在等待執行 function() { console.log( i ) ; } 前的這 0.1 秒內，會先執行完已經能執行的 for 迴圈。</p>
                        <p>所以現在能理解第一點的結論： function 中，console.log( i ) 的執行時間點會在 for 迴圈執行完畢之後。</p>
                    </div>
                    <div class="article-coding">
<pre>
// 因為非同步與延遲時間，所以會先執行完 for 迴圈後，才執行 function
for (var i = 0; i &lt; 3; i++) {
    // for 迴圈直接執行，不會等待 setTimeout 0.1 秒
    setTimeout(function () {
        console.log(i);
    }, 100);
}
// 3 3 3
</pre>
                    </div>
                    <div class="article-txt">
                        <p>目前為止所提的第一點，其實與 var 和 let 的差異是沒關係的，只是說明非同步和時間點的狀況。接著進入到第二點，console.log(i) 的值是怎麼來的，這就與 var 和 let 的差異有關了。</p>
                        <p>var 是函式作用域，這段 for 迴圈程式碼外沒有任何包覆，所以 var 所宣告的 i 會存在於全域 window (瀏覽器) 當中，且只會被綁定（bind）一次，也可以說是共用一個 instance。</p>
                        <p>加上 for 迴圈會先跑完，才 console.log( i )，所以最後 console.log( i ) 的值會才會是 3。</p>
                        <p>至於 let 則是「 區塊作用域 」每次 i 都會被紀錄在創造出來的區域中，更精確地說，是每次迭代都會建立一個新的環境（context），而這個環境會紀錄當下的變數 i 值，不會覆蓋掉上一個環境裡面的變數值，因此可以產生多個 i 值</p>
                    </div>
                    <div class="article-pic">
                        <img src="../../assets/images/article-js/var-let-const.webp" alt="">
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>var 的情況只會綁定一次，而且不具區塊作用域，最終會只有一個值存在於全域中（以此例而言），也可以說只有一個 instance。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>let 的情況會發生重複綁定，而且具有區塊作用域，或者說多個紀錄變數的環境，最終會有多的值存在於 for 迴圈區塊中，也可以說會有多個 instance。</li>
                        </ul>
                    </div>
                    <div class="article-txt">
                        <p>就實作而言，雖然僅有 var 的情況下也可以用「立即呼叫執行函式 IIFE」處理這樣的狀況，但較為複雜且不直覺，改用 let 後，就能簡單處理。</p>
                    </div>
                    <div class="article-coding">
<pre>
// 將 var i 改為 let i 後，輕易解決問題
for (let i = 0; i &lt; 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}
// 0 1 2
</pre>
                    </div>
                    <div class="article-coding">
<pre>
// 不改 var i 的情況下，以 IIFE 相對複雜且不直覺
for (var i = 0; i &lt; 3; i++) {
    (function (x) {
        setTimeout(function () {
            console.log(x);
        }, 100 * x);
    })(i);
}
// 0 1 2
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>var 的提升(hoist)與 let / const 不同</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-coding">
<pre>
console.log(i);
var i = 5;
// undefined
</pre>
                    </div>
                    <div class="article-txt">
                        <p>印出undefined ，即是代表：雖然我們看不見，但其實在 console.log(i) 之前，i 就已經被宣告了，只是尚未賦值。</p>
                    </div>
                    <div class="article-coding">
<pre>
// 由於 var 直接變數提升，所以上面程式碼等同下面程式碼
console.log(i);
var i = 5;
// undefined

var i;
console.log(i);
i = 5;
// undefined
</pre>
                    </div>
                    <div class="article-txt">
                        <p>這其中是因為 var 有著「提升(hoisting)」的特性，其實不僅是 var ，function 也有這個特性。以 var 宣告變數而言，「 變數提升 」簡而言之是：在執行任何程式碼前，會把變數放進記憶體中，這樣的特點是，可以在程式碼宣告該變數之前使用它。</p>
                    </div>
                    <div class="article-coding">
<pre>
// 因為 hoisting，所以可以在宣告變數前，就預先使用變數，所以可以寫完後一起宣告
i = 2;
n = 3;
console.log(i + n);
var i;
var n;
// 5
</pre>
                    </div>
                    <div class="article-txt">
                        <p>在這樣的情況下，只需要有賦值就不會出錯，即使尚未宣告變數也不會出錯。</p>
                        <p>這樣會造成什麼問題？當養成了「 後宣告 」的習慣，如果最後忘了用 var 宣告呢？並不會出錯，只是變數會跑到全域中，變成全域變數，可能造成些 bug，像是：</p>
                    </div>
                        <div class="article-coding">
<pre>
// 函式中沒有用 var 宣告，導致污染到全域
var x = 1;
function addFunc(y) {
  x = 100;
  x = x + y;
}
addFunc(50);
console.log(x);
// 150，預期應該要是 1，但函式中的 x 跑出來了
</pre>
                    </div>
                    <div class="article-txt">
                        <p>而在 let 中呢，相對的 hoisting 是較安全的（ let 還是有 hoisting，只是情況不同，可以搜尋關鍵字 TDZ ），所以 習慣用 let 的開發者，通常會先宣告變數，而不會習慣先運算變數後宣告的情況，藉此降低開發出錯的機率 。</p>
                    </div>
                    <div class="article-coding">
<pre>
// 先使用變數，後宣告會直接「出錯」，更嚴謹的養成先宣告後使用
console.log(i);
let i = 5;
// ReferenceError
i = 5;
console.log(i);
let i;
// ReferenceError
</pre>
                    </div>
                    <div class="article-txt">
                        <p>這樣的使用方式除了降低錯誤外，也相對直覺。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>var 允許重複宣告，let / const 會出錯</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-coding">
<pre>
var name = "Charmy";
var name = "Charmying";
console.log(name);
// Charmying

let name = "Charmy";
let name = "Charmying";
console.log(name);
// SyntaxError: Identifier "name" has already been declared

const name = "Charmy";
const name = "Charmying";
console.log(name);
//SyntaxError: Identifier "name" has already been declared
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>var 與 let / const 差異總結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>var 屬於函式作用域，let/const屬於區域作用域，後者能避免更多情況下的同名變數與提取變數衝突、區塊內變數污染到全域的情況，且讓 for loop 使用更直覺方便。</li>
                            <li><i class="fa-solid fa-check"></i>var 會自動提升變數，let/const 則較為嚴謹，後者能避免忘記宣告變數或因無宣告讓變數污染到全域的情況。</li>
                            <li><i class="fa-solid fa-check"></i>var 能重複宣告同名變數，let/const 不能重複宣告同名變數，後者能避免些開發上的錯誤情況。</li>
                        </ul>
                    </div>
                    <div class="article-txt">
                        <p>綜合來說就是 let/const 將宣告變數變得更加嚴謹，藉此增加易讀性、防止出錯。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <a class="article-reference" href="https://www.programfarmer.com/articles/2020/javascript-var-let-const-for-loop" target="_blank"><i class="fa-solid fa-pen-to-square"></i>城市碼農 - JS 宣告變數， var 與 let / const 差異</a>
                        <a class="article-reference" href="https://ithelp.ithome.com.tw/articles/10192739" target="_blank"><i class="fa-solid fa-pen-to-square"></i>重新認識 JavaScript: Day 18 Callback Function 與 IIFE</a>
                        <a class="article-reference" href="https://www.programfarmer.com/articles/2020/javascript-var-let-const-for-loop" target="_blank"><i class="fa-solid fa-pen-to-square"></i>卡斯伯的 Blog - 鐵人賽：ES6 開始的新生活 let, const</a>
                        <a class="article-reference" href="https://ithelp.ithome.com.tw/articles/10185142" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Day 05: ES6篇 - let與const</a>
                        <a class="article-reference" href="https://realdennis.medium.com/%E6%87%B6%E4%BA%BA%E5%8C%85-javascript%E4%B8%AD-%E4%BD%BF%E7%94%A8let%E5%8F%96%E4%BB%A3var%E7%9A%843%E5%80%8B%E7%90%86%E7%94%B1-f11429793fcc" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Medium(Written by realdennis) - [JavaScript] 你應該使用 let 而不是 var 的 3 個重要理由</a>
                        <a class="article-reference" href="https://stackoverflow.com/questions/16473350/let-keyword-in-the-for-loop" target="_blank"><i class="fa-solid fa-pen-to-square"></i>stack overflow - let keyword in the for loop</a>
                        <a class="article-reference" href="https://stackoverflow.com/questions/16473350/let-keyword-in-the-for-loop" target="_blank"><i class="fa-solid fa-pen-to-square"></i>六腳學院 - JavaScript 入門篇付費課程</a>
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