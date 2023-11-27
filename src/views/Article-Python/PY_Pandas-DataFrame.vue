<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">【Pandas】Pandas DataFrame 處理雙維度資料方法</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-23</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Pandas DataFrame 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>有關 Pandas 和單維度資料處理的簡介，可以到 →<a href="https://charmying-blog.onrender.com/PY_Pandas-Series" target="_blank">【Pandas】Pandas Series處理單維度資料方法</a>← 觀看</p>
                        <p>DataFrame 主要用來處理雙維度的資料，也就是具有列(row)與欄(column)的表格式資料集，所以經常應用於讀取 CSV 檔案、網頁表格或資料庫等，來進行其中的資料分析或處理。</p>
                        <p>在相較於 Pandas Series 處理單維度或單一欄位的資料的部分，Pandas DataFrame 可以處理雙維度或多欄位的資料，就像是 Excel 的表格(Table)，具有資料索引(列)及欄位標題(欄)</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>建立和觀察 Pandas DataFrame 物件</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>要利 Pandas DataFrame 來儲存單維度的資料，就需要先建立 Pandas DataFrame 物件，語法如下：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
dataframe = pandas.DataFrame(字典或陣列資料)
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>範例：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import pandas as pd   # 引入 pandas 套件

data = {
    "name": ["Aaa", "Bbb", "Ccc", "Ddd"],
    "salary": [30000, 60000, 45000, 50000],
    "seniority": ["1 year", "5 year", "2 year", "3.5 year"]
}

dictionary_df = pd.DataFrame(data)
 
print("使用字典來建立 DataFrame：")
print(dictionary_df)
 
print("=============================================")
 
data = [
    ["Mike", 80, 63],
    ["Sherry", 75, 90],
    ["Cindy", 93, 85],
    ["John", 86, 70]
]
 
array_df = pd.DataFrame(data)
 
print("使用陣列來建立 DataFrame：")
print(array_df)
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>執行結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
使用字典來建立 DataFrame：
  name  salary seniority
0  Aaa   30000    1 year
1  Bbb   60000    5 year
2  Ccc   45000    2 year
3  Ddd   50000  3.5 year
=============================================
使用陣列來建立 DataFrame：
        0   1   2
0    Mike  80  63
1  Sherry  75  90
2   Cindy  93  85
3    John  86  70
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>從執行結果可以看到，相同的資料內容，使用 Python 字典(Dictionary)來進行指定的話，鍵值(Key)就是 Pandas DataFrame 的欄位名稱，值(Value)則是該欄位的資料內容。而使用陣列來指定的話，就是單純的每一筆資料內容。</p>
                        <p>如果想要客製化 Pandas DataFrame 的資料索引及欄位名稱，可以分別利用 index 及 columns 屬性(Attribute)來達成：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import pandas as pd   # 引入 pandas 套件

data = {
    "name": ["Aaa", "Bbb", "Ccc", "Ddd"],
    "salary": [30000, 60000, 45000, 50000],
    "seniority": ["1 year", "5 year", "2 year", "3.5 year"]
}

df = pd.DataFrame(data)
df.index = ["NO.1", "NO.2", "NO.3", "NO.4"]   # 自訂索引值
df.columns = ["name", "salary", "senioritye"]   # 自訂欄位名稱
print(df)
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>執行結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
     name  salary senioritye
NO.1  Aaa   30000     1 year
NO.2  Bbb   60000     5 year
NO.3  Ccc   45000     2 year
NO.4  Ddd   50000   3.5 year
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>如果想要觀察資料的型態、數量等等，可以使用以下語法：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import pandas as pd   # 引入 pandas 套件

data = {
    "name": ["Aaa", "Bbb", "Ccc", "Ddd"],
    "salary": [30000, 60000, 45000, 50000],
    "seniority": ["1 year", "5 year", "2 year", "3.5 year"]
}

df = pd.DataFrame(data)
df.index = ["NO.1", "NO.2", "NO.3", "NO.4"]   # 自訂索引值
df.columns = ["name", "salary", "senioritye"]   # 自訂欄位名稱
print(df)
print("資料數列：", df.size)
print("資料形狀(列、欄)：", df.shape)
print("資料索引：", df.index)
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>執行結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
     name  salary senioritye
