<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 ORM(Object-Relational Mapping)？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-22</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>ORM(Object-Relational Mapping) 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>ORM 代表物件關聯映射(Object-Relational Mapping)，是一種軟體開發模式，用於在關聯式資料庫和程式語言中的物件導向程式碼之間建立一個映射，使開發者能夠使用物件來操作資料庫，而不需要直接處理 SQL 語句。這樣的模式有助於減少開發過程中的重複性工作，並提高程式碼的可讀性和維護性。</p>
                        <p>簡單來說，ORM 允許用程式語言中的類別和物件來表示資料庫中的表格和記錄，並提供方法來執行常見的 CRUD 操作以及資料查詢，同時隱藏了底層資料庫的細節。</p>
                        <p>ORM 的優點：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>抽象化資料庫操作：ORM 允許開發者使用物件和類別來表示資料庫中的表格和記錄，從而將資料庫操作抽象成更具可讀性和可理解性的程式碼</li>
                            <li><i class="fa-solid fa-check"></i>減少重複性工作：使用 ORM 可以減少撰寫大量的 SQL 查詢和資料庫存取程式碼，從而節省開發時間並降低錯誤的風險</li>
                            <li><i class="fa-solid fa-check"></i>提高生產力：ORM 簡化了資料庫操作，讓開發者能夠更快速地建立應用程式，專注於業務邏輯而非資料庫交互</li>
                            <li><i class="fa-solid fa-check"></i>跨資料庫支援：ORM 提供了抽象層，允許輕鬆地在不同的資料庫系統之間切換，而不需要修改大部分程式碼</li>
                            <li><i class="fa-solid fa-check"></i>資料庫不依賴：ORM 可以隔離應用程式和資料庫之間的耦合，就代表可以在不更改程式碼的情況下更改底層資料庫</li>
                            <li><i class="fa-solid fa-check"></i>對象導向特性：ORM 提供了對象導向的方法來處理資料庫操作，這使得程式碼更容易理解和維護</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>ORM 的缺點：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>學習曲線：學習使用特定的 ORM 套件需要一些時間，特別是當對該套件的概念和用法不熟悉時</li>
                            <li><i class="fa-solid fa-check"></i>性能：有時候 ORM 在執行複雜查詢或大規模資料操作時可能會影響性能，因為需要轉換對象操作為 SQL 查詢</li>
                            <li><i class="fa-solid fa-check"></i>過度抽象：過度使用 ORM 可能導致過度抽象的情況，使一些複雜的資料庫操作變得不清晰或難以處理</li>
                            <li><i class="fa-solid fa-check"></i>難以優化：有時候 ORM 生成的 SQL 查詢可能不是最優化的，而且你可能無法直接調整這些查詢</li>
                            <li><i class="fa-solid fa-check"></i>某些複雜情況：在某些特殊情況下，如非關聯式資料庫、高度優化的查詢等，使用 ORM 可能不是最佳選擇</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以下是一個簡單的範例，假設有一個資料庫表格 User，表格內含有使用者的資訊包括 id、username 和 email：</p>
                    </div>
                    <div class="article-table" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <table>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>username</th>
                                    <th>email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>user1</td>
                                    <td>user1@example.com</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>user2</td>
                                    <td>user2@example.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Python 範例</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>使用 ORM 時，可以定義一個對應於 User 表格的物件類別，並指定屬性對應於表格的欄位：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class User:
    def __init__(self, id, username, email):
        self.id = id
        self.username = username
        self.email = email
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>這樣就可以使用這個物件類別來執行資料庫操作，例如：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
# 建立一個新使用者
new_user = User(id=3, username='user3', email='user3@example.com')

# 將新使用者儲存到資料庫
database.save(new_user)

# 查詢使用者
user = database.query(User, id=1)
print(user.username)  # 輸出：user1

# 更新使用者資訊
user.email = 'new_email@example.com'
database.save(user)

# 刪除使用者
database.delete(user)
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在這個範例中，database.save、database.query 和 database.delete 方法負責將物件操作映射到底層資料庫操作。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>JavaScript 範例</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在 JavaScript 中，可以使用不同的套件來執行資料庫操作。一個常見的選擇是使用 Node.js 配合 Sequelize 套件來實現 ORM 功能，以下簡單展示如何使用 Sequelize 在 Node.js 中執行資料庫操作。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
npm install sequelize mysql2
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>接下來可以創建一個 User 模型以及相關的資料庫操作程式碼</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const Sequelize = require("sequelize");

// 建立 Sequelize 實例，連接到資料庫
const sequelize = new Sequelize("database_name", "username", "password", {
    host: "localhost",
    dialect: "mysql"
});

// 定義 User 模型
const User = sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

// 同步模型到資料庫(創建對應的資料庫表格)
sequelize.sync()
.then(() => {
    console.log("Database synced");
})
.catch(error => {
    console.error("Error syncing database:", error);
});

// 建立一個新使用者
User.create({
    username: "user3",
    email: "user3@example.com"
})
.then(newUser => {
    console.log("New user created:", newUser.toJSON());
})
.catch(error => {
    console.error("Error creating user:", error);
});

