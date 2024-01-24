<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">stack(堆疊) V.S. queue(佇列)</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-09</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                    data-aos-duration="1000">
                    <h3>stack queue 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>在 JavaScript 中，stack(堆疊)和 queue(佇列)是兩種常見的資料結構，用於管理資料的儲存和訪問方式。兩者在如何處理和存取資料方面有著不同的特點。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                    data-aos-duration="1000">
                    <h3>stack(堆疊)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>堆疊是一種後進先出(Last-In-First-Out，LIFO)的資料結構，也就是說最後一個加入堆疊的元素將是第一個被移除的，就像堆疊盤子一樣，只能從最上面放入和移除。在 JavaScript
                            中，堆疊通常用於追蹤函數的呼叫和返回，或是處理遞迴等情況。</p>
                        <p>在堆疊中，兩個主要操作是「壓入」(push)和「彈出」(pop)：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>壓入：將元素添加到堆疊的頂部</li>
                            <li><i class="fa-regular fa-note-sticky"></i>彈出：從堆疊的頂部移除元素</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>stack 範例 1：簡單的文字編輯器追蹤使用者輸入的文字</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <pre>
class TextEditor {
    constructor() {
        this.stack = [];
    }

    insert(text) {
        this.stack.push(text);
    }

    undo() {
        if (this.stack.length > 0) {
            this.stack.pop();
        }
    }

    getText() {
        return this.stack.join("");
    }
}

const editor = new TextEditor();

editor.insert("Hi, ");
editor.insert("Charmy!");
console.log(editor.getText());   // Output: Hi, Charmy!

editor.undo();
console.log(editor.getText());   // Output: Hi,
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>stack 範例 2：瀏覽器歷史記錄功能，可以使用堆疊來追蹤用戶訪問的網頁</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <pre>
class BrowserHistory {
    constructor() {
        this.stack = [];
    }

    visit(url) {
        this.stack.push(url);
    }

    back() {
        if (this.stack.length > 1) {
            this.stack.pop();
        }
    }

    getCurrentPage() {
        return this.stack[this.stack.length - 1];
    }
}

const history = new BrowserHistory();

history.visit("https://www.example.com");
history.visit("https://www.example.com/page1");
history.visit("https://www.example.com/page2");

console.log(history.getCurrentPage());   // Output: https://www.example.com/page2

history.back();
console.log(history.getCurrentPage());   // Output: https://www.example.com/page1
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                    data-aos-duration="1000">
                    <h3>queue(佇列)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>佇列是一種先進先出(First-In-First-Out，FIFO)的資料結構。這意味著最早加入佇列的元素將是第一個被移除的，就像排隊等候一樣。在 JavaScript
                            中，佇列常用於處理排隊任務，例如非同步操作的管理。</p>
                        <p>在佇列中，兩個主要操作是「入隊」(enqueue)和「出隊」(dequeue)：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>入隊：將元素添加到佇列的尾部</li>
                            <li><i class="fa-regular fa-note-sticky"></i>出隊：從佇列的前端移除元素</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>queue 範例 1：處理一個訂單隊列，確保訂單按照提交的順序進行處理</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <pre>
class OrderProcessing {
    constructor() {
        this.queue = [];
    }

    placeOrder(order) {
        this.queue.push(order);
    }

    processOrders() {
        while (this.queue.length > 0) {
            const order = this.queue.shift();
            console.log("Processing order:", order);
        }
    }
}

const orderProcessor = new OrderProcessing();

orderProcessor.placeOrder("Order 1");
orderProcessor.placeOrder("Order 2");
orderProcessor.placeOrder("Order 3");

orderProcessor.processOrders();
// Processing order: Order 1
// Processing order: Order 2
// Processing order: Order 3
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <p>queue 範例 2：處理一批非同步任務，可以使用佇列來管理這些任務，確保它們按照添加的順序被執行</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <pre>
class AsyncTaskQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(task) {
        this.queue.push(task);
    }

    dequeue() {
        return this.queue.shift();
    }

    processTasks() {
        while (this.queue.length > 0) {
            const task = this.dequeue();
        task();
        }
    }
}

const taskQueue = new AsyncTaskQueue();

taskQueue.enqueue(() => {
    console.log("Task 1 executed");
});

taskQueue.enqueue(() => {
    console.log("Task 2 executed");
});

taskQueue.enqueue(() => {
    console.log("Task 3 executed");
});

taskQueue.processTasks();
// Task 1 executed
// Task 2 executed
// Task 3 executed
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                    data-aos-duration="1000">
                    <h3>總結</h3>
                    <div class="article-detailLine"></div>
                <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                    data-aos-duration="1000">
                    <p>堆疊和佇列都是資料結構，用於管理和操作資料的方式。堆疊使用後進先出的原則，最後進入的元素最先被處理，而佇列使用先進先出的原則，最早進入的元素最先被處理。在不同的程式設計場景中，可以選擇使用堆疊或佇列來更有效地處理資料。
                    </p>
                </div>
            </div>
        </section>
    </main>
    <Wall />
</div>
<pageRate />
<BackToTop /></template>

<script setup>
import Header from "@/components/Header.vue";
import Wall from "@/components/Wall.vue";
import BackToTop from "@/components/BackToTop.vue";
import pageRate from "@/components/pageRate.vue";
</script>