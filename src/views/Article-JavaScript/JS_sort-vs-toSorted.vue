<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">sort() V.S. toSorted()</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-12-01</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>sort()</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Array.prototype.sort() 是 JavaScript 中用於對陣列進行排序的方法。它會將陣列的元素重新排列，預設情況下是根據字串 Unicode 編碼順序進行排序。</p>
                        <h4>基本用法：</h4>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const numbers = [4, 2, 8, 1, 6];
numbers.sort();

console.log(numbers);   // [1, 2, 4, 6, 8]
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>上述範例中 numbers 陣列中的數字會被轉換為字串，然後按照 Unicode 編碼順序進行排序。這樣在某些情況下會產生預期外的結果，因此如果想根據數字大小而不是字串順序進行排序，可以提供一個比較函式。</p>
                        <h4>自定義比較函式：</h4>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const numbers = [4, 2, 8, 1, 6];
numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers);   // [1, 2, 4, 6, 8]
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>上述範例中比較函式 function(a, b) { return a - b; } 會將陣列元素按照數字的大小進行升序排序。如果比較函式返回負數，表示 a 應該在 b 之前；如果返回正數，表示 b 應該在 a 之前；如果返回零，表示它們相等，順序不變。</p>
                        <h4>降序排序：</h4>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const numbers = [4, 2, 8, 1, 6];
numbers.sort(function(a, b) {
return b - a;
});

console.log(numbers);   // [8, 6, 4, 2, 1]
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>這個比較函式 function(a, b) { return b - a; } 會將陣列元素按照數字的大小進行降序排序。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>toSorted()</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Array.prototype.toSorted() 是 JavaScript 中用於對陣列進行排序的方法。它將數組元素按照指定的順序進行排序，並返回一個新的數組。</p>
                        <h4>toSorted() 的基本語法：</h4>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
array.toSorted([compareFn])
</pre>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>array 是需要排序的數組</li>
                            <li><i class="fa-solid fa-check"></i>compareFn 是可選的，指定排序順序的函數。如果省略，則將數組元素轉換為字符串，然後根據每個字符的 Unicode 碼位值進行排序。</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>compareFn 函數的語法：</h4>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
function compareFn(a, b) {
    // 返回 1 表示 a 大於 b。
    // 返回 -1 表示 a 小於 b。
    // 返回 0 表示 a 等於 b。
}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>將 arr 按照元素的長度進行排序：</h4>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const arr = ["Merry", "Christmas", "2023"];

const sortedArr = arr.toSorted((a, b) => a.length - b.length);

console.log(sortedArr);   // ["2023", "Merry", "Christmas"]
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在有 null 或 undefined 上的 array 使用 toSorted() 時，null 或 undefined 會被排序到末尾。</p>
                        <h4>在有 undefined 上的 array 使用 toSorted()：</h4>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const numbers = [1, undefined, 3, 2, undefined];

const sortedNumbers = numbers.toSorted();

console.log(sortedNumbers); // [1, 2, 3, undefined, undefined]
</pre>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>兩者差異</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>JavaScript 中的 sort() 和 toSorted() 都是用來對陣列進行排序的函數</li>
                            <li><i class="fa-solid fa-check"></i>sort() 方法會原地對陣列的所有元素進行排序，並返回此陣列。排序不一定是穩定的</li>
                            <li><i class="fa-solid fa-check"></i>toSorted() 方法會返回一個新陣列，其元素按升序排列。排序是穩定的</li>
                        </ul>
                    </div>
                    <div class="article-table" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <table>
                            <thead>
                                <tr>
                                    <th>特性</th>
                                    <th>sort()</th>
                                    <th>toSorted()</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>是否原地排序</td>
                                    <td>是</td>
                                    <td>否</td>
                                </tr>
                                <tr>
                                    <td>返回值</td>
                                    <td>原始陣列</td>
                                    <td>新陣列</td>
                                </tr>
                                <tr>
                                    <td>穩定性</td>
                                    <td>不一定</td>
                                    <td>一定</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>範例：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const arr = [2, 1, 3, 4, 5];

// 原地排序，返回原始陣列
arr.sort();
console.log(arr); // [1, 2, 3, 4, 5]

// 返回新陣列，不影響原始陣列
const sortedArr = arr.toSorted();
console.log(sortedArr); // [1, 2, 3, 4, 5]
</pre>
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