<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 slot？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2024-03-29</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>slot 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在 Vue.js 中，slot 是一種特殊的標記，用於向組件中傳遞內容，從而實現組件的可重用性和靈活性。slot 允許在父組件中插入子組件特定的 HTML 內容，這樣就可以在同一個組件的不同場景中呈現不同的內容，而不需要修改組件本身的結構。</p>
                        <p>簡單來說，slot 在組件模板中佔好了位置，當使用該組件標籤時，組件標籤裡面的內容就會自動填入(替換組件模板中 slot 位置)</p>
                        <p>在 2.6.0 中，具名插槽 和 作用域插槽 引入了一個新的統一語法 → v-slot 來取代 slot 和 slot-scope</p>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>slot 基本使用</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>插槽內可以包含普通文字，也可以包含任何模板程式碼，包括 HTML。</h4>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// MyComponent.vue
&lt;template>
    &lt;div>
        &lt;h2>這是 MyComponent 組件&lt;/h2>
        &lt;slot>默認插槽內容&lt;/slot>
    &lt;/div>
&lt;/template>



// Home.vue
&lt;template>
        &lt;div>
            &lt;MyComponent>
                &lt;p>插入插槽中的自定義內容&lt;/p>
            &lt;/MyComponent>
        &lt;/div>
&lt;/template>

&lt;script setup>
import MyComponent from "@/components/MyComponent.vue";
&lt;/script>
</pre>
                    </div>
                    <div class="article-pic" style="width: fit-content; margin: auto;" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-vue/slot-1.webp" alt="">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>最終顯示出來的是 "插入插槽中的自定義內容"，但是如果沒有在 &lt;MyComponent> 裡面放入 template 的話，那就會是默認的 "默認插槽內容"。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// MyComponent.vue
&lt;template>
    &lt;div>
        &lt;span class="fa fa-user">&lt;/span>
        Hello Word
    &lt;/div>
&lt;/template>



// Home.vue
&lt;template>
    &lt;div>
        &lt;MyComponent>
            &lt;font-awesome-icon>&lt;/font-awesome-icon>
            Hello Word
        &lt;/MyComponent>
    &lt;/div>
&lt;/template>

&lt;script setup>
import MyComponent from "@/components/MyComponent.vue";
&lt;/script>
</pre>
                    </div>
                    <div class="article-pic" style="width: fit-content; margin: auto;" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-vue/slot-2.webp" alt="">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>如果 &lt;MyComponent> 中沒有包含一個 &lt;slot> 元素，則該元件起始標籤和結束標籤之間的任何內容都會被拋棄。</p>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>在插槽中使用數據</h4>
                        <p>插槽跟模板其他地方一樣都可以存取相同作用域，不能存取 &lt;MyComponent> 的作用域</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// MyComponent.vue
&lt;template>
    &lt;div>
        Hello &#123&#123data&#125&#125
    &lt;/div>
&lt;/template>

&lt;script setup>
const data = "MyComponent";
&lt;/script>



// Home.vue
&lt;template>
        &lt;div>
            &lt;MyComponent>
                Hello &#123&#123data&#125&#125
            &lt;/MyComponent>
        &lt;/div>
&lt;/template>

&lt;script setup>
import MyComponent from "@/components/MyComponent.vue";
const data = "Home";
&lt;/script>
</pre>
                    </div>
                    <div class="article-pic" style="width: fit-content; margin: auto;" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-vue/slot-3.webp" alt="">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>父層模板裡的所有內容都是在父層作用域中編譯的，子層模板裡的所有內容都是在子層作用域中編譯的。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>默認插槽(Default Slot)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>默認插槽用於在子組件中放置不屬於任何具名插槽的內容。如果父組件沒有提供具名插槽內容，這些內容將被渲染到默認插槽中。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// MyComponent.vue
&lt;template>
    &lt;div>
        &lt;slot>默認內容&lt;/slot>
    &lt;/div>
