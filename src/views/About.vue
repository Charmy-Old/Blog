<template>
    <Header /> <!-- 用掉用掉 h1 -->
    <div class="content">
        <main>
            <!-- About -->
            <section>
                <div class="about about-title" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h2>About</h2> 
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-15</p>
                </div>
            </section>

            <!-- 簡介 -->
            <section>
                <div class="about about-introduce" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>簡介</h3>
                    <div class="about-underline"></div>
                    <p>您好，我是曾韋翰，因在 YouTube 上接觸到程式的影片進而對程式產生熱忱，所以在 udemy 上自學前端，在摸索過程中得知緯育 TiBaMe 教育機構後進而參加前端工程師就業養成班並成功結業。</p>
                </div>
            </section>

            <!-- 學歷 -->
            <section>
                <div class="about about-education" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>學歷</h3>
                    <div class="about-underline"></div>
                    <p>緯育TiBaMe的前端工程師就業養成班 結業<span><i class="fa-sharp fa-solid fa-calendar-days"></i>2023/01</span></p>
                    <p>中原大學土木工程學系 畢業<span><i class="fa-sharp fa-solid fa-calendar-days"></i>2022/05</span></p>
                </div>
            </section>

            <!-- 專長 -->
            <section>
                <div class="about about-expertise">
                    <h3 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">專長</h3>
                    <div class="about-underline"></div>
                    <p class="about-expertiseTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">網頁前端技術</p>
                    <p class="about-expertiseDetail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <span><i class="fa-solid fa-keyboard"></i>HTML5</span>
                        <span><i class="fa-solid fa-keyboard"></i>CSS3</span>
                        <span><i class="fa-solid fa-keyboard"></i>CSS3 Animation</span>
                        <span><i class="fa-solid fa-keyboard"></i>JavaScript</span>
                        <span><i class="fa-solid fa-keyboard"></i>RWD</span>
                        <span><i class="fa-solid fa-keyboard"></i>jQuery</span>
                        <span><i class="fa-solid fa-keyboard"></i>AJAX</span>
                        <span><i class="fa-solid fa-keyboard"></i>Web APIs</span>
                        <span><i class="fa-solid fa-keyboard"></i>Pug</span>
                        <span><i class="fa-solid fa-keyboard"></i>SCSS</span>
                        <span><i class="fa-solid fa-keyboard"></i>Webpack</span>
                        <span><i class="fa-solid fa-keyboard"></i>Vue.js</span> 
                    </p>
                    <div class="about-underline"></div>
                    <p class="about-expertiseTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">UI/UX 使用者介面設計</p>
                    <p class="about-expertiseDetail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <span><i class="fa-solid fa-keyboard"></i>UI/UX</span>
                        <span><i class="fa-solid fa-keyboard"></i>Figma</span>
                        <span><i class="fa-solid fa-keyboard"></i>Wirefrme</span>
                        <span><i class="fa-solid fa-keyboard"></i>Mockup</span>
                        <span><i class="fa-solid fa-keyboard"></i>Prototype</span>
                    </p>
                    <div class="about-underline"></div>                    
                    <p class="about-expertiseTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">網站程式系統與資料庫</p>
                    <p class="about-expertiseDetail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <span><i class="fa-solid fa-keyboard"></i>PHP</span>
                        <span><i class="fa-solid fa-keyboard"></i>My SQL</span>
                        <span><i class="fa-solid fa-keyboard"></i>Git</span>
                        <span><i class="fa-solid fa-keyboard"></i>Sourcetree</span>
                        <span><i class="fa-solid fa-keyboard"></i>系統分析(敏捷式開發)</span>
                    </p>
                </div>
            </section>

            <!-- 經歷 -->
            <section>
                <div class="about about-experience">
                    <h3>經歷</h3>
                    <div class="about-underline"></div>
                    <!-- 雲端數位 -->
                    <div class="about-job">
                        <div class="about-jobTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                            <h4>前端工程師</h4>
                            <h5>雲端數位科技有限公司（網際網路相關業 30~100人）</h5>
                            <p class="about-jobDescribe">Internet程式設計師<span>｜</span>正職<span>｜</span>台中市北屯區</p>
                            <p class="about-jobTime"><i class="fa-sharp fa-solid fa-calendar-days"></i><span>2023/02/15~2023/08/14 六個月</span></p>
                        </div>
                        <div class="about-jobContent" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                            <p>依設計師的設計稿已網頁的方式呈現，並與客戶溝通協調問題與成果。</p>
                            <div class="about-jobProject">
                                <p>建準電機工業股份有限公司(越南一頁式網站)</p>
                                <div class="about-jobLink">
                                    <a href="http://html.m000407.24241872.tw/index-Vietnamese" target="_blank">測試網站</a>
                                    <p>→</p>
                                </div>
                            </div>
                            <div class="about-jobProject">
                                <p>悠遊卡股份有限公司</p>
                                <p>負責頁面：永續專區、投資人專區</p>
                                <div class="about-jobLink">
                                    <a href="http://test.m000231.24241872.tw/sustainableOperators" target="_blank">測試網站</a>
                                    <p>→</p>
                                </div>
                                <div class="about-jobLink">
                                    <a href="https://www.easycard.com.tw/sustainableOperators" target="_blank">正式網站</a>
                                    <p>→</p>
                                </div>
                            </div>
                            <div class="about-jobProject">
                                <p>寶鋪建設股份有限公司</p>
                                <p>負責頁面：地圖檢視</p>
                                <div class="about-jobLink">
                                    <a href="http://html.m000381.24241872.tw/map" target="_blank">測試網站</a>
                                    <p>→</p>
                                </div>
                                <div class="about-jobLink">
                                    <a href="https://www.baopu.com.tw/maps" target="_blank">正式網站</a>
                                    <p>→</p>
                                </div>
                            </div>
                            <div class="about-jobProject">
                                <p>凱薩衛浴股份有限公司</p>
                                <p>負責頁面：經銷商招募</p>
                                <div class="about-jobLink">
                                    <a href="http://html.m000351.24241872.tw/dealer-recruitment" target="_blank">測試網站</a>
                                    <p>→</p>
                                </div>
                                <div class="about-jobLink">
                                    <a href="https://www.caesar.com.tw/page/dealer-recruitment" target="_blank">正式網站</a>
                                    <p>→</p>
                                </div>
                            </div>
                            <div class="about-jobProject">
                                <p>還有幫穎崴科技、建準吊扇等上市上櫃公司進行網頁的調整處理。</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-underline"></div>
                    <!-- 立法委員選舉輔選人員 -->
                    <div class="about-job">
                        <div class="about-jobTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                            <h4>立法委員選舉輔選人員</h4>
                            <h5>某立法委員服務處（政府／民意機關）</h5>
                            <p class="about-jobDescribe">活動企劃人員<span>｜</span>工讀<span>｜</span>桃園市</p>
                            <p class="about-jobTime"><i class="fa-sharp fa-solid fa-calendar-days"></i><span>2019/10~2020/01</span></p>
                        </div>
                        <div class="about-jobContent" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                            <ul>
                                <li><i class="fa-solid fa-briefcase"></i>帶領團隊佈置場地</li>
                                <li><i class="fa-solid fa-briefcase"></i>現場狀況緊急排除</li>
                                <li><i class="fa-solid fa-briefcase"></i>主持造勢活動</li>
                            </ul>
                        </div>
                    </div>
                    <div class="about-underline"></div>
                    <!-- 中原社團 -->
                    <div class="about-job">
                        <div class="about-jobTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                            <h4>中原大學社團活動幹部</h4>
                            <h5>中原大學卡拉ok社、中原大學中友會</h5>
                            <p class="about-jobDescribe">社團幹部<span>｜</span>桃園市中壢區</p>
                            <p class="about-jobTime"><i class="fa-sharp fa-solid fa-calendar-days"></i><span>2016/09~2017/06</span></p>
                        </div>
                        <div class="about-jobContent" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                            <ul>
                                <li><i class="fa-solid fa-briefcase"></i>活動流程規劃</li>
                                <li><i class="fa-solid fa-briefcase"></i>主持活動</li>
                                <li><i class="fa-solid fa-briefcase"></i>活動總結檢討</li>
                                <li><i class="fa-solid fa-briefcase"></i>校園歌唱比賽評審並進行表演及歌唱教學至2022年</li>
                            </ul>
                        </div>
                    </div>
                    <div class="about-underline"></div>
                    <!-- 迎新宿營 -->
                    <div class="about-job">
                        <div class="about-jobTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                            <h4>系上迎新宿營隊輔</h4>
                            <h5>中原大學環境工程學系系學會</h5>
                            <p class="about-jobDescribe">系學會活動工作人員<span>｜</span>桃園市中壢區</p>
                            <p class="about-jobTime"><i class="fa-sharp fa-solid fa-calendar-days"></i><span>2016/07~2016/09</span></p>
                        </div>
                        <div class="about-jobContent" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                            <ul>
                                <li><i class="fa-solid fa-briefcase"></i>活動流程規劃</li>
                                <li><i class="fa-solid fa-briefcase"></i>主持活動</li>
                                <li><i class="fa-solid fa-briefcase"></i>活動總結檢討</li>
                                <li><i class="fa-solid fa-briefcase"></i>校園歌唱比賽評審並進行表演及歌唱教學至2022年</li>
                            </ul>
                        </div>
                    </div>
                    <div class="about-underline"></div>
                    <!-- 環工之夜總召 -->
                    <div class="about-job">
                        <div class="about-jobTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                            <h4>中原大學環境工程學系系上晚會年級活動總召</h4>
                            <h5>中原大學環境工程學系系學會</h5>
                            <p class="about-jobDescribe">系學會活動工作人員<span>｜</span>桃園市中壢區</p>
                            <p class="about-jobTime"><i class="fa-sharp fa-solid fa-calendar-days"></i><span>2016/03~2016/05</span></p>
                        </div>
                        <div class="about-jobContent" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                            <ul>
                                <li><i class="fa-solid fa-briefcase"></i>人員配置</li>
                                <li><i class="fa-solid fa-briefcase"></i>表演安排</li>
                                <li><i class="fa-solid fa-briefcase"></i>與活動總召協調溝通 </li>
                            </ul>
                        </div>
                    </div>
                    <div class="about-underline"></div>
                </div>
            </section>

            <!-- 作品 -->
            <section>
                <div class="about about-project">
                    <h3>作品</h3>
                    <div class="about-underline"></div>
                    <!-- BLOG -->
                    <div class="about-projectBlock">
                        <div class="about-projectText">
                            <div class="about-projectTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">個人 BLOG</div>
                            <div class="about-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <p>使用技術：</p>
                                <p><i class="fa-solid fa-tag"></i>HTML</p>
                                <p><i class="fa-solid fa-tag"></i>CSS</p>
                                <p><i class="fa-solid fa-tag"></i>JavaScript</p>
                                <p><i class="fa-solid fa-tag"></i>Vue</p>
                                <span>
                                    <i class="fa-sharp fa-solid fa-calendar-days"></i>2023/06~進行中
                                </span>
                            </div>
                            <div class="article-underline"></div>
                            <div class="about-projectContent" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <p>Vue-CLI 進行BLOG撰寫，其中使用Vue composition api方式撰寫，部屬至GitHub後使用render取得網址。</p>
                                <p>除了自我介紹外，也有放入 Code Pen 連結，並增加天氣查詢功能以及體重 local storage 記錄功能，除此之外還會整理一些前端文章等等，並持續思考該如何使網站更加豐富。</p>
                            </div>
                            <div class="about-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <a href="https://github.com/Charmying/blog" target="_blank">GitHub</a>
                                <p>→</p>
                            </div>
                            <div class="about-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <a href="https://charmying-blog.onrender.com/" target="_blank">前往網站</a>
                                <p>→</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-underline"></div>
                    <!-- Pangolin Clothing -->
                    <div class="about-projectBlock">
                        <div class="about-projectText">
                            <div class="about-projectTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">Pangolin Clothing 網站練習</div>
                            <div class="about-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <p>使用技術：</p>
                                <p><i class="fa-solid fa-tag"></i>HTML</p>
                                <p><i class="fa-solid fa-tag"></i>CSS</p>
                                <p><i class="fa-solid fa-tag"></i>JavaScript</p>
                                <p><i class="fa-solid fa-tag"></i>Vue</p>
                                <p><i class="fa-solid fa-tag"></i>PHP</p>
                                <p><i class="fa-solid fa-tag"></i>PostgreSQL</p>
                                <span>
                                    <i class="fa-sharp fa-solid fa-calendar-days"></i>2023/06~進行中
                                </span>
                            </div>
                            <div class="article-underline"></div>
                            <div class="about-projectContent" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <p>Vue-CLI 進行網站練習，其中使用Vue composition api方式撰寫，登入功能使用fetch PHP連上PostgreSQL完成，部屬至GitHub後使用render取得網址。</p>
                                <p>帳號密碼為charmy000@gmail.com和charmy000或Johnny000@gmail.com和Johnny000</p>
                                <p>商品內頁和加入會員及忘記密碼功能等尚未完成</p>
                            </div>
                            <div class="about-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <a href="https://github.com/Charmying/pangolin-clothing" target="_blank">GitHub</a>
                                <p>→</p>
                            </div>
                            <div class="about-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <a href="https://pangolin-clothing.onrender.com/" target="_blank">前往網站</a>
                                <p>→</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-underline"></div>
                    <!-- Engineering-Calculator 工程計算機 -->
                    <div class="about-projectBlock">
                        <div class="about-projectText">
                            <div class="about-projectTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">工程計算機 Engineering-Calculator</div>
                            <div class="about-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <p>使用技術：</p>
                                <p><i class="fa-solid fa-tag"></i>HTML</p>
                                <p><i class="fa-solid fa-tag"></i>CSS</p>
                                <p><i class="fa-solid fa-tag"></i>Vue</p>
                                <span>
                                    <i class="fa-sharp fa-solid fa-calendar-days"></i>2023/05~2023/06
                                </span>
                            </div>
                            <div class="article-underline"></div>
                            <div class="about-projectContent" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <p>用vue composition api 完成簡易工程計算機功能</p>
                            </div>
                            <div class="about-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <a href="https://github.com/Charmying/Engineering-Calculator" target="_blank">GitHub</a>
                                <p>→</p>
                            </div>
                            <div class="about-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <a href="https://codepen.io/Charmy_ing/pen/yLQBLMw" target="_blank">CodePen</a>
                                <p>→</p>
                            </div>
                            <div class="about-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <a href="https://charmying.github.io/Engineering-Calculator/" target="_blank">前往網站</a>
                                <p>→</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-underline"></div>
                    <!-- 備忘錄 Todo-List-->
                    <div class="about-projectBlock">
                        <div class="about-projectText">
                            <div class="about-projectTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">備忘錄 Todo-List</div>
                            <div class="about-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <p>使用技術：</p>
                                <p><i class="fa-solid fa-tag"></i>HTML</p>
                                <p><i class="fa-solid fa-tag"></i>CSS</p>
                                <p><i class="fa-solid fa-tag"></i>JavaScript</p>
                                <span>
                                    <i class="fa-sharp fa-solid fa-calendar-days"></i>2023/01~2023/01
                                </span>
                            </div>
                            <div class="article-underline"></div>
                            <div class="about-projectContent" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <p>HTML CSS JavaScript 寫出備忘錄，備忘錄輸入時需填入日期及時間並存入LocalStorage，時間到時會彈窗提醒。</p>
                            </div>
                            <div class="about-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <a href="https://github.com/Charmying/Todo-List/" target="_blank">GitHub</a>
                                <p>→</p>
                            </div>
                            <div class="about-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <a href="https://codepen.io/Charmy_ing/pen/RwBeNRz" target="_blank">CodePen</a>
                                <p>→</p>
                            </div>
                            <div class="about-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <a href="https://charmying.github.io/Todo-List/" target="_blank">前往網站</a>
                                <p>→</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-underline"></div>
                    <!-- 緯育團專 -->
                    <div class="about-projectBlock">
                        <div class="about-projectPic" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                            <img src="../assets/images/project/koala.webp" alt="">
                        </div>
                        <div class="about-projectText">
                            <div class="about-projectTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">緯育TiBaMe前端工程師就業養成班團體專題：KOALA+</div>
                            <div class="about-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <p>使用技術：</p>
                                <p><i class="fa-solid fa-tag"></i>Vue-CLI</p>
                                <p><i class="fa-solid fa-tag"></i>PHP</p>
                                <p><i class="fa-solid fa-tag"></i>MySQL</p>
                                <span>
                                    <i class="fa-sharp fa-solid fa-calendar-days"></i>2022/11~2023/01
                                </span>
                            </div>
                            <div class="article-underline"></div>
                            <div class="about-projectContent" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <p>與組員從主題選擇開始到Wireframe及mockup繪製，因這次還會從後端PHP連接資料庫，所以先繪製ER model。</p>
                                <p>若想直接體驗小遊戲可以在進入前台後登入體驗帳號</p>
                                <p>帳號：charmy777</p>
                                <p>密碼：charmy777</p>
                                <p>負責項目：</p>
                                <p>網站前台：會員登入、註冊、忘記密碼和無尾熊小遊戲</p>
                                <p>網站後台：管理員的登入註冊。</p>
                            </div>
                            <div class="about-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <a href="https://docs.google.com/presentation/d/1giVj9XMnIGM1W-MYBEiZptxHv5_XzvwndlYpAEPF1S8/edit#slide=id.gcf542d467f_0_0" target="_blank">團體專題簡報</a>
                                <p>→</p>
                            </div>
                            <div class="about-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <a href="https://tibamef2e.com/cgd103/g1/" target="_blank">前往網站</a>
                                <p>→</p>
                            </div>
                            
                        </div>
                    </div>
                    <div class="about-underline"></div>
                    <!-- 緯育個專 -->
                    <div class="about-projectBlock">
                        <div class="about-projectText">
                            <div class="about-projectTitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">緯育 TiBaMe 前端工程師就業養成班個人專題：PANGOLIN 手機殼販售</div>
                            <div class="about-projectTag" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <p>使用技術：</p>
                                <p><i class="fa-solid fa-tag"></i>HTML</p>
                                <p><i class="fa-solid fa-tag"></i>CSS</p>
                                <p><i class="fa-solid fa-tag"></i>JavaScript</p>
                                <p><i class="fa-solid fa-tag"></i>jQuery</p>
                                <span>
                                    <i class="fa-sharp fa-solid fa-calendar-days"></i>2022/09~2022/10
                                </span>
                            </div>
                            <div class="article-underline"></div>
                            <div class="about-projectContent" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <p>從專題主題發想開始，到視覺設計及用Figma完成WireFrame及Mockup完成網頁設計，再使用HTML CSS JavaScript 和 jQuery 完成作品。</p>
                            </div>
                            <div class="about-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <a href="https://github.com/Charmying/Pangolin-Phonecase" target="_blank">GitHub</a>
                                <p>→</p>
                            </div>
                            <div class="about-projectLink" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                                <a href="https://charmying.github.io/Pangolin-Phonecase/" target="_blank">前往網站</a>
                                <p>→</p>
                            </div>
                        </div>
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