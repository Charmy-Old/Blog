<template>
    <Header /> <!-- 用掉用掉 h1 -->
    <div class="content">
        <main>
            <section>
                <div class="question question-title">
                    <h2>題目</h2> 
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-10-25</p>
                </div>
            </section>

            <section class="password">
                <div class="password-block">
                    <input v-model="inputPassword" type="password" placeholder="Enter Password" />
                    <button @click="checkPassword">Submit</button>
                </div>
            </section>

            <section style=" background-color: none; border: none; border-radius: none; margin-bottom: 0 !important; padding: 1rem 0.5rem;" v-if="passwordCorrect">
                <!-- <div style=" margin-bottom: 2.5rem; " class="container text-center">
                    <div class="row row-cols-1 row-cols-sm-3 row-cols-md-3">
                        <div>
                            <button class="select-button" data-filter="all">All</button>
                        </div>
                        <div>
                            <button class="select-button" data-filter="FrontEnd">前端面試</button>
                        </div>
                        <div>
                            <button class="select-button" data-filter="LeetCode">LeetCode</button>
                        </div>
                    </div>
                </div> -->
                <section v-for="(section, index) in questions" :key="index" @click="openQuestionBlock(index)">
                        <div class="question question-block" :class="{ 'aaa': section.expanded }">
                            <div class="question-block-title">
                                <h3>{{ section.title }}</h3>
                                <i class="fa-solid fa-chevron-down" :class="{ 'zzz': section.expanded }"></i>
                            </div>
                            <div class="question-underline"></div>
                            <div class="question-coding">
<pre>
{{ section.code }}
</pre>
                            </div>
                        </div>
                </section>
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
    import { ref } from "vue";
    export default {
        components: {
            Header,
            Wall,
            BackToTop,
            pageRate,
            // Footer,
        },
        setup() {
            const password = "qqq";
            const inputPassword = ref("");
            const passwordCorrect = ref();
            
            const checkPassword = () => {
                if (inputPassword.value === password) {
                    document.querySelector(".password").style = "display: none;";
                    passwordCorrect.value = true;
                } else {
                    alert("密碼錯誤")
                    inputPassword.value = "";
                }

            };

            const questions = ref([
                {
                  title: '以下程式碼 console.log 會出現什麼',
                  code: `
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

// 淺拷貝和深拷貝的問題
                  `,
                  expanded: false,
                },
                {
                  title: '運算子',
                  code: `
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
                  `,
                  expanded: false,
                },
                {
                  title: 'Arrow function及一般function中的this有何不同',
                  code: `
普通 function 中的 this：
1、在 JavaScript 中，this 是指向函式呼叫時的物件。
2、當函式沒有被任何物件呼叫時，this 會指向全域物件。
3、當函式被物件呼叫時，this 會指向該物件。
4、當函式透過 call() 或 apply() 方法呼叫時，this 會指向該方法的參數。
箭頭 function 中的 this：
1、箭頭 function 中的 this 指向函式定義時的作用域的 this。
2、箭頭 function 中的 this 不會隨著函式呼叫時的作用域而改變。

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
                  `,
                  expanded: false,
                },
            ]);

            const openQuestionBlock = (index) => {
              questions.value[index].expanded = !questions.value[index].expanded;
            };

            return {
                inputPassword,
                passwordCorrect,
                checkPassword,
                questions,
                openQuestionBlock,
            };
        }
    };
</script>