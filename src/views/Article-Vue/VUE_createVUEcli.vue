<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">如何建立 Vue-cli？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-29</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Vue-cli 簡介與環境</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p style="flex-wrap: wrap;">安裝 Vue cli 之前，必須先安裝 Node.js，可直接至 Node.js 官網(<a href="https://nodejs.org/zh-tw/download" style="margin: 0">https://nodejs.org/zh-tw/download</a>)下載並安裝</p>
                        <p>Vue cli 4.x 需要 Node.js v8.9 或更高版本，可在 Terminal 或 cmd 中使用 node -v 查看版本</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Vue-cli 安裝</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在 Terminal 終端機後輸入：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
vue create 專案名稱
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>接著會顯示：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
Vue cli v4.5.10
? Please pick a preset: (Use arrow keys)
❯ Default ([Vue 2] babel, eslint)
  Default (Vue 3 Preview) ([Vue 3] babel, eslint)
  Manually select features
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>此處為選擇要建立 Vue 2.x / Vue 3.x 或者自行手動選擇版本與相關套件設定的專案</p>
                        <p>※ 若此時選 Default Vue 2.x/3.x 的版本，相關套件只會包含 babel, eslint，專案內並不會有 sass-loader、Vuex、Vur-router 等其他套件</p>
                        <p>此處建議選擇 Manually select features</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
❯ ◉ Choose Vue version
  ◯ Babel
  ◯ TypeScript
  ◯ Progressive Web App (PWA) Support
  ◯ Router
  ◯ Vuex
  ◯ CSS Pre-processors
  ◯ Linter / Formatter
  ◯ Unit Testing
  ◯ E2E Testing
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>此處依情況選擇</p>
                        <p>接下來決定要把相關套件的設定放在什麼地方</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
? Where do you prefer placing config for Babel, ESLint, etc.?
  In dedicated config files
❯ In package.json
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>此處建議選擇 In package.json</p>
                        <p>最後可以選擇是否將前面選項保存以便下次直接使用</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
? Save this as a preset for future projects? (y/N)
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Vue cli 建立的專案結構</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
├── node_modules/       # node 相關的套件 (隱藏目錄)
│
├── dist/               # 用來存放打包後的檔案
├── public/             # 公開檔案目錄
│ ├── favicon.ico
│ └── index.html
│
├── src/                # 原始碼目錄，主要都在這裡進行開發
│ ├── App.vue
│ ├── assets/           # 靜態檔案的預設目錄
│ ├── components/       # 元件檔案的預設目錄
│ └── main.js           # Vue 專案的預設進入點
│
├── babel.config.js     # babel 設定檔
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>專案內 src/ 目錄下的 main.js 就是這個專案預設的進入點：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Vue cli 專案 npm 載入 Bootstrap</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>CSS</h4>
                        <p>在終端機輸入</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
npm install bootstrap --save
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在 App.vue 中加入</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;style lang="scss">
    @import '~bootstrap/scss/bootstrap';  
&lt;/style>
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>jQuery</h4>
                        <p>全域載入，在終端機輸入</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
npm i -S jquery
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在 main.js 中加入</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import $ from 'jquery';
window.$ = $;
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>popper</h4>
                        <p>在終端機輸入</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
npm install --save popper.js
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>Bootstrap JS</h4>
                        <p>在 main.js 中加入</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import 'bootstrap';
</pre>
                    </div>

                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a class="article-reference" href="https://book.vue.tw/CH3/3-1-vue-cli-introduction.html" target="_blank"><i class="fa-solid fa-pen-to-square"></i>重新認識 Vue.js | Kuro Hsu - 3-1 Vue cli 介紹</a>
                        <a class="article-reference" href="https://medium.com/ivycodefive/vue-cli-%E5%B0%88%E6%A1%88-npm-%E8%BC%89%E5%85%A5-bootstrap-css-js-%E7%AD%86%E8%A8%98-ba6651c810b" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Medium(Written by Ivy Ho) - Vue cli 專案 npm 載入 Bootstrap CSS、JS (筆記)</a>
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