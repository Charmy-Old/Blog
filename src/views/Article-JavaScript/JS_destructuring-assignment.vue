<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 解構賦值(Destructuring Assignment)？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-01</p>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>解構賦值(Destructuring Assignment) 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>解構賦值是 JavaScript 在 ES6(ECMAScript 2015)引入的功能，這可以從陣列或物件中提取值，並將這些值賦給對應的變數。這使得從複雜的資料結構中取得資料變得更簡潔方便。</p>
                        <p>解構賦值可以用於陣列和物件，並且可以在變數宣告和賦值語句中使用。</p>
                        <p><i class="fa-regular fa-note-sticky"></i>陣列解構賦值</p>
                    </div>
                    <div class="article-coding">
<pre>
const [變數1, 變數2, ...其餘] = 陣列;
const [variable1, variable2, ...rest] = array;
</pre>
                    </div>
                    <div class="article-txt">
                        <p><i class="fa-regular fa-note-sticky"></i>物件解構賦值</p>
                    </div>
                    <div class="article-coding">
<pre>
const { 屬性1, 屬性2, ...其餘 } = 物件;
const { property1, property2, ...rest } = object;
</pre>
                    </div>
                    <div class="article-txt">
                        <p>在陣列解構賦值中，我們使用方括號 [] 包圍變數名稱，然後通過陣列的索引位置來進行匹配賦值。在物件解構賦值中，我們使用花括號 {} 包圍變數名稱，然後通過屬性名稱來進行匹配賦值。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>解構賦值(Destructuring Assignment) 範例</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>陣列解構賦值</p>
                    </div>
                    <div class="article-coding">
<pre>
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a);   // 1
console.log(b);   // 2
console.log(c);   // 3
</pre>
                    </div>
                    <div class="article-txt">
                        <p>物件解構賦值</p>
                    </div>
                    <div class="article-coding">
<pre>
const person = { name: "Charmy", age: 26, gender: "Male" };
const { name, age, gender } = person;
console.log("name:", name);   // name: Charmy
console.log("age:", age);   // age: 26
console.log("gender:", gender);   // gender: Male
</pre>
                    </div>
                    <div class="article-txt">
                        <p>解構賦值支持預設值，以防物件或陣列中沒有對應的屬性或元素</p>
                    </div>
                    <div class="article-coding">
<pre>
const numbers = [1, 2];
const [a, b, c = 3] = numbers;
console.log(a);   // 1
console.log(b);   // 2
console.log(c);   // 3 (使用預設值)

const person = { name: "Charmy", age: 26 };
const { name, age, gender = "Male" } = person;
console.log(name);   // Charmy
console.log(age);   // 26
console.log(gender);   // Male (使用預設值)
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>總結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>解構賦值在處理複雜的資料結構時非常有用，因為可以快速提取所需的值，並將其賦給適當的變數，從而使程式碼更加簡潔易讀。</p>
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