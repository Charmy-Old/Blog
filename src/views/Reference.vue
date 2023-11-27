<template>
    <Header /> <!-- 用掉用掉 h1 -->
    <div class="content">
        <main>
            <!-- Reference -->
            <section>
                <div class="reference reference-title">
                    <h2>Reference</h2> 
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-08</p>
                </div>
            </section>

            <section class="password">
                <div class="password-block">
                    <input v-model="inputPassword" type="password" placeholder="Enter Password" />
                    <button @click="checkPassword">Submit</button>
                </div>
            </section>

            <section style=" background-color: none; border: none; border-radius: none; margin-bottom: 0 !important; padding: 0;" v-if="passwordCorrect">
                <section>
                    <div class="reference reference-block">
                        <h3><i class="fa-solid fa-blog"></i>推薦部落格</h3>
                        <div class="reference-underline"></div>
                        <div class="reference-link"><a href="https://www.casper.tw/" target="_blank">卡斯伯的 Blog</a></div>
                        <div class="reference-link"><a href="https://blog.niclin.tw/" target="_blank">Nic Lin's Blog 喜歡在地上滾的工程師</a></div>
                        <div class="reference-link"><a href="https://maxleebk.com/" target="_blank">Max's Blog</a></div>
                        <div class="reference-link"><a href="https://penghuachen.github.io/" target="_blank">PH 前端修煉記錄</a></div>
                        <div class="reference-link"><a href="https://blog.zjzhang.org/" target="_blank">Zhe-Jia's Blog</a></div>
                        <div class="reference-link"><a href="https://blog.kalan.dev/" target="_blank">Kalan's Blog</a></div>
                        <div class="reference-link"><a href="https://hao1229.github.io/" target="_blank">Hao's F2E World</a></div>
                        <div class="reference-link"><a href="https://jameshsu0407.github.io/" target="_blank">米米的部落格</a></div>
                        <div class="reference-link"><a href="https://blog.jsy.tw//" target="_blank">JS Ying's Blog</a></div>
                        <div class="reference-link"><a href="https://hackmd.io/@MhZhtPVfTHanTVVP-3Ov6A/H1b8LVTRu/%2FCgLRMTf5S26kJxR705rGxw" target="_blank">洋蔥筆記</a></div>
                        <div class="reference-link"><a href="https://pjchender.dev/" target="_blank">PJCHENder</a></div>
                        <div class="reference-link"><a href="https://book.vue.tw/menu.html" target="_blank">重新認識 Vue.js | Kuro Hsu</a></div>
                        <div class="reference-link"><a href="https://ithelp.ithome.com.tw/users/20106426/ironman/2136" target="_blank">前端工程師用 javaScript 學演算法 系列</a></div>
                        <div class="reference-link"><a href="https://github.com/lydiahallie/javascript-questions/blob/master/zh-TW/README_zh-TW.md" target="_blank">JavaScript 進階題目列表---</a></div>
                        <div class="reference-link"><a href="https://medium.com/starbugs/%E9%9D%A2%E8%A9%A6-%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB%E4%B8%80%E5%AE%9A%E8%A6%81%E6%9C%83%E7%9A%84-js-%E8%A7%80%E5%BF%B5%E9%A1%8C-%E4%B8%AD%E8%8B%B1%E5%B0%8D%E7%85%A7%E4%B9%8B%E4%B8%8A%E7%AF%87-3b0a3feda14f" target="_blank">[面試] 前端工程師一定要會的 JS 觀念題-中英對照之上篇</a></div>
                        <div class="reference-link"><a href="https://medium.com/hannah-lin/%E9%9D%A2%E8%A9%A6-%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB%E4%B8%80%E5%AE%9A%E8%A6%81%E6%9C%83%E7%9A%84-js-%E8%A7%80%E5%BF%B5%E9%A1%8C-%E4%B8%AD%E8%8B%B1%E5%B0%8D%E7%85%A7%E4%B9%8B%E4%B8%8B%E7%AF%87-fd46292e374b" target="_blank">[面試] 前端工程師一定要會的 JS 觀念題-中英對照之下篇</a></div>
                        <div class="reference-link"><a href="https://hackmd.io/@mingjunlu/front-end-interview-questions#JavaScript" target="_blank">前端面試問題</a></div>
                    </div>
                </section>

                <section>
                    <div class="reference reference-block">
                        <h3><i class="fa-solid fa-handshake"></i>推薦論壇</h3>
                        <div class="reference-underline"></div>
                        <div class="reference-link"><a href="https://www.ithome.com.tw/" target="_blank">iThome</a></div>
                        <div class="reference-link"><a href="https://stackoverflow.com/" target="_blank">stackoverflow</a></div>
                        <div class="reference-link"><a href="https://codelove.tw/" target="_blank">CodeLove 愛寫扣論壇</a></div>
                        <div class="reference-link"><a href="https://github.com/f2etw/jobs/issues" target="_blank">前端 gitHub 論壇</a></div>
                    </div>
                </section>

                <section>
                    <div class="reference reference-block">
                        <h3><i class="fa-solid fa-screwdriver-wrench"></i>工具</h3>
                        <div class="reference-underline"></div>
                        <h4><i class="fa-brands fa-html5"></i>HTML</h4>
                        <div class="reference-link"><a href="https://pughtml.com/" target="_blank">Pug convert to HTML</a></div>
                        <div class="reference-link"><a href="https://www.csie.ntu.edu.tw/~r91112/myDownload/WEB/html.html" target="_blank">提供HTML語法整理法</a></div>
                        <div class="reference-underline"></div>
                        <h4><i class="fa-brands fa-css3-alt"></i>CSS</h4>
                        <div class="reference-link"><a href="https://meyerweb.com/eric/tools/css/reset/" target="_blank">CSS Tools: Reset CSS</a></div>
                        <div class="reference-link"><a href="https://codebeautify.org/sass-to-css-converter" target="_blank">SASS to CSS</a></div>
                        <div class="reference-link"><a href="https://jsonformatter.org/scss-to-css" target="_blank">SCSS to CSS</a></div>
                        <div class="reference-underline"></div>
                        <h4><i class="fa-brands fa-js"></i>JavaScript jQuery</h4>
                        <div class="reference-link"><a href="https://releases.jquery.com/jquery/#jquery-all-1.x" target="_blank">jQuery Core – All Versions | jQuery CDN</a></div>
                        <div class="reference-link"><a href="https://properprogramming.com/tools/converters/jquery-to-javascript-converter/" target="_blank">jQuery convert to JavaScript</a></div>
                        <div class="reference-link"><a href="https://michalsnik.github.io/aos/" target="_blank">AOS</a></div>
                        <div class="reference-link"><a href="https://www.emailjs.com/" target="_blank">Email.js</a></div>
                        <div class="reference-link"><a href="https://www.chartjs.org/" target="_blank">Chart.js</a></div>
                        <div class="reference-underline"></div>
                        <h4><i class="fa-brands fa-vuejs"></i>Vue</h4>
                        <div class="reference-link"><a href="https://vue-composition-converter.vercel.app/" target="_blank">Vue composition converter</a></div>
                        <div class="reference-underline"></div>
                        <h4><i class="fa-solid fa-server"></i>API 參考</h4>
                        <div class="reference-link"><a href="https://overapi.com/" target="_blank">OverAPI</a></div>
                        <div class="reference-underline"></div>
                        <div class="reference-link"><a href="https://analytics.google.com/analytics/web/#/p402024888/reports/intelligenthome" target="_blank"> Analytics (分析)</a></div>
                        <div class="reference-link"><a href="https://www.figma.com/" target="_blank">Figma</a></div>
                        <div class="reference-link"><a href="https://www.aconvert.com/tw/image/png-to-webp/" target="_blank">PNG轉WEBP - 在線轉換圖像文件</a></div>
                        <div class="reference-link"><a href="https://animatedbackgrounds.me/" target="_blank">Animated Backgrounds</a></div>
                        <div class="reference-link"><a href="https://stableboost.ai/" target="_blank">STABLE BOOST</a></div>
                    </div>
                </section>

                <section>
                    <div class="reference reference-block">
                        <h3><i class="fa-solid fa-crop"></i>切版框架</h3>
                        <div class="reference-underline"></div>
                        <h4>BootStrap：</h4>
                        <div class="reference-link"><a href="https://www.bootstrapcdn.com/" target="_blank">BootstrapCDN</a></div>
                        <div class="reference-link"><a href="https://getbootstrap.com/" target="_blank">Bootstrap 官網</a></div>
                        <div class="reference-link"><a href="https://medium.com/@trista_liu/2018%E5%B9%B4%E6%9C%80%E5%A5%BD%E7%94%A8%E7%9A%8420%E5%80%8Bbootstrap%E7%B6%B2%E7%AB%99%E6%A8%A1%E6%9D%BF-e99772f8ae38" target="_blank">20個Bootstrap網站模板給你</a></div>
                        <div class="reference-link"><a href="https://summer10920.github.io/2021/02-16/bs5-class-1/" target="_blank">[基礎課程] Bootstrap5 教學（一）：安裝、排版、內容</a></div>
                        <div class="reference-link"><a href="https://bootstrap5.hexschool.com/docs/5.0/layout/grid/" target="_blank">網格系統 (Grid system)</a></div>
                        <div class="reference-link"><a href="https://getbootstrap.com/docs/5.2/customize/color/" target="_blank">Color</a></div>
                        <div class="reference-link"><a href="https://www.casper.tw/development/2020/10/08/custom-bootstrap-style/" target="_blank">手把手自訂你的 Bootstrap 樣式</a></div>
                        <div class="reference-underline"></div>
                        <h4>View Design：</h4>
                        <div class="reference-link"><a href="https://www.iviewui.com/" target="_blank">View Design</a></div>
                        <div class="reference-link"><a href="https://www.iviewui.com/view-ui-plus/guide/install" target="_blank">安装 - View Design</a></div>
                        <div class="reference-underline"></div>
                        <h4>Tailwind CSS：</h4>
                        <div class="reference-link"><a href="https://tailwindcss.com/" target="_blank">Tailwind CSS 官網</a></div>
                    </div>
                </section>

                <section>
                    <div class="reference reference-block">
                        <h3><i class="fa-brands fa-vuejs"></i>Vue</h3>
                        <div class="reference-underline"></div>
                        <div class="reference-link"><a href="https://vue-composition-converter.vercel.app/" target="_blank">Vue composition converter</a></div>
                    </div>
                </section>

                <section>
                    <div class="reference reference-block">
                        <h3><i class="fa-solid fa-box"></i>打包</h3>
                        <div class="reference-underline"></div>
                        <div class="reference-link"><a href="https://gulpjs.com/" target="_blank">Gulp.js 官網</a></div>
                        <div class="reference-link"><a href="https://nodejs.org/download/release/v14.16.1/" target="_blank">Index of /download/release/v14.16.1/</a></div>
                        <div class="reference-link"><a href="https://nodejs.org/zh-tw/download/releases" target="_blank">先前釋出的版本 | Node.js</a></div>
                        <div class="reference-link"><a href="https://webpack.js.org/" target="_blank">webpack</a></div>
                    </div>
                </section>

                <section>
                    <div class="reference reference-block">
                        <h3><i class="fa-solid fa-book"></i>緯育上課講義 & 推薦工具</h3>
                        <div class="reference-underline"></div>
                        <h4><i class="fa-brands fa-html5"></i>HTML</h4>
                        <div class="reference-link"><a href="https://snippet-generator.app/" target="_blank">snippet generator</a></div>
                        <div class="reference-underline"></div>
                        <h4><i class="fa-brands fa-css3-alt"></i>CSS</h4>
                        <div class="reference-link"><a href="https://spiny-cheese-0b2.notion.site/Sass-0bf5c6c7ba1c4f63b8b4c9513c4f810b" target="_blank">Sass 教學講義</a></div>
                        <div class="reference-link"><a href="https://github.com/sexfat/cgd103/tree/sass" target="_blank">Bryant-GitHub-sass</a></div>
                        <div class="reference-link"><a href="https://autoprefixer.github.io/" target="_blank">(跨瀏覽器)Autoprefixer CSS online</a></div>
                        <div class="reference-underline"></div>
                        <h4><i class="fa-brands fa-vuejs"></i>Vue</h4>
                        <div class="reference-link"><a href="https://www.notion.so/75b8201eb1694d7d98e00a1e7f9ceeff?v=9a1be6b6a69748cc8158fb4e68b0fac9" target="_blank">🐢 VueJs 上課筆記</a></div>
                        <div class="reference-link"><a href="https://github.com/ingridkao" target="_blank">🐢 GitHub (ingridkao (Ingrid kao))</a></div>
                        <div class="reference-link"><a href="https://docs.google.com/spreadsheets/d/12Zldv0u3cUXk3YRBbRDtXKOethOaQVxByzSLKPLwJlA/edit#gid=692886590" target="_blank">🐢 Vue.js Google 試算表</a></div>
                        <div class="reference-link"><a href="https://ingridkao.github.io/vueTest/" target="_blank">🐢 上課連結</a></div>
                        <div class="reference-link"><a href="https://fakestoreapi.com/products/" target="_blank">🐢 fakestoreapi</a></div>
                        <div class="reference-underline"></div>
                        <h4><i class="fa-solid fa-box"></i>打包</h4>
                        <div class="reference-link"><a href="https://github.com/sexfat/cgd103" target="_blank">Bryant-GitHub-gulp</a></div>
                        <div class="reference-link"><a href="https://hackmd.io/RETnNFtqRJmE4NBolrQCUQ" target="_blank">Gulp 環境安裝</a></div>
                        <div class="reference-link"><a href="https://hackmd.io/iaDWtB3NRzmefW2IQltHJw" target="_blank">試著把 Gulp 提升到4</a></div>
                        <div class="reference-link"><a href="https://hackmd.io/@huhantin/HkHlEsD4s" target="_blank">Gulp</a></div>
                        <div class="reference-link"><a href="https://hackmd.io/chvUZNWERLO0uD9bBoQKXw?view" target="_blank">webpack</a></div>
                        <div class="reference-underline"></div>
                        <h4><i class="fa-solid fa-swatchbook"></i>Web UI/UX</h4>
                        <div class="reference-link"><a href="https://docs.google.com/presentation/d/1YTr9x9kT2mfAarwGB86-ky_m-yPfCZXF/edit#slide=id.p1" target="_blank">WEB-UI-UX實務_黃瀚霆_線上教學版本2022.pptx - Google 簡報</a></div>
                        <div class="reference-link"><a href="https://spiny-cheese-0b2.notion.site/903cd222f21241e8991983d8622c2fc8?v=b7b09ffff8044380bfa72a3231798993" target="_blank">Figma 介紹</a></div>
                        <div class="reference-link"><a href="https://themesbrand.com/velzon/html/default/index.html" target="_blank">Dashboard | Velzon - Admin & Dashboard Template</a></div>
                        <div class="reference-link"><a href="https://themesbrand.com/velzon/html/default/ui-buttons.html" target="_blank">Buttons | Velzon - Admin & Dashboard Template</a></div>
                        <div class="reference-link"><a href="https://codemyui.com/" target="_blank">CodeMyUI</a></div>
                        <div class="reference-link"><a href="http://jinjin.mepopedia.com/~jinjin/ui/ui-01.html#sec2" target="_blank">使用者介面設計｜教學網站｜User interface design，UI</a></div>
                        <div class="reference-underline"></div>
                        <h4><i class="fa-solid fa-icons"></i>Icon Font</h4>
                        <div class="reference-link"><a href="https://fontawesome.com/search?o=r&m=free&s=solid&f=sharp%2Cclassic%2Cbrands" target="_blank">Font Awesome</a></div>
                        <div class="reference-link"><a href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" target="_blank">https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css</a></div>
                        <div class="reference-link"><a href="https://www.iconfinder.com/" target="_blank">iconfinder</a></div>
                        <div class="reference-link"><a href="https://www.freepik.com/" target="_blank">圖片素材</a></div>
                        <div class="reference-link"><a href="https://www.flaticon.com/" target="_blank">icon</a></div>
                        <div class="reference-link"><a href="https://thenounproject.com/" target="_blank">Noun Project: Free Icons & Stock Photos for Everything</a></div>
                        <div class="reference-link"><a href="https://fonts.google.com/" target="_blank">Browse Fonts - Google Fonts</a></div>
                        <div class="reference-underline"></div>
                        <h4><i class="fa-solid fa-screwdriver-wrench"></i>TOOLS</h4>
                        <div class="reference-link"><a href="https://babeljs.io/" target="_blank">Babel · The compiler for next generation JavaScript</a></div>
                        <div class="reference-link"><a href="https://socket.io/" target="_blank">Socket.IO</a></div>
                        <div class="reference-link"><a href="https://loading.io/" target="_blank">loading.io - Your SVG + GIF + PNG Ajax Loading Icons and Animation Generator</a></div>
                        <div class="reference-link"><a href="https://tympanus.net/codrops/" target="_blank">Codrops | Creative front-end resources and inspiration for web professionals</a></div>
                        <div class="reference-link"><a href="https://c3js.org/" target="_blank">C3.js | D3-based reusable chart library</a></div>
                        <div class="reference-link"><a href="https://d3js.org/" target="_blank">D3.js - Data-Driven Documents</a></div>
                        <div class="reference-link"><a href="https://firebase.google.com/" target="_blank">Firebase</a></div>
                        <div class="reference-link"><a href="https://vitejs.dev/guide/" target="_blank">Getting Started | Vite</a></div>
                        <div class="reference-link"><a href="Getting Started | Vite" target="_blank">Vite | Next Generation Frontend Tooling</a></div>
                        <div class="reference-link"><a href="https://tw.strikingly.com/" target="_blank">Vite | Next Generation Frontend Tooling</a></div>
                        <div class="reference-link"><a href="Getting Started | Vite" target="_blank">如何建立一個網站 - 免費建站工具 | Strikingly</a></div>
                    </div>
                </section>

                <section>
                    <div class="reference reference-block">
                        <h3><i class="fa-brands fa-codepen"></i>Codepen</h3>
                        <div class="reference-underline"></div>
                        <div class="reference-link"><a href="https://codepen.io/trending" target="_blank">CodePen</a></div>
                        <div class="reference-link"><a href="https://codepen.io/yachen/pen/gOwzmVo?editors=1100" target="_blank">scroll-behavior</a></div>
                        <div class="reference-link"><a href="https://codepen.io/RayPan/pen/aEPNaM" target="_blank">JavaScript - 滑鼠滾輪水平滾動</a></div>
                        <div class="reference-link"><a href="https://codepen.io/chris22smith/pen/pymBWL" target="_blank">All Form Elements</a></div>
                        <div class="reference-link"><a href="https://codepen.io/chriscoyier/pen/kKozBP" target="_blank">Light Javascript Table Filter</a></div>
                        <div class="reference-link"><a href="https://codepen.io/frank890417/pen/eWgPry?editors=1111" target="_blank">Taiwan///Weather Map</a></div>
                        <div class="reference-link"><a href="https://codepen.io/suez/pen/ZEqxBb" target="_blank">One page scroll navigation with css transforms</a></div>
                        <div class="reference-link"><a href="https://codepen.io/jh3y/pen/LYgjpYZ" target="_blank">Night && Day Toggle ☀️/🌙 [Completed It!]</a></div>
                        <div class="reference-link"><a href="https://codepen.io/myacode/pen/PoqQQNM" target="_blank"><i class="fa-solid fa-exclamation"></i>Neumorphic Elements</a></div>
                        <div class="reference-link"><a href="https://codepen.io/uiswarup/pen/dyoyLOp" target="_blank">404 error page</a></div>
                        <div class="reference-link"><a href="https://codepen.io/ktsn/pen/wrxymV" target="_blank">Simple Page Transition</a></div>
                        <div class="reference-link"><a href="https://codepen.io/NiklasKnaack/pen/RwqeGQr" target="_blank">Starfield/Warpdrive Particles</a></div>
                        <div class="reference-link"><a href="https://codepen.io/whitep4nth3r/pen/VwEqrQL" target="_blank"><i class="fa-solid fa-exclamation"></i>The Ultimate Theme Toggle™️</a></div>
                        <div class="reference-link"><a href="https://codepen.io/alemesa/pen/YNrBqr" target="_blank">Vue Background Color</a></div>
                        <div class="reference-link"><a href="https://codepen.io/quinlo/pen/eQrRMM" target="_blank">Sheets API Specials Menu</a></div>
                        <div class="reference-link"><a href="https://codepen.io/ste-vg/pen/ppLQNW" target="_blank">Tower Blocks</a></div>
                        <div class="reference-link"><a href="https://codepen.io/jmkhsutp/pen/oNWPzxx" target="_blank">8/10 (二) － 撈出想要的 JSON 資料</a></div>
                        <div class="reference-link"><a href="https://codepen.io/HunorMarton/pen/MWjBRWp" target="_blank">Stack game with Three.js and Cannon.js</a></div>
                        <div class="reference-link"><a href="https://codepen.io/danielcubas/pen/PoxRvZr" target="_blank">Scroll Indicator Bar JavaScript</a></div>
                        <div class="reference-link"><a href="https://codepen.io/svenschebaum/pen/wvbYrO" target="_blank">Animated Mouse-scroll Down Button</a></div>
                        <div class="reference-link"><a href="https://codepen.io/kyrony/pen/KKQXjqy" target="_blank">Vue Scroll Progress Bar</a></div>
                    </div>
                </section>

                <section>
                    <div class="reference reference-block">
                        <h3><i class="fa-solid fa-asterisk"></i>參考</h3>
                        <div class="reference-underline"></div>
                        <h4><i class="fa-brands fa-css3-alt"></i>CSS 參考</h4>
                        <div class="reference-link"><a href="https://www.astralweb.com.tw/pure-css-drop-down-menu/" target="_blank">純CSS的下拉式選單</a></div>
                        <div class="reference-link"><a href="https://zhuanlan.zhihu.com/p/437382427" target="_blank">纯CSS实现的文字效果竟然可以这么酷炫！</a></div>
                        <div class="reference-link"><a href="https://blog.csdn.net/xw1680/article/details/118065460" target="_blank">肝了一宿才收集的48个超炫酷的 CSS 文字特效，绝对值得收藏！！！</a></div>
                        <div class="reference-underline"></div>
                        <h4><i class="fa-brands fa-js"></i>JS 參考</h4>
                        <div class="reference-link"><a href="https://replit.com/@birdiewu/Ti-Zhong-Ji-Lu-online-weight-tracker?v=1#html/index.html" target="_blank">體重紀錄online weight tracker</a></div>
                        <div class="reference-link"><a href="https://codelove.tw/@howtomakeaturn/post/L3QRYa" target="_blank">JavaScript 系列八：第5課 ── 體重追蹤應用程式</a></div>
                        <div class="reference-underline"></div>
                        <h4><i class="fa-solid fa-server"></i>API 參考</h4>
                        <div class="reference-link"><a href="https://opendata.cwb.gov.tw/index?fbclid=IwAR2aXOHSyA2ViqWgIAt6JZhn-tcZ50rhS7mNI0DC4iw5uQSnRjJwBmFDegE" target="_blank">氣象資料開放平臺</a></div>
                        <div class="reference-link"><a href="https://codelove.tw/@howtomakeaturn/post/1ayR0q" target="_blank">JavaScript 系列八：第6課 ── 天氣查詢應用程式</a></div>
                        <div class="reference-link"><a href="https://api.nasa.gov/" target="_blank">NASA Open APIs</a></div>
                        <div class="reference-link"><a href="https://codelove.tw/@tony/post/Ja6JaO" target="_blank">給工程師的12個超好用API、可串接大量有趣資料～！</a></div>
                    </div>
                </section>

                <section>
                    <div class="reference reference-block">
                        <h3><i class="fa-solid fa-palette"></i>推薦作品</h3>
                        <div class="reference-underline"></div>
                        <div class="reference-link"><a href="https://webdesignclip.com/" target="_blank">Web Design Clip | Webデザインギャラリー・クリップ集</a></div>
                        <div class="reference-link"><a href="https://www.awwwards.com/" target="_blank">Awwwards - Website Awards - Best Web Design Trends</a></div>
                        <div class="reference-link"><a href="https://codyhouse.co/ds/components?free=true" target="_blank">Components | CodyHouse</a></div>
                        <div class="reference-link"><a href="https://challenge.thef2e.com/works" target="_blank">The F2E - 前端修練精神時光屋 | 作品列表</a></div>
                        <div class="reference-link"><a href="https://www2.panasonic.biz/jp/dsr/index/" target="_blank">電気設備BOX | Panasonic</a></div>
                        <div class="reference-link"><a href="https://dogstudio.co/" target="_blank">DOGSTUDIO</a></div>
                        <div class="reference-link"><a href="https://www.dextall.com/" target="_blank">DEXTALL</a></div>
                        <div class="reference-link"><a href="https://www.david-hckh.com/" target="_blank">david-hckh</a></div>
                    </div>
                </section>

                <section>
                    <div class="reference reference-block">
                        <h3><i class="fa-solid fa-newspaper"></i>文章</h3>
                        <div class="reference-underline"></div>
                        <div class="reference-link"><a href="https://ithelp.ithome.com.tw/articles/10194154" target="_blank">重新認識 JavaScript: Day 24 物件與原型鏈</a></div>
                        <div class="reference-link"><a href="https://ithelp.ithome.com.tw/articles/10223556" target="_blank">15. [JS] 什麼是原型鏈？</a></div>
                        <div class="reference-link"><a href="https://hao1229.github.io/2019/08/05/EcommercePractice6/" target="_blank">Vue.js 電商練習技術整理 -- 製作讀取動畫增加使用者體驗</a></div>
                        <div class="reference-link"><a href="https://ithelp.ithome.com.tw/articles/10230871" target="_blank">JavaScript - Event Loop</a></div>
                        <div class="reference-link"><a href="https://maxleebk.com/2020/07/25/prototype/" target="_blank">面試官最愛考的 JS 原型鏈</a></div>
                        <div class="reference-link"><a href="https://yakimhsu.com/project/project_w16_EventLoop.html" target="_blank">[第十六週] JavaScript 進階：事件迴圈 Event Loop、Stack、Queue</a></div>
                        <div class="reference-link"><a href="https://jianline.com/javascript-event-loop/" target="_blank">[筆記]-JavaScript Event Loop是什麼?Event Loop的3個重點</a></div>
                        <div class="reference-link"><a href="https://ithelp.ithome.com.tw/articles/10299646?sc=rss.iron" target="_blank">[Day12] 專案開發流程前，甚麼是design pattern?</a></div>
                        <div class="reference-underline"></div>
                        <div class="reference-link"><a href="https://backlog.com/git-tutorial/tw/" target="_blank">連猴子都能懂的Git入門指南</a></div>
                        <div class="reference-link"><a href="https://www.wibibi.com/info.php?tid=CSS3_animation_%E5%8B%95%E7%95%AB%E5%B1%AC%E6%80%A7" target="_blank">CSS3 animation 動畫屬性</a></div>
                        <div class="reference-link"><a href="https://www.programfarmer.com/articles/2021/javascript-shallow-copy-deep-copy" target="_blank">JS 中的淺拷貝 (Shallow copy) 與深拷貝 (Deep copy) 原理與實作</a></div>
                        <div class="reference-link"><a href="https://medium.com/i-am-mike/%E9%87%8D%E6%A7%8B%E5%80%92%E6%95%B8%E7%AC%AC29%E5%A4%A9-vue2-option-api%E8%BD%89%E6%8F%9B-vue3-composition-api-7bceff5eeb18" target="_blank">[重構倒數第29天] — Vue2 Option API轉換 Vue3 Composition API</a></div>
                        <div class="reference-link"><a href="https://juejin.cn/post/7234034799660630074" target="_blank">前端工程化-自动生成vue页面</a></div>
                        <div class="reference-link"><a href="http://cc.cust.edu.tw/~ccchen/doc/db_03.pdf" target="_blank">ER Model 實體關係圖</a></div>
                        <div class="reference-link"><a href="https://www.omniwaresoft.com.tw/product-news/docker-news/docker-introduction/" target="_blank">Docker 是什麼？Docker 基本觀念介紹與容器和虛擬機的比較</a></div>
                        <div class="reference-link"><a href="https://medium.com/starbugs/vite-vs-turbopack-1e139c222557" target="_blank">兩大 bundler 交鋒：Vite 與 Turbopack 的技術角力賽</a></div>
                        <div class="reference-link"><a href="https://bolaslien.github.io/blog/2021/10/25/js-array-prototype-sort/" target="_blank">JavaScript 陣列排序 sort</a></div>
                        <div class="reference-link"><a href="https://medium.brobridge.com/%E7%82%BA%E4%BD%95%E8%A9%B2%E9%81%B8%E7%94%A8%E5%88%86%E6%95%A3%E5%BC%8F%E8%B3%87%E6%96%99%E6%9E%B6%E6%A7%8B-%E6%8E%A2%E8%A8%8E%E4%BC%81%E6%A5%AD%E8%B3%87%E6%96%99%E6%9E%B6%E6%A7%8B%E7%9A%84%E6%BC%94%E9%80%B2-data-warehouse-to-data-mesh-bce3dc810c15" target="_blank">為何該選用分散式資料架構？探討企業資料架構的演進：Data Warehouse to Data Mesh</a></div>
                        <div class="reference-link"><a href="https://5xruby.tw/posts/15min-regular-expression" target="_blank">十五分鐘認識正規表達式，解決所有文字難題</a></div>
                        <div class="reference-link"><a href="https://hahow.in/contents/articles/60deccb71ab50900074b948f" target="_blank">【直播筆記】基礎 JS（JavaScript）物件導向教學</a></div>
                        <div class="reference-link"><a href="https://codelove.tw/@tony/post/YqZQav" target="_blank">給網站工程師的超好用 cheatsheet 備忘單：工作時方便快速查詢</a></div>
                        <div class="reference-link"><a href="https://zhuanlan.zhihu.com/p/355511031" target="_blank">ajax、Promise、axios总结</a></div>
                        <div class="reference-link"><a href="https://pjchender.dev/javascript/js-closure/" target="_blank">[JS] 深入淺出 JavaScript 閉包（closure）</a></div>
                        <div class="reference-link"><a href="https://www.casper.tw/development/2020/03/25/import-export/" target="_blank">完全解析 JavaScript import、export</a></div>
                        <div class="reference-link"><a href="https://www.casper.tw/javascript/2017/12/12/javascript-this/" target="_blank">鐵人賽：JavaScript 的 this 到底是誰？</a></div>
                        <div class="reference-link"><a href="https://medium.com/hannah-lin/%E5%BE%9E%E6%94%BB%E6%93%8A%E8%87%AA%E5%B7%B1%E7%B6%B2%E7%AB%99%E5%AD%B8-xss-cross-site-scripting-%E5%8E%9F%E7%90%86%E7%AF%87-fec3d1864e42" target="_blank">[XSS 1] 從攻擊自己網站學 XSS (Cross-Site Scripting)</a></div>
                        <div class="reference-link"><a href="https://medium.com/hannah-lin/xss-2-%E5%A6%82%E4%BD%95%E9%98%B2%E7%A6%A6-xss-%E6%94%BB%E6%93%8A-18fdf10ef5ef" target="_blank">[XSS 2] 如何防禦 XSS 攻擊</a></div>
                        <div class="reference-link"><a href="https://hackmd.io/@dez/rJRxmO2qS" target="_blank">用傳紙條作弊理解 WebSocket</a></div>
                        <div class="reference-link"><a href="https://speakerdeck.com/milkmidi/webcomponent" target="_blank">WebComponent</a></div>
                        <div class="reference-link"><a href="https://www.cythilya.tw/2023/08/12/build-front-end-performance-monitoring-mechanism-from-scratch-webconf-tw-2023/?fbclid=IwAR3DdgQJFNj8Yv9NTYa2WC-EzZdYzSjYrXeFIMVpTUi3uxfJ1DmUS0F3Xik_aem_ATTqt3RKOvRpd2Sy_CDuLS1eFcRusn0_sGEBq2s0rw3nyKJ59vHJhsqccV5fnkGnw_s" target="_blank">從零打造前端效能監控系統 | WebConf Taiwan 2023 逐字稿</a></div>
                        <div class="reference-link"><a href="https://blog.csdn.net/rowlet/article/details/130162311" target="_blank">2023-04-14 使用纯JS实现一个2048小游戏</a></div>
                        <div class="reference-link"><a href="http://www.eion.com.tw/Blogger/?Pid=1170" target="_blank">JavaScript 陣列元素順序重新排序 sort()</a></div>
                    </div>
                </section>
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
import { ref } from "vue";

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
</script>