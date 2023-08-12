<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 CORS？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-07</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>CORS 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>CORS(跨來源資源共用)是一種瀏覽器安全性機制，用於控制網頁應用程式在不同來源之間進行資源共用的方式。在網頁開發中，當一個網頁應用程式(域A)嘗試從另一個來源的網頁(域B)請求資源(例如 API 請求或嵌入的內容)，瀏覽器會實施 CORS 政策來確保安全性，以防止惡意攻擊和跨站點請求偽造(CSRF)等風險。</p>
                        <p>CORS 政策主要依賴於 HTTP 標頭來實施。以下是一些常見的 CORS 標頭：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-pen-to-square"></i>Origin：發出請求的來源(域A)</li>
                            <li><i class="fa-solid fa-pen-to-square"></i>Access-Control-Allow-Origin：指定允許接受請求的目標來源(域B)。這可設置為單一來源、多個來源，或使用通配符 * 表示允許所有來源</li>
                            <li><i class="fa-solid fa-pen-to-square"></i>Access-Control-Allow-Methods：指定允許的HTTP請求方法(例如GET、POST、PUT等)</li>
                            <li><i class="fa-solid fa-pen-to-square"></i>Access-Control-Allow-Headers：指定允許的HTTP標頭</li>
                            <li><i class="fa-solid fa-pen-to-square"></i>Access-Control-Expose-Headers：指定可從瀏覽器中擷取的標頭</li>
                            <li><i class="fa-solid fa-pen-to-square"></i>Access-Control-Allow-Credentials：指定是否允許傳送認證憑證(例如Cookie)</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>說明如何在後端伺服器上設置 CORS 以允許特定來源請求的簡單範例：</p>
                        <p>假設有一個前端網頁應用程式位於 http://frontend.example，並嘗試從後端 API http://backend.example/api/data 請求資料。以下是後端使用 Node.js 和 Express 框架的範例代碼：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
const express = require("express");
const app = express();

// 設置CORS標頭
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://frontend.example");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  next();
});

// 處理API請求
app.get("/api/data", (req, res) => {
  const data = { message: "這是從後端傳來的資料。" };
  res.json(data);
});

app.listen(3000, () => {
  console.log("伺服器運行在 http://localhost:3000");
});
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在這個範例中，後端伺服器設置了相關的 CORS 標頭，以允許來自 http://frontend.example 的請求。前端應用程式現在可以通過 AJAX 或 Fetch API 進行跨來源請求，並成功接收後端返回的資料。</p>
                        <p>※ 以上只是一個簡單的 CORS 範例。CORS 還涉及到其他方面，例如預檢請求(Preflight Requests)以及跨來源資源共用的安全考慮。要確保網頁應用程式在實際中安全可靠地使用 CORS，需要深入了解相關的安全性考慮並遵循最佳實踐。</p>
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