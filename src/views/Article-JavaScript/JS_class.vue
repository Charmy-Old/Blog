<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 JavaScript 的 class？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-10-25</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>JavaScript 的 class 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>JavaScript 的類別(class)是在 ECMAScript 6 中引入，用來作為建立新物件的模板。class 能將程式碼封裝起來便於處理。 類別基於原型(prototype)，但在語法和定義上，與 ES5 的類類別(class-like)有所不同，可以使 JavaScript 的程式碼更加清晰、簡潔和可維護。</p>
                        <h4>class 的優點</h4>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>更清晰的程式碼：class 的語法更清晰，易於理解</li>
                            <li><i class="fa-regular fa-note-sticky"></i>更簡潔的程式碼：class 可以簡化程式碼，使其更容易閱讀和維護</li>
                            <li><i class="fa-regular fa-note-sticky"></i>更可維護的程式碼：class 可以幫助您將程式碼組織得更好，使其更容易擴展和修改</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>class 的用途</h4>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>定義物件的屬性和方法</li>
                            <li><i class="fa-regular fa-note-sticky"></i>繼承父類別的屬性和方法</li>
                            <li><i class="fa-regular fa-note-sticky"></i>創建靜態方法和屬性</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>class 的語法如下：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class 類別名稱 {
    // 類別的屬性和方法
}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以下是一個簡單的 class 語法：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>class 只是宣告函式的一種語法</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>JavaScript 中沒有真正的「類別」實體，class 宣告出來的本體是「函式」，換句話說，class 只是宣告函式的一種特別的語法。</p>
                        <p>class 背後有幾個分解動作，是 JavaScript Engine 幫我們完成的：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ol>
                            <li>1、把 class body 裡的 constructor() 抓出來，指定給 User</li>
                            <li>2、把 class body 裡的其他方法指定給 User.prototype</li>
                        </ol>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>也就是說，透過 class 語法宣告的 User，其實是宣告了一個函式 User，其 prototype 屬性上有定義在 class body 內的方法。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>ES6 class 和 ES5 構造函式 (constructor function) 的差異</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在 ES6 時引入了 class 的概念，JavaScript class 使用的語法 class 類似其他 OOP 程式語言中的 class，但 JavaScript 的 class 是一種語法糖，本質上與其他程式語言 class 的實踐方式不一樣，JavaScript 的 class 是透過原型繼承來模擬 class 的行為。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`My name is ${this.name}, ${this.age} years old.`);
    }
}

const person = new Person("Charmy", 26);
person.sayHello();   // My name is Charmy, 26 years old.
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>但在 ES6 之前，會透過函式實踐相同功能</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log(`My name is ${this.name}, ${this.age} years old.`);
};

const person = new Person("Charmy", 26);
person.sayHello();   //  My name is Charmy, 26 years old.
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>ES6 版本中的實踐方法，Person class 中的 sayHello 方法並不是在 class 內部裡封裝的方法，背後其實是賦值到了 Person 的原型(prototype)上而已</p>
                        <h4>ES6 class 和 ES5 constructor function 主要差別：</h4>
                        <p>hosting：不同於函式宣告的構造函式存在提升，但使用 class 宣告則是無法再宣告前就使用</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const newClass = new MyClass();   // Uncaught TypeError: Class constructor Animal cannot be invoked without 'new'

class MyClass {}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>new：函式創建的構造函式如果沒有透過 new 實例化，就只是執行一般函式。但 class 構造函式則一定需要透過 new 來創建實例，否則會報錯</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class Person {}

const a = Person(); // Uncaught TypeError: Class constructor Person cannot be invoked without 'new'
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>class 的靜態方法(Static Method)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>靜態方法是屬於類別而不是實例的方法。靜態方法不能訪問 this 變量，也不能訪問實例變量。靜態方法通常用來執行與實例無關的操作，例如：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>提供工具方法</li>
                            <li><i class="fa-regular fa-note-sticky"></i>管理類別狀態</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>靜態方法的語法如下：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class 類別名稱 {
    // 靜態方法
    static 方法名稱() {
        // 方法
    }
}

class Person {
    static sayHello() {
        console.log("Hello, world!");
    }
}
Person.sayHello();   // Hello, world!
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>靜態方法的範例如下(提供工具方法)：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class Math {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        return a / b;
    }
}

