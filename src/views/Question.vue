<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="container text-center">
                    <div class="row row-cols-2 row-cols-sm-2 row-cols-md-4">
                        <div>
                            <button class="select-button" data-filter="all">All</button>
                        </div>
                        <div>
                            <button class="select-button" data-filter="LeetCode">LeetCode</button>
                        </div>
                        <div>
                            <button class="select-button" data-filter="Interview">Interview</button>
                        </div>
                        <div>
                            <button class="select-button" data-filter="Other">Other</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(0)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>前端面試可以問的問題 (參考)</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>若有幸進入貴公司，請問會接觸到哪些工作內容？</li>
                            <li><i class="fa-regular fa-note-sticky"></i>目前公司有幾位設計和後端，是怎麼合作的？</li>
                            <li><i class="fa-regular fa-note-sticky"></i>請問會需要整合不同的後端嗎？</li>
                            <li><i class="fa-regular fa-note-sticky"></i>專案的時程會很趕嗎？當工程師遇到困難時，會如何協助解決？</li>
                            <li><i class="fa-regular fa-note-sticky"></i>通常是怎麼處理 CSS 檔？是否依元件或頁面開檔案放置？樣式需要有命名規則？有導入 SCSS 嗎？</li>
                            <li><i class="fa-regular fa-note-sticky"></i>是否有遇過常改規格的情境？工程師會需要如何應對？</li>

                            <li><i class="fa-regular fa-note-sticky"></i>專案中有用到哪些設計模式？</li>
                            <li><i class="fa-regular fa-note-sticky"></i>會在什麼時候決定將共用邏輯抽取出來成為 function 或是常數？</li>
                            <li><i class="fa-regular fa-note-sticky"></i>如果有十幾個需求同時開發或是需要轉換框架函式庫，會怎麼進行？</li>

                            <li><i class="fa-regular fa-note-sticky"></i>您的工作上一天大概是怎麼過的？</li>
                            <li><i class="fa-regular fa-note-sticky"></i>最喜歡和最不喜歡這個團隊或公司的地方是什麼？</li>
                            <li><i class="fa-regular fa-note-sticky"></i>請問您通常都是怎麼帶領團隊？</li>
                            <li><i class="fa-regular fa-note-sticky"></i>這個團隊接下來的目標是什麼？</li>

                        </ul>
                    </div>
                </div>
            </section>

            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(1)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>JavaScript Array 方法(持續更新)</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-coding">
                        <pre>
// push(): 在陣列尾端新增一個或多個元素，並回傳新陣列的長度
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);   // [1, 2, 3, 4] 

// pop(): 移除陣列的最後一個元素，並回傳被移除的元素
let arr = [1, 2, 3];
let last = arr.pop();
console.log(last);   // 3

// shift(): 移除陣列的第一個元素，並回傳被移除的元素
let arr = [1, 2, 3];
let first = arr.shift();
console.log(first);   // 1

// unshift(): 在陣列頭端新增一個或多個元素，並回傳新陣列的長度
let arr = [1, 2, 3];
arr.unshift(0);
console.log(arr);   // [0, 1, 2, 3]

// splice(): 移除或替換陣列的元素
let arr = [1, 2, 3];
arr.splice(1, 1);
console.log(arr);   // [1, 3]

// slice(): 複製陣列中的一部分元素
let arr = [1, 2, 3];
let sliced = arr.slice(1, 2);
console.log(sliced);   // [2]

// sort(): 對陣列中的每個元素進行排序
let arr = [3, 2, 1];
arr.sort();
console.log(arr);   // [1, 2, 3]
// 自定義比較函式
let arr = [3, 2, 1];
arr.sort(function(a, b) {
    return a - b;
})
console.log(arr);   // [1, 2, 3]

// reverse(): 對陣列中的每個元素進行反轉
let arr = [1, 2, 3];
arr.reverse();
console.log(arr);   // [3, 2, 1]

// concat(): 對兩個陣列進行連接
let arr1 = [1, 2];
let arr2 = [3, 4];
let concat = arr1.concat(arr2);
console.log(concat);   // [1, 2, 3, 4]



// for: 對陣列中的每個元素進行操作
let arr = [1, 2, 3];
for (let i = 0; i &lt arr.length; i++) {
    console.log(arr[i]);   // 1 2 3
}

// forEach(): 對陣列中的每個元素進行操作
let arr = [1, 2, 3];
arr.forEach(function(element) {
    console.log(element);   // 1 2 3
})

// for...of: 對陣列中的每個元素進行操作
let arr = [1, 2, 3];
for (let element of arr) {
    console.log(element);   // 1 2 3
}

// map(): 對陣列中的每個元素進行操作，並返回新的陣列
let arr = [1, 2, 3];
let newArr = arr.map(function(element) {
    return element * 2;
})
console.log(newArr);   // [2, 4, 6]

// filter(): 對陣列中的每個元素進行操作，並返回符合條件的元素
let arr = [1, 2, 3];
let filtered = arr.filter(function(element) {
   return element > 1;
})
console.log(filtered);   // [2, 3]

// reduce(): 對陣列中的每個元素進行操作，並返回結果
let arr = [1, 2, 3];
let sum = arr.reduce(function(total, element) {
   return total + element;
})
console.log(sum);   // 6

