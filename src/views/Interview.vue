<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="container text-center">
                    <div class="row row-cols-2 row-cols-sm-2 row-cols-md-4">
                        <div>
                            <button class="select-button" data-filter="all">All</button>
                        </div>
                        <div>
                            <button class="select-button" data-filter="Interview">Interview</button>
                        </div>
                        <div>
                            <button class="select-button" data-filter="Question">Question</button>
                        </div>
                        <div>
                            <button class="select-button" data-filter="Other">Other</button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 雲端數位科技有限公司 -->
            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(0)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>雲端數位科技有限公司</h3>
                        <p>2023.02.13</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-examination">
                        <h4>公司環境 & 工作內容：</h4>
                        <p>位於台中崇德路元大銀行樓上，公司旁邊有小路進去可以停車，面試時間大約 0.5 小時。</p>
                        <p>9:00 上班，18:00 下班。</p>
                        <p>直接老闆面試，會在自我介紹的時候看作品，然後在簡單講自己的作品，著重在切版部分提問</p>
                        <p>接案公司，公司每個禮拜五要打掃，純切版。</p>
                    </div>
                    <div class="question-examination">
                        <h4>面試問題：</h4>
                        <div class="question-list">
                            <ul>
                                <li><i class="fa-regular fa-note-sticky"></i>自我介紹</li>
                                <li><i class="fa-regular fa-note-sticky"></i>CSS OK 嗎</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 華苓科技股份有限公司 -->
            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(1)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>華苓科技股份有限公司</h3>
                        <p>2023.07.??</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-examination">
                        <h4>公司環境 & 工作內容：</h4>
                        <p>公司在新竹公道五路，高速公路旁，面試時間差不多 2 小時左右。</p>
                        <p>9:00 上班，18:00 下班。</p>
                        <p>一開始進去先寫考卷，有 CSS + JS 題和性向測樣，40 分鐘作答時間，有點緊湊。</p>
                        <p>技術主管根據題目回答提問，也會給一些建議，後端使用 Java，進公司後可能面試主管跟直屬主管不同人。</p>
                        <p>算接案公司，也會研發自己的產品。</p>
                        <p>有些部門人手相對不足，可能進公司約兩個禮拜就需要帶更新的新人。</p>
                    </div>
                    <div class="question-examination">
                        <h4>面試問題：</h4>
                        <div class="question-list">
                            <ul>
                                <li><i class="fa-regular fa-note-sticky"></i>為什麼會想離新竹找工作</li>
                                <li><i class="fa-regular fa-note-sticky"></i>台中前端目前的狀況如何</li>
                            </ul>
                        </div>
                    </div>
                    <div class="question-examination-ask">
                        <h4>邏輯題</h4>
                        <p>總共有5個人，其中兩個人不會說謊，是個老實人，剩下的三個人會說謊，是個騙子，請依據下面的提示推測，到底誰在說謊</p>
                        <p>1. A 說 B 是騙子。</p>
                        <p>2. B 說 C 是騙子。</p>
                        <p>3. C 說 E 是騙子。</p>
                        <p>4. D 說 A、B 是騙子。</p>
                        <p>5. E 說 B、C 是老實人。</p>
                    </div>
                    <div class="question-examination-ask">
                        <h4>請問以下 console.log 會顯示出什麼</h4>
                    </div>
                    <div class="question-coding">
