<template>
    <Header />
    <div class="content">
        <main>
            
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 Event Bus？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-29</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Event Bus 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Vue.js Event Bus 是一種事件機制，可用於在不同組件之間進行通信。可以將事件發佈到一個中央實例，並在需要時從其他組件中訂閱這些事件。這種方式可以有效地解耦不同組件之間的邏輯，使其更易於維護和擴展。</p>
                        <p>在 Vue.js 中，可以使用一個簡單的 Vue 實例作為事件中心，並通過 $emit、$on、$off 等方法來進行事件的發佈、訂閱和取消訂閱。</p>
                        <p>Vue Event Bus 的簡易範例</p>
                        <p>1、建立 event-bus.js：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import Vue from 'vue';
export const EventBus = new Vue();
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>2、在 ComponentA.vue 中使用 $emit：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;template>
    &lt;button @click="publishEvent">發佈事件&lt;/button>
&lt;/template>

&lt;script>
import { EventBus } from "./event-bus";
export default {
    methods: {
        publishEvent() {
            EventBus.$emit("custom-event", "Hello from Component A!");
        }
    }
};
&lt;/script>
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>3、在 ComponentB.vue 中使用 $on：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;template>
    &lt;div>
        &lt;p>&#123;&#123; message &#125;&#125;&lt;/p>
        &lt;button @click="subscribeEvent">訂閱事件&lt;/button>
        &lt;button @click="unsubscribeEvent">取消訂閱事件&lt;/button>
    &lt;/div>
&lt;/template>

&lt;script>
import { EventBus } from './event-bus';
export default {
    data() {
        return {
            message: ''
        };
    },
    methods: {
        subscribeEvent() {
            EventBus.$on('custom-event', this.onCustomEvent);
        },
        unsubscribeEvent() {
            EventBus.$off('custom-event', this.onCustomEvent);
        },
        onCustomEvent(payload) {
            this.message = payload;
        }
    }
};
&lt;/script>
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>範例中，ComponentA.vue 中的按鈕點擊會發佈一個名為 "custom-event" 的事件，並攜帶著 "Hello from Component A!" 的消息。ComponentB.vue 中的按鈕點擊會訂閱這個事件並顯示收到的消息。</p>
                        <p>※ Event Bus 的使用應該適度，過度使用可能導致程式碼難以理解和維護。在某些情況下，更好的方法是使用 Vuex 等狀態管理工具或通過 props 和自訂事件進行組件之間的串聯。但對於較小規模的應用或特定情況，Vue Event Bus 是一個輕量且方便的方案。</p>
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