<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">元件的生命週期與更新機制</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>生命週期與 Hooks function</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-pic" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-vue/vue-lifecycle.png" alt="">
                    </div>
                    <div class="article-table" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <table>
                            <thead>
                                <tr>
                                    <th>Hooks名稱(Vue 2.x/3.x)</th>
                                    <th>Hooks名稱(對應 Vue 3.0 Composition API)</th>
                                    <th>說明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>beforeCreate</td>
                                    <td>setup()</td>
                                    <td>Vue實體被建立，狀態與事件都尚未初始化</td>
                                </tr>
                                <tr>
                                    <td>created</td>
                                    <td>setup()</td>
                                    <td>Vue實體已建立，狀態與事件已初始化完成(prop、data、computed 等屬性已建立，vm.$el 屬性無法使用)</td>
                                </tr>
                                <tr>
                                    <td>beforeMount</td>
                                    <td>onBeforeMonut</td>
                                    <td>Vue實體尚未與模板(DOM 節點) 綁定</td>
                                </tr>
                                <tr>
                                    <td>mounted</td>
                                    <td>onMounted</td>
                                    <td>Vue實體與掛載完成，el 的目標 DOM 被 $el 所替換(可以視作 jQuery 的 Ready)</td>
                                </tr>
                                <tr>
                                    <td>beforeUpdate</td>
                                    <td>onBeforeUpdate</td>
                                    <td>當狀態被變動時，畫面同步更新前</td>
                                </tr>
                                <tr>
                                    <td>updated</td>
                                    <td>onUpdated</td>
                                    <td>當狀態被變動時，畫面已同步更新完成</td>
                                </tr>
                                <tr>
                                    <td>beforeDestroy(2.x)</td>
                                    <td>onBeforeUnmount</td>
                                    <td>Vue實體物件被銷毀前</td>
                                </tr>
                                <tr>
                                    <td>beforeUnmount(3.0)</td>
                                    <td>onBeforeUnmount</td>
                                    <td>Vue實體物件被銷毀前</td>
                                </tr>
                                <tr>
                                    <td>destroyed(2.x)</td>
                                    <td>onUnmounted</td>
                                    <td>Vue實體物件被銷毀完畢</td>
                                </tr>
                                <tr>
                                    <td>unmounted(3.0)</td>
                                    <td>onUnmounted</td>
                                    <td>Vue實體物件被銷毀完畢</td>
                                </tr>
                                <tr>
                                    <td>errorCaptured</td>
                                    <td>onErrorCaptured</td>
                                    <td>子/孫代元件的錯誤被捕獲時觸發</td>
                                </tr>
                                <tr>
                                    <td>activated</td>
                                    <td>--</td>
                                    <td>Vue元件被啟動時觸發，搭配keep-alive使用</td>
                                </tr>
                                <tr>
                                    <td>deactivated</td>
                                    <td>--</td>
                                    <td>Vue 元件被解除時觸發，搭配keep-alive使用</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a class="article-reference" href="https://book.vue.tw/CH1/1-7-lifecycle.html" target="_blank"><i class="fa-solid fa-pen-to-square"></i>重新認識 Vue.js | Kuro Hsu - 1-7 元件的生命週期與更新機制</a>
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