<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">JavaScript 的非同步 (Asynchronous)</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-15</p>
                </div>
            </section>

            <!-- Asynchronous -->
            <section>
                <div class="article-detail">
                    <h3>JavaScript 的非同步</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>JavaScript 是屬於同步的程式語言，因此一次僅能做一件事情，但遇到非同步的事件時，就會將非同步的事件移動到程式碼的最後方，等到所有的原始碼運行完以後才會執行非同步的事件。</p>
                        <p>以下是 JavaScript 的非同步範例：</p>
                    </div>
                    <div class="article-code">
                        <div class="article-coding">
<pre>
// 假設有一個非同步函數，它會模擬一個耗時的操作
function asyncOperation(callback) {
    setTimeout(function() {
        // 模擬完成操作後呼叫 CallBack Function
        callback("操作完成");
    }, 2000); // 假設操作需要2秒完成
}
  
// 呼叫非同步函數
console.log("開始操作");
asyncOperation(function(result) {
    console.log("操作結果: " + result);
});
console.log("繼續執行其他操作");
</pre>
                        </div>
                    </div>
                    <div class="article-codeNote">
<pre>
// Console.log 的結果
開始操作
繼續執行其他操作
操作結果: 操作完成 // 2秒後才顯示
</pre>
                    </div>
                    <div class="article-txt">
                        <p>範例中，asyncOperation 函數模擬了一個耗時的操作，使用 setTimeout 函數模擬了2秒的延遲。該函數接受一個 CallBack Function作為參數，並在操作完成後呼叫該 CallBack Function。</p>
                    </div>
                    <div class="article-code">
                        <div class="article-coding">
<pre>
console.log("開始");

setTimeout(() => {
  console.log("非同步事件");
}, 0);

console.log("結束");
</pre>
                        </div>
                    </div>
                    <div class="article-txt">
                        <p> console 的出現順序</p>

                    </div>
                    <div class="article-list">
                        <ol>
                            <li>1、開始</li>
                            <li>2、結束</li>
                            <li>3、非同步事件 (最後執行)</li>
                        </ol>
                    </div>

                </div>
            </section>

            <!-- Callback hell -->
            <section>
                <div class="article-detail">
                    <h3>Callback hell</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>Callback Hell 是一個在 JavaScript 中常見的問題，特別是在處理非同步操作時。它描述了一個由於多個嵌套的 Callback Functions 而變得混亂和難以管理的程式碼結構。</p>
                        <p>在JavaScript中，非同步操作是非常常見的，例如從服務器獲取數據、執行文件讀寫操作或處理用戶界面事件等。為了處理這些非同步操作，通常會使用 Callback Functions 來指定非同步操作完成後應該執行的程式碼。</p>
                        <p>當有多個非同步操作需要按照特定順序執行或其中一個操作的結果取決於另一個操作的結果時，就會導致 Callback Functions 的嵌套，形成 Callback Hell。</p>
                        <p>以下是一個 Callback Hell 的示例：</p>
                    </div>
                    <div class="article-code">
                        <div class="article-coding">
<pre>
doSomething(function(result1) {
    doSomethingElse(result1, function(result2) {
        doAnotherThing(result2, function(result3) {
            // 在這裡執行更多的操作...
        });
    });
});
</pre>
                        </div>
                    </div>
                    <div class="article-txt">
                        <p>上述範例中，每個非同步操作的完成都需要等待前一個非同步操作的結果，並且為每個操作定義了一個 Callback Functions 。由於這些 Callback Functions 被嵌套在彼此之中，程式碼變得非常難以閱讀和維護。</p>>
                        <h4>Callback hell 的缺點</h4>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>隨著 Callback Functions 的嵌套層級增加，程式碼的可讀性急劇下降。</li>
                            <li><i class="fa-solid fa-check"></i>錯誤處理變得困難，因為每個 Callback Functions 都需要處理錯誤並傳遞錯誤給下一個 Callback Functions 。</li>
                            <li><i class="fa-solid fa-check"></i>在 Callback hell 中，程式碼的重用性和可維護性受到限制，因為相關的操作被分散在多個 Callback Functions 中。</li>
                        </ul>
                    </div>
                </div>
            </section>
            <!-- Promise -->
            <section>
                <div class="article-detail">
                    <h3>Promise</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>Promise 本身是用來改善 JavaScript 非同步的語法結構。</p>
                        <h4>Promise 的結構及狀態</h4>
                        <h5>結構</h5>
                        <p>Promise 本身是一個建構函式，函式也是屬於物件的一種，因此可以附加其它屬性方法在上，透過 console 的結果可以看到 Promise 可以直接使用 all、race、resolve、reject 的方法，寫法如下：</p>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>Promise.all</li>
                            <li><i class="fa-regular fa-note-sticky"></i>Promise.race</li>
                            <li><i class="fa-regular fa-note-sticky"></i>Promise.resolve</li>
                            <li><i class="fa-regular fa-note-sticky"></i>Promise.reject</li>
                        </ul>
                    </div>
                    <div class="article-txt">
                        <p>Promise 建構函式 new 出的物件，則可以使用其中的原型方法 (在 prototype 內)，其中就包含 then、catch、finally，這些方法則必須在新產生的物件下才能呼叫。</p>
                        <p>透過 new Promise() 的方式建立 p 物件，此時 p 就能使用 Promise 的原型方法</p>
                    </div>
                    <div class="article-code">
                        <div class="article-coding">
