<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">【Pandas】Pandas Series 處理單維度資料方法</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-22</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Pandas 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Pandas 套件則是其中一種常用的資料分析處理工具，是基於 Python 程式語言建立的，非常容易使用且強大，主要應用於單維度(Series)與二維度(DataFrame)的資料處理。</p>
                        <p>Pandas Series 適用於處理單維度或單一欄位的資料，，就像是 Excel 中的某一欄，在開始使用 Pandas 套件需先進行安裝，在終端機(Terminal)中輸入以下程式碼：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
pip install pandas
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>建立和觀察 Pandas Series 物件</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>要利 Pandas Series 來儲存單維度的資料，就需要先建立 Pandas Series 物件，語法如下：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
series = pandas.Series(資料串列)
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>範例：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import pandas as pd   # 引入 pandas 套件

member = pd.Series(["Aaa", "Bbb", "Ccc", "Ddd"])
print(member)
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>執行結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
0    Aaa     
1    Bbb     
2    Ccc     
3    Ddd     
dtype: object
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>上面印出來的內容當中，0、1、2、3 是 Pandas 套件自動產生的資料索引值(也稱資料編號，從 0 開始)，右側則是指定的資料內容，如果想自訂資料索引值，可以用 index 關鍵字參數(Keyword Argument)進行設定：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import pandas as pd   # 引入 pandas 套件

member = pd.Series(["Aaa", "Bbb", "Ccc", "Ddd"], index=["NO.1", "NO.2", "NO.3", "NO.4"])
print(member)
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>執行結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
NO.1    Aaa  
NO.2    Bbb  
NO.3    Ccc  
NO.4    Ddd  
dtype: object
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>如果想要觀察資料的型態、數量等等，可以使用以下語法：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import pandas as pd   # 引入 pandas 套件

member = pd.Series(["Aaa", "Bbb", "Ccc", "Ddd"], index=["NO.1", "NO.2", "NO.3", "NO.4"])
print(member)

print("資料型態：", member.dtype)
print("資料數量：", member.size)
print("資料索引：", member.index)
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>執行結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
NO.1    Aaa  
NO.2    Bbb  
NO.3    Ccc  
NO.4    Ddd  
dtype: object
資料型態： object
資料數量： 4
資料索引： Index(['NO.1', 'NO.2', 'NO.3', 'NO.4'], dtype='object')
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>取得 Pandas Series 資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>可以利用資料順序或資料索引值來取得Pandas Series物件中的特定資料：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import pandas as pd   # 引入 pandas 套件

member = pd.Series(["Aaa", "Bbb", "Ccc", "Ddd"], index=["NO.1", "NO.2", "NO.3", "NO.4"])
print(member[1], member[3])   # 依據資料順序取值(從 0 開始計算)
print(member["NO.1"], member["NO.3"])   # 依據資料索引值取值
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>執行結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
Bbb Ddd
Aaa Ccc
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>新增 Pandas Series 資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>想要在既有的 Pandas Series 物件中新增資料，可以用 append() 來達成，這邊要特別注意的是，append() 需傳入 Pandas Series 物件，並且會額外產生一個新的 Pandas Series 物件：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import pandas as pd   # 引入 pandas 套件

member = pd.Series(["Aaa", "Bbb", "Ccc", "Ddd"], index=["NO.1", "NO.2", "NO.3", "NO.4"])
data = pd.Series(["Charmy好胖", "Charmy"])   # 新增的資料
combine = member.append(data)
print(combine)
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>執行結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
combine = member.append(data)
NO.1         Aaa  
NO.2         Bbb  
NO.3         Ccc  
NO.4         Ddd  
0       Charmy好胖
1         Charmy  
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>可以發現資料索引值因為 append() 傳入原有的 Pandas Series 物件而產生一個新的 Pandas Series 物件，可以用 ignore_index = True 語法來忽略資料索值的問題：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import pandas as pd   # 引入 pandas 套件