// find(): 對陣列中的每個元素進行操作，並返回符合條件的第一個元素
let arr = [1, 2, 3];
let found = arr.find(function(element) {
    return element > 1;
})
console.log(found);   // 2  

// some(): 對陣列中的每個元素進行操作，並返回符合條件的元素
let arr = [1, 2, 3];
let some = arr.some(function(element) {
    return element > 1;
})
console.log(some);   // true

// every(): 對陣列中的每個元素進行操作，並返回符合條件的元素
let arr = [1, 2, 3];
let every = arr.every(function(element) {
    return element > 1;
})
console.log(every);   // false



// indexOf(): 返回元素在陣列中的索引值
let arr = [1, 2, 3];
let index = arr.indexOf(2);
console.log(index);   // 1
let index2 = arr.indexOf(4);
console.log(index2);   // -1

// includes(): 檢查陣列中是否包含指定的元素
let arr = [1, 2, 3];
let includes = arr.includes(2);
console.log(includes);   // true

// join(): 將陣列元素連接成字串，并以指定的分隔符號分隔
let arr = [1, 2, 3];
let str = arr.join(' ');
console.log(str);   // 1 2 3

// split(): 將字串分割成陣列
let str = 'hello world';
let arr = str.split(' ');
console.log(arr);   // ['hello', 'world']

// length: 陣列的長度
let arr = [1, 2, 3];
console.log(arr.length);   // 3

// Array.isArray(): 檢查物件是否為陣列
let arr = [1, 2, 3];
let isArray = Array.isArray(arr);
console.log(isArray);   // true

// Array.toString(): 將陣列元素轉換為字串
let arr = [1, 2, 3];
let str = arr.toString();
console.log(str);   // 1,2,3

// Array.valueOf(): 將陣列元素轉換為值
let arr = [1, 2, 3];
let value = arr.valueOf();
console.log(value);   // [1, 2, 3]

// Array.toLocaleString(): 將陣列元素轉換為字串，並以指定的格式輸出
let arr = [1, 2, 3];
let str = arr.toLocaleString();
console.log(str);   // 1,2,3

// __proto__: 陣列的 prototype 屬性
let arr = [1, 2, 3];
console.log(arr.__proto__);   // [object Array]

// Array.constructor: 陣列的構造函數
let arr = [1, 2, 3];
console.log(arr.constructor);   // function Array() { [native code] }
</pre>
                    </div>
                </div>
            </section>

            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(2)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>請問以下 console.log 會顯示出什麼 (淺拷貝 & 深拷貝 觀念)</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-coding">
                        <pre>
let a = 1;
let b = a;
b = 2;
console.log(a);   // 1
console.log(b);   // 2
let m = [1, 2];
let n = m;
n[0] = 3;
console.log(m);   // [3, 2]
console.log(n);   // [3, 2]
</pre>
                    </div>
                </div>
            </section>

            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(3)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>運算子</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-coding">
                        <pre>
console.log(2 + 3);   // 5
console.log(2 + "3");   // 23
console.log("2" + "3");   // 23
console.log("2" + 3);   // 23

console.log(2 - 3);   // -1
console.log(2 - "3");   // -1
console.log("2" - "3");   // -1
console.log("2" - 3);   // -1

console.log(2 * 3);   // 6
console.log(2 * "3");   // 6
console.log("2" * "3");   // 6
console.log("2" * 3);   // 6

console.log(2 / 3);   // 0.6666666666666666
console.log(2 / "3");   // 0.66666666666666666
console.log("2" / "3");   // 0.6666666666666666
console.log("2" / 3);   // 0.6666666666666666

console.log(2 + + 3);   // 5
console.log(2 + + "3");   // 5
console.log("2" + + "3");   // 23
console.log("2" + + 3);   // 23

console.log(2 - - 3);   // 5
console.log(2 - - "3");   // 5
console.log("2" - - "3");   // 5
console.log("2" - - 3);   // 5

console.log("沒有 * *");
console.log("沒有 / /");

console.log(2 + - 3);   // -1
console.log("沒有 + *");
console.log("沒有 + /");

console.log(2 - + 3);   // -1
console.log("沒有 - *");
console.log("沒有 - /");

console.log(2 * + 3);   // 6
console.log(2 * - 3);   // -6
console.log("沒有 * /");

console.log(2 / + 3);   // 0.6666666666666666
console.log(2 / - 3);   // -0.6666666666666666
console.log("沒有 / *");

console.log(NaN === NaN);   // false
console.log(0 === -0);   //  true
console.log(1 === 1);   //  true

console.log({} + [] === 0);   // false
console.log([] + [] === '');   // true
console.log(false + 1 === 1);   // true
console.log([] * 1 === 0);   // true
console.log(typeof NaN === 'number');   // true