console.log(Math.add(1, 2)); // 3
console.log(Math.subtract(10, 5)); // 5
console.log(Math.multiply(2, 3)); // 6
console.log(Math.divide(10, 2)); // 5
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>上述程式碼定義了一個名為 Math 的類別。Math 定義了四個靜態方法：add()、subtract()、multiply() 和 divide()。這些方法可以用來執行基本的數學運算。</p>
                        <p>靜態方法的範例如下(管理類別狀態)：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class Person {
    static population = 0;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        Person.population++;
}

    static sayHello() {
        console.log(`Hello, world! There are ${Person.population} people.`);
    }
}

const person1 = new Person("Charmy", 26);
const person2 = new Person("Tina", 26);
Person.sayHello();   // Hello, world! There are 2 people.
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>上述程式碼定義了一個名為 Person 的類別。Person 定義了一個靜態屬性 population 來跟蹤 Person 物件的數量。Person 還定義了一個靜態方法 sayHello()，該方法向控制台輸出 "Hello, world!" 和 Person 物件的數量。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>class 的 extends 繼承類別</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>繼承是一種允許一個類別從另一個類別繼承屬性和方法的機制。繼承可以用來減少重複的程式碼，並使類別之間的關係更加清晰。</p>
                        <p>繼承的語法如下：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class 子類別名稱 extends 父類別名稱 {
    // 子類別的屬性和方法
}

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} 叫了！`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} 汪汪叫！`);
  }
}

const dog = new Dog("小白");
dog.bark(); // 小白 汪汪叫！
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以上程式碼定義了一個名為 Animal 的父類別和一個名為 Dog 的子類別。Animal 定義了一個屬性 name 和一個方法 makeSound()。Dog 繼承了 Animal 的屬性和方法，並定義了一個名為 bark() 的方法。</p>
                        <p>以下是一些使用繼承的範例</p>
                        <p><i class="fa-regular fa-note-sticky"></i>繼承屬性：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    // 繼承了 Animal 的屬性 name
}

const dog = new Dog("小白");
dog.name; // "小白"
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以上程式碼展示如何繼承屬性。Dog 繼承了 Animal 的屬性 name，因此 Dog 實例可以使用 name 屬性。</p>
                        <p><i class="fa-regular fa-note-sticky"></i>繼承方法：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class Animal {
    makeSound() {
        console.log(`${this.name} 叫了！`);
    }
}

class Dog extends Animal {
    // 繼承了 Animal 的方法 makeSound()
}

const dog = new Dog("小白");
dog.makeSound(); // 小白 叫了！
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以上程式碼展示如何繼承方法。Dog 繼承了 Animal 的方法 makeSound()，因此 Dog 實例可以使用 makeSound() 方法。</p>
                        <p><i class="fa-regular fa-note-sticky"></i>覆寫方法：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class Animal {
    makeSound() {
        console.log(`${this.name} 叫了！`);
    }
}

class Dog extends Animal {
    // 覆寫了 Animal 的方法 makeSound()
    makeSound() {
        console.log(`${this.name} 汪汪叫！`);
    }
}

const dog = new Dog("小白");
dog.makeSound(); // 小白 汪汪叫！
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以上程式碼展示如何覆寫方法。Dog 覆寫了 Animal 的方法 makeSound()，因此 Dog 實例的 makeSound() 方法會輸出 "小白 汪汪叫！"。</p>
                        <h4>繼承的注意事項：</h4>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>繼承的關係是單向的。子類別只能繼承父類別的屬性和方法，父類別不能繼承子類別的屬性和方法</li>
                            <li><i class="fa-regular fa-note-sticky"></i>子類別可以覆寫父類別的方法</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>總而言之，繼承是一種強大的工具，可以用來減少重複的程式碼，並使類別之間的關係更加清晰。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>class 的 super 語法調用(覆寫)父類別</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>super 是 JavaScript 中的一個關鍵字，用來引用父類別的實例。super 可以用來調用父類別的方法、屬性和其他成員。</p>
                        <p>super 的語法如下：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