<pre>
let a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);
let m = [1, 2];
let n = m;
n[0] = 3;
console.log(m);
console.log(n);
</pre>
                    </div>
                    <div class="question-examination-ans">
                        <p>console.log(a);   // 1</p>
                        <p>console.log(b);   // 2</p>
                        <p>console.log(m);   // [3, 2]</p>
                        <p>console.log(n);   // [3, 2]</p>
                    </div>


                    <div class="question-examination-ask">
                        <h4>3. 人事表及組織表如下所示，請依需求寫出 SQL 語法</h4>
                        <p>3.1 請列出陳姓員工的基本資料及所在組織資訊</p>
                        <p>3.2 請列出各組織的人數統計表及年齡平均值</p>
                        <p>3.3 請列出所有員工的第一筆及最後一筆刷卡紀錄</p>
                    </div>
                    <div class="question-table">
                        <p style="display: flex; justify-content: center;">人事表 Emp</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>EmpNo</th>
                                    <th>Name</th>
                                    <th>UnitId</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0001</td>
                                    <td>劉小青</td>
                                    <td>U0001</td>
                                    <td>23</td>
                                </tr>
                                <tr>
                                    <td>0002</td>
                                    <td>吳小明</td>
                                    <td>U0002</td>
                                    <td>33</td>
                                </tr>
                                <tr>
                                    <td>0003</td>
                                    <td>陳小天</td>
                                    <td>U0003</td>
                                    <td>21</td>
                                </tr>
                                <tr>
                                    <td>0004</td>
                                    <td>陳大大</td>
                                    <td>U0002</td>
                                    <td>20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="question-table">
                        <p style="display: flex; justify-content: center;">組織表 Org</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>UnitId</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>U0001</td>
                                    <td>人資部</td>
                                </tr>
                                <tr>
                                    <td>U0002</td>
                                    <td>資訊部</td>
                                </tr>
                                <tr>
                                    <td>U0003</td>
                                    <td>財務部</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="question-table">
                        <p style="display: flex; justify-content: center;">刷卡資料表 ClockRec</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>EmpNo</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0001</td>
                                    <td>2023-09-01</td>
                                    <td>07:00</td>
                                </tr>
                                <tr>
                                    <td>0001</td>
                                    <td>2023-09-01</td>
                                    <td>08:00</td>
                                </tr>
                                <tr>
                                    <td>0001</td>
                                    <td>2023-09-01</td>
                                    <td>15:00</td>
                                </tr>
                                <tr>
                                    <td>0001</td>
                                    <td>2023-09-01</td>
                                    <td>20:00</td>
                                </tr>
                                <tr>
                                    <td>0002</td>
                                    <td>2023-09-01</td>
                                    <td>07:10</td>
                                </tr>
                                <tr>
                                    <td>0002</td>
                                    <td>2023-09-01</td>
                                    <td>08:10</td>
                                </tr>
                                <tr>
                                    <td>0002</td>
                                    <td>2023-09-01</td>
                                    <td>15:10</td>
                                </tr>
                                <tr>
                                    <td>0003</td>
                                    <td>2023-09-01</td>
                                    <td>10:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="question-examination-ans">
                        <p>3.1 <br> SELECT EmpNo, UnitId, Age <br> From Emp <br> WHERE Lastname Like '陳%';</p>
                        <p>3.2 <br> SELECT Org.UnitId Count (Emp.UnitId) AS 人數, AVG (Emp.Age) AS 平均年齡 <br> From Org <br> JOIN Emp ON Org.UnitId=Emp.UnitId <br> GROUP BY Org.UnitId;</p>
                        <p>3.3 <br> SELECT EmpNo <br> &nbsp;&nbsp;&nbsp;&nbsp; MIN(Date) AS FirstDate <br> &nbsp;&nbsp;&nbsp;&nbsp; MIN(Time) AS FirstTime <br> &nbsp;&nbsp;&nbsp;&nbsp; MAX(Date) AS LastDate <br> &nbsp;&nbsp;&nbsp;&nbsp; MAX(Time) AS LastTime <br> FROM ClockRec <br> GROUP BY EmpNo;</p>
                    </div>
                </div>
            </section>

            <!-- 哲煜科技股份有限公司 -->
            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(2)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>哲煜科技股份有限公司</h3>
                        <p>2023.07.??</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-examination">
                        <h4>公司環境 & 工作內容：</h4>
                        <p>線上面試，先向人資自我介紹，然後像技術主管介紹自己的 side project，技術主管會根據自己介紹的 side project 反問很多問題，對自己的使用的技術跟相關技術都要有一定程度的認識。</p>
                        <p>接案公司，公司每個禮拜五要打掃，公司內部會有論壇可以討論技術。</p>
                    </div>
                    <div class="question-examination">
                        <h4>面試問題：</h4>
                        <div class="question-list">
                            <ul>
                                <li><i class="fa-regular fa-note-sticky"></i>自我介紹</li>
                                <li><i class="fa-regular fa-note-sticky"></i>Event Bus、Props、Emit 的差異和優缺點</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 網銀國際股份有限公司 -->
            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(3)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>網銀國際股份有限公司</h3>
                        <p>2023.11.??</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-examination">
                        <h4>公司環境 & 工作內容：</h4>
                        <p>位於台中大里軟體園區的某書店樓上，開車的話附近不好停，面試時間大約 2.5 小時。</p>
                        <p>一開始有兩位人資面試，但是只有一位在講話，人資的面試就花了不少時間，技術面視是兩位主管，態度都蠻好的。</p>
                        <p>公司環境設計蠻好看的，博弈公司，星城 online 是主力產品，如果有機會加入公司會負責公司在東南亞的產品。</p>
                    </div>
                    <div class="question-examination">
                        <h4>面試問題：</h4>
                        <div class="question-list">
                            <ul>
                                <li><i class="fa-regular fa-note-sticky"></i>自我介紹</li>
                                <li><i class="fa-regular fa-note-sticky"></i>為什麼想轉職</li>
                                <li><i class="fa-regular fa-note-sticky"></i>根據履歷問問題</li>
                                <li><i class="fa-regular fa-note-sticky"></i>HTML CSS JS 分別能做什麼</li>
                                <li><i class="fa-regular fa-note-sticky"></i>有聽過 SSR 嗎</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 橙的電子股份有限公司 -->
            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(4)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>橙的電子股份有限公司</h3>
                        <p>2024.03.04</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-examination">
                        <h4>公司環境 & 工作內容：</h4>
                        <p>公司在中科工業園區 5 樓，有車位的話可以停，公司環境蠻乾淨也蠻亮的，算蠻自由的公司，面試時間差不多 1 小時左右。</p>
                        <p>8:30 上班，17:30 下班。</p>
                        <p>公司的前端分布在各部門，主要是各自在各部門作業，每星期開會 IT 部門開會，其他部門會議可以自由參加，業務部門主管蠻 free 的，扁平化管理，希望能各方面都加油。</p>
                        <p>公司聽說前端人蠻多的，但是技術好像不算統一，切版部分可以自由使用 CSS 或 SCSS，目前公司軟體處於準備開發階段，面試時才知道職缺需求是 React，應該就是要各方面都多準備。</p>
                    </div>
                    <div class="question-examination">
                        <h4>面試問題：</h4>
                        <div class="question-list">
                            <ul>
                                <li><i class="fa-regular fa-note-sticky"></i>自我介紹</li>
                                <li><i class="fa-regular fa-note-sticky"></i>為什麼想轉職</li>
                                <li><i class="fa-regular fa-note-sticky"></i>你在乎什麼樣的工作環境</li>
                                <li><i class="fa-regular fa-note-sticky"></i>面對過印象深刻的問題並如何解決</li>
                                <li><i class="fa-regular fa-note-sticky"></i>React Router、Redux 等有沒有聽過</li>
                                <li><i class="fa-regular fa-note-sticky"></i>你覺得你的原生 js 程度如何</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 喬山健康科技股份有限公司 -->
            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(5)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>喬山健康科技股份有限公司</h3>
                        <p>2024.03.05</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-examination">
                        <h4>公司環境 & 工作內容：</h4>
                        <p>公司在中科附近，公司內部有兩棟大樓，旁邊的停車場不確定是不是給員工停的，面試時間差不多 2.5 小時左右。</p>
                        <p>8:00 上班，17:00 下班。</p>
                        <p>一開始進去先寫考卷，公司要穿制服，主管跟人資態度非常好，聊了很多對方也給了不少建議，也耐心分享提問的問題，整體來說蠻自在的，時間大約落在2個半小時左右。</p>
                    </div>
                    <div class="question-examination">
                        <h4>面試問題：</h4>
                        <div class="question-list">
                            <ul>
                                <li><i class="fa-regular fa-note-sticky"></i>自我介紹</li>
                                <li><i class="fa-regular fa-note-sticky"></i>為什麼想轉職</li>
                                <li><i class="fa-regular fa-note-sticky"></i>你在乎什麼樣的工作環境</li>
                                <li><i class="fa-regular fa-note-sticky"></i>你期待的同事或團隊是什麼樣的</li>
                                <li><i class="fa-regular fa-note-sticky"></i>面對過印象深刻的問題並如何解決</li>
                            </ul>
                        </div>
                    </div>
                    <div class="question-examination-ask">
                        <h4>1. 請使用任一程式語言，寫出 99 乘法表</h4>
                    </div>
                    <div class="question-coding">