console.log(NaN == NaN);   // false
console.log(5 == '5');   // true
console.log([] == '');   // true
console.log(0 == '0');   // true
console.log(0 === '0');   // false 
console.log(0 == '');   // true
console.log(0 === '');   // false
console.log(0 == []);   // true
console.log([] == 0);  // true
console.log([] == 0);  // true
console.log(({}) == '[object Object]');   // true
console.log(({}) == {});   // false
</pre>
                    </div>
                </div>
            </section>

            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(4)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>請問 Arrow function 及一般 function 中的 this 有何不同</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-txt">
                        <p>普通 function 中的 this：</p>
                    </div>
                    <div class="question-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>在 JavaScript 中，this 是指向函式呼叫時的物件</li>
                            <li><i class="fa-regular fa-note-sticky"></i>當函式沒有被任何物件呼叫時，this 會指向全域物件</li>
                            <li><i class="fa-regular fa-note-sticky"></i>當函式被物件呼叫時，this 會指向該物件</li>
                            <li><i class="fa-regular fa-note-sticky"></i>當函式透過 call() 或 apply() 方法呼叫時，this 會指向該方法的參數</li>
                        </ul>
                    </div>
                    <div class="question-txt">
                        <p>箭頭 function 中的 this：</p>
                    </div>
                    <div class="question-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>箭頭 function 中的 this 指向函式定義時的作用域的 this</li>
                            <li><i class="fa-regular fa-note-sticky"></i>箭頭 function 中的 this 不會隨著函式呼叫時的作用域而改變</li>
                        </ul>
                    </div>
                    <div class="question-coding">
                        <pre>
// 普通 function 中的 this
function foo() {
    console.log(this);   // 全域物件
}
foo();   // 輸出：window

// 箭頭 function 中的 this
const bar = () => {
    console.log(this);   // 全域物件
};

bar();   // 輸出：window

// 普通 function 作為物件方法調用
const obj = {
    fn: function() {
        console.log(this);   // obj
    },
};

obj.fn();   // 輸出：obj

// 箭頭 function 作為物件方法調用
const obj2 = {
    fn: () => {
        console.log(this);   // obj2
    },
};

obj2.fn();   // 輸出：obj2

// 普通 function 透過 call() 或 apply() 方法調用
function fn() {
    console.log(this);   // 全域物件
}

fn.call(obj);   // 輸出：obj
fn.apply(obj, []);   // 輸出：obj

// 箭頭 function 透過 call() 或 apply() 方法調用
const arrowFn = () => {
    console.log(this);   // obj
};

arrowFn.call(obj);   // 輸出：obj
arrowFn.apply(obj, []);   // 輸出：obj
</pre>
                    </div>
                </div>
            </section>

            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(5)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>有一段 API 回應如下。請寫出一段程式，找出 airportId 為 TPE 的 city，並印出它的 cityName</p>
                    </div>
                    <div class="question-coding">
                        <pre>
"response": {
    "status": "success",
    "message": "",
    "data": [
        {
            "cityId": "4442",
            "cityName": "Singapore",
            "airports": [
                {
                    "airportId": "SIN",
                    "airportName": "Singapore Changi", 
                    "longitude": 103.99,
                    "latitude": 1.35
                },
                {
                    "airportId": "XSP",
                    "airportName": "Seletar Airport",
                    "longitude": 103.87,
                    "latitude": 1.42
                }
            ]
        },
        {
            "cityId": "4869",
            "cityName": "Taipei",
            "airports": [
                {
                    "airportId": "TPE",
                    "airportName": "Taiwan Taoyuan Intl",
                    "longitude": 121.232822,
                    "latitude": 25.077731
                }
            ]
        }
    ]
}
</pre>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-coding">
                        <pre>
const ans = data.response.data.find(city => city.airports.find(airport => airport.airportId === "TPE"))
console.log(ans.cityName);
</pre>
                    </div>
                </div>
            </section>

            <section class="all Other question-block" :class="{ modifyHeight: heightActive }" @click="transform(6)">
                <div class="question-title">
                    <h2>Other</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>企業發放的獎金根據利潤提成。</p>
                        <p>利潤(I)低於或等於10萬元時，獎金可提10%；</p>
                        <p>利潤高於10萬元，低於20萬元時，低於10萬元的部分按10%提成，高於10萬元的部分，可提成7.5%；</p>
                        <p>20萬到40萬之間時，高於20萬元的部分，可提成5%；40萬到60萬之間時高於40萬元的部分，可提成3%；</p>
                        <p>60萬到100萬之間時，高於60萬元的部分，可提成1.5%，高於100萬元時，超過100萬元的部分按1%提成，</p>
                        <p>從鍵盤輸入當月利潤I，求應發放獎金總數？</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-coding">
                        <pre>
# Python
profit=int(input("利潤值："))
list_profit=[0,100000,200000,400000,600000,1000000]
ratio=[0.1,0.075,0.05,0.03,0.015,0.01]
bonus=0
for x in range(len(ratio)):
    if profit > list_profit[x]:
        bonus+=(profit-list_profit[x])*ratio[x]
        profit=list_profit[x]
    else:
        continue

print(bonus)
</pre>
                    </div>
                </div>
            </section>

            <section class="all Other question-block" :class="{ modifyHeight: heightActive }" @click="transform(7)">
                <div class="question-title">
                    <h2>Other</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>一個整數，它加上100後是一個完全平方數，再加上168又是一個完全平方數，請問該數是多少？</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-coding">
                        <pre>
# Python