&lt;/template>



// Home.vue
&lt;template>
    &lt;div>
        &lt;MyComponent>
            &lt;p>自定義內容&lt;/p>
        &lt;/MyComponent>
    &lt;/div>
&lt;/template>

&lt;script setup>
import MyComponent from "@/components/MyComponent.vue";
&lt;/script>
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>最終顯示出來的是 "自定義內容"，但是如果沒有在 &lt;MyComponent> 裡面放入 template 的話，那就會是默認的 "默認內容"。</p>
                    </div>
                </div>
            </section>



            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>具名插槽(Named Slots)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>有時候一個組件裡需要多個插槽，對於這樣的情況，&lt;slot> 元素有一個特殊的特性 → name，這個特性可以用來定義額外的插槽，這樣，父組件可以根據插槽的名稱將內容傳遞給子組件的不同插槽位置。在子組件中，可以使用 &lt;slot> 元素為每個插槽定義一個默認內容，如果沒有父組件提供相應插槽內容，將會顯示默認內容。。</p>
                        <p>如果一個 &lt;slot> 不帶 name 屬性的話，那麼 name 預設為 default。</p>
                        <p>在向具名插槽提供內容的時候，可以在 &lt;template> 元素上使用 v-slot 指令，並以參數的形式提供其名稱。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// MyComponent.vue
&lt;template>
    &lt;div>
        &lt;slot name="header">默認 header&lt;/slot>
        &lt;div>子組件內容&lt;/div>
        &lt;slot name="footer">默認 footer&lt;/slot>
    &lt;/div>
&lt;/template>



// Home.vue
&lt;template>
    &lt;div>
        &lt;MyComponent>
            &lt;template v-slot:header>
                &lt;header>自定義 header&lt;/header>
            &lt;/template>
            &lt;p>父組件內容&lt;/p>
            &lt;template v-slot:footer>
                &lt;footer>自定義 footer&lt;/footer>
            &lt;/template>
        &lt;/MyComponent>
    &lt;/div>
&lt;/template>

&lt;script setup>
import MyComponent from "@/components/MyComponent.vue";
&lt;/script>
</pre>
                    </div>
                    <div class="article-pic" style="width: fit-content; margin: auto;" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-vue/slot-4.webp" alt="">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-regular fa-note-sticky"></i>使用 slot 的時候，是無法讀取子組件的任何資料的，只能讀取父組件裡面定義的 data、method、computed 等，這稱為渲染作用域。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>作用域插槽(Scoped Slot)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>作用域插槽允許組件將子組件中的數據傳遞到父組件中。</p>
                        <p>上文中提到插槽跟模板其他地方一樣都可以存取相同作用域，不能存取 &lt;MyComponent> 的作用域，如果想存取 &lt;MyComponent> 作用域就要把需要傳遞的內容綁到 &lt;slot> 上，然後在父元件中用 v-slot 設定一個值來定義我們提供插槽的名字。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// MyComponent.vue
&lt;template>
    &lt;div>
        &lt;slot v-bind:usertext="user">&#123&#123user.lastName&#125&#125 &lt;/slot>
    &lt;/div>
&lt;/template>

&lt;script setup>
    const user = {firstName:"FirstName", lastName:"LastName"}
&lt;/script>



// Home.vue
&lt;template>
    &lt;div>
        &lt;MyComponent v-slot:default="slotProps">
            &#123&#123slotProps.usertext.firstName&#125&#125
        &lt;/MyComponent>
    &lt;/div>
&lt;/template>

&lt;script setup>
import MyComponent from "@/components/MyComponent.vue";
&lt;/script>
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以上範例中，在設定預設值 &#123&#123user.lastName&#125&#125 取得 LastName，如果 Home.vue 中不給這個插槽值的話，則顯示 LastName，若像上述範例給值的話，則顯示 FirstName。</p>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>獨佔預設插槽的縮寫語法</h4>
                        <p>在上面情形中，當被提供的內容只有預設插槽時，元件的標籤才可以當作插槽的模板來使用。這樣就可以把 v-slot 直接用在組件上</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// MyComponent.vue
