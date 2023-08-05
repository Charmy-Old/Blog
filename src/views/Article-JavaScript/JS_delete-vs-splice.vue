<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">delete V.S. splice</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-11</p>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>delete</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>定義</h4>
                        <p>delete 是用於刪除數組中指定索引位置的元素或對象屬性的操作符。當你使用 delete 刪除數組中的元素時，該元素的值會變為 empty，但是數組的長度不會改變。這意味著刪除元素後，數組的索引位置會保持不變，只是對應索引位置的值變為了 empty。</p>
                    </div>
                    <div class="article-coding">
<pre>
let arr = [1, 2, 3, 4];
delete arr[2];
console.log(arr);   // [1, 2, empty, 4]
console.log(arr.length);   // 4
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>splice</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>定義</h4>
                        <p>splice 是一個數組方法，用於在指定索引位置修改數組內容，可以刪除、替換或插入新的元素。splice 方法接受三個參數：起始索引、刪除的元素個數和要插入的元素（可選）。通過 splice 方法刪除數組中的元素時，數組的長度會相應地減少。</p>
                    </div>
                    <div class="article-coding">
<pre>
let arr = [1, 2, 3, 4];
arr.splice(2, 1);
console.log(arr);   // [1, 2, 4]
console.log(arr.length);   // 3
</pre>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="article-detail">
                    <h3>總結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>使用 delete 刪除數組中的元素時，該元素的值會變為 empty，但是數組的長度不會改變</li>
                            <li><i class="fa-solid fa-check"></i>使用 splice 方法刪除數組中的元素時，數組的長度會相應地減少。</li>
                        </ul>
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