<pre>
// 面試時的答案
for (let i = 0; i &lt; 10; i++) {
    for (let j = 0; j &lt; 10; j++) {
        document.write(`${i} * ${j} = ${i * j} &lt;br>`)
    }
}
</pre>
                    </div>
                    <div class="question-examination-ask">
                        <h4>2. 請寫出下表的資料庫語法</h4>
                    </div>
                    <div class="question-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>新增</th>
                                    <th>刪除</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>修改</td>
                                    <td>查詢</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="question-examination-ans">
                        <p>新增：INSERT INTO table_name (column, ...) VALUES (value, ...)</p>
                        <p>刪除：DELETE FROM table_name WHERE condition</p>
                        <p>修改：UPDATE table_name SET column=value, ... WHERE condition</p>
                        <p>查詢：SELECT column, ... FROM table_name WHERE condition</p>
                    </div>
                    <div class="question-examination-ask">
                        <h4>3. 人事表及組織表如下所示，請依需求寫出 SQL 語法</h4>
                        <p>3.1 請列出陳姓員工的基本資料及所在組織資訊</p>
                        <p>3.2 請列出各組織的人數統計表及年齡平均值</p>
                        <p>3.3 請列出所有員工的第一筆及最後一筆刷卡紀錄</p>
                    </div>
                    <div class="question-table">
                        <p style="display: flex; justify-content: center;">人事表 Emp</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>EmpNo</th>
                                    <th>Name</th>
                                    <th>UnitId</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0001</td>
                                    <td>劉小青</td>
                                    <td>U0001</td>
                                    <td>23</td>
                                </tr>
                                <tr>
                                    <td>0002</td>
                                    <td>吳小明</td>
                                    <td>U0002</td>
                                    <td>33</td>
                                </tr>
                                <tr>
                                    <td>0003</td>
                                    <td>陳小天</td>
                                    <td>U0003</td>
                                    <td>21</td>
                                </tr>
                                <tr>
                                    <td>0004</td>
                                    <td>陳大大</td>
                                    <td>U0002</td>
                                    <td>20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="question-table">
                        <p style="display: flex; justify-content: center;">組織表 Org</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>UnitId</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>U0001</td>
                                    <td>人資部</td>
                                </tr>
                                <tr>
                                    <td>U0002</td>
                                    <td>資訊部</td>
                                </tr>
                                <tr>
                                    <td>U0003</td>
                                    <td>財務部</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="question-table">
                        <p style="display: flex; justify-content: center;">刷卡資料表 ClockRec</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>EmpNo</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0001</td>
                                    <td>2023-09-01</td>
                                    <td>07:00</td>
                                </tr>
                                <tr>
                                    <td>0001</td>
                                    <td>2023-09-01</td>
                                    <td>08:00</td>
                                </tr>
                                <tr>
                                    <td>0001</td>
                                    <td>2023-09-01</td>
                                    <td>15:00</td>
                                </tr>
                                <tr>
                                    <td>0001</td>
                                    <td>2023-09-01</td>
                                    <td>20:00</td>
                                </tr>
                                <tr>
                                    <td>0002</td>
                                    <td>2023-09-01</td>
                                    <td>07:10</td>
                                </tr>
                                <tr>
                                    <td>0002</td>
                                    <td>2023-09-01</td>
                                    <td>08:10</td>
                                </tr>
                                <tr>
                                    <td>0002</td>
                                    <td>2023-09-01</td>
                                    <td>15:10</td>
                                </tr>
                                <tr>
                                    <td>0003</td>
                                    <td>2023-09-01</td>
                                    <td>10:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="question-examination-ans">
                        <p>3.1 <br> SELECT EmpNo, UnitId, Age <br> From Emp <br> WHERE Lastname Like '陳%';</p>
                        <p>3.2 <br> SELECT Org.UnitId Count (Emp.UnitId) AS 人數, AVG (Emp.Age) AS 平均年齡 <br> From Org <br> JOIN Emp ON Org.UnitId=Emp.UnitId <br> GROUP BY Org.UnitId;</p>
                        <p>3.3 <br> SELECT EmpNo <br> &nbsp;&nbsp;&nbsp;&nbsp; MIN(Date) AS FirstDate <br> &nbsp;&nbsp;&nbsp;&nbsp; MIN(Time) AS FirstTime <br> &nbsp;&nbsp;&nbsp;&nbsp; MAX(Date) AS LastDate <br> &nbsp;&nbsp;&nbsp;&nbsp; MAX(Time) AS LastTime <br> FROM ClockRec <br> GROUP BY EmpNo;</p>
                    </div>
                </div>
            </section>

            <!-- 創創數位科技股份有限公司 -->
            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(6)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>創創數位科技股份有限公司</h3>
                        <p>2024.03.11</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-examination">
                        <h4>公司環境 & 工作內容：</h4>
                        <p>在台中文心路的商辦大樓內，附近不太好停車，接案公司，70% 政府案件，面試時間差不多 2 小時左右。</p>
                        <p>台中分部還在籌備中，目前只有 2 個人，辦公室目前跟其他公司共用，有上機考，大概都是 HTML CSS 基本考題 (改背景色、置中、做表格、CSS RWD 是基於什麼語法等問題)，但是量蠻多的可能會寫不完，需要斟酌一下答題時間，整體面試時間差不多 2 小時。</p>
                    </div>
                    <div class="question-examination">
                        <h4>面試問題：</h4>
                        <div class="question-list">
                            <ul>
                                <li><i class="fa-regular fa-note-sticky"></i>自我介紹</li>
                                <li><i class="fa-regular fa-note-sticky"></i>為什麼想轉職</li>
                                <li><i class="fa-regular fa-note-sticky"></i>直接把上機考題拿進去解釋</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 快思股份有限公司 -->
            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(7)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>快思股份有限公司</h3>
                        <p>2024.03.21</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-examination">
                        <h4>公司環境 & 工作內容：</h4>
                        <p>在台中市政北七路的商辦大樓內，附近不太好停車，可以選擇停新光三越旁邊的停車場，面試時間大約 0.5 小時。</p>
                        <p>公司是做雲端智慧排程系統​和雲端碳盤查系統的，工作不太需要切版。</p>
                        <p>公司共 24 人，前端目前 3 位，後端 6 位，後端使用 C# 為主。</p>
                    </div>
                    <div class="question-examination">
                        <h4>面試問題：</h4>
                        <div class="question-list">
                            <ul>
                                <li><i class="fa-regular fa-note-sticky"></i>自我介紹</li>
                                <li><i class="fa-regular fa-note-sticky"></i>為什麼想轉職</li>
                                <li><i class="fa-regular fa-note-sticky"></i>根據履歷題目</li>
                                <li><i class="fa-regular fa-note-sticky"></i>請解釋一下 CSR 和 SSR</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 凱柏精密機械股份有限公司 -->
            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(8)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>凱柏精密機械股份有限公司</h3>
                        <p>2024.03.26</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-examination">
                        <h4>公司環境 & 工作內容：</h4>
                        <p>在台中精密機械園區，附近蠻好停車的，面試時間大約 1 小時。</p>
                        <p>公司因為景氣寒冬，有禮拜五放無薪假，但前端沒有這方面的問題。</p>
                        <p>公司目前沒有前端，上一位前端是在 2023.10 離職，最近才開始重新找人，後端是使用 node.js。</p>
                        <p>面試期間技術主管會看履歷簡單問一下，然後副總再簡單面試。</p>
                    </div>
                    <div class="question-examination">
                        <h4>面試問題：</h4>
                        <div class="question-list">
                            <ul>
                                <li><i class="fa-regular fa-note-sticky"></i>想請問對於現在軟體業和傳產及製造業的關聯以及未來展望</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 米洛科技有限公司 -->
            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(9)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>米洛科技有限公司</h3>
                        <p>2024.03.26</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-examination">
                        <h4>公司環境 & 工作內容：</h4>
                        <p>在台中精明一街裡的大樓，大樓不算新但公司內部重新拉皮後蠻乾淨的，附近不太好停車，面試時間大約 1.5 小時。</p>
                        <p>公司內部感覺交流蠻熱絡的，扁平化管理，主管是輔助角色，是你告訴主管該怎麼做而不是主管告訴你。</p>
                        <p>公司屬於接案公司，要切版也要做公司後台，使用的是 Vue2 option API，會有筆試，直接看程式碼要能直接說出哪裡有問題，也會問 computed 改 watch 要怎麼寫以及可以如何優化上述程式碼，還會考如果改需求要怎麼改寫。</p>
                    </div>
                    <div class="question-examination">
                        <h4>面試問題：</h4>
                        <div class="question-list">
                            <ul>
                                <li><i class="fa-regular fa-note-sticky"></i>自我介紹</li>
                                <li><i class="fa-regular fa-note-sticky"></i>上一份工作為什麼離職</li>
                                <li><i class="fa-regular fa-note-sticky"></i>根據履歷提問</li>
                                <li><i class="fa-regular fa-note-sticky"></i>你有寫部落格，從中有什麼收穫或好處</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 新加坡商冕創有限公司 -->
            <section class="all Interview question-block" :class="{ modifyHeight: heightActive }" @click="transform(10)">
                <div class="question-title">
                    <h2>Front-End Interview</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>新加坡商冕創有限公司</h3>
                        <p>2024.04.19</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-examination">
                        <h4>公司環境 & 工作內容：</h4>
                        <p>線上面試，104 上顯示位於台中文心路上，面試時間大約 1 小時。</p>
                        <p>公司主要做電商，但是市場位於柬埔寨，台灣沒有上市，目前產品處於開發階段，為了避免同業競爭所以相對隱密，但是聽說公司知名度在柬埔寨差不多就是在台灣聽到 Food Panda。</p>
                        <p>公司採扁平化管理，有時候會需要跟在柬埔寨的老闆開會，自己安排專案時間，採美式化管理</p>
                    </div>
                    <div class="question-examination">
                        <h4>面試問題：</h4>
                        <div class="question-list">
                            <ul>
                                <li><i class="fa-regular fa-note-sticky"></i>自我介紹</li>
                                <li><i class="fa-regular fa-note-sticky"></i>Cookie、LocalStorage 和 SessionStorage 的差異</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="all Question question-block" :class="{ modifyHeight: heightActive }" @click="transform(11)">
                <div class="question-title">
                    <h2>Front-End Question</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>Array 方法</h3>
                        <p>JavaScript</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-coding">