&lt;template>
    &lt;div>
        &lt;slot v-bind:usertext="user">&#123&#123user.lastName&#125&#125 &lt;/slot>
    &lt;/div>
&lt;/template>

&lt;script setup>
    const user = {firstName:"FirstName", lastName:"LastName"}
&lt;/script>



// Home.vue
&lt;template>
    &lt;div>
        &lt;MyComponent v-slot="slotProps">
            &#123&#123slotProps.usertext.firstName&#125&#125
            &lt;template v-slot:other="otherSlotProps">
                默認插槽的縮寫語法不要和具名插槽混用，會導致作用域不明確，會報錯
            &lt;/template>
        &lt;/MyComponent>
    &lt;/div>
&lt;/template>

&lt;script setup>
import MyComponent from "@/components/MyComponent.vue";
&lt;/script>
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Home.vue 中的 :default 可以拿掉，僅限於默認插槽才可以，但默認插槽的縮寫語法不要和具名插槽混用，會導致作用域不明確，</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>解構插槽 Prop</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>因為作用域插槽的內部運作原理是將插槽內容納入一個傳入單一參數的函數裡，也就代表 v-slot 的值實際上可以是任何能夠作為函數定義中的參數的 JavaScript 表達式。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// Home.vue
&lt;template>
    &lt;div>
        &lt;MyComponent v-slot={usertext}>
            &#123&#123usertext.firstName&#125&#125
        &lt;/MyComponent>
    &lt;/div>
&lt;/template>

&lt;script setup>
import MyComponent from "@/components/MyComponent.vue";
&lt;/script>
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>這樣可以使模板更簡潔，尤其是在該插槽提供了多個 prop 的時候，而且也同樣開啟了 prop 重新命名等其它可能。</p>
                    </div>
                </div>
            </section>



















            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>在 2.6.0 後新增的語法</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>動態指令參數也可以用在 v-slot 上，定義動態的插槽名</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>// Home.vue
&lt;template>
    &lt;div>
        &lt;MyComponent>
            &lt;template v-slot:[dynamicSlotName]>
                content
            &lt;/template>
        &lt;/MyComponent>
    &lt;/div>
&lt;/template>

&lt;script setup>
import MyComponent from "@/components/MyComponent.vue";
&lt;/script>
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>跟 v-on 和 v-bind 一樣，v-slot 也有縮寫，也就是把參數之前的所有內容 (v-slot:) 都替換為字元 #。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;template>
    &lt;div>
        &lt;MyComponent>
            &lt;template v-slot:header>
                &lt;header>自定義 header&lt;/header>
            &lt;/template>
            &lt;p>父組件內容&lt;/p>
            &lt;template v-slot:footer>
                &lt;footer>自定義 footer&lt;/footer>
            &lt;/template>
        &lt;/MyComponent>
    &lt;/div>
&lt;/template>

&lt;script setup>
import MyComponent from "@/components/MyComponent.vue";
&lt;/script>

// 改寫為 ↓

&lt;template>
    &lt;div>
        &lt;MyComponent>
            &lt;template #header>
                &lt;header>自定義 header&lt;/header>
            &lt;/template>
            &lt;p>父組件內容&lt;/p>
            &lt;template #footer>
                &lt;footer>自定義 footer&lt;/footer>
            &lt;/template>
        &lt;/MyComponent>
    &lt;/div>
&lt;/template>

&lt;script setup>
import MyComponent from "@/components/MyComponent.vue";
&lt;/script>
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

<script setup>
import Header from "@/components/Header.vue";
import Wall from "@/components/Wall.vue";
import BackToTop from "@/components/BackToTop.vue";
import pageRate from "@/components/pageRate.vue";
</script>