for x in range(2,85,2):
    y = 168 / x
    if x > y and (x + y) % 2 == 0 and (x - y) % 2 == 0:
        m = (x + y) / 2
        n = (x - y) / 2
        x = n * n - 100

print(x)
</pre>
                    </div>
                </div>
            </section>

            <section class="all LeetCode question-block" :class="{ modifyHeight: heightActive }" @click="transform(8)">
                <div class="question-title">
                    <h2>LeetCode <span style="color: #00B8A3;">(Easy)</span></h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>Given the array of integers nums, you will choose two different indices i and j of that array.
                            Return the maximum value of (nums[i]-1)*(nums[j]-1).</p>
                    </div>
                    <div class="question-txt" style="color: #999999;">
                        <p>給定整數數組 nums，將選擇該數組的兩個不同索引 i 和 j。傳回的最大值 (nums[i]-1)*(nums[j]-1)。</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-coding">
                        <pre>
// JavaScript

const maxProduct = function(nums) {
    let max = 0;
    for(let i = 0; i &lt; nums.length; i++) {
        for(let j = i + 1; j &lt; nums.length; j++) {
            max = Math.max(max, (nums[i] - 1) * (nums[j] - 1));
        }
    }
    return max;
};

console.log(maxProduct([8, 9, 1 , 11]));   // 80
</pre>
                    </div>
                    <div class="question-coding">
                        <pre>
# Python

def maxProduct(nums):
    nums.sort()
    return (nums[-1]-1)*(nums[-2]-1)

print(maxProduct([8, 9, 1 , 11]))   # 80
</pre>
                    </div>
                    <div class="question-coding">
                        <pre>
# Python

class Solution(object):
    def maxProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums.sort()
        return (nums[-1]-1)*(nums[-2]-1)

print(Solution().maxProduct([8, 9, 1 , 11]))   # 80
</pre>
                    </div>
                    <div class="question-coding">
                        <pre>
# Python3

class Solution:
    def maxProduct(self, nums: list[int]) -> int:
        nums.sort()
        return (nums[-1]-1)*(nums[-2]-1)

print(Solution().maxProduct([8, 9, 1, 11]))   # 80
</pre>
                    </div>

                </div>
            </section>

            <section class="all LeetCode question-block" :class="{ modifyHeight: heightActive }" @click="transform(9)">
                <div class="question-title">
                    <h2>LeetCode <span style="color: #00B8A3;">(Easy)</span></h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>Given an array of integers nums and an integer target, return indices of the two numbers such
                            that they add up to target.</p>
                        <p>You may assume that each input would have exactly one solution, and you may not use the same
                            element twice.</p>
                        <p>You can return the answer in any order.</p>
                    </div>
                    <div class="question-txt" style="color: #999999;">
                        <p>給定一個整數數組 nums 和一個整數 target，傳回兩個數字的索引，使相加為 target。</p>
                        <p>假設每個輸入都有一個解決方案，並且不能兩次使用相同的元素。</p>
                        <p>按任意順序返回答案。</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-coding">
                        <pre>
// JavaScript

const twoSum = function(nums, target) {
    for(let i = 0; i &lt nums.length; i++) {
        for(let j = i + 1; j &lt nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 22));   // [1, 3]
</pre>
                    </div>
                    <div class="question-coding">
                        <pre>
# Python

def twoSum(nums, target):
    for i in range(len(nums)):
        for j in range(i+1,len(nums)):
            if nums[i]+nums[j]==target:
                return [i,j]

print(twoSum([2, 7, 11, 15], 22))   # [1, 3]
</pre>
                    </div>
                    <div class="question-coding">
                        <pre>
# Python

class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        for i in range(len(nums)):
            for j in range(i+1,len(nums)):
                if nums[i]+nums[j]==target:
                    return [i,j]

print(Solution().twoSum([2, 7, 11, 15], 22))   # [1, 3]
</pre>
                    </div>
                    <div class="question-coding">
                        <pre>
# Python3

class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        for i in range(len(nums)):
            for j in range(i+1,len(nums)):
                if nums[i]+nums[j]==target:
                    return [i, j]

print(Solution().twoSum([2, 7, 11, 15], 22))   # [1, 3]
</pre>
                    </div>
                </div>
            </section>

            <section class="all LeetCode question-block" :class="{ modifyHeight: heightActive }" @click="transform(10)">
                <div class="question-title">
                    <h2>LeetCode <span style="color: #00B8A3;">(Easy)</span></h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>Given an integer x, return true if x is a palindrome, and false otherwise.</p>
                    </div>
                    <div class="question-txt" style="color: #999999;">
                        <p>給定一個整數 x，true 如果 x 是一個則傳回回文，以及 false Other 情況。</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-coding">
                        <pre>
// JavaScript

const isPalindrome = function(x) {
    return x.toString() === x.toString().split('').reverse().join('');
};

console.log(isPalindrome(121));   // true
console.log(isPalindrome(-121));   // false
</pre>
                    </div>
                    <div class="question-coding">
                        <pre>
# Python

def isPalindrome(x):
    if x &lt 0:
        return False
    else:
        return str(x) == str(x)[::-1]

print(isPalindrome(121))   # True
print(isPalindrome(-121))   # False
</pre>
                    </div>
                    <div class="question-coding">
                        <pre>
# Python

class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x &lt 0:
            return False
        else:
            x = str(x)
            if x == x[::-1]:
                return True
            else:
                return False

print(Solution().isPalindrome(121))   # True
print(Solution().isPalindrome(-121))   # False
</pre>
                    </div>
                    <div class="question-coding">
                        <pre>
# Python3

class Solution:
    def isPalindrome(self, x: int) -> bool:
        return str(x) == str(x)[::-1]

print(Solution().isPalindrome(121))   # True
print(Solution().isPalindrome(-121))   # False
</pre>
                    </div>
                </div>
            </section>

            <section class="all LeetCode question-block" :class="{ modifyHeight: heightActive }" @click="transform(11)">
                <div class="question-title">
                    <h2>LeetCode <span style="color: #00B8A3;">(Easy)</span></h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>Roman to Integer</p>
                    </div>
                    <div class="question-txt" style="color: #999999;">
                        <p>羅馬數字轉整數。</p>
                    </div>
                    <div class="article-table" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <table>
                            <thead>
                                <tr>
                                    <th>Symbol(符號)</th>
                                    <th>Value(值)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>I</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>V</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>X</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>L</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>C</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>D</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <td>M</td>
                                    <td>1000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-coding">
                        <pre>
// JavaScript

const romanToInt = function(s) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let sum = 0;
    for (let i = 0; i &lt s.length; i++) {
        if (roman[s[i]] &lt roman[s[i + 1]]) {
            sum -= roman[s[i]];
        } else {
            sum += roman[s[i]];
        }
    }
    return sum;
};