NO.1  Aaa   30000     1 year
NO.2  Bbb   60000     5 year
NO.3  Ccc   45000     2 year
NO.4  Ddd   50000   3.5 year
資料數列： 12
資料形狀(列、欄)： (4, 3)
資料索引： Index(['NO.1', 'NO.2', 'NO.3', 'NO.4'], dtype='object')
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>取得 Pandas DataFrame 資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>head()：取得最前面的 n 筆資料，並且會回傳一個新的 Pandas DataFrame 資料集</li>
                            <li><i class="fa-solid fa-check"></i>tail()：取得最後面的 n 筆資料，並且會回傳一個新的 Pandas DataFrame 資料集</li>
                            <li><i class="fa-solid fa-check"></i>中括號[]：在中括號中指定「欄位名稱」或「資料索引值」，來取得所需的資料集</li>
                            <li><i class="fa-solid fa-check"></i>at[資料索引值,欄位名稱]：利用資料索引值及欄位名稱來取得「單一值」</li>
                            <li><i class="fa-solid fa-check"></i>iat[資料索引值,欄位順序]：利用資料索引值及欄位順序來取得「單一值」</li>
                            <li><i class="fa-solid fa-check"></i>loc[資料索引值,欄位名稱]：利用資料索引值及欄位名稱來取得「資料集」</li>
                            <li><i class="fa-solid fa-check"></i>iloc[資料索引值,欄位順序]：利用資料索引值及欄位順序來取得「資料集」</li>
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import pandas as pd   # 引入 pandas 套件

data = {
    "name": ["Aaa", "Bbb", "Ccc", "Ddd"],
    "salary": [30000, 60000, 45000, 50000],
    "seniority": ["1 year", "5 year", "2 year", "3.5 year"]
}

df = pd.DataFrame(data)
print(df)

print("====================== head() ======================")
head_df = df.head(2)
print("取得最前面的兩筆資料：")
print(head_df)

print("====================== tail() ======================")
tail_df = df.tail(3)
print("取得最後面的三筆資料：")
print(tail_df)

print("====================== 中括號[] ======================")
print("取得單一欄位資料(型別為 Series)：")
print(df["name"])
print("取得多欄位資料(型別為 DataFrame)：")
print(df[["name", "salary"]])
print("取得索引值 0 ~ 2 的資料：")
print(df[0:3])

print("====================== at[資料索引值,欄位名稱] ======================")
print("利用 at() 方法取得索引值為 1 的 seniority 欄位資料")
print(df.at[1, "seniority"])

print("====================== iat[資料索引值,欄位順序] ======================")
print("利用 iat() 方法取得索引值為 1 的第一個欄位資料")
print(df.iat[1, 0])

print("====================== loc[資料索引值,欄位名稱] ======================")
print("取得資料索引值為 1 和 3 的 name 及 salary 欄位資料集")
print(df.loc[[1, 3], ["name", "salary"]])

print("====================== iloc[資料索引值,欄位順序]======================")
print("取得資料索引值為 1 和 3 的第一個及第三個欄位資料集")
print(df.iloc[[1, 3], [0, 2]])料：")
print(df[0:3])
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>執行結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
    name  salary seniority
0  Aaa   30000    1 year
1  Bbb   60000    5 year
2  Ccc   45000    2 year
3  Ddd   50000  3.5 year
取得最前面的兩筆資料：

取得最後面的三筆資料：
PS D:\Code\SelfStudy\Practice\Python> python try.py
  name  salary seniority
0  Aaa   30000    1 year
1  Bbb   60000    5 year
2  Ccc   45000    2 year
3  Ddd   50000  3.5 year
====================== head() ======================
取得最前面的兩筆資料：
  name  salary seniority
0  Aaa   30000    1 year
1  Bbb   60000    5 year
====================== tail() ======================
取得最後面的三筆資料：
  name  salary seniority
1  Bbb   60000    5 year
2  Ccc   45000    2 year
3  Ddd   50000  3.5 year
====================== 中括號[] ======================
取得單一欄位資料(型別為 Series)：
0    Aaa
1    Bbb
2    Ccc
3    Ddd
Name: name, dtype: object
取得多欄位資料(型別為 DataFrame)：
  name  salary
0  Aaa   30000
1  Bbb   60000
2  Ccc   45000
3  Ddd   50000
取得索引值 0 ~ 2 的資料：
  name  salary seniority
0  Aaa   30000    1 year
1  Bbb   60000    5 year
2  Ccc   45000    2 year
====================== at[資料索引值,欄位名稱] ====================== 
利用 at() 方法取得索引值為 1 的 seniority 欄位資料
5 year
====================== iat[資料索引值,欄位順序] ======================
利用 iat() 方法取得索引值為 1 的第一個欄位資料
Bbb
====================== loc[資料索引值,欄位名稱] ======================
取得資料索引值為 1 和 3 的 name 及 salary 欄位資料集
  name  salary
