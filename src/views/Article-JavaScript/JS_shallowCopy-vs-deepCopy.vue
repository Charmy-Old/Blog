<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">淺拷貝(Shallow Copy) V.S. 深拷貝(Deep Copy)</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-23</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                    data-aos-duration="1000">
                    <h3>淺拷貝 和 深拷貝 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-pic" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <img src="../../assets/images/article-js/shallowCopy-vs-deepCopy.webp" alt="淺拷貝 VS 深拷貝">
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>淺拷貝：共用同一個記憶體空間</li>
                            <li><i class="fa-regular fa-note-sticky"></i>深拷貝：兩個不同的記憶體空間</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                    data-aos-duration="1000">
                    <h3>淺拷貝 (Shallow Copy)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <pre>
let object1 = {a: 1}
let object2 = object1
object1.a = 2
console.log(object2.a)   // 2
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>不以JS的邏輯看，依正常程式運作原理應該會輸出 1 才對，因為運作的原理是 call by value，但 JS 對於物件的操作是 call by reference，所以上面程式碼中的
                            object1 以及 object2 其實是共用同一個記憶體，所以只要有一方的值改變了另一方也會跟著改變，這就叫淺拷貝。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <pre>
let object1 = {a: 1}
let object2 = {a: object1.a}
object1.a = 2
console.log(object2.a)   // 1
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>乍看之下好像真的是兩個不同的物件，的確在這種情況下是一種深拷貝，但在某些情況下他其實還是屬於一種淺拷貝。</p>
                        <p>稍微改變一下 object1 的架構</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <pre>
let object1 = &#123;a: &#123;a: 1&#125;&#125;
let object2 = {a: object1.a}
object1.a.a = 2
console.log(object2.a)   // 輸出{a: 2}而不是{a: 1}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>這時候 object2 內的值也變了，所以只要物件超過一層，這種作法只會複製表層而已，深層的內容還是共用同一個記憶體，因此兩者還是會互相影響。</p>
                    </div>
                    <div class="article-pic" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <img src="../../assets/images/article-js/shallowCopy.webp" alt="淺拷貝">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <h4>常見陷阱</h4>
                        <h5><i class="fa-regular fa-note-sticky"></i>... operator</h5>
                        <p>ES6 有一個新的 operator，利用 ...array 或 …object 的方式達到展開(spread)的效果，可以把剛剛的例子用這個 operator 來達到更簡單的寫法。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <pre>
let object1 = {a: 1}
let object2 = {...object1}
object1.a = 2
console.log(object2.a)   // 1
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>看起來又是一種深拷貝，但其實這也不算是深拷貝，是跟剛剛的例子一樣，稍微變化一下又變成淺拷貝。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <pre>
let obj1 = &#123;a: &#123;a: 1&#125;&#125;
let obj2 = {...obj1}
obj1.a.a = 2
console.log(obj2.a)  // {a: 2}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <h5><i class="fa-regular fa-note-sticky"></i>Object.assign(target, source)</h5>
                        <p>簡單來說就是將來源的 object 分派給指定的物件。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <pre>
let object1 = {a: 1}
let object2 = Object.assign({}, object1)
object1.a = 2
console.log(object2.a)   // 1
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>這也是 ES6 推出的物件操作方法，這稍微變化一下又是淺拷貝。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <pre>
let object1 = &#123;a: &#123;a: 1&#125;&#125;
let object2 = Object.assign({}, object1)
object1.a.a = 2
console.log(object2.a)   // {a: 2}
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                    data-aos-duration="1000">
                    <h3>深拷貝 (Deep Copy)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <h4>以下幾個深拷貝的操作。</h4>
                        <h5><i class="fa-regular fa-note-sticky"></i>JSON.stringify(object) 以及 JSON.parse(JSONString)</h5>
                        <p>如果想要真的進行深拷貝的話，就回歸最基本的 JSON 操作。</p>
                        <p>將物件轉成字串再轉成物件，這樣就真的可以確保出來的會是一個新的物件而且是使用不同的記憶體。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <pre>
let object1 = &#123;a: &#123;a: 1&#125;&#125;
let object2 = JSON.parse(JSON.stringify(object1))
object1.a.a = 2
console.log(object2.a)   // {a: 1}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <h5><i class="fa-regular fa-note-sticky"></i>lodash 內的 cloneDeep</h5>
                        <p>lodash 是 JS 中一套非常強大的 utility library，裡面有一個 API 叫 _.cloneDeep(object)
                            ，這個就會回傳一個利用深拷貝而得到的新物件，這個方法也是比較簡單而且看起來也比較乾淨的作法。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <pre>
let object1 = &#123;a: &#123;a: 1&#125;&#125;
let object2 = _.cloneDeep(object1)
object1.a.a = 2
console.log(object2.a)   // {a: 1}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>※ 需先 npm install lodash 後再 const _ = require("lodash");</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                    data-aos-duration="1000">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <a class="article-reference"
                            href="https://medium.com/andy-blog/%E9%97%9C%E6%96%BCjs%E4%B8%AD%E7%9A%84%E6%B7%BA%E6%8B%B7%E8%B2%9D-shallow-copy-%E4%BB%A5%E5%8F%8A%E6%B7%B1%E6%8B%B7%E8%B2%9D-deep-copy-5f5bbe96c122"
                            target="_blank"><i class="fa-solid fa-pen-to-square"></i>Medium(Written by Andy Chen) -
                            關於JS中的淺拷貝(shallow copy)以及深拷貝(deep copy)</a>
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