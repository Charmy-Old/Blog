<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">HTML 表格 (table)</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</p>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>HTML &lt;table&gt; 表格</h3>
                    <div class="article-detailLine"></div>

                    <div class="article-txt">
                        <p>HTML &lt;table&gt; 標籤 (tag) 用來建立表格，也就是用來呈現二維的資料表資訊。</p>
                        <p>&lt;table&gt; 標籤做為表格的容器 (container)，裡面有不同用途的標籤像是 &lt;tr&gt;, &lt;td&gt; 組成一個完整的表格。</p>
                        <p>&lt;table&gt;中的標籤按照以下順序，組成一個表格：</p>
                    </div>
                    <div class="article-list">
                        <ol>
                            <li>1、一個選擇性的(optional)&lt;caption&gt;標籤，用來表示表格的標題</li>
                            <li>2、一個或多個選擇性的&lt;colgroup&gt;標籤，用來分組表格的直行(column)以進行格式化</li>
                            <li>3、一個選擇性的&lt;thead&gt;標籤，用來表示表格中不同直行(column)的標題</li>
                            <li>4、一個在以下的標籤之前或之後選擇性的&lt;tfoot&gt;標籤，用來對表格中不同直行(column)做分組，來指定不同分組內容的頁腳或標題</li>
                            <li>5、一個或多個選擇性的&lt;tbody&gt;標籤，做為表格主要內容的容器</li>
                            <li>6、一個或多個必要的&lt;tr&gt;標籤，用來定義表格的橫列(row)</li>
                            <li>7、一個或多個必要的&lt;td&gt;(或&lt;th&gt;) 標籤，用來表示表格中每一直行(cloumn)的單元格(cell)</li>
                        </ol>
                    </div>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>&lt;table&gt; 表格, &lt;tr&gt; 橫列, &lt;td&gt; 直行</h4>
                        <p>&lt;table&gt;, &lt;tr&gt; 和 &lt;td&gt; 是 HTML 表格中最常見到也一定會用到的三個標籤，&lt;table&gt; 用來包著整個表格的結構和內容，&lt;tr&gt; (table row) 用來定義表格有幾個橫列 (row)，&lt;tr&gt; 裡面有 &lt;td&gt; (table data) 用來定義表格有幾個直行 (cloumn)，至於 &lt;td&gt; 裡面就是放實際單元格的資料。</p>
                    </div>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>&lt;th&gt;欄位標題</h4>
                        <p>&lt;th&gt;(table header)用來表示表格欄位的標題，&lt;th&gt;可以用來替代 &lt;td&gt;使用，用來在語意上更明確的聲明這一格是一個標題。</p>
                    </div>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>合併儲存格：colspan和rowspan屬性(attributes)</h4>
                        <p>合併表格可以利用 &lt;td&gt; 和 &lt;th&gt; 標籤上的 colspan 和 rowspan 屬性，colspan 是用來水平合併多行 (column) 的儲存格，rowspan 則用來垂直合併多列 (row) 的儲存格。</p>    
                    </div>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>rowspan - 垂直合併儲存格</p>
                        <p>rowspan="0" 是特殊語法，意思是儲存格從這一列開始合併到最後一列的意思。</p>
                        <p>colspan - 水平合併儲存格</p>
                        <p><i class="fa-solid fa-bell"></i>所以說，colspan合併幾行，該儲存格緊接著的同一列&lt;tr&gt;後面的幾個&lt;td&gt;就要省略不寫。</p>
                    </div>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>&lt;thead&gt; 表格表頭區塊, &lt;tbody&gt; 表格主要內容區塊, &lt;tfoot&gt; 表格頁腳區塊</h4>
                        <p>&lt;thead&gt;(table header), &lt;tbody&gt;(table body) 和 &lt;tfoot&gt;(table footer)主要用來增強表格HTML的語意性(semantic)，分別用來明確區分表格中的不同目的區塊，其中thead是說明這一個區塊的內容是表格欄位標題；&lt;tbody&gt;是說明這一個區塊是放表格的主要內容；&lt;tfoot&gt;則是說明這一個區塊裡面放的是表格的頁腳內容。</p>
                    </div>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>&lt;caption&gt; 表格的標題</h4>
                        <p>&lt;caption&gt; 放在 &lt;table&gt; 中最前面的第一個標籤，用來說明表格的標題，而一個表格只能有一個標題。</p>
                    </div>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>範例：</p>
                    </div>
                    <div class="article-coding">
