<template>
    <Header />
    <div class="content">
        <main>
            
            <section>
                <div class="article-top">
                    <div class="article-icon">
                        <i class="fa-brands fa-vuejs"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">Vue</div>
                    </div>
                </div>
            </section>

            <section>
                <a href="VUE_eventBus" class="article">
                    <div class="article-icon">
                        <i class="fa-brands fa-vuejs"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 Event Bus？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Vue<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-29</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>Vue.js Event Bus 是一種事件機制，可用於在不同組件之間進行通信。可以將事件發佈到一個中央實例，並在需要時從其他組件中訂閱這些事件。這種方式可以有效地解耦不同組件之間的邏輯，使其更易於維護和擴展。</p>
                            <p>在 Vue.js 中，可以使用一個簡單的 Vue 實例作為事件中心，並通過 $emit、$on、$off 等方法來進行事件的發佈、訂閱和取消訂閱。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section>
                <a href="VUE_createVUEcli" class="article">
                    <div class="article-icon">
                        <i class="fa-brands fa-vuejs"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">如何建立 Vue-CLI？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Vue<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-29</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>在安裝 Vue CLI 之前，必須先安裝 Node.js，可直接至 Node.js 的官網下載並安裝</p>
                            <p>Vue CLI 4.x 需要 Node.js v8.9 或更高版本，可在 Terminal 或 cmd 中使用 node -v 查看版本</p>
                        </div>
                    </div>
                </a>
            </section>

            <section>
                <a href="VUE_syntax" class="article">
                    <div class="article-icon">
                        <i class="fa-brands fa-vuejs"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">Vue 模板語法</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Vue<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-21</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>Vue.js 使用了基於 HTML 的模板語法，允許開發者聲明式地將 DOM 綁定至底層 Vue 實例的數據。</p>
                            <p>Vue.js 的核心是一個允許你采用簡潔的模板語法來聲明式的將數據渲染進 DOM。</p>
                            <p>結合響應系統，在應用狀態改變時， Vue 能夠智能地計算出重新渲染組件的最小代價並應用到 DOM 操作上。</p>
                        </div>
                    </div>
                </a>
            </section>

            <section>
                <a href="VUE_LifeCycle" class="article">
                    <div class="article-icon">
                        <i class="fa-brands fa-vuejs"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">元件的生命週期與更新機制</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Vue<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>如同生物一般， Vue 的實體物件從建立、掛載、更新，到銷毀移除，這一連串的過程，我們將它稱作生命週期。在這個過程中， Vue.js 提供了開發者在這些週期階段做對應處理的 callback function，這些 callback function 我們就稱它叫生命週期的 Hooks function。</p>
                        </div>
                    </div>
                </a>
            </section>

        </main>
        <Wall />
    </div>
    <BackToTop />
</template>
<script>
    import Header from "@/components/Header.vue";
    import Wall from "@/components/Wall.vue";
    import BackToTop from "@/components/BackToTop.vue";
    import { onMounted } from "vue";
    export default {
        components: {
            Header,
            Wall,
            BackToTop,
            // Footer,
        },
        setup() {
            onMounted(() => {
                function selectArticle() {
                    const buttons = document.querySelectorAll(".select-button");
                    const cards = document.querySelectorAll(".all");
                    
                    function filter(category, items) {
                        items.forEach((item) => {
                            const isItemFiltered = !item.classList.contains(category);
                            const isShowAll = category.toLowerCase() === "all";
                            if (isItemFiltered && !isShowAll) {
                                item.classList.add("d-none");
                            } else {
                                item.classList.remove("d-none");
                            }
                        });
                    }
                    
                    buttons.forEach((button) => {
                        button.addEventListener("click", () => {
                            const currentCategory = button.dataset.filter;
                            console.log(currentCategory);
                            filter(currentCategory, cards);
                        });
                    });
                }
          
                selectArticle();
            })
        }
    };
</script>