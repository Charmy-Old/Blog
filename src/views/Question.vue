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
                        <p>以下 console.log 會顯示出什麼 (淺拷貝 & 深拷貝 觀念)</p>
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

            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(1)">
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

            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(2)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>Arrow function 及一般 function 中的 this 有何不同</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-txt">
                        <p>普通 function 中的 this：</p>
                    </div>
                    <div class="question-list">
                        <ul>
                            <li><i class="fa-solid fa-pencil"></i>在 JavaScript 中，this 是指向函式呼叫時的物件</li>
                            <li><i class="fa-solid fa-pencil"></i>當函式沒有被任何物件呼叫時，this 會指向全域物件</li>
                            <li><i class="fa-solid fa-pencil"></i>當函式被物件呼叫時，this 會指向該物件</li>
                            <li><i class="fa-solid fa-pencil"></i>當函式透過 call() 或 apply() 方法呼叫時，this 會指向該方法的參數</li>
                        </ul>
                    </div>
                    <div class="question-txt">
                        <p>箭頭 function 中的 this：</p>
                    </div>
                    <div class="question-list">
                        <ul>
                            <li><i class="fa-solid fa-pencil"></i>箭頭 function 中的 this 指向函式定義時的作用域的 this</li>
                            <li><i class="fa-solid fa-pencil"></i>箭頭 function 中的 this 不會隨著函式呼叫時的作用域而改變</li>
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

            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(3)">
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

            <section class="all Other question-block" :class="{ modifyHeight: heightActive }" @click="transform(4)">
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

            <section class="all Other question-block" :class="{ modifyHeight: heightActive }" @click="transform(5)">
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
         
            <section class="all LeetCode question-block" :class="{ modifyHeight: heightActive }" @click="transform(6)">
                <div class="question-title">
                    <h2>LeetCode <span style="color: #00B8A3;">(Easy)</span></h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).</p>
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
# ====================================================================================================
def maxProduct(nums):
    nums.sort()
    return (nums[-1]-1)*(nums[-2]-1)

print(maxProduct([8, 9, 1 , 11]))   # 80
# ====================================================================================================
class Solution(object):
    def maxProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums.sort()
        return (nums[-1]-1)*(nums[-2]-1)

print(Solution().maxProduct([8, 9, 1 , 11]))   # 80
# ====================================================================================================
# Python3
# ====================================================================================================
class Solution:
    def maxProduct(self, nums: list[int]) -> int:
        nums.sort()
        return (nums[-1]-1)*(nums[-2]-1)

print(Solution().maxProduct([8, 9, 1, 11]))   # 80
</pre>
                    </div>
                </div>
            </section>

            <section class="all LeetCode question-block" :class="{ modifyHeight: heightActive }" @click="transform(7)">
                <div class="question-title">
                    <h2>LeetCode <span style="color: #00B8A3;">(Easy)</span></h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.</p>
                        <p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
                        <p>You can return the answer in any order.</p>
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
# ====================================================================================================
def twoSum(nums, target):
    for i in range(len(nums)):
        for j in range(i+1,len(nums)):
            if nums[i]+nums[j]==target:
                return [i,j]

print(twoSum([2, 7, 11, 15], 22))   # [1, 3]
# ====================================================================================================
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
# ====================================================================================================
# Python3
# ====================================================================================================
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

            <section class="all LeetCode question-block" :class="{ modifyHeight: heightActive }" @click="transform(8)">
                <div class="question-title">
                    <h2>LeetCode <span style="color: #00B8A3;">(Easy)</span></h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>Given an integer x, return true if x is a palindrome, and false otherwise.</p>
                        <p>給定一個整數x，true如果x是一個則傳回回文，以及falseOther情況。</p>
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
# ====================================================================================================
def isPalindrome(x):
    if x &lt 0:
        return False
    else:
        return str(x) == str(x)[::-1]

print(isPalindrome(121))   # True
print(isPalindrome(-121))   # False
# ====================================================================================================
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
# ====================================================================================================
# Python3
# ====================================================================================================
class Solution:
    def isPalindrome(self, x: int) -> bool:
        return str(x) == str(x)[::-1]

print(Solution().isPalindrome(121))   # True
print(Solution().isPalindrome(-121))   # False
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
                        <p>Roman to Integer</p>
                        <p>羅馬數字轉整數。</p>
                    </div>
                    <div class="article-table" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
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
# ====================================================================================================
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
# ====================================================================================================
class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        roman = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
        result = 0
        for i in range(len(s)):
            if i > 0 and roman[s[i]] > roman[s[i-1]]:
                result += roman[s[i]] - 2 * roman[s[i-1]]
            else:
                result += roman[s[i]]
        return result

print(Solution().romanToInt("MCMXCIV"))   # 1994
# ====================================================================================================
# Python3
# ====================================================================================================
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