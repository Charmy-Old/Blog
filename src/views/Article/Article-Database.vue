<template>
    <Header />
    <div class="content">
        <main>
            
            <section>
                <div class="article-top">
                    <div class="article-icon">
                        <i class="fa-solid fa-database"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">Database</div>
                    </div>
                </div>
            </section>

            <section>
                <a href="DB_CRUD" class="article">
                    <div class="article-icon">
                        <i class="fa-solid fa-database"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">什麼是 CRUD？</div>
                        <div class="article-tag"><i class="fa-solid fa-tag"></i>SQL<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-20</div>
                        <div class="article-underline"></div>
                        <div class="article-content">
                            <p>CRUD，中文是增刪查改。</p>
                            <p>CRUD 是對後端工程師的最最最基本要求，至少要會做增加資料、刪除資料、查資料、改資料的功能，畢竟絕大多數的功能都和 CRUD 有關。</p>
                            <p>大家熟悉的網購，都會有超重要的購物車，購物車需要的功能就是：新增商品到購物車、修改購物車商品（數量、顏色等等）、刪除購物車商品以及檢視購物車的商品，這就是 CRUD。</p>
                            <p>對資料的操作也是一樣，大部分的動作都脫離不了 CRUD，CRUD 對比到 SQL 語法會像下表：</p>
                        </div>
                    </div>
                </a>
            </section>

        </main>
        <Wall />
    </div>
    <BackToTop />
</template>
<script>
    import Header from "@/components/Header.vue";
    import Wall from "@/components/Wall.vue";
    import BackToTop from "@/components/BackToTop.vue";
    import { onMounted } from "vue";
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