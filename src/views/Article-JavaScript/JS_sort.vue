<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">陣列中的物件資料選取與排序</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-30</p>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>資料的排序與選取</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>2023/07/26 面試時遇到的題目，是關於 JavaScript 中，const 一個變數後，在裡面賦予一個 array 後再其中包含了 Object，在進行 key value 的選取與排序，以下題目有做些許的改變。</p>
                    </div>
                    <div class="article-coding">
<pre>
const data = [
    {"aaa": 26},
    {"bbb": 30},
    {"ccc": 18},
    {"aaa": 32},
    {"aaa": 22},
    {"ccc": 36},
];
</pre>
                    </div>
                    <div class="article-list">
                        <ol>
                            <li>1、如何只呈現 aaa 的資料</li>
                            <li>2、如何照數字由小到大重新排列</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>參考解答</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-coding">
<pre>
const data = [
    {"aaa": 26},
    {"bbb": 30},
    {"ccc": 18},
    {"aaa": 32},
    {"aaa": 22},
    {"ccc": 36},
];

const filteredData = data.filter(item => "aaa" in item);

console.log(filteredData);   // 只顯示 key 為 aaa 的資料
</pre>
                    </div>
                    <div class="article-coding">
<pre>
const data = [
    {"aaa": 26},
    {"bbb": 30},
    {"ccc": 18},
    {"aaa": 32},
    {"aaa": 22},
    {"ccc": 36},
];

function sortByValue(a, b) {
  const valueA = Object.values(a)[0];
  const valueB = Object.values(b)[0];
  return valueA - valueB;
}

data.sort(sortByValue);

console.log(data);   // value 由小到大排列
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>參考解說</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>只呈現 aaa 的資料</h4>
                        <p>使用 Array.prototype.filter() 方法來過濾 data 陣列，並使用箭頭函式來檢查每個陣列元素是否包含 "aaa" 屬性。如果包含 "aaa" 屬性，則該元素將被保留在新的陣列 filteredData 中。</p>
                        <p>執行程式碼後，將只看到包含 "aaa" 屬性的資料，而 filteredData 將會是一個新的陣列，只包含滿足條件的資料。</p>
                    </div>
                    <div class="article-coding">
<pre>
const data = [
    {"aaa": 26},
    {"bbb": 30},
    {"ccc": 18},
    {"aaa": 32},
    {"aaa": 22},
    {"ccc": 36},
];

// 使用 filter() 方法過濾只包含 "aaa" 屬性的資料
const filteredData = data.filter(item => "aaa" in item);
console.log(filteredData);
</pre>
                    </div>
                    <div class="article-txt">
                        <p><i class="fa-solid fa-pencil"></i>使用 for...of 迴圈</p>
                    </div>
                    <div class="article-coding">
<pre>
const data = [
    {"aaa": 26},
    {"bbb": 30},
    {"ccc": 18},
    {"aaa": 32},
    {"aaa": 22},
    {"ccc": 36},
];

// 使用 for...of 迴圈過濾只包含 "aaa" 屬性的資料
const filteredData = [];
for (const item of data) {
    if ("aaa" in item) {
        filteredData.push(item);
    }
}
console.log(filteredData);
</pre>
                    </div>
                    <div class="article-txt">
                        <p><i class="fa-solid fa-pencil"></i>使用 Array.prototype.reduce()</p>
                    </div>
                    <div class="article-coding">
<pre>
const data = [
    {"aaa": 26},
    {"bbb": 30},
    {"ccc": 18},
    {"aaa": 32},
    {"aaa": 22},
    {"ccc": 36},
];

// 使用 reduce() 方法過濾只包含 "aaa" 屬性的資料
const filteredData = data.reduce((result, item) => {
    if ("aaa" in item) {
        result.push(item);
    }
    return result;
}, []);
console.log(filteredData);
</pre>
                    </div>
                    <div class="article-txt">
                        <h4>照數字由小到大重新排列</h4>
                        <p>資料陣列 data 是一個物件陣列，每個物件只有一個屬性（例如 "aaa"、"bbb"、"ccc"）以及對應的數值。若想根據數值由小到大排列這些物件，可以使用 Array.prototype.sort() 方法，並傳遞一個自定義的排序函式來實現。在這個特定的情況下，需要先取出物件的數值來進行比較。</p>
                        <p>下方的程式碼中使用 Array.prototype.sort() 方法並傳遞 sortByValue 函式。sortByValue 函式會取得物件的 value 值，並根據這些值的大小來決定物件在排序後的位置。使用 Object.values() 方法來獲取物件的值，並確保只有一個 value 值。最後呼叫 sort() 方法，這會改變原陣列 data，使其按照 value 值由小到大排列。</p>
                    </div>
                    <div class="article-coding">