console.log(romanToInt("MCMXCIV"));   // 1994
</pre>
                    </div>
                    <div class="question-coding">
                        <pre>
# Python

def roman_to_int(s):
    roman_dict = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    num = 0
    for i in range(len(s) - 1):
        if roman_dict[s[i]] &lt roman_dict[s[i + 1]]:
            num -= roman_dict[s[i]]
        else:
            num += roman_dict[s[i]]
    num += roman_dict[s[-1]]
    return num

print(roman_to_int('MCMXCIV'))   # 1994
</pre>
                    </div>
                    <div class="question-coding">
                        <pre>
# Python

class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        roman = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
        result = 0
        for i in range(len(s)):
            if i > 0 and roman[s[i]] > roman[s[i - 1]]:
                result += roman[s[i]] - 2 * roman[s[i - 1]]
            else:
                result += roman[s[i]]
        return result

print(Solution().romanToInt("MCMXCIV"))   # 1994
</pre>
                    </div>
                    <div class="question-coding">
                        <pre>
# Python3

class Solution:
    def romanToInt(self, s: str) -> int:
        roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        result = 0
        for i in range(len(s) - 1):
            if roman[s[i]] &lt roman[s[i + 1]]:
                result -= roman[s[i]]
            else:
                result += roman[s[i]]
        result += roman[s[-1]]
        return result

print(Solution().romanToInt("MCMXCIV"))   # 1994
</pre>
                    </div>
                </div>
            </section>

            <section class="all LeetCode question-block" :class="{ modifyHeight: heightActive }" @click="transform(12)">
                <div class="question-title">
                    <h2>LeetCode <span style="color: #00B8A3;">(Easy)</span></h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such
                            that each unique element appears only once. The relative order of the elements should be kept
                            the same. Then return the number of unique elements in nums.</p>
                        <p>Consider the number of unique elements of nums to be k, to get accepted, you need to do the
                            following things:</p>
                        <p><i class="fa-regular fa-note-sticky"></i>Change the array nums such that the first k elements of
                            nums contain the unique elements in the order they were present in nums initially. The remaining
                            elements of nums are not important as well as the size of nums.</p>
                        <p><i class="fa-regular fa-note-sticky"></i>Return k.</p>
                        <p>Custom Judge:</p>
                        <p>The judge will test your solution with the following code:</p>
                        <div class="question-coding">
                            <pre>
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i &lt; k; i++) {
    assert nums[i] == expectedNums[i];
}
</pre>
                        </div>
                        <p>If all assertions pass, then your solution will be accepted.</p>
                        <p>Example 1:</p>
                        <div class="question-coding">
                            <pre>
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>
                        </div>
                        <p>Example 2:</p>
                        <div class="question-coding">
                            <pre>
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>
                        </div>
                        <p>Constraints:</p>
                        <p><i class="fa-regular fa-note-sticky"></i>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></p>
                        <p><i class="fa-regular fa-note-sticky"></i>-100 &lt;= nums[i] &lt;= 100</p>
                        <p><i class="fa-regular fa-note-sticky"></i>nums is sorted in non-decreasing order.</p>
                    </div>
                    <div class="question-txt" style="color: #999999;">
                        <p>給定一個以非遞減順序排序的整數陣列 nums，原地移除重複的元素，使得每個獨特的元素僅出現一次。元素的相對順序應保持不變。然後返回 nums 中獨特元素的數量。</p>
                        <p>將 nums 中獨特元素的數量表示為 k，要被接受，你需要執行以下操作：</p>
                        <p><i class="fa-regular fa-note-sticky"></i>修改陣列 nums，使得 nums 的前 k 個元素包含最初在 nums
                            中出現的獨特元素，並且順序相同。nums 的其餘元素以及 nums 的大小都不重要。</p>
                        <p><i class="fa-regular fa-note-sticky"></i>返回 k。</p>
                        <p>自定義判斷器：</p>
                        <p>判斷器將使用以下程式碼測試你的解答：</p>
                        <div class="question-coding">
                            <pre>
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i &lt; k; i++) {
    assert nums[i] == expectedNums[i];
}
</pre>
                        </div>
                        <p>如果所有斷言都通過，則您的解答將被接受。</p>
                        <p>Example 1:</p>
                        <div class="question-coding">
                            <pre>
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]