// 查詢使用者
User.findByPk(1)
.then(user => {
    if (user) {
        console.log("User found:", user.toJSON());
    } else {
        console.log("User not found");
    }
})
.catch(error => {
    console.error("Error querying user:", error);
});

// 更新使用者資訊
User.update({ email: "new_email@example.com" }, {
    where: { id: 1 }
})
.then(() => {
    console.log("User updated");
})
.catch(error => {
    console.error("Error updating user:", error);
});

// 刪除使用者
User.destroy({
    where: { id: 1 }
})
.then(() => {
    console.log("User deleted");
})
.catch(error => {
    console.error("Error deleting user:", error);
});
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在這個範例中使用 Sequelize 定義了 User 模型，然後通過模型的方法執行資料庫操作，如 create、findByPk、update 和 destroy。這些方法會自動將物件操作轉換為相應的 SQL 查詢並執行。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Sequelize 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Sequelize 是一個 Node.js 的 ORM 套件，提供了一個用於在 JavaScript 程式碼和關聯式資料庫之間建立映射的框架。通過使用 Sequelize，開發者可以使用物件導向的方式來操作資料庫，而不需要直接處理 SQL 語句，這有助於提高程式碼的可讀性、可維護性和開發效率。</p>
                        <p>Sequelize 支援多種關聯式資料庫，如 MySQL、PostgreSQL、SQLite 和 Microsoft SQL Server，使能夠在不同的資料庫系統之間切換而不需更改程式碼。</p>
                        <p>主要的功能和優點包括：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>模型定義：Sequelize 允許通過定義模型來描述資料庫中的表格和欄位。這樣的模型類別代表資料庫中的表格，而屬性則對應表格的欄位</li>
                            <li><i class="fa-solid fa-check"></i>CRUD 操作：Sequelize 提供了方法來執行常見的 CRUD 操作。可以使用這些方法來建立新記錄、查詢資料、更新記錄以及刪除記錄</li>
                            <li><i class="fa-solid fa-check"></i>關聯性：Sequelize 支援定義模型之間的關聯性，如一對一、一對多和多對多關聯。這能夠在模型之間建立有意義的關聯，並進行跨表格的查詢</li>
                            <li><i class="fa-solid fa-check"></i>事務支援：Sequelize 允許執行資料庫事務，這對於需要保證一系列操作的原子性和一致性非常有用</li>
                            <li><i class="fa-solid fa-check"></i>資料驗證：Sequelize 允許你在資料插入或更新之前驗證資料，確保資料符合特定的條件</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以下是一個簡單的使用 Sequelize 的範例，創建一個 User 模型，然後執行一些基本的操作：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const { Sequelize, DataTypes } = require('sequelize');

// 建立 Sequelize 實例，連接到資料庫
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// 定義 User 模型
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
});

// 建立新使用者
User.create({
    username: 'user1',
    email: 'user1@example.com'
}).then(newUser => {
    console.log('New user created:', newUser.toJSON());
});
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>總結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>ORM 是一個將資料庫和程式語言中的物件模型之間建立映射的技術，讓開發者能夠更方便地操作資料庫而不需要直接處理 SQL 語句。</p>
                        <p>依安全性、簡易性、通用性來看 ORM 的特點</p>
                        <h4>安全性：</h4>
                        <p>優點</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>預防 SQL 注入：ORM 通常使用參數化查詢，可以防止 SQL 注入攻擊</li>
                            <li><i class="fa-solid fa-check"></i>資料驗證：許多 ORM 提供資料驗證機制，可以在寫入資料庫之前驗證數據，確保只有合法數據進入資料庫</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>考量點</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>配置和安全實踐：正確配置 ORM、使用授權和身份驗證等實踐仍然是必要的，以確保安全性</li>
                            <li><i class="fa-solid fa-check"></i>避免過多抽象：過多的抽象層可能導致失去對資料庫操作的細節控制，有時可能會影響安全性</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>簡易性：</h4>
                        <p>優點</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>快速開發：ORM 可以節省編寫大量 SQL 查詢的時間，從而提高快速開發能力</li>
                            <li><i class="fa-solid fa-check"></i>可讀性：ORM 的操作更符合物件導向思維，使程式碼更加自然、可讀</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>考量點</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>學習曲線：學習使用特定的 ORM 可能需要一些時間</li>
                            <li><i class="fa-solid fa-check"></i>性能影響：在某些情況下，ORM 可能會影響性能，特別是在處理複雜查詢和大量數據時</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>通用性：</h4>
                        <p>優點</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>跨資料庫支援：大多數 ORM 可以用於多種關聯式資料庫，使其具有跨資料庫支援</li>
                            <li><i class="fa-solid fa-check"></i>通用操作方法：ORM 提供的操作方法在大部分情況下都是通用的，不需要頻繁更改程式碼</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>考量點</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>特殊需求：在某些特殊情況下，特定的 ORM 庫可能無法滿足特殊需求，或者性能可能不佳</li>
                        </ul>
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