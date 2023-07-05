<template>
    <Header /> <!-- 用掉用掉 h1 -->
    <div class="content">
        <main>

            <!-- sideProject -->
            <section>
                <div class="sideProject sideProject-title">
                    <h2>Side Project</h2> 
                    <!-- <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</p> -->
                </div>
            </section>

            <!-- 作品 -->
            <section>
                <div class="sideProject sideProject-project">
                    <h3>作品：</h3>
                    <div class="sideProject-underline"></div>

                    <!-- BLOG -->
                    <div class="sideProject-projectBlock">
                        <div class="sideProject-projectText">
                            <div class="sideProject-projectTitle">個人 BLOG</div>
                            <div class="sideProject-projectTag">
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
                            <div class="sideProject-projectContent">
                                <p>Vue-CLI 進行BLOG撰寫，其中使用Vue composition api方式撰寫，部屬至GitHub後使用render取得網址。</p>
                                <p>除了自我介紹，會整理一些前端文章等等，並持續思考該如何使網站更加豐富</p>
                                <p>商品內頁和加入會員及忘記密碼功能等尚未完成</p>
                            </div>
                            <div class="sideProject-projectLink">
                                <a href="https://github.com/Charmying/blog" target="_blank">GitHub</a>
                                <p>→</p>
                            </div>
                            <div class="sideProject-projectLink">
                                <a href="https://charmying-blog.onrender.com/" target="_blank">前往網站</a>
                                <p>→</p>
                            </div>
                        </div>
                    </div>

                    <!-- Pangolin Clothing -->
                    <div class="sideProject-projectBlock">
                        <div class="sideProject-projectText">
                            <div class="sideProject-projectTitle">Pangolin Clothing 網站練習</div>
                            <div class="sideProject-projectTag">
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
                            <div class="sideProject-projectContent">
                                <p>Vue-CLI 進行網站練習，其中使用Vue composition api方式撰寫，登入功能使用PHP fetch PostgreSQL完成，部屬至GitHub後使用render取得網址。</p>
                                <p>帳號密碼為charmy000@gmail.com和charmy000或Johnny000@gmail.com和Johnny000</p>
                                <p>商品內頁和加入會員及忘記密碼功能等尚未完成</p>
                            </div>
                            <div class="sideProject-projectLink">
                                <a href="https://github.com/Charmying/pangolin-clothing" target="_blank">GitHub</a>
                                <p>→</p>
                            </div>
                            <div class="sideProject-projectLink">
                                <a href="https://pangolin-clothing.onrender.com/" target="_blank">前往網站</a>
                                <p>→</p>
                            </div>
                        </div>
                    </div>

                    <!-- Engineering-Calculator 工程計算機 -->
                    <div class="sideProject-projectBlock">
                        <div class="sideProject-projectText">
                            <div class="sideProject-projectTitle">工程計算機 Engineering-Calculator</div>
                            <div class="sideProject-projectTag">
                                <p>使用技術：</p>
                                <p><i class="fa-solid fa-tag"></i>HTML</p>
                                <p><i class="fa-solid fa-tag"></i>CSS</p>
                                <p><i class="fa-solid fa-tag"></i>Vue composition api</p>
                                <span>
                                    <i class="fa-sharp fa-solid fa-calendar-days"></i>2023/05~2023/06
                                </span>
                            </div>
                            <div class="article-underline"></div>
                            <div class="sideProject-projectContent">
                                <p>用vue composition api 完成簡易工程計算機功能</p>
                            </div>
                            <div class="sideProject-projectLink">
                                <a href="https://github.com/Charmying/Engineering-Calculator" target="_blank">GitHub</a>
                                <p>→</p>
                            </div>
                            <div class="sideProject-projectLink">
                                <a href="https://codepen.io/Charmy_ing/pen/yLQBLMw" target="_blank">CodePen</a>
                                <p>→</p>
                            </div>
                            <div class="sideProject-projectLink">
                                <a href="https://charmying.github.io/Engineering-Calculator/" target="_blank">前往網站</a>
                                <p>→</p>
                            </div>
                        </div>
                    </div>

                    <!-- 備忘錄 Todo-List-->
                    <div class="sideProject-projectBlock">
                        <div class="sideProject-projectText">
                            <div class="sideProject-projectTitle">備忘錄 Todo-List</div>
                            <div class="sideProject-projectTag">
                                <p>使用技術：</p>
                                <p><i class="fa-solid fa-tag"></i>HTML</p>
                                <p><i class="fa-solid fa-tag"></i>CSS</p>
                                <p><i class="fa-solid fa-tag"></i>JavaScript</p>
                                <span>
                                    <i class="fa-sharp fa-solid fa-calendar-days"></i>2023/01~2023/01
                                </span>
                            </div>
                            <div class="article-underline"></div>
                            <div class="sideProject-projectContent">
                                <p>HTML CSS JavaScript 寫出備忘錄，備忘錄輸入時需填入日期及時間並存入LocalStorage，時間到時會彈窗提醒。</p>
                            </div>
                            <div class="sideProject-projectLink">
                                <a href="https://github.com/Charmying/Todo-List/" target="_blank">GitHub</a>
                                <p>→</p>
                            </div>
                            <div class="sideProject-projectLink">
                                <a href="https://codepen.io/Charmy_ing/pen/RwBeNRz" target="_blank">CodePen</a>
                                <p>→</p>
                            </div>
                            <div class="sideProject-projectLink">
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
                            <div class="sideProject-projectTitle">緯育TiBaMe前端工程師就業養成班團體專題：KOALA+</div>
                            <div class="sideProject-projectTag">
                                <p>使用技術：</p>
                                <p><i class="fa-solid fa-tag"></i>Vue-CLI</p>
                                <p><i class="fa-solid fa-tag"></i>PHP</p>
                                <p><i class="fa-solid fa-tag"></i>MySQL</p>
                                <span>
                                    <i class="fa-sharp fa-solid fa-calendar-days"></i>2022/11~2023/01
                                </span>
                            </div>
                            <div class="article-underline"></div>
                            <div class="sideProject-projectContent">
                                <p>與組員從主題選擇開始到Wireframe及mockup繪製，因這次還會從後端PHP連接資料庫，所以先繪製ER model。</p>
                                <p>負責項目：</p>
                                <p>網站前台：會員登入、註冊、忘記密碼和無尾熊小遊戲</p>
                                <p>網站後台：管理員的登入註冊。</p>
                            </div>
                            <div class="sideProject-projectLink">
                                <a href="https://docs.google.com/presentation/d/1giVj9XMnIGM1W-MYBEiZptxHv5_XzvwndlYpAEPF1S8/edit#slide=id.gcf542d467f_0_0" target="_blank">團體專題簡報</a>
                                <p>→</p>
                            </div>
                            <div class="sideProject-projectLink">
                                <a href="https://tibamef2e.com/cgd103/g1/" target="_blank">前往網站</a>
                                <p>→</p>
                            </div>
                        </div>
                    </div>

                    <!-- 緯育個專 -->
                    <div class="sideProject-projectBlock">
                        <div class="sideProject-projectText">
                            <div class="sideProject-projectTitle">緯育 TiBaMe 前端工程師就業養成班個人專題：PANGOLIN 手機殼販售</div>
                            <div class="sideProject-projectTag">
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
                            <div class="sideProject-projectContent">
                                <p>從專題主題發想開始，到視覺設計及用Figma完成WireFrame及Mockup完成網頁設計，再使用HTML CSS JavaScript 和 jQuery 完成作品。</p>
                            </div>
                            <div class="sideProject-projectLink">
                                <a href="https://github.com/Charmying/Pangolin-Phonecase" target="_blank">GitHub</a>
                                <p>→</p>
                            </div>
                            <div class="sideProject-projectLink">
                                <a href="https://charmying.github.io/Pangolin-Phonecase/" target="_blank">前往網站</a>
                                <p>→</p>
                            </div>
                        </div>
                    </div>
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