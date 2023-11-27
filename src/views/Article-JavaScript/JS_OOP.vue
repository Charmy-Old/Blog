<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">JavaScript 的物件導向</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-25</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>物件導向(Object-Oriented Programming，簡稱 OOP)簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>物件導向是一種程式設計典範，將程式的結構和邏輯組織成一個個獨立的物件，每個物件都有自己的屬性和方法。物件導向程式設計(Object-Oriented Programming，簡稱 OOP)的主要目的是模擬現實世界中的事物和其相互之間的關係，使得程式更易於理解、維護和擴展。</p>
                        <p>當談論 JavaScript 的物件導向時，通常是指 ES6(ECMAScript 2015)引入的新特性，在 JavaScript 中，物件是鍵值對的集合，其中鍵是屬性名稱，值是屬性的數值或函數。物件的屬性可以是基本數據類型(例如數字、字符串等)或其他物件，而屬性的函數稱為方法，用於操作該物件的屬性或執行特定的功能。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>1、類別(Class)與物件(Object)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>類別是物件導向程式設計的基本概念，描述了物件具有的屬性和方法。在JavaScript中，使用class關鍵字來定義類別。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>物件是類別的實例，代表真實世界中的個體。使用new關鍵字來創建物件。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>在類別內部使用 constructor 方法來定義物件的屬性，constructor 方法會在創建物件實例時被呼叫。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>使用點語法(dot notation)來訪問物件的屬性和方法。例如 object.property 用於訪問物件的屬性，object.method() 用於呼叫物件的方法。</li>
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    say() {
        console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
    }
}

const Charmy = new person("Charmy", 26);
Charmy.say();   // My name is John, I'm 26 years old."
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>2、封裝(Encapsulation)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>封裝指的是將物件的屬性和方法包裝在一個獨立的單位內部，並對外部隱藏具體實現的細節。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>在 JavaScript 中，通常使用 class 來實現封裝。將屬性設置為私有的，只能在類別內部訪問。對外部提供公共的方法來訪問或修改這些屬性。</li>
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class account {
    constructor(accountNumber, balance) {
        this._accountNumber = accountNumber;   // 使用底線表示私有屬性
        this._balance = balance;
    }
  
    deposit(amount) {
        this._balance += amount;
    }
  
    withdraw(amount) {
        if (amount &lt;= this._balance) {
            this._balance -= amount;
        } else {
            console.log("Insufficient balance.");
        }
    }
  
    getBalance() {
        return this._balance;
    }
}
  
const myAccount = new account("1234567890", 1000);
myAccount.deposit(500);
console.log(myAccount.getBalance());   // 輸出: 1500
myAccount.withdraw(2000);   // Insufficient balance.
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>3、繼承(Inheritance)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>繼承是允許建立一個新的類別(子類別)，從現有的類別(父類別)繼承屬性和方法。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>在 JavaScript 中，使用 extends 關鍵字來實現繼承。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>子類別可以擁有父類別的所有屬性和方法，同時可以擴展或修改功能。</li>
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class people {
    constructor(name) {
        this.name = name;
    }

    say() {
        console.log("Say something");
    }
}

class person extends people {
    constructor(name) {
        super(name);   // 使用 super() 呼叫父類別的 constructor
    }

    say() {
        console.log("COOL");
    }
}

const name = new person("Charmy");
name.say();   // COOL
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>4、多型(Polymorphism)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>多型是物件導向程式設計中的概念，它允許不同的類別對相同的方法進行不同的實現。</li>
                            <li><i class="fa-regular fa-note-sticky"></i>在 JavaScript 中，由於函數的動態性質，我們可以輕鬆地實現多型。</li>
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class Shape {
    draw() {
        console.log("Drawing a generic shape.");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a circle.");
    }
}

class Square extends Shape {
    draw() {
        console.log("Drawing a square.");
    }
}

function drawShape(shape) {
    shape.draw();
}

const circle = new Circle();
const square = new Square();

drawShape(circle);   // Drawing a circle.
drawShape(square);   // Drawing a square.
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>總結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以上是 JavaScript 中物件導向程式設計的基本概念。物件導向可以使程式碼更加模組化、可重用和易於維護，是一個強大且廣泛使用的程式設計典範。</p>
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