super.屬性名稱;
super.方法名稱();
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以下是一個簡單的 super 語法：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} 叫了！`);
    }
}

class Dog extends Animal {
    // 使用 super 調用父類別的方法
    constructor(name: string) {
        super(name);
    }

    makeSound() {
        super.makeSound();
        console.log(`${this.name} 還會搖尾巴！`);
    }
}

const dog = new Dog("小白");
dog.makeSound(); // 小白 叫了！小白 還會搖尾巴！
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以上程式碼定義了一個名為 Animal 的父類別和一個名為 Dog 的子類別。Animal 定義了一個方法 makeSound()。Dog 繼承了 Animal 的方法 makeSound()，並使用 super 調用父類別的方法。</p>
                        <p><i class="fa-regular fa-note-sticky"></i>調用父類別的方法：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class Animal {
    makeSound() {
        console.log(`${this.name} 叫了！`);
    }
}

class Dog extends Animal {
    // 使用 super 調用父類別的方法
    makeSound() {
        super.makeSound();
        console.log(`${this.name} 還會搖尾巴！`);
    }
}

const dog = new Dog("小白");
dog.makeSound(); // 小白 叫了！小白 還會搖尾巴！
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以上程式碼展示了如何使用 super 調用父類別的方法。Dog 繼承了 Animal 的方法 makeSound()，並使用 super 調用父類別的方法。</p>
                        <p><i class="fa-regular fa-note-sticky"></i>訪問父類別的屬性：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    // 使用 super 訪問父類別的屬性
    constructor(name: string) {
        super(name);
        console.log(super.name); // 小白
    }
}

const dog = new Dog("小白");
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以上程式碼展示了如何使用 super 訪問父類別的屬性。Dog 繼承了 Animal 的屬性 name，並使用 super 訪問父類別的屬性。</p>
                        <p><i class="fa-regular fa-note-sticky"></i>繼承父類別的方法：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class Animal {
    makeSound() {
        console.log(`${this.name} 叫了！`);
    }
}

class Dog extends Animal {
    // 繼承父類別的方法
    makeSound() {
        super.makeSound();
        console.log(`${this.name} 還會搖尾巴！`);
    }
}

const dog = new Dog("小白");
dog.makeSound(); // 小白 叫了！小白 還會搖尾巴！
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以上程式碼展示了如何繼承父類別的方法。Dog 繼承了 Animal 的方法 makeSound()，並使用 super 調用父類別的方法。</p>
                        <h4>super 的注意事項</h4>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>super 只能在子類別中使用</li>
                            <li><i class="fa-regular fa-note-sticky"></i>super 不能用來訪問子類別的屬性和方法</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>總體而言，super 是一種強大的工具，可以用來訪問父類別的屬性和方法。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>用 super 覆寫 constructor</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>用 super 覆寫 constructor 的概念是指在子類別中重新定義父類別的 constructor。super 可以用來調用父類別的 constructor，並在其基礎上添加新的功能。</p>
                        <p>用 super 覆寫 constructor 的語法如下：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class 子類別名稱 extends 父類別名稱 {
    // 覆寫父類別的 constructor
    constructor(...args) {
        // 使用 super 調用父類別的 constructor
        super(...args);

        // 添加新的功能
    }
}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以下是一個用 super 覆寫 constructor 的例子：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class Animal {
    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    // 覆寫父類別的 constructor
    constructor(name: string, breed: string) {
        // 使用 super 調用父類別的 constructor
        super(name);

        // 添加新的功能
        this.breed = breed;
    }
}

const dog = new Dog("小白", "金毛");
dog.name; // "小白"
dog.breed; // "金毛"
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以上程式碼定義了一個名為 Animal 的父類別和一個名為 Dog 的子類別。Animal 的 constructor 接受一個 name 參數。Dog 繼承(覆寫)了 Animal 的 constructor，並使用 super 調用父類別的 constructor。在父類別的 constructor 基礎上，Dog 添加了新的功能，即添加一個 breed 參數。</p>
                        <h4>用 super 覆寫 constructor 的注意事項：</h4>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>子類別覆寫父類別的 constructor 時，需要使用相同的參數列表</li>
                            <li><i class="fa-regular fa-note-sticky"></i>覆寫 constructor 可以使用 super 關鍵字來調用父類別的 constructor</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>總體而言，super 可以用來覆寫父類別的 constructor，並在其基礎上添加新的功能。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a class="article-reference" href="https://www.explainthis.io/zh-hant/swe/what-is-class" target="_blank"><i class="fa-solid fa-pen-to-square"></i>ExplainThis - ES6 中的 class 是什麼？和函式構造函式差別是什麼？</a>
                        <a class="article-reference" href="https://www.shubo.io/javascript-class/" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Shubo 的程式開發筆記 - [教學] JavaScript ES6 Class：深入淺出類別概念與應用</a>
                        <a class="article-reference" href="https://www.explainthis.io/zh-hant/swe/what-is-class" target="_blank"><i class="fa-solid fa-pen-to-square"></i>mdn web docs - Classes</a>
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