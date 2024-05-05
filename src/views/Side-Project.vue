<template>
    <Header />
    <div class="content">
        <main>
            <!-- sideProject -->
            <section>
                <div class="sideProject sideProject-title" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h2>Side Project</h2> 
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2024-05-05</p>
                </div>
            </section>
            <!-- BLOG -->
            <div class="sideProject-projectBlock">
                <div class="sideProject-projectPic">
                    <img src="../assets/images/project/blog.webp" alt="">
                </div>
                <div class="sideProject-projectText">
                    <div class="sideProject-projectTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">部落格</div>
                    <div class="sideProject-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-solid fa-tag"></i>HTML</p>
                        <p><i class="fa-solid fa-tag"></i>CSS</p>
                        <p><i class="fa-solid fa-tag"></i>Vue-CLI</p>
                        <p><i class="fa-solid fa-tag"></i>Vue Composition API</p>
                        <p><i class="fa-solid fa-tag"></i>Axios 串接政府天氣資料</p>
                    </div>
                    <div class="sideProject-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023/06 ~ 進行中</p>
                    </div>
                    <div class="article-underline"></div>
                    <div class="sideProject-projectContent" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>原本是想記錄一些接觸到前端技術和當作客製化履歷，但是也希望可以記錄一些生活與所見所聞並分享，所以創立了部落格。</p>
                        <p>從最一開始參考許多前端前輩部落格的風格與設計開始思考自己想要呈現的樣式。</p>
                        <p>部落格主要是使用 Vue-CLI ，其中使用 Vue composition api 方式撰寫，部屬至 GitHub 後使用 render 取得網址。</p>
                        <p>除了自我介紹外，也有放入 CodePen 連結。部落格內有使用 Axios 串接政府單位的 API 可以查詢台灣各地區的天氣預報功能，除此之外還會整理一些前端文章和其他自己的所見所聞，並持續思考該如何使網站更加豐富。</p>
                    </div>
                    <div class="sideProject-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a href="https://github.com/Charmying/blog" target="_blank">GitHub</a>
                        <p>→</p>
                    </div>
                    <div class="sideProject-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a href="https://charmying-blog.onrender.com/" target="_blank">前往網站</a>
                        <p>→</p>
                    </div>
                </div>
            </div>
            <!-- 串接 Riot API -->
            <div class="sideProject-projectBlock">
                <div class="sideProject-projectPic">
                    <img src="../assets/images/project/riot-api-lol.webp" alt="">
                </div>
                <div class="sideProject-projectText">
                    <div class="sideProject-projectTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">英雄聯盟韓服戰績查詢</div>
                    <div class="sideProject-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-solid fa-tag"></i>JavaScript</p>
                        <p><i class="fa-solid fa-tag"></i>Fetch 語法串接 Riot API</p>
                    </div>
                    <div class="sideProject-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2024/03 ~ 2024/04</p>
                    </div>
                    <div class="article-underline"></div>
                    <div class="sideProject-projectContent" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>最近重新開始接觸英雄聯盟，所以想做一個戰績的查詢系統，使用 HTML、CSS 和 原生 JavaScript 撰寫。其中在 Riot 官網取得 API Key，使用 fetch 語法串接 Riot API，取得資料進行整理後將其呈現，戰績的部分則是使用 for 迴圈處理，因為 Riot 官方目前沒有提供台服 API 資料，所以先製作韓服的戰績查詢。</p>
                        <p>排版部分稍微參考 OP.GG 後進行簡易切版，目前還在持續進行中，也在思考加入戰績統計資料。</p>
                        <p>有提供一些韓國職業選手 ID 參考查詢，可以直接點擊頭像查詢。</p>
                        <p>Riot 的 API Key 需要 24 小時更新一次，所以有可能來不及更新，敬請見諒。</p>
                    </div>
                    <div class="sideProject-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a href="https://github.com/Charmying/Riot-API-LOL" target="_blank">GitHub</a>
                        <p>→</p>
                    </div>
                    <div class="sideProject-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a href="https://charmying.github.io/Riot-API-LOL/" target="_blank">前往網站</a>
                        <p>→</p>
                    </div>
                </div>
            </div>
            <!-- Engineering-Calculator 工程計算機 -->
            <div class="sideProject-projectBlock">
                <div class="sideProject-projectPic">
                    <img src="../assets/images/project/engineering-calculator.webp" alt="">
                </div>
                <div class="sideProject-projectText">
                    <div class="sideProject-projectTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">工程計算機 Engineering-Calculator</div>
                    <div class="sideProject-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-solid fa-tag"></i>Vue composition api</p>
                    </div>
                    <div class="sideProject-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023/05 ~ 2023/06</p>
                    </div>
                    <div class="article-underline"></div>
                    <div class="sideProject-projectContent" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>原本是想寫一個計算機作為練習，但是發現 google 和 codepen 上沒有工程計算機的範例，所以進行功能上的延伸來完成一個工程計算機並分享。</p>
                        <p>利用 vue composition api 進行撰寫，使用 Math 語法來進行運算，但是在輸入跟呈現的部分會和 JavaScript 中的計算有所不同，所以有再使用正規表達式進行符號轉換，並需要考慮輸入的內容是否符合運算法則與順序。</p>
                    </div>
                    <div class="sideProject-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a href="https://github.com/Charmying/Engineering-Calculator" target="_blank">GitHub</a>
                        <p>→</p>
                    </div>
                    <div class="sideProject-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a href="https://codepen.io/Charmy_ing/pen/yLQBLMw" target="_blank">CodePen</a>
                        <p>→</p>
                    </div>
                    <div class="sideProject-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a href="https://charmying.github.io/Engineering-Calculator/" target="_blank">前往網站</a>
                        <p>→</p>
                    </div>
                </div>
            </div>
            <!-- 備忘錄 Todo-List-->
            <div class="sideProject-projectBlock">
                <div class="sideProject-projectPic">
                    <img src="../assets/images/project/todo-list.webp" alt="">
                </div>
                <div class="sideProject-projectText">
                    <div class="sideProject-projectTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">備忘錄 Todo-List</div>
                    <div class="sideProject-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-solid fa-tag"></i>HTML</p>
                        <p><i class="fa-solid fa-tag"></i>CSS</p>
                        <p><i class="fa-solid fa-tag"></i>JavaScript</p>
                    </div>
                    <div class="sideProject-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023/01 ~ 2023/01</p>
                    </div>
                    <div class="article-underline"></div>
                    <div class="sideProject-projectContent" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>使用 HTML、CSS、JavaScript 寫出備忘錄，備忘錄輸入時需填入日期及時間並存入 localStorage，時間到時會彈窗提醒。</p>
                    </div>
                    <div class="sideProject-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a href="https://github.com/Charmying/Todo-List/" target="_blank">GitHub</a>
                        <p>→</p>
                    </div>
                    <div class="sideProject-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a href="https://codepen.io/Charmy_ing/pen/RwBeNRz" target="_blank">CodePen</a>
                        <p>→</p>
                    </div>
                    <div class="sideProject-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a href="https://charmying.github.io/Todo-List/" target="_blank">前往網站</a>
                        <p>→</p>
                    </div>
                </div>
            </div>
            <!-- 緯育團專 -->
            <div class="sideProject-projectBlock">
                <div class="sideProject-projectPic">
                    <img src="../assets/images/project/koala.webp" alt="">
                </div>
                <div class="sideProject-projectText">
                    <div class="sideProject-projectTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">緯育TiBaMe前端工程師就業養成班團體專題：KOALA+</div>
                    <div class="sideProject-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-solid fa-tag"></i>Figma</p>
                        <p><i class="fa-solid fa-tag"></i>HTML</p>
                        <p><i class="fa-solid fa-tag"></i>CSS</p>
                        <p><i class="fa-solid fa-tag"></i>Vue-CLI</p>
                        <p><i class="fa-solid fa-tag"></i>Vue2 option api</p>
                        <p><i class="fa-solid fa-tag"></i>PHP</p>
                        <p><i class="fa-solid fa-tag"></i>MySQL</p>
                    </div>
                    <div class="sideProject-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2022/11 ~ 2023/01</p>
                    </div>
                    <div class="article-underline"></div>
                    <div class="sideProject-projectContent" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>與組員從主題選擇開始到 Wireframe 及 Mockup 繪製，因這次還會從後端 PHP 連接資料庫，所以也要先繪製 ER model。</p>
                        <p>此次團體專題主要是使用 VUE-CLI 和 Vue2 option api 配合 IIS PHP 來連接 MySQL 資料庫，並加入 Tailwind CSS 方便切版。在進行串接時是使用 fetch 的語法來撈取資料並在使用者進行操作時更新資料庫內容。會員註冊時也是使用 fetch 語法在資料庫新增會員，忘記密碼的部分則是使用 email js 來把會員的密碼寄到信箱中。</p>
                        <p>負責項目：</p>
                        <p>網站前台：會員登入、註冊、忘記密碼和無尾熊小遊戲</p>
                        <p>網站後台：管理員的登入註冊。</p>
                        <p>目前緯育 Tibame 的伺服器正在維護處理。</p>
                    </div>
                    <div class="sideProject-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a href="https://docs.google.com/presentation/d/1giVj9XMnIGM1W-MYBEiZptxHv5_XzvwndlYpAEPF1S8/edit#slide=id.gcf542d467f_0_0" target="_blank">團體專題簡報</a>
                        <p>→</p>
                    </div>
                    <div class="sideProject-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a href="https://github.com/bear320/KOALA_PLUS" target="_blank">GitHub</a>
                        <p>→</p>
                    </div>
                    <div class="sideProject-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a href="https://tibamef2e.com/cgd103/g1/" target="_blank">前往網站</a>
                        <p>→</p>
                    </div>
                </div>
            </div>
            <!-- 緯育個專 -->
            <div class="sideProject-projectBlock">
                <div class="sideProject-projectPic">
                    <img src="../assets/images/project/pangolin-phonecase.webp" alt="">
                </div>
                <div class="sideProject-projectText">
                    <div class="sideProject-projectTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">緯育 TiBaMe 前端工程師就業養成班個人專題：PANGOLIN 手機殼販售</div>
                    <div class="sideProject-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-solid fa-tag"></i>Figma</p>
                        <p><i class="fa-solid fa-tag"></i>HTML</p>
                        <p><i class="fa-solid fa-tag"></i>CSS</p>
                        <p><i class="fa-solid fa-tag"></i>JavaScript</p>
                        <p><i class="fa-solid fa-tag"></i>jQuery</p>
                    </div>
                    <div class="sideProject-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2022/09 ~ 2022/10</p>
                    </div>
                    <div class="article-underline"></div>
                    <div class="sideProject-projectContent" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>從專題主題發想開始，到 UI/UX 及用 Figma 完成 WireFrame 及 Mockup 完成網頁設計，再使用 HTML、CSS、JavaScript 和 jQuery 完成作品後上傳到 GitHub 並取得 GitHub Page 網址。</p>
                    </div>
                    <div class="sideProject-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a href="https://github.com/Charmying/Pangolin-Phonecase" target="_blank">GitHub</a>
                        <p>→</p>
                    </div>
                    <div class="sideProject-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a href="https://charmying.github.io/Pangolin-Phonecase/" target="_blank">前往網站</a>
                        <p>→</p>
                    </div>
                </div>
            </div>
            <!-- Pangolin Clothing -->
            <div class="sideProject-projectBlock">
                <div class="sideProject-projectText">
                    <div class="sideProject-projectTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">Pangolin Clothing 網站練習</div>
                    <div class="sideProject-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-solid fa-tag"></i>HTML</p>
                        <p><i class="fa-solid fa-tag"></i>CSS</p>
                        <p><i class="fa-solid fa-tag"></i>JavaScript</p>
                        <p><i class="fa-solid fa-tag"></i>Vue</p>
                        <p><i class="fa-solid fa-tag"></i>PHP</p>
                        <p><i class="fa-solid fa-tag"></i>PostgreSQL</p>
                    </div>
                    <div class="sideProject-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023/06 ~ 進行中</p>
                    </div>
                    <div class="article-underline"></div>
                    <div class="sideProject-projectContent" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Vue-CLI 進行網站練習，其中使用 Vue composition api 方式撰寫，登入功能使用 fetch PHP 連上 PostgreSQL 完成，部屬至 GitHub 後使用 render 取得網址。</p>
                        <p>帳號密碼為 charmy000@gmail.com 和 charmy000 或 Johnny000@gmail.com 和 Johnny000</p>
                        <p>商品內頁和加入會員及忘記密碼功能等尚未完成</p>
                    </div>
                    <div class="sideProject-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a href="https://github.com/Charmying/pangolin-clothing" target="_blank">GitHub</a>
                        <p>→</p>
                    </div>
                    <div class="sideProject-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a href="https://pangolin-clothing.onrender.com/" target="_blank">前往網站</a>
                        <p>→</p>
                    </div>
                </div>
            </div>
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