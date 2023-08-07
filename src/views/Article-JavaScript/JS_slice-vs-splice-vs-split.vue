<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">slice() V.S. splice() V.S. split()</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-11</p>
                </div>
            </section>

            <!-- slice() -->
            <section>
                <div class="article-detail">
                    <h3>slice() 提取</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>基本概念</h4>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>回傳一個新陣列物件，為原陣列選擇之開始位置至結束位置(不含結束位置)部分的淺拷貝(shallow copy)。</li>
                            <li><i class="fa-solid fa-check"></i>原本的陣列將不會被修改。</li>
                            <li><i class="fa-solid fa-check"></i>對象：Array & String</li>
                        </ul>
                    </div>
                    <div class="article-codeNote">
<pre>
arr.slice(開始位置, 結束位置-不包含)
str.slice(開始位置, 結束位置-不包含)
</pre>
                    </div>
                    <div class="article-coding">
<pre>
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.slice(2);
let arr3 = arr.slice(1, 3);
let arr4 = arr.slice(-1);

console.log(arr2)   // [3, 4, 5]
console.log(arr3)   // [2, 3]
console.log(arr4)   // [5]
console.log(arr)   // [1, 2, 3, 4, 5]
</pre>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-pencil"></i>arr.slice(2) 從陣列的索引位子 2 開始到最後。</li>
                            <li><i class="fa-solid fa-pencil"></i>arr.slice(1, 3) 從陣列的索引位子 1 開始到 2。</li>
                            <li><i class="fa-solid fa-pencil"></i>arr.slice(-1) 開始位子為負數的話，會從陣列的最後一個索引位子開始往前推。</li>
                            <li><i class="fa-solid fa-pencil"></i>arr 最後我們可以發現原陣列 arr 並未改變。</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- splice() -->
            <section>
                <div class="article-detail">
                    <h3>splice() 拼接</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>基本概念</h4>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>可以藉由刪除既有元素或加入新元素來改變一個陣列的內容。</li>
                            <li><i class="fa-solid fa-check"></i>原本的陣列將會被修改。</li>
                            <li><i class="fa-solid fa-check"></i>對象：Array</li>
                        </ul>
                    </div>
                    <div class="article-codeNote">
<pre>
arr.splice(起始點, 要刪掉的個數, 要插入的值)   // 插入一個或多個值
arr.splice(起始點, 要刪掉的個數)   // 刪除中間的值
</pre>
                    </div>
                    <div class="article-coding">
<pre>
let arr = [0, 1, 2, 3, 4]
arr.splice(2, 0, 99)   // 在陣列 2 的位子，刪掉 0 個，插入數字 99。
console.log(arr)   // [0, 1, 99, 2, 3, 4]
</pre>
                    </div>
                    <div class="article-coding">
<pre>
let arr = [0, 1, 2, 3, 4]
arr.splice(2, 2)   // 在陣列 2 的位子，刪掉 2 個。
console.log(arr)   // [0, 1, 4]
</pre>
                    </div>
                    <div class="article-txt">
                        <p>使用 splice 取值時，也可以運用另一個變數來接住回傳值（陣列），以便後續應用：</p>
                    </div>
                    <div class="article-coding">
<pre>
let arr = [0, 1, 2, 3, 4]
let deletedNumbers = arr.splice(2, 2)
console.log(deletedNumbers)   // [2, 3]
</pre>
                    </div>
                </div>
            </section>

            <!-- split() 分割 -->
            <section>
                <div class="article-detail">
                    <h3>split()</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>基本概念</h4>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>使用指定的分隔符字符串將一個 string 分割成子字符串數組。</li>
                            <li><i class="fa-solid fa-check"></i>原本的陣列將不會被修改。</li>
                            <li><i class="fa-solid fa-check"></i>對象：String</li>
                        </ul>
                    </div>
                    <div class="article-codeNote">
<pre>
str.split(分隔符, 限制的數量)
</pre>
                    </div>
                    <div class="article-coding">
<pre>
let str = "Hello, Charmy, 哈囉"
let NewArray1 = str.split(",")
let NewArray2 = str.split("")
let NewArray3 = str.split(",", 2)

console.log(NewArray1)   // ["Hello", " Charmy", " 哈囉]
console.log(NewArray2)   // [ "H", "e", "l",  "l", "o", ",", " ",  "C",  "h", "a", "r",  "m", "y", ",", " ", "哈", "囉" ]
console.log(NewArray3)   // [ "Hello", " Charmy" ]
</pre>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-pencil"></i>str.split(",") 以","做為分隔前後的字符。</li>
                            <li><i class="fa-solid fa-pencil"></i>str.split("") 分隔所有字符。</li>
                            <li><i class="fa-solid fa-pencil"></i>str.split(",", 2) 以","做為分隔前後的字符，但只取前兩個。</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- 三者差異 -->
            <section>
                <div class="article-detail">
                    <h3>三者差異</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>slice()</th>
                                    <th>splice()</th>
                                    <th>split()</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>對象</td>
                                    <td>Array & String</td>
                                    <td>Array</td>
                                    <td>String</td>
                                </tr>
                                <tr>
                                    <td>原值</td>
                                    <td>不改變</td>
                                    <td>改變</td>
                                    <td>不改變</td>
                                </tr>
                                <tr>
                                    <td>用法</td>
                                    <td>arr.slice(begin, end)<br>str.slice(begin, end)</td>
                                    <td>array.splice(start, deleteCount, item1, item2, ...)</td>
                                    <td>str.split(separator, limit)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <a class="article-reference" href="https://chloelin.coderbridge.io/2022/02/14/js-splice-slice-split/" target="_blank"><i class="fa-solid fa-pen-to-square"></i>茫茫人海中寫程式 - [ js 筆記 ] 一次搞懂Javascript中的slice()、splice()、split()</a>
                        <a class="article-reference" href="https://chupai.github.io/posts/2007/js_slice_splice_split/" target="_blank"><i class="fa-solid fa-pen-to-square"></i>竹白記事本 - [ js 筆記 ] 一次搞懂Javascript中的slice()、splice()、split()</a>
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