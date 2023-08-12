<template>
    <Header />
    <div class="content">
        <main>
            
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">Vue 模板語法</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-21</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>模板語法</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Vue.js 使用了基於 HTML 的模板語法，允許開發者聲明式地將 DOM 綁定至底層 Vue 實例的數據。</p>
                        <p>Vue.js 的核心是一個允許你采用簡潔的模板語法來聲明式的將數據渲染進 DOM。</p>
                        <p>結合響應系統，在應用狀態改變時， Vue 能夠智能地計算出重新渲染組件的最小代價並應用到 DOM 操作上。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>插值</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>使用雙大括號將數據渲染到 HTML 中。</h4>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;div id="app"&gt;
    &lt;p&gt;&#123;&#123; name &#125;&#125;&lt;/p&gt;
&lt;/div&gt;
</pre>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const app = new Vue({
    el: "#app",
    data: {
        name: "Charmy",
    },
});
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>v-on</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>用於監聽 DOM 事件並在事件觸發時調用 Vue 實例中定義的方法。應用於前端應用程式中進行事件處理，例如點擊事件、鍵盤事件、表單提交等。</p>
                        <p>使用 v-on 指令可以在 Vue 模板中以簡潔的方式註冊事件監聽器，當事件觸發時，將觸發指定的 Vue 方法。</p>
                        <p>直接指定事件名和方法名：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;div id="app"&gt;
  &lt;button v-on:click="Clicking"&gt;Click&lt;/button&gt;
&lt;/div&gt;
</pre>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const app = new Vue({
    el: "#app",
    methods: {
        Clicking() {
            alert("Be Clicked");
        },
    },
});
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>使用縮寫 @：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;div id="app"&gt;
    &lt;button @click="Clicking"&gt;Click&lt;/button&gt;
&lt;/div&gt;
</pre>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const app = new Vue({
    el: "#app",
    methods: {
        Clicking() {
            alert("Be Clicked");
        },
    },
});
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>v-bind 綁定屬性和事件</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>用於動態地綁定 HTML 元素的屬性到 Vue 實例中的數據。它可以在 Vue 模板中以簡潔的方式將數據和 DOM 屬性關聯起來，使得當數據改變時，相應的 DOM 屬性也會跟著更新，實現了數據和視圖之間的雙向綁定。</p>
                        <p>將單個屬性綁定到數據：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;div id="app"&gt;
    &lt;img :src="imageURL"&gt;
&lt;/div&gt;
</pre>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const app = new Vue({
    el: "#app",
    data: {
        imageURL: "https://example.com/image.jpg",
    },
});
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>將多個屬性綁定到對象上：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;div id="app"&gt;
    &lt;a :href="link.url" :title="link.title"&gt;&#123;&#123; link.text &#125;&#125;&lt;/a&gt;
&lt;/div&gt;
</pre>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const app = new Vue({
    el: "#app",
    data: {
        link: {
            url: "https://example.com",
            title: "Example",
            text: "Click me!",
        },
    },
});
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>v-if 條件渲染</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>用於根據指定的條件來控制 HTML 元素是否顯示或渲染。可以根據 Vue 實例中的數據來動態地添加或移除 DOM 中的元素，從而實現條件渲染。</p>
                        <p>使用 v-if 指令可以在 Vue 模板中以簡潔的方式根據條件控制元素的顯示與隱藏。當指定的條件為真（true）時，相應的元素會顯示在頁面上；當條件為假（false）時，相應的元素會從頁面中移除。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;div id="app"&gt;
    &lt;p v-if="showMessage"&gt;This message is shown if showMessage is true.&lt;/p&gt;
&lt;/div&gt;
</pre>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const app = new Vue({
    el: "#app",
    data: {
        showMessage: true,
    },
});
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>使用 v-else 和 v-else-if 可以用於實現更複雜的條件判斷和渲染。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;div id="app"&gt;
    &lt;p v-if="showMessage"&gt;This message is shown if showMessage is true.&lt;/p&gt;
    &lt;p v-else-if="showWarning"&gt;This message is shown if showMessage is false and showWarning is true.&lt;/p&gt;
    &lt;p v-else&gt;This message is shown if both showMessage and showWarning are false.&lt;/p&gt;
&lt;/div&gt;
</pre>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const app = new Vue({
    el: "#app",
    data: {
        showMessage: false,
        showWarning: true,
    },
});
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>v-for 迴圈</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>用於在 Vue 模板中根據數據來進行循環遍歷，並動態地生成重複的 HTML 元素或元素列表。這可以輕鬆地在前端應用程式中將數據列表渲染為可視化的內容。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;div id="app"&gt;
    &lt;ul&gt;
        &lt;li v-for="item in items" :key="item.id"&gt;&#123;&#123; item.name &#125;&#125;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</pre>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const app = new Vue({
    el: "#app",
    data: {
        items: [
            { id: 1, name: "Item 1" },
            { id: 2, name: "Item 2" },
            { id: 3, name: "Item 3" },
        ],
    },
});
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>v-for 生成的元素需要指定一個唯一的 :key 屬性，以便 Vue 可以更有效地跟蹤和更新 DOM 中的元素。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;div id="app"&gt;
    &lt;ul&gt;
        &lt;li v-for="(value, key) in myObject" :key="key"&gt;&#123;&#123; key &#125;&#125;: &#123;&#123; value &#125;&#125;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</pre>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const app = new Vue({
    el: "#app",
    data: {
        items: [
            { id: 1, name: "Item 1" },
            { id: 2, name: "Item 2" },
            { id: 3, name: "Item 3" },
        ],
    },
});
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