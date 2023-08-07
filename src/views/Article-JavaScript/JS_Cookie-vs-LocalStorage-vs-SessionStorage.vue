<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">Cookie V.S. LocalStorage V.S. SessionStorage</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</p>
                </div>
            </section>

            <!-- Cookie -->
            <section>
                <div class="article-detail">
                    <h3>Cookie</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>基本概念</h4>
                        <h4>可設定失效時間。 預設是關閉瀏覽器後失效</h4>
                        <p>HTTP cookie（web cookie、browser cookie）為伺服器傳送給使用者瀏覽器的一個小片段資料。瀏覽器可能儲存並在下一次請求回傳 cookie 至相同的伺服器。Cookie 通常被用來保持使用者的登入狀態 — — 如果兩次請求都來自相同的瀏覽器。有個數限制（各瀏覽器不同），一般不能超過20個</p>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>大小約 4kb</li>
                            <li><i class="fa-solid fa-check"></i>每次 request 時都會帶上</li>
                        </ul>
                    </div>
                    <div class="article-txt">
                        <h4>應用場景</h4>
                        <p>比較常用的場景就是判斷用戶是否登錄</p>
                        <p>針對登錄過的用戶，服務器端會在他登錄時往Cookie 插入一段加密過的辨識碼，下次只要讀取這個值就可以判斷用戶是否登錄</p>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>Session 管理：帳號登入、購物車、遊戲分數，或任何其他伺服器應該記住的資訊</li>
                            <li><i class="fa-solid fa-check"></i>個人化：使用者設定、佈景主題，以及其他設定</li>
                            <li><i class="fa-solid fa-check"></i>追蹤：記錄並分析使用者行為</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- LocalStorage -->
            <section>
                <div class="article-detail">
                    <h3>LocalStorage</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>基本概念</h4>
                        <h4>不會過期，除非手動清除</h4>
                        <p>是HTML5提供兩種在客戶端儲存資料的方法，彌補了cookie儲存量小、不適用於大量資料本地儲存的問題。</p>
                        <p>從字面上的意思就可以看出，sessionStorage將資料儲存在session中，瀏覽器關閉也就沒了；而localStorage則一直將資料儲存在客戶端本地； 不管是sessionStorage，還是localStorage，可使用的API都相同。</p>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>都是使用 key / value pair 的方式 給值或取值</li>
                            <li><i class="fa-solid fa-check"></i>大小預設有 5mb</li>
                            <li><i class="fa-solid fa-check"></i>每次 request 不會帶上</li>
                        </ul>
                    </div>
                    <div class="article-txt">
                        <h4>應用場景</h4>
                        <p>而另一方面 localStorage 代替了 Cookie 管理購物車的工作，同時也能勝任其他工作。比如說HTML遊戲通常會產生一些數據，localStorage 也很適合使用。</p>
                    </div>
                </div>
            </section>

            <!-- SessionStorage -->
            <section>
                <div class="article-detail">
                    <h3>SessionStorage</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>基本概念</h4>
                        <h4>每次分頁或瀏覽器關掉後就會清除</h4>
                        <p>是HTML5提供兩種在客戶端儲存資料的方法，彌補了cookie儲存量小、不適用於大量資料本地儲存的問題。</p>
                        <p>從字面上的意思就可以看出，sessionStorage將資料儲存在session中，瀏覽器關閉也就沒了；而localStorage則一直將資料儲存在客戶端本地； 不管是sessionStorage，還是localStorage，可使用的API都相同。</p>
                        <p>生命周期只存在瀏覽囂的 單一分頁 ，也就是 另開新分頁的話 ，又是一個 新的sessionStorage ，預設無逾期時間，除非關閉該分頁、關閉瀏覽器等，sessionStorage就會消失。</p>
                    </div>
                    <div class="article-txt">
                        <h4>應用場景</h4>
                        <p>如果遇到一些內容特別多的表單，為了提升用戶體驗，可能要把表單頁面拆分成多個子頁面，然後按照步驟引導用戶。這時候 sessionStorage 就可以發揮出效用。</p>
                    </div>
                </div>
            </section>

            <!-- 三者差異 -->
            <section>
                <div class="article-detail">
                    <h3>三者差異</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>特性</th>
                                    <th>Cookie</th>
                                    <th>LocalStorage</th>
                                    <th>SessionStorage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>生命週期</td>
                                    <td>可設定失效時間<br>預設是關閉瀏覽器後失效</td>
                                    <td>除非被清除，否則永久保存</td>
                                    <td>關閉頁面或瀏覽器後被清除</td>
                                </tr>
                                <tr>
                                    <td>大小</td>
                                    <td>4K左右</td>
                                    <td colspan="2">一般為5Mb</td>
                                </tr>
                                <tr>
                                    <td>與Server溝通</td>
                                    <td>每次都會攜帶在HTTP中，保存過多數據會帶來效能問題</td>
                                    <td colspan="2">僅在瀏覽器保存，不參與Server的溝通</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <a class="article-reference" href="https://medium.com/@bebebobohaha/cookie-localstorage-sessionstorage-%E5%B7%AE%E7%95%B0-9e1d5df3dd7f" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Medium(Written by Peggy Chan) - [JavaScript] Cookie、LocalStorage、SessionStorage 差異</a>
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