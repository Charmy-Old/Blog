<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">bind V.S. call V.S. apply</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-20</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>bind、call、apply 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在 JavaScript 中，bind、call 和 apply 都是用來操作函數的方法，它們主要用於設定函數的上下文（即 this 的值）以及傳遞參數。</p>
                    </div>
                </div>
            </section>

            <!-- bind -->
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>bind</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>bind 方法用於創建一個新的函數，並設定該函數內部的 this 值，不立即執行該函數。這對於之後調用該函數很有用，並確保在調用時具有正確的上下文。</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-pencil"></i>bind 方法創建一個新的函數，並設定該函數的 this 值為指定的上下文(物件)</li>
                            <li><i class="fa-solid fa-pencil"></i>bind 方法的語法：function.bind(thisArg, ...args)
                                <ul>
                                    <li>◎ thisArg：要設定為新函數的 this 值的物件</li>
                                    <li>◎ args：可選參數，當新函數被調用時，這些參數將作為新函數的前幾個參數傳遞進去</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const person = {
    name: "Charmy",
    greet: function() {
        console.log(`Hello, I'm ${this.name}.`);
    }
};
  
const greetFunction = person.greet;
greetFunction();   // Hello, I'm .
  
const boundGreet = person.greet.bind(person);
boundGreet();   // Hello, I'm Charmy.
</pre>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
greetFunction();   // 此處的 this 將不是 person 物件，將無法訪問 name 屬性
boundGreet();   // 使用 bind 設定正確的上下文，可以正確地訪問 name 屬性
</pre>
                    </div>
                </div>
            </section>

            <!-- call -->
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>call</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>call 方法允許立即調用一個函數，並指定函數的上下文(this 值)以及函數的參數。參數需以逗號分隔，而不是陣列。</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-pencil"></i>call 方法立即調用一個函數，並指定該函數的上下文(this 值)以及函數的參數</li>
                            <li><i class="fa-solid fa-pencil"></i>call 方法的語法：function.call(thisArg, ...args)
                                <ul>
                                    <li>◎ thisArg：要設定為函數的 this 值的物件</li>
                                    <li>◎ args：以逗號分隔的參數列表，將這些參數作為函數的參數傳遞進去</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
function greet(message) {
    console.log(`${message}, I'm ${this.name}.`);
}

const person1 = { name: "Charmy" };
const person2 = { name: "Charmying" };
  
greet.call(person1, "Hi");   // Hi, I'm Charmy.
greet.call(person2, "Hey");   // Hey, I'm Charmying.
</pre>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
greet.call(person1, "Hi");   // 在 person1 上下文中調用 greet 函數
greet.call(person2, "Hey");   // 在 person2 上下文中調用 greet 函數
</pre>
                    </div>
                </div>
            </section>

            <!-- apply -->
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>apply</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>apply 方法也用於立即調用函數，但是參數需要以陣列形式傳遞。</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-pencil"></i>apply 方法也是立即調用一個函數，但參數必須以陣列形式傳遞</li>
                            <li><i class="fa-solid fa-pencil"></i>apply 方法的語法：function.apply(thisArg, argsArray)
                                <ul>
                                    <li>◎ thisArg：要設定為函數的 this 值的物件</li>
                                    <li>◎ argsArray：一個陣列，其中的元素作為函數的參數傳遞進去</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
function introduce(greeting, age) {
    console.log(`${greeting}, I'm ${this.name} and I'm ${age} years old.`);
}
  
const person = { name: "Charmy" };
const args = ["Hello", 26];
  
introduce.apply(person, args);   // Hello, I'm Charmy and I'm 26 years old.
</pre>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
introduce.apply(person, args);   // 在 person 上下文中使用 apply 方法調用函數並傳遞參數陣列
</pre>
                    </div>
                </div>
            </section>

            <!-- 三者差異 -->
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>三者差異</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-pencil"></i>bind 用於創建具有特定上下文的新函數</li>
                            <li><i class="fa-solid fa-pencil"></i>call 用於立即調用函數並傳遞參數</li>
                            <li><i class="fa-solid fa-pencil"></i>apply 也用於立即調用函數，但是參數以陣列形式傳遞</li>
                        </ul>
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