1  Bbb   60000
3  Ddd   50000
====================== iloc[資料索引值,欄位順序]======================
取得資料索引值為 1 和 3 的第一個及第三個欄位資料集
  name seniority
1  Bbb    5 year
3  Ddd  3.5 year
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>新增 Pandas DataFrame 資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>insert()：在指定的欄位位置新增欄位資料</li>
                            <li><i class="fa-solid fa-check"></i>append()：新增一筆或一列的資料，透過傳入字典(Dictionary)來指定各欄位的值，並且會回傳一個新的Pandas DataFrame資料集</li>
                            <li><i class="fa-solid fa-check"></i>concat()：利用合併多個Pandas DataFrame的方式來新增資料，並且會回傳一個新的Pandas DataFrame資料集</li>  
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import pandas as pd   # 引入 pandas 套件

data = {
    "name": ["Aaa", "Bbb", "Ccc", "Ddd"],
    "salary": [30000, 60000, 45000, 50000],
    "seniority": ["1 year", "5 year", "2 year", "3.5 year"]
}

df = pd.DataFrame(data)
print(df)

print("====================== insert() ======================")
df.insert(2, column = "title", value = ["Chairman", "Director", "Manager", "Employee"])
print("在第三欄的地方新增一個欄位資料")
print(df)

print("====================== append() ======================")
append_df = df.append({
    "name": "Eee",
    "salary": 28000,
    "title": "Servitor",
    "seniority": "10 year"
}, ignore_index = True)
 
print("新增一筆資料")
print(append_df)

print("====================== concat() ======================")
concat_df = pd.DataFrame({
    "name": ["Fff"],
    "salary": 25250,
    "title": "Intern",
    "seniority": "15 year"
})
 
new_df = pd.concat([append_df, concat_df], ignore_index = True)
print("合併 DataFrame 來新增資料：")
print(new_df)
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>執行結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
  name  salary seniority
0  Aaa   30000    1 year
1  Bbb   60000    5 year
2  Ccc   45000    2 year
3  Ddd   50000  3.5 year
====================== insert() ======================
在第三欄的地方新增一個欄位資料：
  name  salary     title seniority
0  Aaa   30000  Chairman    1 year
1  Bbb   60000  Director    5 year
2  Ccc   45000   Manager    2 year
3  Ddd   50000  Employee  3.5 year
====================== append() ======================
新增一筆資料：
  name  salary     title seniority
0  Aaa   30000  Chairman    1 year
1  Bbb   60000  Director    5 year
2  Ccc   45000   Manager    2 year
3  Ddd   50000  Employee  3.5 year
4  Eee   28000  Servitor   10 year
====================== concat() ======================
合併 DataFrame 來新增資料：
  name  salary     title seniority
0  Aaa   30000  Chairman    1 year
1  Bbb   60000  Director    5 year
2  Ccc   45000   Manager    2 year
3  Ddd   50000  Employee  3.5 year
4  Eee   28000  Servitor   10 year
5  Fff   25250    Intern   15 year
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>修改 Pandas DataFrame 資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>利用 Pandas DataFrame 的 at[] 及 iat[] 取得所要修改的單一值後，來進行資料內容的修改</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import pandas as pd   # 引入 pandas 套件

data = {
    "name": ["Aaa", "Bbb", "Ccc", "Ddd"],
    "salary": [30000, 60000, 45000, 50000],
    "seniority": ["1 year", "5 year", "2 year", "3.5 year"]
}

df = pd.DataFrame(data)
print(df)

df.at[1, "salary"] = 22000   # 修改索引值為 1 的salary欄位資料
df.at[1, "seniority"] = "40 year"
df.iat[1, 0] = "Charmy"   # 修改索引值為 1 的第一個欄位資料
print("修改後的 DataFrame：")
print(df)
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>執行結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
    name  salary seniority
0  Aaa   30000    1 year
1  Bbb   60000    5 year
2  Ccc   45000    2 year
3  Ddd   50000  3.5 year
修改後的 DataFrame：       
     name  salary seniority
