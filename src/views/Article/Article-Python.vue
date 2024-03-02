<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-top">
                    <div class="article-icon">
                        <i class="fa-brands fa-python"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">Python</div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                <a href="PY_Pandas-DataFrame" class="article">
                    <div class="article-icon">
                        <i class="fa-brands fa-python"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">【Pandas】Pandas DataFrame 處理雙維度資料方法</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Python<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-23</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>DataFrame 主要用來處理雙維度的資料，也就是具有列(row)與欄(column)的表格式資料集，所以經常應用於讀取 CSV 檔案、網頁表格或資料庫等，來進行其中的資料分析或處理。</p>
                            <p>在相較於 Pandas Series 處理單維度或單一欄位的資料的部分，Pandas DataFrame 可以處理雙維度或多欄位的資料，就像是 Excel 的表格(Table)，具有資料索引(列)及欄位標題(欄)</p>
                        </div>
                    </div>
                </a>
            </section>

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                <a href="PY_Pandas-Series" class="article">
                    <div class="article-icon">
                        <i class="fa-brands fa-python"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">【Pandas】Pandas Series 處理單維度資料方法</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Python<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-22</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>Pandas 套件則是其中一種常用的資料分析處理工具，是基於 Python 程式語言建立的，非常容易使用且強大，主要應用於單維度(Series)與二維度(DataFrame)的資料處理。</p>
                            <p>Pandas Series 適用於處理單維度或單一欄位的資料，，就像是 Excel 中的某一欄，在開始使用 Pandas 套件需先進行安裝，在終端機(Terminal)中輸入以下程式碼：</p>
                        </div>
                    </div>
                </a>
            </section>

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                <a href="PY_loop" class="article">
                    <div class="article-icon">
                        <i class="fa-brands fa-python"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">迴圈基礎 & 迴圈控制</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Python<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-20</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>while 迴圈和 for 迴圈的基礎應用</p>
                            <p>break、、continue和else的範例</p>
                        </div>
                    </div>
                </a>
            </section>

            <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                <a href="PY_arithmetic" class="article">
                    <div class="article-icon">
                        <i class="fa-brands fa-python"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">if 判斷式和簡易的四則運算</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>Python<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-20</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>Python的 if 判斷式和用 if 判斷式完成最簡易的四則運算</p>
                        </div>
                    </div>
                </a>
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