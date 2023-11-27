<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 CRUD？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-20</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>CRUD 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>CRUD，中文是增刪查改。</h4>
                        <p>CRUD 是對後端工程師的最最最基本要求，至少要會做增加資料、刪除資料、查資料、改資料的功能，畢竟絕大多數的功能都和 CRUD 有關。</p>
                        <p>大家熟悉的網購，都會有超重要的購物車，購物車需要的功能就是：新增商品到購物車、修改購物車商品（數量、顏色等等）、刪除購物車商品以及檢視購物車的商品，這就是 CRUD。</p>
                        <p>對資料的操作也是一樣，大部分的動作都脫離不了 CRUD，CRUD 對比到 SQL 語法會像下表：</p>
                    </div>
                    <div class="article-table" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <table>
                            <thead>
                                <tr>
                                    <th>英文</th>
                                    <th>中文</th>
                                    <th>SQL 指令</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Create</td>
                                    <td>創建</td>
                                    <td>CREATE、INSERT</td>
                                </tr>
                                <tr>
                                    <td>Read</td>
                                    <td>讀取</td>
                                    <td>SELECT</td>
                                </tr>
                                <tr>
                                    <td>Update</td>
                                    <td>更新</td>
                                    <td>UPDATE</td>
                                </tr>
                                <tr>
                                    <td>Delete</td>
                                    <td>更新</td>
                                    <td>DELETE</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>CREATE/INSERT</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>建立新的資料庫</h4>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
CREATE DATABASE IF NOT EXISTS 資料庫名稱;
CHARACTER SET 編碼名稱;
COLLATE 比較規則名稱;
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>[CHARACTER SET] 代表編碼，[COLLATE] 代表比較字元的規則，如果不知道選什麼好，就用 UTF-8 系列的。</p>
                        <h4>建立新的資料表</h4>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
CREATE TABLE IF NOT EXISTS 資料表名稱(
    `欄位名稱1` 資料型態1 [其他欄位設定],
    `欄位名稱2` 資料型態2 [其他欄位設定],
    ...,
    PRIMARY KEY (`主鍵欄位`),
) ENGINE=資料庫引擎;
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>MySQL 的資料型態請參考這篇文章。[其他欄位設定] 為選填，常用的有 NULL/NOT NULL（是否允許空值）、DEFAULT （預設值）。PRIMARY KEY 用來設定主鍵，通常是 ID 欄位</p>
                        <h4>新增資料列</h4>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
INSERT INTO 資料表名稱 (欄位1, 欄位2, ...)
VALUES 
    (資料1-1, 資料1-2, ...),
    (資料2-1, 資料2-2, ...),
    ...
    (資料n-1, 資料n-2, ...);
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>VALUES 的值順序與資料型態必須與資料表的設計符合。如果某個欄位是 auto incremental 則給 NULL，讓 MySQL 幫我們計算該有的值</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>READ(SELECT)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
SELECT 
    欄位選擇
FROM
    資料表名稱
WHERE
    搜尋條件
LIMIT
    限制選取數量;
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>欄位選擇可以是多個欄位，用逗號(,)隔開，且不必照順序，唯一要注意的只有，它們必須是資料表所擁有的欄位。如果要選取所有欄位可以在欄位選擇只打一個星號(*)</p>
                        <p>搜尋條件必須是一個回傳 TRUE/FALSE 的運算式；LIMIT 與 WHERE 可以忽略，預設取回所有資料</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>UPDATE</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
UPDATE 資料表名稱 
SET 
    欄位名稱1 = 運算式1,
    欄位名稱2 = 運算式2,
    ...
WHERE
    搜尋條件;
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>使用 UPDATE 之前請一定要注意搜尋條件！沒有指定搜尋條件會更新整張資料表！！另外，運算式的部分也可以是固定數值或函數。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>DELETE</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
DELETE FROM 資料表名稱
WHERE 搜尋條件;
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>與 UPDATE 一樣，使用 DELETE 之前請一定要注意搜尋條件！沒有指定搜尋條件會刪除整張資料表！！</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a class="article-reference" href="https://ithelp.ithome.com.tw/articles/10238611" target="_blank"><i class="fa-solid fa-pen-to-square"></i>iT邦幫忙(Cinna) - 第三日： CRUD初體驗，操作MySQL資料庫</a>
                        <a class="article-reference" href="https://ithelp.ithome.com.tw/articles/10266159" target="_blank"><i class="fa-solid fa-pen-to-square"></i>iT邦幫忙(goattl) - [Day18] MySQL 的 CRUD 語法</a>
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