解釋：您的函數應該返回 k = 2，其中 nums 的前兩個元素分別為 1 和 2。
返回的 k 之後的元素是不重要的（因此它們是底線）。
</pre>
                        </div>
                        <p>Example 2:</p>
                        <div class="question-coding">
                            <pre>
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
解釋：您的函數應該返回 k = 5，其中 nums 的前五個元素分別為 0、1、2、3 和 4。
返回的 k 之後的元素是不重要的（因此它們是底線）。
</pre>
                        </div>
                        <p>Constraints:</p>
                        <p><i class="fa-regular fa-note-sticky"></i>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></p>
                        <p><i class="fa-regular fa-note-sticky"></i>-100 &lt;= nums[i] &lt;= 100</p>
                        <p><i class="fa-regular fa-note-sticky"></i>nums 是按非遞減順序排序的。</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-coding">
                        <pre>
// JavaScript

const removeDuplicates = function(nums) {
    let i = 0;
    for (let n of nums)
        if (n > nums[i])
            nums[++i] = n;
    return ++i;
};

console.log(removeDuplicates([1, 1, 2]));   // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));   // 5
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));   // 6
</pre>
                    </div>
                    <div class="question-coding">
                        <pre>
# Python

def removeDuplicates(nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        i = 0
        while i &lt len(nums)-1:
            if nums[i] == nums[i+1]:
                del nums[i]
            else:
                i += 1
        return len(nums)
    
print(removeDuplicates([1,1,2]))   # 2
print(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))   # 5
</pre>
                    </div>
                    <div class="question-coding">
                        <pre>
# Python

class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        i = 0
        while i &lt len(nums)-1:
            if nums[i] == nums[i+1]:
                del nums[i]
            else:
                i += 1
        return len(nums)
</pre>
                    </div>
                    <div class="question-coding">
                        <pre>
# Python3

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0
        i = 0
        for j in range(1, len(nums)):
            if nums[j] != nums[i]:
                i += 1
                nums[i] = nums[j]
        return i + 1
</pre>
                    </div>
                </div>
            </section>

            <section class="all LeetCode question-block" :class="{ modifyHeight: heightActive }" @click="transform(13)">
                <div class="question-title">
                    <h2>LeetCode <span style="color: #FAC31D;">(Medium)</span></h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
                            and return an array of the non-overlapping intervals that cover all the intervals in the input.
                        </p>
                        <p>Example 1:</p>
                        <p>Input: intervals = [[1,3],[2,6],[8,10],[15,18]]</p>
                        <p>Output: [[1,6],[8,10],[15,18]]</p>
                        <p>Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].</p>
                        <p>Example 2:</p>
                        <p>Input: intervals = [[1,4],[4,5]]</p>
                        <p>Output: [[1,5]]</p>
                        <p>Explanation: Intervals [1,4] and [4,5] are considered overlapping.</p>
                    </div>
                    <div class="question-txt" style="color: #999999;">
                        <p>給定一個數組 intervals where ，合併所有重疊間隔，並傳回覆蓋輸入 中所有間隔的非重疊間隔數組。intervals[i] = [starti, endi]</p>
                        <p>範例 1:</p>
                        <p>Input: intervals = [[1,3],[2,6],[8,10],[15,18]]</p>
                        <p>Output: [[1,6],[8,10],[15,18]]</p>
                        <p>解釋：由於區間 [1,3] 和 [2,6] 重疊，因此將它們合併到 [1,6] 中。</p>
                        <p>範例 2:</p>
                        <p>Input: intervals = [[1,4],[4,5]]</p>
                        <p>Output: [[1,5]]</p>
                        <p>間隔 [1,4] 和 [4,5] 被視為重疊。</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-coding">
                        <pre>
// JavaScript

const merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const results = [intervals[0]];
    for (let i = 1; i &lt; intervals.length; i++) {
        const last = results[results.length - 1];
        if (last[1] >= intervals[i][0]) {
            last[1] = Math.max(last[1], intervals[i][1]);
        } else {
            results.push(intervals[i]);
        }
    }
    return results;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));   // [[1, 6], [8, 10], [15, 18]]
console.log(merge([[1, 4], [4, 5]]));   // [[1, 5]] 
</pre>
                    </div>
                    <div class="question-coding">
                        <pre>
# Python

def merge(intervals):
    intervals.sort()
    res = []
    for interval in intervals:
        if not res or res[-1][1] &lt; interval[0]:
            res.append(interval)
        else:
            res[-1][1] = max(res[-1][1], interval[1])
    return res