<pre>
const p = new Promise();
p.then(); // Promise 回傳正確
p.catch(); // Promise 回傳失敗
p.finally(); // 非同步執行完畢(無論是否正確完成)
</pre>
                        </div>
                    </div>
                    <div class="article-txt">
                        <p>除此之外，Promise 建構函式建立同時，必須傳入一個函式作為參數（executor function），此函式的參數包含 resolve, reject，這兩個方法分別代表成功與失敗的回傳結果，特別注意這兩個僅能回傳其中之一，回傳後表示此 Promise 事件結束。</p>
                    </div>
                    <div class="article-code">
                        <div class="article-coding">
<pre>
new Promise(function(resolve, reject) { 
    resolve(); // 正確完成的回傳方法
    reject(); // 失敗的回傳方法
});
</pre>
                        </div>
                    </div>
                    <div class="article-txt">
                        <h5>狀態</h5>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>pending：事件已經運行中，尚未取得結果</li>
                            <li><i class="fa-regular fa-note-sticky"></i>resolved：事件已經執行完畢且成功操作，回傳 resolve 的結果（該承諾已經被實現 fulfilled）</li>
                            <li><i class="fa-regular fa-note-sticky"></i>rejected：事件已經執行完畢但操作失敗，回傳 rejected 的結果</li>
                        </ul>
                    </div>
                    <div class="article-txt">
                        <p>Promise 的簡單例子：</p>
                    </div>
                    <div class="article-code">
                        <div class="article-coding">
<pre>
function fetchData() {
    return new Promise(function(resolve, reject) {
        // 模擬非同步操作
        setTimeout(function() {
            const data = '這是從伺服器獲取的數據';
            if (data) {
                resolve(data); // 完成狀態
            } else {
                reject('無法獲取數據'); // 拒絕狀態
            }
        }, 2000);
    });
}

// 使用Promise
fetchData()
.then(function(result) {
    console.log(result); // 數據成功獲取時執行
})
.catch(function(error) {
    console.log(error); // 異常處理，數據獲取失敗時執行
});
</pre>
                        </div>
                    </div>
                    <div class="article-txt">
                        <p>上述範例中，fetchData 函數返回一個 Promise 物件。該 Promise 對象代表了一個非同步操作，使用 setTimeout 模擬了一個2秒後返回數據的情況。</p>
                        <p>使用 .then 方法可以註冊 Promise 完成時的 Callback Function，並將獲取的數據作為參數傳遞給該 Callback Function。如果 Promise 狀態變為拒絕，則可以使用 .catch 方法註冊錯誤處理的 Callback Function，並將錯誤信息作為參數傳遞給該 Callback Function。</p>
                        <p>數據成功獲取，將顯示獲取的數據。如果獲取數據失敗，則顯示相應的錯誤信息。</p>
                        <p>這是 Promise 的基本用法，通過連接 .then 和 .catch 方法，可以將多個非同步操作組合起來，使程式碼更具可讀性和可維護性。</p>
                    </div>
                </div>
            </section>

            <!-- async/await -->
            <section>
                <div class="article-detail">
                    <h3>async/await</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>async/await 是一種處理非同步操作的語法糖，它是建立在 Promise 基礎之上的。</h4>
                        <p>async/await 使得編寫和組織異步代碼更加簡單和可讀。它允許你以同步的方式編寫異步代碼，而無需顯式地處理 Promise 鏈或回調函數。</p>
                        <p>在使用 async/await 時，需要在一個函數前面添加 async 關鍵字來定義一個非同步函數。在非同步函數內部，你可以使用 await 關鍵字來等待一個 Promise 對象的解決。這樣做會暫停當前函數的執行，直到Promise被解決（resolved）並返回結果。</p>
                        <p>async/await 基本範例：</p>
                    </div>

                    <div class="article-code">
                        <div class="article-coding">
<pre>
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getData();
</pre>
                        </div>
                    </div>
                    <div class="article-txt">
                        <h4>在上面的範例中，getData函數是一個非同步函數。在函數體內，使用 await 關鍵字等待fetch函數返回的 Promise 對象。一旦 Promise 對象解決，它會將響應轉換為 JSON 數據並存儲在 data 變量中</h4>
                        <p>await 關鍵字只能在非同步函數內部使用。它可以用於等待 Promise 對象的解決，也可以用於等待其他異步操作，如調用另一個非同步函數。</p>
                        <p>使用 async/await 可以更清晰地表達異步操作的流程，避免了Callback Hell的問題，並使錯誤處理更加方便。</p>
                    </div>

                </div>
            </section>


            <section>
                <div class="article-detail">
                    <h3>推薦 & 參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <a class="article-reference" href="https://www.casper.tw/development/2020/02/16/all-new-promise/" target="_blank"><i class="fa-solid fa-pen-to-square"></i>卡斯伯的 Blog - JavaScript Promise 全介紹</a>
                        <a class="article-reference" href="https://www.casper.tw/development/2020/10/16/async-await/" target="_blank"><i class="fa-solid fa-pen-to-square"></i>卡斯伯的 Blog - Async function / Await 深度介紹</a>
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