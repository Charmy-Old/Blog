<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">map() V.S. forEach()</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>map()</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>定義</h4>
                        <p>創建一個新的數組，其中每一個元素由調用數組中的每一個元素執行提供的函數得來(creates a new array with the results of calling a provided function on every element in the calling array)。map 方法會給原數組中的每個元素都按順序調用一次 callback 函數。callback 每次執行後的返回值（包括 undefined）組合起來形成一個新數組。 callback 函數只會在有值的索引上被調用；那些從來沒被賦過值或者使用 delete 刪除的索引則不會被調用。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2)
console.log(array1)
expected output：[1, 4, 9, 16]
console.log(map1)
expected output：[2, 8, 18, 32]
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>forEach()</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>定義</h4>
                        <p>針對每一個元素執行提供的函數(executes a provided function once for each array element)。除了拋出異常以外，沒有辦法中止或跳出 forEach() 迴圈。如果你需要中止或跳出迴圈，forEach() 方法不是應當使用的工具。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const array1 = ["a", "b", "c"];
console.log(array1)
expected output：["a", "b", "c"]
const resultForEach = array1.forEach(element => console.log(element))
expected output："a"
expected output："b"
expected output："c"
console.log(resultForEach)
expected output：undefined
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>共同點</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>都是迴圈遍歷數組中的每一項</li>
                            <li><i class="fa-regular fa-note-sticky"></i>每一次執行匿名函數都支持三個參數，數組中的當前項item，當前項的索引index，原始數組input</li>
                            <li><i class="fa-regular fa-note-sticky"></i>匿名函數中的this都是指window</li>
                            <li><i class="fa-regular fa-note-sticky"></i>只能遍歷數組</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>差異點</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>map()</h4>
                        <p>有返回值，可以return出來一個length和原數組一致的數組(內容可能包含undefined、null等)</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const array = [12, 24, 27, 23, 26];
const res = array.map((item, index, input) => {
    returm item * 10
})
console.log(array)
expected output：[12, 24, 27, 23, 26]
console.log(res)
expected output：[120, 240, 270, 230, 260]
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>forEach()</h4>
                        <p>沒有返回值，返回結果為undefined</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const array = [12, 24, 27, 23, 26];
const res = array.forEach((item, index, input) => {
    returm input[index] item * 10
})
console.log(array)
expected output：[12, 24, 27, 23, 26]
console.log(res)
expected output：undefined
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>總結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>map()方法會分配內存空間存儲新數組並返回，map 不修改調用它的原數組本身（當然可以在
                                callback 執行時改變原數組）。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>forEach()方法不會返回執行結果，而是undefined。forEach()
                                被調用時，不會改變原數組，也就是調用它的數組（盡管 callback 函數在被調用時可能會改變原數組）。</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a class="article-reference" href="https://blog.csdn.net/suwu150/article/details/111590409" target="_blank"><i class="fa-solid fa-pen-to-square"></i>suwu150 - map()和forEach()的區別和理解</a>
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