0     Aaa   30000    1 year
1  Charmy   22000   40 year
2     Ccc   45000    2 year
3     Ddd   50000  3.5 year
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>刪除 Pandas DataFrame 資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>drop(欄位名稱串列,axis = 1)：刪除指定欄位名稱的欄位，並且會回傳一個新的Pandas DataFrame資料集</li>
                            <li><i class="fa-solid fa-check"></i>drop(資料索引串列,axis = 0)：刪除指定資料索引的資料，並且會回傳一個新的Pandas DataFrame資料集</li>
                            <li><i class="fa-solid fa-check"></i>dropna()：刪除含有NaN或空值的資料，並且會回傳一個新的Pandas DataFrame資料集，在進行資料清理的時候非常實用</li>
                            <li><i class="fa-solid fa-check"></i>drop_duplicates()：刪除重複的資料，並且會回傳一個新的Pandas DataFrame資料集，同樣最常應用在資料清理的時候</li>
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import pandas as pd   # 引入 pandas 套件
import numpy as np   # 引入 numpy 套件

data = {
    "name": ["Aaa", "Bbb", "Ccc", "Ddd", "Eee", "Eee", "Fff"],
    "salary": [30000, 60000, 45000, 50000, 22000, 22000, np.NaN],
    "seniority": ["1 year", "5 year", "2 year", "3.5 year", "40 year", "40 year", "30 year"]
}

df = pd.DataFrame(data)
print(df)

print("====================== drop(欄位名稱串列,axis = 1) ======================")
drop1_df = df.drop(["seniority"], axis = 1)
print("刪除 seniority 欄位：")
print(drop1_df)

print("====================== drop(資料索引串列,axis = 0) ======================")
drop0_df = df.drop([0, 3], axis = 0)   # 刪除第一筆及第四筆資料
print("刪除第一筆及第四筆資料：")
print(drop0_df)

print("====================== dropna() ======================")
dropna_df = df.dropna()
print("刪除空值後的 DataFrame：")
print(dropna_df)

print("====================== drop_duplicates() ======================")
drop_duplicates_df = df.drop_duplicates()
print("刪除重複值後的 DataFrame：")
print(drop_duplicates_df)
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>執行結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
  name   salary seniority
0  Aaa  30000.0    1 year
1  Bbb  60000.0    5 year
2  Ccc  45000.0    2 year
3  Ddd  50000.0  3.5 year
4  Eee  22000.0   40 year
5  Eee  22000.0   40 year
6  Fff      NaN   30 year
====================== drop(欄位名稱串列,axis = 1) ======================
刪除 seniority 欄位：
  name   salary
0  Aaa  30000.0
1  Bbb  60000.0
2  Ccc  45000.0
3  Ddd  50000.0
4  Eee  22000.0
5  Eee  22000.0
6  Fff      NaN
====================== drop(資料索引串列,axis = 0) ======================
刪除第一筆及第四筆資料：
  name   salary seniority
1  Bbb  60000.0    5 year
2  Ccc  45000.0    2 year
4  Eee  22000.0   40 year
5  Eee  22000.0   40 year
6  Fff      NaN   30 year
====================== dropna() ======================
刪除空值後的 DataFrame：
  name   salary seniority
0  Aaa  30000.0    1 year
1  Bbb  60000.0    5 year
2  Ccc  45000.0    2 year
3  Ddd  50000.0  3.5 year
4  Eee  22000.0   40 year
5  Eee  22000.0   40 year
====================== drop_duplicates() ======================
刪除重複值後的 DataFrame：
  name   salary seniority
0  Aaa  30000.0    1 year
1  Bbb  60000.0    5 year
2  Ccc  45000.0    2 year
3  Ddd  50000.0  3.5 year
4  Eee  22000.0   40 year
6  Fff      NaN   30 year
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>篩選 Pandas DataFrame 資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>通常在處理大量的資料集時，有很高的機率會需要利用條件式來篩選所需的資料，這時候就可以利用中括號[]存取欄位來進行資料篩選：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import pandas as pd   # 引入 pandas 套件

data = {
    "name": ["Aaa", "Bbb", "Ccc", "Ddd", "Eee", "Fff"],
    "salary": [30000, 60000, 45000, 50000, 22000, 25250],
    "seniority": ["1 year", "5 year", "2 year", "3.5 year", "40 year", "30 year"]
}

df = pd.DataFrame(data)
print(df)

print("篩選 salary 大於 47500 的資料集：")
print(df[df["salary"] > 47500])
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>執行結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
  name  salary seniority