<pre>
// push(): 在陣列尾端新增一個或多個元素，並回傳新陣列的長度
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);   // [1, 2, 3, 4] 

// pop(): 移除陣列的最後一個元素，並回傳被移除的元素
let arr = [1, 2, 3];
let last = arr.pop();
console.log(last);   // 3

// shift(): 移除陣列的第一個元素，並回傳被移除的元素
let arr = [1, 2, 3];
let first = arr.shift();
console.log(first);   // 1

// unshift(): 在陣列頭端新增一個或多個元素，並回傳新陣列的長度
let arr = [1, 2, 3];
arr.unshift(0);
console.log(arr);   // [0, 1, 2, 3]

// splice(): 移除或替換陣列的元素
let arr = [1, 2, 3];
arr.splice(1, 1);
console.log(arr);   // [1, 3]

// slice(): 複製陣列中的一部分元素
let arr = [1, 2, 3];
let sliced = arr.slice(1, 2);
console.log(sliced);   // [2]

// sort(): 對陣列中的每個元素進行排序
let arr = [3, 2, 1];
arr.sort();
console.log(arr);   // [1, 2, 3]
// 自定義比較函式
let arr = [3, 2, 1];
arr.sort(function(a, b) {
    return a - b;
})
console.log(arr);   // [1, 2, 3]