print(merge([[1, 3],[2, 6],[8, 10],[15, 18]]))   # [[1, 6], [8, 10], [15, 18]]
</pre>
                    </div>
                    <div class="question-coding">
                        <pre>
# Python

class Solution(object):
    def merge(self, intervals):
        """
        :type intervals: List[List[int]]
        :rtype: List[List[int]]
        """
        intervals.sort()
        res = []
        for interval in intervals:
            if not res or res[-1][1] &lt; interval[0]:
                res.append(interval)
            else:
                res[-1][1] = max(res[-1][1], interval[1])
        return res

solution = Solution()
print(solution.merge([[1, 3],[2, 6],[8, 10],[15, 18]]))   # [[1, 6], [8, 10], [15, 18]]
</pre>
                    </div>
                    <div class="question-coding">
                        <pre>
# Python3

from typing import List

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x: x[0])
        res = []
        for interval in intervals:
            if not res or res[-1][1] &lt; interval[0]:
                res.append(interval)
            else:
                res[-1][1] = max(res[-1][1], interval[1])
        return res
    
print(Solution().merge([[1, 3],[2, 6],[8, 10],[15, 18]]))   # [[1, 6], [8, 10], [15, 18]]
</pre>
                    </div>
                </div>
            </section>

            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(14)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>請解釋 Cookie、LocalStorage 和 SessionStorage 的差異</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-txt">
                        <p>Cookie：</p>
                    </div>
                    <div class="question-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>可設定失效時間，預設是關閉瀏覽器後失效</li>
                            <li><i class="fa-regular fa-note-sticky"></i>大小約 4kb</li>
                            <li><i class="fa-regular fa-note-sticky"></i>每次都會攜帶在HTTP中，保存過多數據會帶來效能問題</li>
                        </ul>
                    </div>
                    <div class="question-txt">
                        <p>LocalStorage：</p>
                    </div>
                    <div class="question-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>除非被清除，否則永久保存</li>
                            <li><i class="fa-regular fa-note-sticky"></i>大小一般為 5Mb</li>
                            <li><i class="fa-regular fa-note-sticky"></i>僅在瀏覽器保存，不參與Server的溝通</li>
                        </ul>
                    </div>
                    <div class="question-txt">
                        <p>SessionStorage：</p>
                    </div>
                    <div class="question-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>關閉頁面或瀏覽器後被清除</li>
                            <li><i class="fa-regular fa-note-sticky"></i>大小一般為 5Mb</li>
                            <li><i class="fa-regular fa-note-sticky"></i>僅在瀏覽器保存，不參與Server的溝通</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(15)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>請問以下 console.log 會顯示出什麼 (var、let 和 for 迴圈及 setTimeout 觀念)</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-coding">
                        <pre>
for (var i = 0; i &lt; 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}
// 3 3 3

for (let i = 0; i &lt; 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}
// 0 1 2

for (var i = 0; i &lt;= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}
// 4 4 4 4

for (let i = 0; i &lt;= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}
// 0 1 2 3
</pre>
                    </div>
                </div>
            </section>

            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(16)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>請解釋 JavaScript 中 var、let 和 const 的差異</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>在 JavaScript 早期只有 var，直到 ES2015(ES6) 時才加入了 let 與
                                const</li>
                            <li><i class="fa-regular fa-note-sticky"></i>在作用域上，var 可以是全域、也可以是以函式作為範圍；let 與 const 則是以區塊作為範圍
                            </li>
                            <li><i class="fa-regular fa-note-sticky"></i>在宣告上，var 可以被重複宣告，但是 let 與 const 則不行</li>
                            <li><i class="fa-regular fa-note-sticky"></i>在 hoisting 上，var 宣告的變數會自動初始化值為
                                undefined，因為在宣告前就使用變數，不會出現錯誤，而會是 undefined ；但是 let 與 const 宣告的變數則不會自動初始化，而是會進到暫時死區 (TDZ)，因此在
                                let 與 const 宣告變數前使用該變數，會出現錯誤</li>
                            <li><i class="fa-regular fa-note-sticky"></i>let 與 const 在絕多數面向都是一樣，兩者的一大區別在於，用 let
                                宣告的變數可以重新賦值，但是用 const 的不行</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(17)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>請解釋 vue 生命週期中 watch 和 computed 的差異</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-txt">
                        <p>computed:(計算屬性)：</p>
                        <p>computed 是一個屬性，用於定義一個依賴於其他數據的屬性。它們根據它們所依賴的數據自動更新，只有當依賴的數據發生變化時，計算屬性才會重新求值。</p>
                        <p>computed 屬性在數據變化時具有緩存的特性，當計算屬性依賴的數據沒有改變時，不會重新計算，而是直接返回之前的結果。</p>
                    </div>
                    <div class="question-txt">
                        <p>watch:(監聽)：</p>
                        <p>watch 是一個選項，用於監聽數據的變化並在數據發生改變時執行相應的函數。它允許執行自定義的邏輯，當數據變化時作出不同的響應。</p>
                        <p>watch 通常用於當需要執行異步操作，或者需要更複雜的邏輯來響應數據變化時。</p>
                    </div>
                    <div class="question-txt">
                        <p>computed 適合用於根據數據的轉換或計算得到一個新值，而 watch 則適合用於當需要執行一些副作用操作，或者需要更複雜的邏輯來響應數據的改變。</p>
                    </div>
                </div>
            </section>

            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(18)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>請問 CSS 水平垂直置中方法</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-txt">
                        <p>1、Flexbox</p>
                    </div>
                    <div class="question-coding">
                        <pre>