<pre>
&lt;table&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th colspan="4"&gt;&lt;span&gt;表格表頭區塊&lt;/span&gt;&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td colspan="3"&gt;&lt;span&gt;1&lt;/span&gt;&lt;/td&gt;
            &lt;td rowspan="2"&gt;&lt;span&gt;4&lt;/span&gt;&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        &lt;td&gt;&lt;span&gt;5&lt;/span&gt;&lt;/td&gt;
            &lt;td&gt; rowspan="0"&lt;span&gt;6&lt;/span&gt;&lt;/td&gt;
            &lt;td&gt;&lt;span&gt;7&lt;/span&gt;&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;&lt;span&gt;9&lt;/span&gt;&lt;/td&gt;
            &lt;td&gt;&lt;span&gt;11&lt;/span&gt;&lt;/td&gt;
            &lt;td&gt;&lt;span&gt;12&lt;/span&gt;&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;&lt;span&gt;13&lt;/span&gt;&lt;/td&gt;
            &lt;td&gt;&lt;span&gt;15&lt;/span&gt;&lt;/td&gt;
            &lt;td&gt;&lt;span&gt;16&lt;/span&gt;&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
    &lt;tfoot&gt;
        &lt;tr&gt;
            &lt;th colspan="2"&gt;&lt;span&gt;表格表尾欄位標題&lt;/span&gt;&lt;/th&gt;
            &lt;td colspan="2"&gt;&lt;span&gt;表格表尾欄位內容&lt;/span&gt;&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tfoot&gt;
&lt;/table&gt;
</pre>
                    </div>
                    <div class="article-txt">
                        <p>顯示結果：</p>
                    </div>
                    <div class="article-codeNote">
                        <div class="article-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th colspan="4">表格表頭區塊</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="3">1</td>
                                        <td rowspan="2">4</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td rowspan="0">6</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>11</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>15</td>
                                        <td>16</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th colspan="2">表尾標題</th>
                                        <td colspan="2">表尾內容</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>&lt;colgroup&gt;, &lt;col&gt; 表格直行分組</h4>
                        <p>&lt;colgroup&gt;(column groups)標籤是用來對表格中的直行(column)做分組，可以方便對每個分組直行中的所有儲存格進行統一的格式和樣式設定。</p>
                        <p>&lt;colgroup&gt;標籤上面設定class屬性或像是style屬性，就可以一次直接對分組中所有的儲存格設定樣式，用colgroup的好處就是你不用在每一個&lt;td&gt;上面一一設定class或style</p>
                        <p>&lt;colgroup&gt;標籤的位置是放在 &lt;caption&gt;標籤(如果有)後面，或其他任何的表格標籤前面(像是 &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt; 或 &lt;tr&gt;等表格標籤)。</p>
                        <p>&lt;colgroup&gt;標籤裡面還可以有 &lt;col&gt;標籤，可以用來在每個colgroup分組中再繼續做分組設定。</p>
                        <p>col&gt;標籤上同樣有一個span屬性，用來指定這一個分組橫跨了幾個直行，span預設值是1。而且如果colgroup裡面有col，colgroup標籤上就不能再設定span囉。</p>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="article-detail">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <a class="article-reference" href="https://www.fooish.com/html/table.html" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Fooish 程式技術 - HTML 表格 (table)</a>
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