<pre>
const data = [
    {"aaa": 26},
    {"bbb": 30},
    {"ccc": 18},
    {"aaa": 32},
    {"aaa": 22},
    {"ccc": 36},
];

// 複製陣列
const sortedData = [...data];

function sortByValue(a, b) {
  const valueA = Object.values(a)[0];
  const valueB = Object.values(b)[0];
  return valueA - valueB;
}

// 排序
sortedData.sort(sortByValue);

// 原始陣列不受影響
console.log(data);   // 原始順序的陣列
console.log(sortedData);   // 排序後的陣列
</pre>
                    </div>
                    <div class="article-txt">
                        <p>使用 Array.prototype.sort() 方法結合箭頭函式來實現更簡潔的方法。這樣就不需要單獨定義排序函式，直接在 sort() 方法中指定比較邏輯。</p>
                        <p>在這個方法中，直接在 sort() 方法的參數中使用了一個箭頭函式。這個箭頭函式的內容和先前自定義的 sortByValueAscending 函式一樣，比較物件的 value 值，並根據結果排序。這樣可以省去單獨定義排序函式的步驟，使程式碼更簡潔。</p>
                    </div>
                    <div class="article-coding">
<pre>
const data = [
    {"aaa": 26},
    {"bbb": 30},
    {"ccc": 18},
    {"aaa": 32},
    {"aaa": 22},
    {"ccc": 36},
];

// 使用 sort() 方法並結合箭頭函式進行排序
data.sort((a, b) => Object.values(a)[0] - Object.values(b)[0]);

// 排序後的結果
console.log(data);
</pre>
                    </div>
                    <div class="article-txt">
                        <p>使用 for 迴圈進行冒泡排序的實現。冒泡排序是一種簡單的排序算法，通過反覆交換相鄰的元素，將最大值不斷地“浮”到數列的右端。</p>
                        <p>在每一輪迭代中使用 Object.values() 取得物件的 value 值並進行比較，若前一個元素的值大於後一個元素的值，則交換兩個元素的位置，將較大值往右“浮”。經過一輪迭代後，最大的值會浮到陣列的最後一個位置。再經過多次迭代，整個陣列會按照 value 值由小到大排列。</p>
                        <p>這個方法不會改變原始陣列 data，而是將排序後的結果存放在 sortedData 中。</p>
                    </div>
                    <div class="article-coding">
<pre>
const data = [
    {"aaa": 26},
    {"bbb": 30},
    {"ccc": 18},
    {"aaa": 32},
    {"aaa": 22},
    {"ccc": 36},
];

// 使用 for 迴圈來實現排序 // 不會改變原陣列，複製一份再排序
const sortedData = [...data];

for (let i = 0; i &lt; sortedData.length - 1; i++) {
    for (let j = 0; j &lt; sortedData.length - i - 1; j++) {
        const currentValue = Object.values(sortedData[j])[0];
        const nextValue = Object.values(sortedData[j + 1])[0];
        if (currentValue > nextValue) {
            [sortedData[j], sortedData[j + 1]] = [sortedData[j + 1], sortedData[j]];
        }
    }
}

// 排序後的結果
console.log(sortedData);
</pre>
                    </div>
                    <div class="article-txt">
                        <h4>照數字由大到小重新排列</h4>
                    </div>
                    <div class="article-coding">
<pre>
const data = [
    {"aaa": 26},
    {"bbb": 30},
    {"ccc": 18},
    {"aaa": 32},
    {"aaa": 22},
    {"ccc": 36},
];

// 複製陣列
const sortedData = [...data];

function sortByValue(a, b) {
  const valueA = Object.values(a)[0];
  const valueB = Object.values(b)[0];
  return valueB - valueA;   // 這裡比較的順序已經交換
}

// 排序
sortedData.sort(sortByValue);

// 原始陣列不受影響
console.log(data);   // 原始順序的陣列
console.log(sortedData);   // 排序後的陣列
</pre>
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