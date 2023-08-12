<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 WebSocket？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-12</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Web Socket 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>WebSocket 是一種在網際網路上實現全雙工通訊的通訊協定。傳統的 HTTP 協議是一種單向的請求-響應協議，也就是說當客戶端需要更新資料時，必須發送請求到伺服器，然後伺服器再回傳響應。這樣的模式在某些應用場景中效率不高，特別是當需要實時通訊、即時更新資料或交互式應用時。</p>
                        <p>WebSocket 的主要特點是它建立了一個持久的連接，允許伺服器和客戶端在不同時間點之間互相推送資料，而無需每次都發送請求和響應。這使得 WebSocket 適合於實時的應用，如聊天應用、即時遊戲、股票報價、遠程控制等。WebSocket 協議的設計使得伺服器和客戶端可以進行低延遲的雙向通訊，並且節省了許多額外的網絡資源。</p>
                        <p>使用 WebSocket 的流程大致如下：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ol>
                            <li>1、客戶端向伺服器發起 WebSocket 請求</li>
                            <li>2、伺服器回應握手並確立連接</li>
                            <li>3、一旦連接建立，伺服器和客戶端可以彼此推送資料，而無需額外的請求和響應</li>
                            <li>4、通訊完成後，可以關閉 WebSocket 連接</li>
                        </ol>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>WebSocket 在現代網頁開發中被廣泛使用，通常通過 JavaScript 在瀏覽器端實現。許多流行的網頁框架和庫都提供了對 WebSocket 的支持，使開發者能夠輕鬆地創建實時互動的應用程式。</p>
                        <p>WebSocket 的適用範例：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-pen-to-square"></i>即時通訊：WebSocket 非常適合實現即時通訊應用，如聊天、訊息傳遞和社交媒體平台。它允許用戶在不刷新頁面的情況下即時接收和發送訊息，創建更流暢的用戶體驗</li>
                            <li><i class="fa-solid fa-pen-to-square"></i>實時數據更新：當需要實時更新資料，例如股票報價、天氣預報、即時運輸資訊等，WebSocket 能夠持續地接收並更新資訊，而不需要用戶手動刷新</li>
                            <li><i class="fa-solid fa-pen-to-square"></i>遊戲：在多人在線遊戲或多人遊戲中，WebSocket 可以實現玩家之間的實時互動。遊戲狀態、動作和其他玩家的動態可以即時傳輸</li>
                            <li><i class="fa-solid fa-pen-to-square"></i>實時協作：在協作應用（如文檔編輯、線上白板等）中，WebSocket 可以實現多個用戶之間的即時協作，使其能夠在同一時間點共同編輯和查看內容</li>
                            <li><i class="fa-solid fa-pen-to-square"></i>通知和提醒：如果想向用戶傳送即時通知、提醒或更新，WebSocket 是一個有效的方法。例如，在社交媒體應用中，可以使用 WebSocket 向用戶發送新訊息、喜歡或評論的通知</li>
                            <li><i class="fa-solid fa-pen-to-square"></i>遠程控制和監控：WebSocket 可以用於遠程控制和監控應用，如遠程操控設備、實時監控傳感器數據等。這使得用戶可以遠程操作和監視設備，而無需間斷性地發送請求</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>JavaScript Web Socket 範例</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>WebSocket 聊天應用的 JavaScript 範例：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
    &lt;title>WebSocket 聊天&lt;/title>
&lt;/head>
&lt;body>
    &lt;div id="chatLog">&lt;/div>
    &lt;input type="text" id="messageInput" placeholder="輸入訊息">
    &lt;button onclick="sendMessage()">送出&lt;/button>

    &lt;script>
        const chatLog = document.getElementById("chatLog");
        const messageInput = document.getElementById("messageInput");
        const ws = new WebSocket("ws://localhost:8765"); // 你的 WebSocket 伺服器地址

        ws.onopen = function(event) {
            chatLog.innerHTML += "&lt;p>連接已建立。&lt;/p>";
        };

        ws.onmessage = function(event) {
            const message = event.data;
            chatLog.innerHTML += "&lt;p>收到訊息: " + message + "&lt;/p>";
        };

        ws.onclose = function(event) {
            chatLog.innerHTML += "&lt;p>連接已關閉。&lt;/p>";
        };

        function sendMessage() {
            const message = messageInput.value;
            ws.send(message);
            chatLog.innerHTML += "&lt;p>已發送訊息: " + message + "&lt;/p>";
            messageInput.value = "";
        }
    &lt;/script>
&lt;/body>
&lt;/html>
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>此範例創建了一個簡單的聊天應用，允許用戶在網頁上輸入訊息並通過 WebSocket 連接進行即時聊天。當用戶輸入訊息並按下 "送出" 按鈕時，訊息將被發送到伺服器，然後伺服器將其傳送回所有連接的客戶端。</p>
                        <p>※ 需將 ws://localhost:8765 替換為實際的 WebSocket 伺服器地址，也就是說需要在伺服器上，需要創建一個 WebSocket 伺服器，並確保可以處理來自網頁的 WebSocket 連接。這可以使用不同的後端程式語言和框架來實現。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>JavaScript Python WebSocket 範例</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>使用 JavaScript 和 Python 的 websockets 庫，展示如何建立 WebSocket 連接並進行雙向通訊的一個簡單聊天應用。</p>
                        <p>伺服器端程式碼 (Python)：</p>
                        <p>需先安裝 websockets 庫</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
pip install websockets
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>創建名為 websocket_server.py 的檔案</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import asyncio
import websockets

# 儲存所有連接的客戶端
connected_clients = set()

async def handle_client(websocket, path):
    # 添加連接的客戶端到集合中
    connected_clients.add(websocket)
    try:
        async for message in websocket:
            # 將收到的訊息發送給所有客戶端
            for client in connected_clients:
                await client.send(message)
    finally:
        # 移除斷開的客戶端
        connected_clients.remove(websocket)

start_server = websockets.serve(handle_client, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>客戶端程式碼 (JavaScript)：</p>
                        <p>創建名為 websocket_client.html 的檔案</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
    &lt;title>WebSocket 聊天&lt;/title>
&lt;/head>
&lt;body>
    &lt;input type="text" id="messageInput" placeholder="輸入訊息">
    &lt;button onclick="sendMessage()">送出&lt;/button>
    &lt;div id="chatLog">&lt;/div>

    &lt;script>
        const socket = new WebSocket("ws://localhost:8765");

        socket.onmessage = function(event) {
            const chatLog = document.getElementById("chatLog");
            const message = document.createElement("p");
            message.textContent = event.data;
            chatLog.appendChild(message);
        };

        function sendMessage() {
            const messageInput = document.getElementById("messageInput");
            const message = messageInput.value;
            socket.send(message);
            messageInput.value = "";
        }
    &lt;/script>
&lt;/body>
&lt;/html>
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>此範例創建了一個簡單的聊天應用，允許多個客戶端通過 WebSocket 連接到伺服器，並在彼此之間進行即時通訊。客戶端使用 JavaScript 來建立 WebSocket 連接並處理訊息的傳送和接收，而伺服器端使用 Python 的 websockets 庫來處理連接和通訊。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>總結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>WebSocket 適用於需要實現雙向、即時和持久通訊的應用場景。WebSocket 能夠提供更好的效能、低延遲以及更流暢的用戶體驗，特別是在需要實時互動和資料更新的情況下。</p>
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