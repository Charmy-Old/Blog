<template>
    <Header /> <!-- 用掉用掉 h1 -->
    <div class="content">
        <main>

            <!-- Resume -->
            <section>
                <div class="resume resume-title">
                    <h2>Resume</h2> 
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</p>
                </div>
            </section>
            <!-- 簡介 -->
            <section>
                <div class="resume resume-introduce">
                    <h3>簡介：</h3>
                    <div class="resume-underline"></div>
                    <p>我是曾韋翰，中原大學土木工程學系畢業。讀書時發現土木領域與興趣並不相符，在尋找興趣的過程中無意間在youtube上看見彭彭的python大數據的影片，進而慢慢接觸程式的領域。摸索過程中在udemy上接觸到JavaScript後對網頁前端產生興趣，進而參加緯育TiBaMe的前端工程師就業養成班並完成個人專題與團體專題後成功結業。現於雲端數位有限公司任職前端工程師助理，平常休閒時間學習前端的相關知識。</p>
                </div>
            </section>
            <!-- 學歷 -->
            <section>
                <div class="resume resume-education">
                    <h3>學歷：</h3>
                    <div class="resume-underline"></div>
                    <p>緯育TiBaMe的前端工程師就業養成班 結業<span><i class="fa-sharp fa-solid fa-calendar-days"></i>2023/01</span></p>
                    <p>中原大學土木工程學系 畢業<span><i class="fa-sharp fa-solid fa-calendar-days"></i>2022/05</span></p>
                </div>
            </section>
            <!-- 專長 -->
            <section>
                <div class="resume resume-expertise">
                    <h3>專長：</h3>
                    <div class="resume-underline"></div>
                    <p class="resume-expertiseTitle">網頁前端技術</p>
                    <p class="resume-expertiseDetail">
                        <span><i class="fa-solid fa-keyboard"></i>HTML5</span>
                        <span><i class="fa-solid fa-keyboard"></i>CSS3</span>
                        <span><i class="fa-solid fa-keyboard"></i>CSS3動態特效</span>
                        <span><i class="fa-solid fa-keyboard"></i>JavaScript</span>
                        <span><i class="fa-solid fa-keyboard"></i>RWD行動網頁 (含Bootstrap)</span>
                        <span><i class="fa-solid fa-keyboard"></i>jQuery</span>
                        <span><i class="fa-solid fa-keyboard"></i>AJAX</span>
                        <span><i class="fa-solid fa-keyboard"></i>Web APIs</span>
                        <span><i class="fa-solid fa-keyboard"></i>SCSS</span>
                        <span><i class="fa-solid fa-keyboard"></i>Webpack</span>
                        <span><i class="fa-solid fa-keyboard"></i>Vue.js前端框架</span> 
                    </p>
                    <div class="resume-underline"></div>
                    <p class="resume-expertiseTitle">UI/UX 使用者介面設計</p>
                    <p class="resume-expertiseDetail">
                        <span><i class="fa-solid fa-keyboard"></i>UI/UX 設計</span>
                        <span><i class="fa-solid fa-keyboard"></i>Figma</span>
                        <span><i class="fa-solid fa-keyboard"></i>Wirefrme 設計</span>
                        <span><i class="fa-solid fa-keyboard"></i>Mockup 設計</span>
                        <span><i class="fa-solid fa-keyboard"></i>Rprototype 設計</span>
                    </p>
                    <div class="resume-underline"></div>                    
                    <p class="resume-expertiseTitle">網站程式系統與資料庫</p>
                    <p class="resume-expertiseDetail">
                        <span><i class="fa-solid fa-keyboard"></i>系統分析 (敏捷式開發)</span>
                        <span><i class="fa-solid fa-keyboard"></i>PHP 程式設計</span>
                        <span><i class="fa-solid fa-keyboard"></i>My SQL資料庫</span>
                        <span><i class="fa-solid fa-keyboard"></i>Git 版本控制</span>
                        <span><i class="fa-solid fa-keyboard"></i>Sourcetree</span>
                    </p>
                </div>
            </section>
            <!-- 作品 -->
            <section>
                <div class="resume resume-project">
                    <h3>作品：</h3>
                    <div class="resume-underline"></div>

                    <!-- BLOG -->
                    <div class="resume-projectBlock">
                        <div class="resume-projectText">
                            <div class="resume-projectTitle">個人 BLOG</div>
                            <div class="resume-projectTag">
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
                            <div class="resume-projectContent">
                                <p>Vue-CLI 進行網站練習，其中使用Vue composition api方式撰寫，登入功能使用PHP fetch PostgreSQL完成，部屬至GitHub後使用render取得網址。</p>
                                <p>帳號密碼為charmy000@gmail.com和charmy000或Johnny000@gmail.com和Johnny000</p>
                                <p>商品內頁和加入會員及忘記密碼功能等尚未完成</p>
                                <p>GitHub：<a href="https://github.com/Charmying/pangolin-clothing">https://github.com/Charmying/pangolin-clothing</a></p>
                            </div>
                            <div class="resume-projectLink">
                                <a href="https://pangolin-clothing.onrender.com/">前往網站</a>
                                <p>→</p>
                            </div>
                        </div>
                    </div>

                    <!-- Pangolin Clothing -->
                    <div class="resume-projectBlock">
                        <div class="resume-projectText">
                            <div class="resume-projectTitle">Pangolin Clothing 網站練習</div>
                            <div class="resume-projectTag">
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
                            <div class="resume-projectContent">
                                <p>Vue-CLI 進行BLOG撰寫，其中使用Vue composition api方式撰寫，部屬至GitHub後使用render取得網址。</p>
                                <p>除了自我介紹，會整理一些前端文章等等，並持續思考該如何使網站更加豐富</p>
                                <p>GitHub：<a href="https://github.com/Charmying/blog">https://github.com/Charmying/blog</a></p>
                            </div>
                            <div class="resume-projectLink">
                                <a href="https://charmying-blog.onrender.com/">前往網站</a>
                                <p>→</p>
                            </div>
                        </div>
                    </div>

                    <!-- Engineering-Calculator 工程計算機 -->
                    <div class="resume-projectBlock">
                        <div class="resume-projectText">
                            <div class="resume-projectTitle">工程計算機 Engineering-Calculator</div>
                            <div class="resume-projectTag">
                                <p>使用技術：</p>
                                <p><i class="fa-solid fa-tag"></i>HTML</p>
                                <p><i class="fa-solid fa-tag"></i>CSS</p>
                                <p><i class="fa-solid fa-tag"></i>Vue</p>
                                <span>
                                    <i class="fa-sharp fa-solid fa-calendar-days"></i>2023/05~2023/06
                                </span>
                            </div>
                            <div class="article-underline"></div>
                            <div class="resume-projectContent">
                                <p>用vue composition api 完成簡易工程計算機功能</p>
                                <p>GitHub<a href="https://github.com/Charmying/Engineering-Calculator">https://github.com/Charmying/Engineering-Calculator</a></p>
                                <p>CodePen<a href="https://codepen.io/Charmy_ing/pen/yLQBLMw">https://codepen.io/Charmy_ing/pen/yLQBLMw</a></p>
                            </div>
                            <div class="resume-projectLink">
                                <a href="https://charmying.github.io/Engineering-Calculator/">前往網站</a>
                                <p>→</p>
                            </div>
                        </div>
                    </div>

                    <!-- 備忘錄 Todo-List-->
                    <div class="resume-projectBlock">
                        <div class="resume-projectText">
                            <div class="resume-projectTitle">備忘錄 Todo-List</div>
                            <div class="resume-projectTag">
                                <p>使用技術：</p>
                                <p><i class="fa-solid fa-tag"></i>HTML</p>
                                <p><i class="fa-solid fa-tag"></i>CSS</p>
                                <p><i class="fa-solid fa-tag"></i>JavaScript</p>
                                <span>
                                    <i class="fa-sharp fa-solid fa-calendar-days"></i>2023/01~2023/01
                                </span>
                            </div>
                            <div class="article-underline"></div>
                            <div class="resume-projectContent">
                                <p>HTML CSS JavaScript 寫出備忘錄，備忘錄輸入時需填入日期及時間並存入LocalStorage，時間到時會彈窗提醒。</p>
                                <p>GitHub<a href="https://github.com/Charmying/Todo-List">https://github.com/Charmying/Todo-List</a></p>
                                <p>CodePen<a href="https://codepen.io/Charmy_ing/pen/RwBeNRz">https://codepen.io/Charmy_ing/pen/RwBeNRz</a></p>
                            </div>
                            <div class="resume-projectLink">
                                <a href="https://charmying.github.io/Todo-List/">前往網站</a>
                                <p>→</p>
                            </div>
                            
                        </div>
                    </div>

                    <!-- 緯育團專 -->
                    <div class="resume-projectBlock">
                        <div class="resume-projectPic">
                            <img src="../assets/images/project/koala.webp" alt="">
                        </div>
                        <div class="resume-projectText">
                            <div class="resume-projectTitle">緯育TiBaMe前端工程師就業養成班團體專題：KOALA+</div>
                            <div class="resume-projectTag">
                                <p>使用技術：</p>
                                <p><i class="fa-solid fa-tag"></i>Vue-CLI</p>
                                <p><i class="fa-solid fa-tag"></i>PHP</p>
                                <p><i class="fa-solid fa-tag"></i>MySQL</p>
                                <span>
                                    <i class="fa-sharp fa-solid fa-calendar-days"></i>2022/11~2023/01
                                </span>
                            </div>
                            <div class="article-underline"></div>
                            <div class="resume-projectContent">
                                <p>與組員從主題選擇開始到Wireframe及mockup繪製，因這次還會從後端PHP連接資料庫，所以先繪製ER model。</p>
                                <p>負責項目：</p>
                                <p>網站前台：會員登入、註冊、忘記密碼和無尾熊小遊戲</p>
                                <p>網站後台：管理員的登入註冊。</p>
                                <p>簡報：<a href="https://docs.google.com/presentation/d/1giVj9XMnIGM1W-MYBEiZptxHv5_XzvwndlYpAEPF1S8/edit#slide=id.gcf542d467f_0_0">https://docs.google.com/presentation/d/1giVj9XMnIGM1W-MYBEiZptxHv5_XzvwndlYpAEPF1S8/edit#slide=id.gcf542d467f_0_0</a></p>
                            </div>
                            <div class="resume-projectLink">
                                <a href="https://tibamef2e.com/cgd103/g1/">前往網站</a>
                                <p>→</p>
                            </div>
                            
                        </div>
                    </div>

                    <!-- 緯育個專 -->
                    <div class="resume-projectBlock">
                        <div class="resume-projectText">
                            <div class="resume-projectTitle">緯育 TiBaMe 前端工程師就業養成班個人專題：PANGOLIN 手機殼販售</div>
                            <div class="resume-projectTag">
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
                            <div class="resume-projectContent">
                                <p>從專題主題發想開始，到視覺設計及用Figma完成WireFrame及Mockup完成網頁設計，再使用HTML CSS JavaScript 和 jQuery 完成作品。</p>
                                <p>GitHub<a href="https://github.com/Charmying/Pangolin-Phonecase">https://github.com/Charmying/Pangolin-Phonecase</a></p>
                            </div>
                            <div class="resume-projectLink">
                                <a href="https://charmying.github.io/Pangolin-Phonecase/">前往網站</a>
                                <p>→</p>
                            </div>
                            
                        </div>
                    </div>

                    <!-- 雲端上班 -->
                    <!-- <div class="resume-projectBlock">
                        <div class="resume-projectText">
                            <div class="resume-projectTitle">雲端數位科技有限公司</div>
                            <div class="resume-projectTag">
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
                            <div class="resume-projectContent">
                                <p>悠遊卡股份有限公司</p>
                                <p>負責頁面：永續專區、投資人專區</p>
                                <p>測試網站：<a href="http://test.m000231.24241872.tw/sustainableOperators">http://test.m000231.24241872.tw/sustainableOperators</a></p>
                                <p>正式網站：<a href="https://www.easycard.com.tw/sustainableOperators">https://www.easycard.com.tw/sustainableOperators</a></p>
                            </div>
                            <div class="resume-projectContent">
                                <p>寶鋪建設股份有限公司</p>
                                <p>負責頁面：地圖檢視</p>
                                <p>測試網站：<a href="http://html.m000381.24241872.tw/map">http://html.m000381.24241872.tw/map</a></p>
                                <p>正式網站：<a href="https://www.baopu.com.tw/maps">https://www.baopu.com.tw/maps</a></p>
                            </div>
                            <div class="resume-projectContent">
                                <p>凱薩衛浴股份有限公司</p>
                                <p>負責頁面：經銷商招募</p>
                                <p>測試網站：<a href="http://html.m000351.24241872.tw/dealer-recruitment">http://html.m000351.24241872.tw/dealer-recruitment</a></p>
                                <p>正式網站：<a href="https://www.caesar.com.tw/page/dealer-recruitment">https://www.caesar.com.tw/page/dealer-recruitment</a></p>
                            </div>
                            <div class="resume-projectContent">
                                <p>還有幫穎崴科技、建準吊扇等上市上櫃公司進行網頁的調整處理。</p>
                            </div>
                        </div>
                    </div> -->
                </div>
            </section>

            <section>
                <div class="resume resume-experience">
                    <h3>經歷：</h3>
                    <div class="resume-underline"></div>
                    <!-- 雲端數位 -->
                    <div class="resume-job">
                        <div class="resume-jobTitle">
                            <h4>前端工程師助理</h4>
                            <h5>雲端數位科技有限公司（網際網路相關業 30~100人）</h5>
                            <p>Internet程式設計師<span>｜</span>正職<span>｜</span>台中市北屯區</p>
                        </div>
                        <div class="resume-jobContent">
                            <p>依設計師的設計稿已網頁的方式呈現，並與客戶溝通協調問題與成果。</p>
                            <div class="resume-jobProject">
                                <p>悠遊卡股份有限公司</p>
                                <p>負責頁面：永續專區、投資人專區</p>
                                <p>測試網站：http://test.m000231.24241872.tw/sustainableOperators</p>
                                <p>正式網站：https://www.easycard.com.tw/sustainableOperators</p>
                            </div>
                            <div class="resume-jobProject">
                                <p>寶鋪建設股份有限公司</p>
                                <p>負責頁面：地圖檢視</p>
                                <p>測試網站：http://html.m000381.24241872.tw/map</p>
                                <p>正式網站：https://www.baopu.com.tw/maps</p>
                            </div>
                            <div class="resume-jobProject">
                                <p>凱薩衛浴股份有限公司</p>
                                <p>負責頁面：經銷商招募</p>
                                <p>測試網站：http://html.m000351.24241872.tw/dealer-recruitment</p>
                                <p>正式網站：https://www.caesar.com.tw/page/dealer-recruitment</p>
                            </div>
                            <div class="resume-jobProject">
                                <p>還有幫穎崴科技、建準吊扇等上市上櫃公司進行網頁的調整處理。</p>
                            </div>
                        </div>
                    </div>
                    <div class="resume-underline"></div>
                    <!-- 立法委員選舉輔選人員 -->
                    <div class="resume-job">
                        <div class="resume-jobTitle">
                            <h4>立法委員選舉輔選人員</h4>
                            <h5>某立法委員服務處（政府／民意機關）</h5>
                            <p>活動企劃人員<span>｜</span>工讀<span>｜</span>桃園市</p>
                        </div>
                        <div class="resume-jobContent">
                            <ul>
                                <li><i class="fa-solid fa-briefcase"></i>帶領團隊佈置場地</li>
                                <li><i class="fa-solid fa-briefcase"></i>現場狀況緊急排除</li>
                                <li><i class="fa-solid fa-briefcase"></i>主持造勢活動</li>
                            </ul>
                        </div>
                    </div>
                    <div class="resume-underline"></div>
                    <!-- 中原社團 -->
                    <div class="resume-job">
                        <div class="resume-jobTitle">
                            <h4>中原大學社團活動幹部</h4>
                            <h5>中原大學卡拉ok社、中原大學中友會</h5>
                            <p>社團幹部<span>｜</span>桃園市中壢區</p>
                        </div>
                        <div class="resume-jobContent">
                            <ul>
                                <li><i class="fa-solid fa-briefcase"></i>活動流程規劃</li>
                                <li><i class="fa-solid fa-briefcase"></i>主持活動</li>
                                <li><i class="fa-solid fa-briefcase"></i>活動總結檢討</li>
                                <li><i class="fa-solid fa-briefcase"></i>校園歌唱比賽評審並進行表演及歌唱教學至2022年</li>
                            </ul>
                        </div>
                    </div>
                    <div class="resume-underline"></div>
                    <!-- 迎新宿營 -->
                    <div class="resume-job">
                        <div class="resume-jobTitle">
                            <h4>系上迎新宿營隊輔</h4>
                            <h5>中原大學環境工程學系系學會</h5>
                            <p>系學會活動工作人員<span>｜</span>桃園市中壢區</p>
                        </div>
                        <div class="resume-jobContent">
                            <ul>
                                <li><i class="fa-solid fa-briefcase"></i>活動流程規劃</li>
                                <li><i class="fa-solid fa-briefcase"></i>主持活動</li>
                                <li><i class="fa-solid fa-briefcase"></i>活動總結檢討</li>
                                <li><i class="fa-solid fa-briefcase"></i>校園歌唱比賽評審並進行表演及歌唱教學至2022年</li>
                            </ul>
                        </div>
                    </div>
                    <div class="resume-underline"></div>
                    <!-- 環工之夜總召 -->
                    <div class="resume-job">
                        <div class="resume-jobTitle">
                            <h4>中原大學環境工程學系系上晚會年級活動總召</h4>
                            <h5>中原大學環境工程學系系學會</h5>
                            <p>系學會活動工作人員<span>｜</span>桃園市中壢區</p>
                        </div>
                        <div class="resume-jobContent">
                            <ul>
                                <li><i class="fa-solid fa-briefcase"></i>人員配置</li>
                                <li><i class="fa-solid fa-briefcase"></i>表演安排</li>
                                <li><i class="fa-solid fa-briefcase"></i>與活動總召協調溝通 </li>
                            </ul>
                        </div>
                    </div>
                    <div class="resume-underline"></div>
                    

                </div>
            </section>

        </main>
        <Wall />
        <BackToTop />
    </div>
</template>
<script>
    import Header from "@/components/Header.vue";
    import Wall from "@/components/Wall.vue";
    import BackToTop from "@/components/BackToTop.vue";
    
    export default {
        components: {
            Header,
            Wall,
            BackToTop,
            // Footer,
        },
        setup() {}
    };
</script>