// reverse(): 對陣列中的每個元素進行反轉
let arr = [1, 2, 3];
arr.reverse();
console.log(arr);   // [3, 2, 1]

// concat(): 對兩個陣列進行連接
let arr1 = [1, 2];
let arr2 = [3, 4];
let concat = arr1.concat(arr2);
console.log(concat);   // [1, 2, 3, 4]



// for: 對陣列中的每個元素進行操作
let arr = [1, 2, 3];
for (let i = 0; i &lt arr.length; i++) {
    console.log(arr[i]);   // 1 2 3
}

// forEach(): 對陣列中的每個元素進行操作
let arr = [1, 2, 3];
arr.forEach(function(element) {
    console.log(element);   // 1 2 3
})

// for...of: 對陣列中的每個元素進行操作
let arr = [1, 2, 3];
for (let element of arr) {
    console.log(element);   // 1 2 3
}

// map(): 對陣列中的每個元素進行操作，並返回新的陣列
let arr = [1, 2, 3];
let newArr = arr.map(function(element) {
    return element * 2;
})
console.log(newArr);   // [2, 4, 6]

// filter(): 對陣列中的每個元素進行操作，並返回符合條件的元素
let arr = [1, 2, 3];
let filtered = arr.filter(function(element) {
   return element > 1;
})
console.log(filtered);   // [2, 3]

// reduce(): 對陣列中的每個元素進行操作，並返回結果
let arr = [1, 2, 3];
let sum = arr.reduce(function(total, element) {
   return total + element;
})
console.log(sum);   // 6

// find(): 對陣列中的每個元素進行操作，並返回符合條件的第一個元素
let arr = [1, 2, 3];
let found = arr.find(function(element) {
    return element > 1;
})
console.log(found);   // 2  

// some(): 對陣列中的每個元素進行操作，並返回符合條件的元素
let arr = [1, 2, 3];
let some = arr.some(function(element) {
    return element > 1;
})
console.log(some);   // true

// every(): 對陣列中的每個元素進行操作，並返回符合條件的元素
let arr = [1, 2, 3];
let every = arr.every(function(element) {
    return element > 1;
})
console.log(every);   // false



// indexOf(): 返回元素在陣列中的索引值
let arr = [1, 2, 3];
let index = arr.indexOf(2);
console.log(index);   // 1
let index2 = arr.indexOf(4);
console.log(index2);   // -1

// includes(): 檢查陣列中是否包含指定的元素
let arr = [1, 2, 3];
let includes = arr.includes(2);
console.log(includes);   // true

// join(): 將陣列元素連接成字串，并以指定的分隔符號分隔
let arr = [1, 2, 3];
let str = arr.join(' ');
console.log(str);   // 1 2 3

// split(): 將字串分割成陣列
let str = 'hello world';
let arr = str.split(' ');
console.log(arr);   // ['hello', 'world']

// length: 陣列的長度
let arr = [1, 2, 3];
console.log(arr.length);   // 3

// Array.isArray(): 檢查物件是否為陣列
let arr = [1, 2, 3];
let isArray = Array.isArray(arr);
console.log(isArray);   // true

// Array.toString(): 將陣列元素轉換為字串
let arr = [1, 2, 3];
let str = arr.toString();
console.log(str);   // 1,2,3

// Array.valueOf(): 將陣列元素轉換為值
let arr = [1, 2, 3];
let value = arr.valueOf();
console.log(value);   // [1, 2, 3]

// Array.toLocaleString(): 將陣列元素轉換為字串，並以指定的格式輸出
let arr = [1, 2, 3];
let str = arr.toLocaleString();
console.log(str);   // 1,2,3

// __proto__: 陣列的 prototype 屬性
let arr = [1, 2, 3];
console.log(arr.__proto__);   // [object Array]

// Array.constructor: 陣列的構造函數
let arr = [1, 2, 3];
console.log(arr.constructor);   // function Array() { [native code] }
</pre>
                    </div>
                </div>
            </section>

            <section class="all Question question-block" :class="{ modifyHeight: heightActive }" @click="transform(12)">
                <div class="question-title">
                    <h2>Front-End Question</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>運算子</h3>
                        <p>JavaScript</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-coding">
<pre>
console.log(2 + 3);   // 5
console.log(2 + "3");   // 23
console.log("2" + "3");   // 23
console.log("2" + 3);   // 23

console.log(2 - 3);   // -1
console.log(2 - "3");   // -1
console.log("2" - "3");   // -1
console.log("2" - 3);   // -1

console.log(2 * 3);   // 6
console.log(2 * "3");   // 6
console.log("2" * "3");   // 6
console.log("2" * 3);   // 6

