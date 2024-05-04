<template>
    <Header />
    <div class="content">
        <main>
            <section class="all LeetCode question-block" :class="{ modifyHeight: heightActive }" @click="transform(0)">
                <div class="question-title">
                    <h2>LeetCode <span style="color: #00B8A3;">(Easy)</span></h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <h3>1. Two Sum</h3>
                    </div>
                    <div class="question-txt">
                        <p>Given an array of integers nums and an integer target, return indices of the two numbers such
                            that they add up to target.</p>
                        <p>You may assume that each input would have exactly one solution, and you may not use the same
                            element twice.</p>
                        <p>You can return the answer in any order.</p>
                    </div>
                    <div class="question-txt" style="color: #999999;">
                        <h3>1. 兩和</h3>
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

            <section class="all LeetCode question-block" :class="{ modifyHeight: heightActive }" @click="transform(1)">
                <div class="question-title">
                    <h2>LeetCode <span style="color: #00B8A3;">(Easy)</span></h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <h3>9. Palindrome Number</h3>
                    </div>
                    <div class="question-txt">
                        <p>Given an integer x, return true if x is a palindrome, and false otherwise.</p>
                    </div>
                    <div class="question-txt" style="color: #999999;">
                        <h3>9. 回文數</h3>
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

            <section class="all LeetCode question-block" :class="{ modifyHeight: heightActive }" @click="transform(2)">
                <div class="question-title">
                    <h2>LeetCode <span style="color: #00B8A3;">(Easy)</span></h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <h3>13. Roman to Integer</h3>
                    </div>
                    <div class="question-txt">
                        <p>Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.</p>
                    </div>
                    <div class="question-txt" style="color: #999999;">
                        <h3>13. 羅馬數字轉整數</h3>
                    </div>
                    <div class="question-txt" style="color: #999999;">
                        <p>羅馬數字以七個不同的符號表示： I、V、X、L、C、D 和 M</p>
                    </div>
                    <div class="question-table">
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

            <section class="all LeetCode question-block" :class="{ modifyHeight: heightActive }" @click="transform(3)">
                <div class="question-title">
                    <h2>LeetCode <span style="color: #00B8A3;">(Easy)</span></h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <h3>14. Longest Common Prefix</h3>
                    </div>
                    <div class="question-txt">
                        <p>Write a function to find the longest common prefix string amongst an array of strings.</p>
                        <p>If there is no common prefix, return an empty string "".</p>
                    </div>
                    <div class="question-txt" style="color: #999999;">
                        <h3>14. 最長公共前綴</h3>
                    </div>
                    <div class="question-txt" style="color: #999999;">
                        <p>編寫一個函數來尋找字串陣列中最長的公共前綴字串。</p>
                        <p>如果沒有公共前綴，則傳回空字串 ""。</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-coding">
<pre>
// JavaScript

const longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for (let i = 1; i &lt; strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    return prefix; 
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));   // fl
console.log(longestCommonPrefix(["dog", "racecar", "car"]));   // ""
</pre>
                    </div>
                    <div class="question-coding">
<pre>
# Python

def longestCommonPrefix(strs):
    if not strs:
        return ""
    
    prefix = strs[0]
    for i in range(1, len(strs)):
        while strs[i].find(prefix) != 0:
            prefix = prefix[:-1]
            if not prefix:
                return ""
    return prefix

print(longestCommonPrefix(["flower","flow","flight"]))   # fl
print(longestCommonPrefix(["dog", "racecar", "car"]))   # 
</pre>
                    </div>
                    <div class="question-coding">
<pre>
# Python

class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if not strs:
            return ""
        prefix = strs[0]
        for i in range(1, len(strs)):
            while strs[i].find(prefix) != 0:
                prefix = prefix[:-1]
                if not prefix:
                    return ""
        return prefix
</pre>
                    </div>
                    <div class="question-coding">
<pre>
# Python3

from typing import List

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""
        prefix = strs[0]
        for i in range(1, len(strs)):
            while strs[i].find(prefix) != 0:
                prefix = prefix[:-1]
                if not prefix:
                    return ""
        return prefix
</pre>
                    </div>
                </div>
            </section>

            <section class="all LeetCode question-block" :class="{ modifyHeight: heightActive }" @click="transform(4)">
                <div class="question-title">
                    <h2>LeetCode <span style="color: #00B8A3;">(Easy)</span></h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <h3>26. Remove Duplicates from Sorted Array</h3>
                    </div>
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
                        <h3>26. 從排序數組中刪除重複項</h3>
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

            <section class="all LeetCode question-block" :class="{ modifyHeight: heightActive }" @click="transform(5)">
                <div class="question-title">
                    <h2>LeetCode <span style="color: #FAC31D;">(Medium)</span></h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <h3>56. Merge Intervals</h3>
                    </div>
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
                        <h3>56. 合併區間</h3>
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
            
            <section class="all LeetCode question-block" :class="{ modifyHeight: heightActive }" @click="transform(6)">
                <div class="question-title">
                    <h2>LeetCode <span style="color: #00B8A3;">(Easy)</span></h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <h3>1464. Maximum Product of Two Elements in an Array</h3>
                    </div>
                    <div class="question-txt">
                        <p>Given the array of integers nums, you will choose two different indices i and j of that array.
                            Return the maximum value of (nums[i]-1)*(nums[j]-1).</p>
                    </div>
                    <div class="question-txt" style="color: #999999;">
                        <h3>1464. 陣列中兩個元素的最大乘積</h3>
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
        // const cards = document.querySelectorAll(".all");

        // function filter(category, items) {
        //     items.forEach((item) => {
        //         const isItemFiltered = !item.classList.contains(category);
        //         const isShowAll = category.toLowerCase() === "all";
        //         if (isItemFiltered && !isShowAll) {
        //             item.classList.add("d-none");
        //         } else {
        //             item.classList.remove("d-none");
        //         }
        //     });
        // }

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