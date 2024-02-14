<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 v-for？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2024-02-14</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>v-for 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>v-for 是 Vue.js 中的一個指令，它允許你在 Vue 的模板中根據一個數據源（如陣列或物件）來生成重複的 HTML 元素或 Vue 組件。</p>
                        <h4>基本用法</h4>
                        <h5>遍歷陣列</h5>
                        <p>可以使用 v-for 在模板中遍歷陣列。假設有一個陣列 items，可以依以下範例使用 v-for：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;div v-for="(item, index) in items" :key="index">
    &#123;&#123; item &#125;&#125;
&lt;/div>
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在這裡，item 是當前陣列元素的值，index 是它的索引。</p>
                        <h5>遍歷物件</h5>
                        <p>也可以使用 v-for 遍歷物件的屬性。例如：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;div v-for="(value, key) in object" :key="key">
    &#123;&#123; key &#125;&#125;: &#123;&#123; value &#125;&#125;
&lt;/div>
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在這裡，key 是物件屬性的鍵，value 是它的值。</p>
                        <h4>特殊變數</h4>
                        <p>在 v-for 中，你可以使用一些特殊的變數來訪問當前遍歷的項目的值和索引：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150"
                        data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>item：當前遍歷的陣列元素或物件值</li>
                            <li><i class="fa-regular fa-note-sticky"></i>index：當前遍歷的陣列索引</li>
                            <li><i class="fa-regular fa-note-sticky"></i>key：當前遍歷的物件屬性鍵</li>
                            <li><i class="fa-regular fa-note-sticky"></i>value：當前遍歷的物件屬性值</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>綁定 key</h4>
                        <p>為了讓 Vue 能夠正確追蹤每個節點的身份以便高效地重新渲染，應該為 v-for 中生成的每個元素提供一個唯一的 key 屬性。</p>
                        <h4>作用域插槽</h4>
                        <p>v-for 也可以在 Vue 的作用域插槽中使用，這樣可以以一種特殊的方式將數據從父組件傳遞到子組件。</p>
                        <p>範例：</p>
                        <p>遍歷陣列：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;div v-for="(item, index) in items" :key="index">
    &#123;&#123; index &#125;&#125;: &#123;&#123; item &#125;&#125;
&lt;/div>
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>遍歷物件：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;div v-for="(value, key) in object" :key="key">
    &#123;&#123; key &#125;&#125;: &#123;&#123; value &#125;&#125;
&lt;/div>
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>作用域插槽：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;my-component>
    &lt;template v-for="item in items">
        &lt;div v-if="item.visible">&#123;&#123; item.name &#125;&#125;&lt;/div>
    &lt;/template>
&lt;/my-component>
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>v-for :key 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>v-for 中的 :key 是用來幫助 Vue 識別每個 DOM 元素的唯一標識符。這個標識符通常是陣列中每個元素的索引值，或者物件中每個屬性的鍵值。在 Vue 中，當一個元素的順序發生改變時，Vue 會根據這個 :key 來判斷哪些元素是新增的、哪些元素是被刪除的，以及哪些元素只是重新排序了。</p>
                        <h4>為什麼需要使用 :key？</h4>
                        <p>當使用 v-for 動態渲染一個列表時，每個列表中的項目都有自己的 DOM 元素。當列表中的數據發生變化時（例如，一個項目被添加、刪除或重新排序），Vue 會嘗試盡可能地從現有的 DOM 元素中重用，而不是銷毀並重新創建它們。這樣可以提高性能並減少 DOM 操作。</p>
                        <p>然而，Vue 需要一種方法來跟踪每個 DOM 元素的身份。這就是 :key 屬性的作用。通過為每個元素提供一個唯一的 key 值，Vue 就能夠確定每個 DOM 元素的身份，並在數據發生變化時正確地更新它們。</p>
                        <h4>:key 的選擇</h4>
                        <p>通常，你可以使用 v-for 中的索引值或者數據源中的唯一標識符作為 :key 的值。不過，如果可能的話，最好使用具有唯一性且穩定的值作為 :key，而不是索引值。這樣可以確保在列表中項目的重新排序時，Vue 能夠正確地識別它們，而不是錯誤地認為某些元素被刪除並重新創建。</p>
                        <p>範例：</p>
                        <p>使用索引作為 :key</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;div v-for="(item, index) in items" :key="index">
    &#123;&#123; item &#125;&#125;
&lt;/div>
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在這個示例中使用 v-for 中的索引值作為 :key。這樣做是合理的，因為索引值在陣列中是唯一且穩定的，除非陣列發生了變化。</p>
                        <h4>使用唯一標識符作為 :key</h4>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;div v-for="item in items" :key="item.id">
    &#123;&#123; item.name &#125;&#125;
&lt;/div>
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在這個示例中假設 item 物件有一個唯一的 id 屬性。我們使用這個 id 屬性作為 :key，這樣可以確保每個項目都有一個唯一的標識符，即使它們在列表中重新排序也是如此。</p>
                        <p>總之，v-for 中的 :key 是用來幫助 Vue 正確識別每個 DOM 元素的唯一標識符，從而提高性能並確保正確地更新 DOM 元素。</p>
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