console.log(2 / 3);   // 0.6666666666666666
console.log(2 / "3");   // 0.66666666666666666
console.log("2" / "3");   // 0.6666666666666666
console.log("2" / 3);   // 0.6666666666666666

console.log(2 + + 3);   // 5
console.log(2 + + "3");   // 5
console.log("2" + + "3");   // 23
console.log("2" + + 3);   // 23

console.log(2 - - 3);   // 5
console.log(2 - - "3");   // 5
console.log("2" - - "3");   // 5
console.log("2" - - 3);   // 5

console.log("沒有 * *");
console.log("沒有 / /");

console.log(2 + - 3);   // -1
console.log("沒有 + *");
console.log("沒有 + /");

console.log(2 - + 3);   // -1
console.log("沒有 - *");
console.log("沒有 - /");

console.log(2 * + 3);   // 6
console.log(2 * - 3);   // -6
console.log("沒有 * /");

console.log(2 / + 3);   // 0.6666666666666666
console.log(2 / - 3);   // -0.6666666666666666
console.log("沒有 / *");

console.log(NaN === NaN);   // false
console.log(0 === -0);   //  true
console.log(1 === 1);   //  true

console.log({} + [] === 0);   // false
console.log([] + [] === '');   // true
console.log(false + 1 === 1);   // true
console.log([] * 1 === 0);   // true
console.log(typeof NaN === 'number');   // true

console.log(NaN == NaN);   // false
console.log(5 == '5');   // true
console.log([] == '');   // true
console.log(0 == '0');   // true
console.log(0 === '0');   // false 
console.log(0 == '');   // true
console.log(0 === '');   // false
console.log(0 == []);   // true
console.log([] == 0);  // true
console.log([] == 0);  // true
console.log(({}) == '[object Object]');   // true
console.log(({}) == {});   // false
</pre>
                    </div>
                </div>
            </section>

            <section class="all Question question-block" :class="{ modifyHeight: heightActive }" @click="transform(13)">
                <div class="question-title">
                    <h2>Front-End Question</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>請問 Arrow function 及一般 function 中的 this 有何不同</h3>
                        <p>JavaScript</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-txt">
                        <p>普通 function 中的 this：</p>
                    </div>
                    <div class="question-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>在 JavaScript 中，this 是指向函式呼叫時的物件</li>
                            <li><i class="fa-regular fa-note-sticky"></i>當函式沒有被任何物件呼叫時，this 會指向全域物件</li>
                            <li><i class="fa-regular fa-note-sticky"></i>當函式被物件呼叫時，this 會指向該物件</li>
                            <li><i class="fa-regular fa-note-sticky"></i>當函式透過 call() 或 apply() 方法呼叫時，this 會指向該方法的參數</li>
                        </ul>
                    </div>
                    <div class="question-txt">
                        <p>箭頭 function 中的 this：</p>
                    </div>
                    <div class="question-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>箭頭 function 中的 this 指向函式定義時的作用域的 this</li>
                            <li><i class="fa-regular fa-note-sticky"></i>箭頭 function 中的 this 不會隨著函式呼叫時的作用域而改變</li>
                        </ul>
                    </div>
                    <div class="question-coding">
<pre>
// 普通 function 中的 this
function foo() {
    console.log(this);   // 全域物件
}
foo();   // 輸出：window

// 箭頭 function 中的 this
const bar = () => {
    console.log(this);   // 全域物件
};

bar();   // 輸出：window

// 普通 function 作為物件方法調用
const obj = {
    fn: function() {
        console.log(this);   // obj
    },
};

obj.fn();   // 輸出：obj

// 箭頭 function 作為物件方法調用
const obj2 = {
    fn: () => {
        console.log(this);   // obj2
    },
};

obj2.fn();   // 輸出：obj2

// 普通 function 透過 call() 或 apply() 方法調用
function fn() {
    console.log(this);   // 全域物件
}

fn.call(obj);   // 輸出：obj
fn.apply(obj, []);   // 輸出：obj

// 箭頭 function 透過 call() 或 apply() 方法調用
const arrowFn = () => {
    console.log(this);   // obj
};

arrowFn.call(obj);   // 輸出：obj
arrowFn.apply(obj, []);   // 輸出：obj
</pre>
                    </div>
                </div>
            </section>

            <section class="all Question question-block" :class="{ modifyHeight: heightActive }" @click="transform(14)">
                <div class="question-title">
                    <h2>Front-End Question</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>Cookie、LocalStorage 和 SessionStorage 的差異</h3>
                        <p>Web</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-txt">
                        <p>Cookie：</p>
                    </div>
                    <div class="question-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>可設定失效時間，預設是關閉瀏覽器後失效</li>
                            <li><i class="fa-regular fa-note-sticky"></i>大小約 4kb</li>
                            <li><i class="fa-regular fa-note-sticky"></i>每次都會攜帶在HTTP中，保存過多數據會帶來效能問題</li>
                        </ul>
                    </div>
                    <div class="question-txt">
                        <p>LocalStorage：</p>
                    </div>
                    <div class="question-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>除非被清除，否則永久保存</li>
                            <li><i class="fa-regular fa-note-sticky"></i>大小一般為 5Mb</li>
                            <li><i class="fa-regular fa-note-sticky"></i>僅在瀏覽器保存，不參與Server的溝通</li>
                        </ul>
                    </div>
                    <div class="question-txt">
                        <p>SessionStorage：</p>
                    </div>
                    <div class="question-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>關閉頁面或瀏覽器後被清除</li>
                            <li><i class="fa-regular fa-note-sticky"></i>大小一般為 5Mb</li>
                            <li><i class="fa-regular fa-note-sticky"></i>僅在瀏覽器保存，不參與Server的溝通</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="all Question question-block" :class="{ modifyHeight: heightActive }" @click="transform(15)">
                <div class="question-title">
                    <h2>Front-End Question</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>var、let 和 for 迴圈及 setTimeout 觀念</h3>
                        <p>JavaScript</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-txt">
                        <p>請問以下 console.log 會顯示出什麼</p>
                    </div>
                    <div class="question-coding">