member = pd.Series(["Aaa", "Bbb", "Ccc", "Ddd"], index=["NO.1", "NO.2", "NO.3", "NO.4"])
data = pd.Series(["Charmy好胖", "Charmy"])   # 新增的資料
combine = member.append(data, ignore_index = True)
print(combine)
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>執行結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
combine = member.append(data, ignore_index = True)
0         Aaa  
1         Bbb  
2         Ccc  
3         Ddd  
4    Charmy好胖
5      Charmy  
dtype: object  
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Pandas Series 資料 字串運算：基本、串接、搜尋、取代</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import pandas as pd   # 引入 pandas 套件

member = pd.Series(["Aaa", "Bbb", "Ccc", "Ddd", "Charmy好胖", "好胖"], index=["NO.1", "NO.2", "NO.3", "NO.4", "NO.5", "NO.6"])
print("全部變大寫：")
print(member.str.upper())   # 全部變小寫
print("全部變小寫：")
print(member.str.lower())   # 全部變小寫
print("算出每個字串的長度：")
print(member.str.len())   # 算出每個字串的長度
print("把字串串起來，可以自訂串接的符號：")
print(member.str.cat(sep = "；"))   # 把字串串起來，可以自訂串接的符號
print("判斷每個字串是否包含特定的字元：")
print(member.str.contains("好胖"))   # 判斷每個字串是否包含特定的字元
print("把指定字元進行轉換：")
print(member.str.replace("好胖", "酷啦"))   # 把指定字元進行轉換
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>執行結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
全部變大寫：
NO.1         AAA
NO.2         BBB
NO.3         CCC
NO.4         DDD
NO.5    CHARMY好胖
NO.6          好胖
dtype: object
全部變小寫：
NO.1         aaa
NO.2         bbb
NO.3         ccc
NO.4         ddd
NO.5    charmy好胖
NO.6          好胖
dtype: object
算出每個字串的長度：
NO.1    3
NO.2    3
NO.3    3
NO.4    3
NO.5    8
NO.6    2
dtype: int64
把字串串起來，可以自訂串接的符號：  
Aaa；Bbb；Ccc；Ddd；Charmy好胖；好胖
判斷每個字串是否包含特定的字元：    
NO.1    False
NO.2    False
NO.3    False
NO.4    False
NO.5     True
NO.6     True
dtype: bool
把指定字元進行轉換：
NO.1         Aaa
NO.2         Bbb
NO.3         Ccc
NO.4         Ddd
NO.5    Charmy酷啦
NO.6          酷啦
dtype: object
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Pandas Series 資料 數字運算：基本、統計、順序</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import pandas as pd   # 引入 pandas 套件

num = pd.Series([100, -300, 50, 999, -500, 375], index=["NO.1", "NO.2", "NO.3", "NO.4", "NO.5", "NO.6"])

print("=============================================")
print(num)

print("=============================================")
print("最大值：", num.max())

print("=============================================")
print("總和：", num.sum())

print("=============================================")
print("標準差：", num.std())

print("=============================================")
print("中位數：", num.median())

print("=============================================")
print("最大的三個數：")
print(num.nlargest(3))

print("=============================================")
print("最小的兩個數：")
print(num.nsmallest(2))
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>執行結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
=============================================
NO.1    100
NO.2   -300
NO.3     50
NO.4    999
NO.5   -500
NO.6    375
dtype: int64
=============================================
最大值： 999
=============================================
總和： 724
=============================================
標準差： 529.8609880588178
=============================================
中位數： 75.0
=============================================
最大的三個數：
NO.4    999
NO.6    375
NO.1    100
dtype: int64
=============================================
最小的兩個數：
NO.5   -500
NO.2   -300
dtype: int64
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a class="article-reference" href="https://www.youtube.com/playlist?list=PL-g0fdC5RMboYEyt6QS2iLb_1m7QcgfHk" target="_blank"><i class="fa-solid fa-pen-to-square"></i>彭彭的課程 - Python 入門教學課程</a>
                        <a class="article-reference" href="https://www.learncodewithmike.com/2020/10/python-pandas-series-tutorial.html" target="_blank"><i class="fa-solid fa-pen-to-square"></i>[Pandas教學]資料分析必懂的Pandas Series處理單維度資料方法</a>
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