.parent {
    display: flex;
    justify-content: center;   /* 水平置中 */   
    align-items: center;   /* 垂直置中 */
}
</pre>
                        <pre>
.parent {
    display: flex;
    justify-content: center;   /* 水平置中 */   
    align-content: center;   /* 垂直置中 */
    flex-wrap: wrap;
}
</pre>
                    </div>
                    <div class="question-txt">
                        <p>2、相對定位 + transform</p>
                    </div>
                    <div class="question-coding">
                        <pre>
.child {
    position: relative;
    top: 50%;  
    left: 50%;
    transform: translate(-50%, -50%);
}
</pre>
                    </div>
                    <div class="question-txt">
                        <p>3、絕對定位</p>
                    </div>
                    <div class="question-coding">
                        <pre>
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}
</pre>
                    </div>
                </div>
            </section>

            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(19)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>請問 vue 中 v-if 和 v-show 的差別</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-txt">
                        <p>v-if 和 v-show 都是用來根據條件來控制 DOM 元素顯示與隱藏的指令</p>
                        <p>v-if 是「真正的」條件渲染指令。如果條件為假，DOM 元素將完全從 DOM 中移除，反之，如果條件為真，DOM 元素將被插入到 DOM 中。這意味著在條件為假時，Vue 將不會編譯或渲染該元素及其子元素。</p>
                        <p>v-show 是簡單的 CSS 顯示/隱藏切換指令。DOM 元素始終會被渲染到 DOM 中，只是通過 CSS 的 display 屬性來控制其是否可見。當條件為假時，元素的 display 屬性會被設置為 none，使其隱藏，條件為真時則設置為 block(或其他適當的值)，使其顯示。</p>
                        <p>如果應用中的元素頻繁地需要顯示和隱藏，那麼使用 v-show 可能更合適，因為它不會造成DOM的不必要重繪。但是，如果元素很少需要改變顯示狀態，或者在顯示和隱藏之間切換的代價比較高，那麼使用 v-if 更好，因為它能夠更徹底地控制 DOM 的渲染。</p>
                    </div>
                </div>
            </section>

            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(20)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>請問網頁中 SSR 和 CSR 的差別</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-txt">
                        <p>SSR 的意思是伺服器端渲染端渲染。SSR 在使用者發送請求時，伺服器端會先將頁面渲染完成，並將完整的 HTML 響應給瀏覽器，瀏覽器只需將 HTML 解析並顯示即可。SSR 的優點是可以提高頁面的初始加載速度，因為瀏覽器在載入頁面時，不需要從伺服器端獲取額外的資料，即可看到完整的頁面內容。此外，SSR 也可以提高頁面的 SEO 效果，因為搜尋引擎可以直接抓取伺服器端渲染的 HTML，並將其索引到搜尋結果中。</p>
                        <p>CSR 的意思是瀏覽器端渲染。CSR 是將網頁的 HTML、CSS、JavaScript 等檔案都下載到瀏覽器後，再由瀏覽器端進行渲染CSR 的優點是可以提高網頁的效能，因為網頁的渲染工作可以由瀏覽器端進行，而不需要等待伺服器回應。此外，CSR 也更容易進行動態更新，因為瀏覽器可以直接更新已下載的檔案，而不需要重新載入整個網頁。CSR 的缺點是需要下載較多的檔案，因此在網路速度較慢的情況下，可能會導致網頁載入速度變慢。此外，CSR 也需要更複雜的程式碼，才能在瀏覽器端進行渲染。</p>
                    </div>
                </div>
            </section>

            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(21)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>請解釋 JavaScript 中 setTimeout 和 setInterval 的差別</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-txt">
                        <p>setTimeout 用於在指定的時間後執行一次程式碼</p>
                        <p>setInterval 用於在指定的時間間隔內重複執行一次程式碼</p>
                    </div>
                </div>
            </section>

            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(22)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>請解釋 JavaScript 中 undefined、undeclared 和 null 分別代表什麼意思</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-txt">
                        <p>Undefined(未定義)：代表變數已經被宣告，但目前尚未賦予任何值，或者表示對象屬性不存在的情況</p>
                        <p>Undeclared(未宣告)：代表變數尚未被宣告，意即嘗試使用一個還未宣告的變數</p>
                        <p>Null(空值)：代表變數已經被宣告，但被賦值為 null，表示值為空或不存</p>
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
import { ref, onMounted } from "vue";

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

const heightActive = ref(false);
const transform = (index) => {
    const cards = document.querySelectorAll(".all");
    const targetCard = cards[index];
    const ismodifyHeight = targetCard.classList.contains("modifyHeight");

    cards.forEach((card, i) => {
        if (i === index) {
            card.classList.toggle("modifyHeight", !ismodifyHeight);
        } else {
            card.classList.remove("modifyHeight");
        }
    });
};
</script>