<pre>
for (var i = 0; i &lt; 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}
// 3 3 3

for (let i = 0; i &lt; 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}
// 0 1 2

for (var i = 0; i &lt;= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}
// 4 4 4 4

for (let i = 0; i &lt;= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}
// 0 1 2 3
</pre>
                    </div>
                </div>
            </section>

            <section class="all Question question-block" :class="{ modifyHeight: heightActive }" @click="transform(16)">
                <div class="question-title">
                    <h2>Front-End Question</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>var、let 和 const 的差異</h3>
                        <p>JavaScript</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-list">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>在 JavaScript 早期只有 var，直到 ES2015(ES6) 時才加入了 let 與
                                const</li>
                            <li><i class="fa-regular fa-note-sticky"></i>在作用域上，var 可以是全域、也可以是以函式作為範圍；let 與 const 則是以區塊作為範圍
                            </li>
                            <li><i class="fa-regular fa-note-sticky"></i>在宣告上，var 可以被重複宣告，但是 let 與 const 則不行</li>
                            <li><i class="fa-regular fa-note-sticky"></i>在 hoisting 上，var 宣告的變數會自動初始化值為
                                undefined，因為在宣告前就使用變數，不會出現錯誤，而會是 undefined ；但是 let 與 const 宣告的變數則不會自動初始化，而是會進到暫時死區 (TDZ)，因此在
                                let 與 const 宣告變數前使用該變數，會出現錯誤</li>
                            <li><i class="fa-regular fa-note-sticky"></i>let 與 const 在絕多數面向都是一樣，兩者的一大區別在於，用 let
                                宣告的變數可以重新賦值，但是用 const 的不行</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="all Question question-block" :class="{ modifyHeight: heightActive }" @click="transform(17)">
                <div class="question-title">
                    <h2>Front-End Question</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>生命週期中 watch 和 computed 的差異</h3>
                        <p>Vue</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-txt">
                        <p>computed:(計算屬性)：</p>
                        <p>computed 是一個屬性，用於定義一個依賴於其他數據的屬性。它們根據它們所依賴的數據自動更新，只有當依賴的數據發生變化時，計算屬性才會重新求值。</p>
                        <p>computed 屬性在數據變化時具有緩存的特性，當計算屬性依賴的數據沒有改變時，不會重新計算，而是直接返回之前的結果。</p>
                    </div>
                    <div class="question-txt">
                        <p>watch:(監聽)：</p>
                        <p>watch 是一個選項，用於監聽數據的變化並在數據發生改變時執行相應的函數。它允許執行自定義的邏輯，當數據變化時作出不同的響應。</p>
                        <p>watch 通常用於當需要執行非同步操作，或者需要更複雜的邏輯來響應數據變化時。</p>
                    </div>
                    <div class="question-txt">
                        <p>computed 適合用於根據數據的轉換或計算得到一個新值，而 watch 則適合用於當需要執行一些副作用操作，或者需要更複雜的邏輯來響應數據的改變。</p>
                    </div>
                </div>
            </section>

            <section class="all Question question-block" :class="{ modifyHeight: heightActive }" @click="transform(18)">
                <div class="question-title">
                    <h2>Front-End Question</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>水平垂直置中方法</h3>
                        <p>CSS</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-txt">
                        <p>1、Flexbox</p>
                    </div>
                    <div class="question-coding">
<pre>
.parent {
    display: flex;
    justify-content: center;   /* 水平置中 */   
    align-items: center;   /* 垂直置中 */
}
</pre>
<pre>
.parent {
    display: flex;
    justify-content: center;   /* 水平置中 */   
    align-content: center;   /* 垂直置中 */
    flex-wrap: wrap;
}
</pre>
                    </div>
                    <div class="question-txt">
                        <p>2、相對定位 + transform</p>
                    </div>
                    <div class="question-coding">
<pre>
.child {
    position: relative;
    top: 50%;  
    left: 50%;
    transform: translate(-50%, -50%);
}
</pre>
                    </div>
                    <div class="question-txt">
                        <p>3、絕對定位</p>
                    </div>
                    <div class="question-coding">