0  Aaa   30000    1 year
1  Bbb   60000    5 year
2  Ccc   45000    2 year
3  Ddd   50000  3.5 year
4  Eee   22000   40 year
5  Fff   25250   30 year
篩選 salary 大於 47500 的資料集：
  name  salary seniority
1  Bbb   60000    5 year
3  Ddd   50000  3.5 year
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>另一個最常見的資料篩選情境，就是找出包含特定值的資料集，這時候可以利用Pandas DataFrame的isin()方法(Method)來達成：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import pandas as pd   # 引入 pandas 套件

data = {
    "name": ["Aaa", "Bbb", "Ccc", "Ddd", "Eee", "Fff"],
    "salary": [30000, 60000, 45000, 50000, 22000, 25250],
    "seniority": ["1 year", "5 year", "2 year", "3.5 year", "40 year", "30 year"]
}

df = pd.DataFrame(data)
print(df)

print("篩選 name 欄位包含 Eee 的資料集：")
print(df[df["name"].isin(["Eee"])])
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>執行結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
  name  salary seniority
0  Aaa   30000    1 year
1  Bbb   60000    5 year
2  Ccc   45000    2 year
3  Ddd   50000  3.5 year
4  Eee   22000   40 year
5  Fff   25250   30 year
篩選 name 欄位包含 Eee 的資料集：
  name  salary seniority
4  Eee   22000   40 year
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>排序 Pandas DataFrame 資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>sort_index()：依照索引值來進行排序，並且會回傳一個新的Pandas DataFrame資料集</li>
                            <li><i class="fa-solid fa-check"></i>sort_values()：依照欄位內容來進行排序，並且會回傳一個新的Pandas DataFrame資料集</li>
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import pandas as pd   # 引入 pandas 套件

data = {
    "name": ["Aaa", "Bbb", "Ccc", "Ddd", "Eee", "Fff"],
    "salary": [30000, 60000, 45000, 50000, 22000, 25250],
    "seniority": ["1 year", "5 year", "2 year", "3.5 year", "40 year", "30 year"]
}

df = pd.DataFrame(data)
df.index = ["NO.6", "NO.3", "NO.1", "NO.4", "NO.5", "NO.2"]  # 自訂資料索引值
print(df)

print("====================== sort_index() ======================")
new_df = df.sort_index(ascending = True)
print("遞增排序：")
print(new_df)
 
new_df = df.sort_index(ascending = False)
print("遞減排序：")
print(new_df)

print("====================== sort_values() ======================")
new_df = df.sort_values(["salary"], ascending = True)
print("遞增排序")
print(new_df)
 
new_df = df.sort_values(["salary"], ascending = False)
print("遞減排序")
print(new_df)
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>執行結果：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
     name  salary seniority
NO.6  Aaa   30000    1 year
NO.3  Bbb   60000    5 year
NO.1  Ccc   45000    2 year
NO.4  Ddd   50000  3.5 year
NO.5  Eee   22000   40 year
NO.2  Fff   25250   30 year
====================== sort_index() ====================== 
遞增排序：
     name  salary seniority
NO.1  Ccc   45000    2 year
NO.2  Fff   25250   30 year
NO.3  Bbb   60000    5 year
NO.4  Ddd   50000  3.5 year
NO.5  Eee   22000   40 year
NO.6  Aaa   30000    1 year
遞減排序：
     name  salary seniority
NO.6  Aaa   30000    1 year
NO.5  Eee   22000   40 year
NO.4  Ddd   50000  3.5 year
NO.3  Bbb   60000    5 year
NO.2  Fff   25250   30 year
NO.1  Ccc   45000    2 year
====================== sort_values() ======================
遞增排序
     name  salary seniority
NO.5  Eee   22000   40 year
NO.2  Fff   25250   30 year
NO.6  Aaa   30000    1 year
NO.1  Ccc   45000    2 year
NO.4  Ddd   50000  3.5 year
NO.3  Bbb   60000    5 year
遞減排序
     name  salary seniority
NO.3  Bbb   60000    5 year
NO.4  Ddd   50000  3.5 year
NO.1  Ccc   45000    2 year
NO.6  Aaa   30000    1 year
NO.2  Fff   25250   30 year
NO.5  Eee   22000   40 year
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
                        <a class="article-reference" href="https://www.learncodewithmike.com/2020/11/python-pandas-dataframe-tutorial.html" target="_blank"><i class="fa-solid fa-pen-to-square"></i>[Pandas教學]資料分析必懂的Pandas DataFrame處理雙維度資料方法</a>
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