<pre>
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}
</pre>
                    </div>
                </div>
            </section>

            <section class="all Question question-block" :class="{ modifyHeight: heightActive }" @click="transform(19)">
                <div class="question-title">
                    <h2>Front-End Question</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>v-if 和 v-show 的差別</h3>
                        <p>Vue</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-txt">
                        <p>v-if 和 v-show 都是用來根據條件來控制 DOM 元素顯示與隱藏的指令</p>
                        <p>v-if 是「真正的」條件渲染指令。如果條件為假，DOM 元素將完全從 DOM 中移除，反之，如果條件為真，DOM 元素將被插入到 DOM 中。這意味著在條件為假時，Vue 將不會編譯或渲染該元素及其子元素。</p>
                        <p>v-show 是簡單的 CSS 顯示/隱藏切換指令。DOM 元素始終會被渲染到 DOM 中，只是通過 CSS 的 display 屬性來控制其是否可見。當條件為假時，元素的 display 屬性會被設置為 none，使其隱藏，條件為真時則設置為 block(或其他適當的值)，使其顯示。</p>
                        <p>如果應用中的元素頻繁地需要顯示和隱藏，那麼使用 v-show 可能更合適，因為它不會造成DOM的不必要重繪。但是，如果元素很少需要改變顯示狀態，或者在顯示和隱藏之間切換的代價比較高，那麼使用 v-if 更好，因為它能夠更徹底地控制 DOM 的渲染。</p>
                    </div>
                </div>
            </section>

            <section class="all Question question-block" :class="{ modifyHeight: heightActive }" @click="transform(20)">
                <div class="question-title">
                    <h2>Front-End Question</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>SSR 和 CSR 的差別</h3>
                        <p>Web</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-txt">
                        <p>SSR 的意思是伺服器端渲染端渲染。SSR 在使用者發送請求時，伺服器端會先將頁面渲染完成，並將完整的 HTML 響應給瀏覽器，瀏覽器只需將 HTML 解析並顯示即可。SSR 的優點是可以提高頁面的初始加載速度，因為瀏覽器在載入頁面時，不需要從伺服器端獲取額外的資料，即可看到完整的頁面內容。此外，SSR 也可以提高頁面的 SEO 效果，因為搜尋引擎可以直接抓取伺服器端渲染的 HTML，並將其索引到搜尋結果中。</p>
                    </div>
                    <div class="question-txt">
                        <p>CSR 的意思是瀏覽器端渲染。CSR 是將網頁的 HTML、CSS、JavaScript 等檔案都下載到瀏覽器後，再由瀏覽器端進行渲染 CSR 的優點是可以提高網頁的效能，因為網頁的渲染工作可以由瀏覽器端進行，而不需要等待伺服器回應。此外，CSR 也更容易進行動態更新，因為瀏覽器可以直接更新已下載的檔案，而不需要重新載入整個網頁。CSR 的缺點是需要下載較多的檔案，因此在網路速度較慢的情況下，可能會導致網頁載入速度變慢。此外，CSR 也需要更複雜的程式碼，才能在瀏覽器端進行渲染。</p>
                    </div>
                </div>
            </section>

            <section class="all Question question-block" :class="{ modifyHeight: heightActive }" @click="transform(21)">
                <div class="question-title">
                    <h2>Front-End Question</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>setTimeout 和 setInterval 的差別</h3>
                        <p>JavaScript</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-txt">
                        <p>setTimeout 用於在指定的時間後執行一次程式碼</p>
                        <p>setInterval 用於在指定的時間間隔內重複執行一次程式碼</p>
                    </div>
                </div>
            </section>

            <section class="all Question question-block" :class="{ modifyHeight: heightActive }" @click="transform(22)">
                <div class="question-title">
                    <h2>Front-End Question</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-intro">
                        <h3>undefined、undeclared 和 null 分別代表什麼意思</h3>
                        <p>JavaScript</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-txt">
                        <p>Undefined(未定義)：代表變數已經被宣告，但目前尚未賦予任何值，或者表示對象屬性不存在的情況</p>
                        <p>Undeclared(未宣告)：代表變數尚未被宣告，意即嘗試使用一個還未宣告的變數</p>
                        <p>Null(空值)：代表變數已經被宣告，但被賦值為 null，表示值為空或不存</p>
                    </div>
                </div>
            </section>

            <section class="all Other question-block" :class="{ modifyHeight: heightActive }" @click="transform(23)">
                <div class="question-title">
                    <h2>Other</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>企業發放的獎金根據利潤提成。</p>
                        <p>利潤(I)低於或等於10萬元時，獎金可提10%；</p>
                        <p>利潤高於10萬元，低於20萬元時，低於10萬元的部分按10%提成，高於10萬元的部分，可提成7.5%；</p>
                        <p>20萬到40萬之間時，高於20萬元的部分，可提成5%；40萬到60萬之間時高於40萬元的部分，可提成3%；</p>
                        <p>60萬到100萬之間時，高於60萬元的部分，可提成1.5%，高於100萬元時，超過100萬元的部分按1%提成，</p>
                        <p>從鍵盤輸入當月利潤I，求應發放獎金總數？</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-coding">
<pre>
# Python
profit=int(input("利潤值："))
list_profit=[0,100000,200000,400000,600000,1000000]
ratio=[0.1,0.075,0.05,0.03,0.015,0.01]
bonus=0
for x in range(len(ratio)):
    if profit > list_profit[x]:
        bonus+=(profit-list_profit[x])*ratio[x]
        profit=list_profit[x]
    else:
        continue

print(bonus)
</pre>
                    </div>
                </div>
            </section>

            <section class="all Other question-block" :class="{ modifyHeight: heightActive }" @click="transform(24)">
                <div class="question-title">
                    <h2>Other</h2>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                </div>
                <div class="question-content">
                    <div class="question-txt">
                        <p>一個整數，它加上100後是一個完全平方數，再加上168又是一個完全平方數，請問該數是多少？</p>
                    </div>
                    <div class="question-detailLine"></div>
                    <div class="question-coding">
<pre>
# Python

for x in range(2,85,2):
    y = 168 / x
    if x > y and (x + y) % 2 == 0 and (x - y) % 2 == 0:
        m = (x + y) / 2
        n = (x - y) / 2
        x = n * n - 100

print(x)
</pre>
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
import { ref, onMounted } from "vue";

onMounted(() => {
    function selectArticle() {
        const buttons = document.querySelectorAll(".select-button");
        const cards = document.querySelectorAll(".all");

        function filter(category, items) {
            items.forEach((item) => {
                const isItemFiltered = !item.classList.contains(category);
                const isShowAll = category.toLowerCase() === "all";
                if (isItemFiltered && !isShowAll) {
                    item.classList.add("d-none");
                } else {
                    item.classList.remove("d-none");
                }
            });
        }

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const currentCategory = button.dataset.filter;
                console.log(currentCategory);
                filter(currentCategory, cards);
            });
        });
    }

    selectArticle();
});

const heightActive = ref(false);
const transform = (index) => {
    const cards = document.querySelectorAll(".all");
    const targetCard = cards[index];
    const ismodifyHeight = targetCard.classList.contains("modifyHeight");

    cards.forEach((card, i) => {
        if (i === index) {
            card.classList.toggle("modifyHeight", !ismodifyHeight);
        } else {
            card.classList.remove("modifyHeight");
        }
    });
};
</script>