<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 TCP/IP？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-09</p>
                </div>
            </section>

            <!-- TCP/IP -->
            <section>
                <div class="article-detail">
                    <h3>TCP/IP（Transmission Control Protocol/Internet Protocol）</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>TCP/IP（Transmission Control Protocol/Internet Protocol）是一組用於互聯網通信的通信協議。它是互聯網的核心協議套件，也是許多網絡通信的基礎。</p>
                        <p>TCP/IP協議套件由兩個主要協議組成：傳輸控制協議（TCP）和網際網路協議（IP）。這兩個協議一起工作，以確保數據的可靠傳輸。</p>
                        <p>TCP是一種面向連接的協議，它負責將數據分成小的數據包（稱為數據段）並在網絡上的主機之間建立可靠的連接。它確保數據的順序和完整性，並處理數據包的重發和錯誤檢測。</p>
                        <p>IP則是一種網絡層協議，它負責將數據包（數據段）從源主機發送到目標主機。它使用IP地址來識別主機和路由器，並確定最佳的路徑將數據包從源傳送到目標。</p>
                        <p>TCP/IP協議套件還包括其他協議，如網際網路控制消息協議（ICMP），用於處理錯誤報告和診斷問題；網際網路組管理協議（IGMP），用於在多播網絡中管理組成員；網際網路協議版本4（IPv4）和網際網路協議版本6（IPv6），用於定義IP地址和網絡配置等。</p>
                        <p>總而言之，TCP/IP協議套件提供了一個通用的標準，使不同類型的計算機和網絡能夠互相通信和交換數據。它在互聯網的建立和運行中起著關鍵作用，使得全球範圍內的連接成為可能。</p>
                    </div>
                </div>
            </section>

            <!-- IP -->
            <section>
                <div class="article-detail">
                    <h3>IP（Internet Protocol）</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>IP 簡介</h4>
                        <p>IP（Internet Protocol）是互聯網協議中的一個主要協議，屬於TCP/IP協議套件的一部分。它是一種網絡層協議，用於在互聯網上進行數據包的路由和交付。</p>
                        <p>IP協議的主要功能是定義數據包在網絡中的格式和路由方式。它使用IP地址來識別和定位網絡上的設備，例如計算機、路由器和其他網絡設備。每個連接到互聯網的設備都有一個唯一的IP地址，類似於住宅的郵遞地址，用於準確地將數據包發送到目標設備。</p>
                        <p>IP協議定義了數據包的結構，包括源IP地址和目標IP地址等字段。當一個數據包從源設備發送時，它會被切分成小的數據包（稱為IP數據報），並通過網絡中的路由器進行傳送。每個路由器根據目標IP地址來決定下一個最佳的路由，以便將數據包傳送到下一個目的地。最終，數據包到達目標設備，並被重新組裝成完整的數據。</p>
                        <p>IP協議目前有兩個主要版本：IPv4和IPv6。IPv4使用32位二進制數字（例如192.168.0.1）作為IP地址，而IPv6使用128位的數字和字母組合（例如2001:0db8:85a3:0000:0000:8a2e:0370:7334）作為IP地址。由於IPv4地址空間有限，IPv6被引入以擴展地址空間，以應對不斷增長的互聯網設備數量。</p>
                        <p>總而言之，IP是互聯網協議中負責數據包路由和交付的重要協議。它確保了互聯網上數據的正確傳輸，並使得不同網絡設備能夠進行通信和互相連接。</p>
                    </div>
                </div>
            </section>
            
            <!-- TCP -->
            <section>
                <div class="article-detail">
                    <h3>TLS(Transport Layer Security)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>TCP 簡介</h4>
                        <p>TCP（Transmission Control Protocol）是互聯網協議中的一個核心協議，屬於TCP/IP協議套件的一部分。它是一種面向連接的傳輸層協議，用於在網絡上確保可靠的數據傳輸。</p>
                        <p>TCP協議的主要功能是提供端到端的可靠性，確保數據的順序、完整性和可靠性。當兩個設備（例如計算機）之間需要進行數據傳輸時，它們首先建立一個TCP連接，創建一個虛擬的通信管道。</p>
                        <p>在TCP連接中，數據被分成小的數據段（稱為TCP段），並通過網絡進行傳輸。TCP通過使用序列號、確認應答、計時器、檢測機制等技術來確保數據的可靠性。它能夠檢測並重新傳送丟失或損壞的數據段，以及處理數據的重複接收和順序混亂等問題。</p>
                        <p>除了可靠性，TCP還提供了流量控制和擁塞控制機制，以調節數據的傳輸速率，確保網絡的效率和公平性。流量控制防止接收方被淹沒，而擁塞控制監測網絡狀態，避免過多的數據流量導致網絡擁塞。</p>
                        <p>在TCP連接的結束時，它使用揮手協議（handshake）進行優雅的連接終止，確保所有的數據都被傳輸完整。</p>
                        <p>總的來說，TCP是一個可靠的、面向連接的傳輸層協議，用於確保數據在網絡上的可靠傳輸。它在互聯網通信中起著重要的作用，使得不同設備能夠建立可靠的通信連接，進行可靠的數據傳輸。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>TCP和IP的差別</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>TCP/IP是一個通信協議套件，包括傳輸控制協議（TCP）和網際網路協議（IP），兩者密切相關並一起使用。以下是TCP和IP之間的主要差異：</p>
                        <h4><i class="fa-solid fa-pencil"></i>功能層級：</h4>
                        <p>TCP：TCP位於協議套件的傳輸層，負責提供可靠的數據傳輸。它確保數據的順序、完整性和可靠性，並提供流量控制和擁塞控制機制。</p>
                        <p>IP：IP位於協議套件的網絡層，負責將數據包從源主機發送到目標主機。它使用IP地址來識別和定位設備，並確定最佳路徑將數據包傳送到目標。</p>
                        <h4><i class="fa-solid fa-pencil"></i>定位：</h4>
                        <p>TCP：TCP是一個面向連接的協議，它在通信的兩端建立和管理連接。它使用端口號來識別不同應用程序或服務。</p>
                        <p>IP：IP是一個無連接的協議，它主要負責數據包的路由和交付。它使用IP地址來識別和定位設備。</p>
                        <h4><i class="fa-solid fa-pencil"></i>數據單位：</h4>
                        <p>TCP：TCP將數據劃分為小的數據段（TCP段），每個段都有序號。它提供可靠性，確保數據的完整性和順序，並處理丟失或損壞的數據。</p>
                        <p>IP：IP將數據劃分為小的數據包（IP數據報），每個包都包含源和目標IP地址以及其他相關信息。它主要負責將數據包從源傳送到目標。</p>
                        <h4><i class="fa-solid fa-pencil"></i>協議版本：</h4>
                        <p>TCP：TCP本身沒有版本的概念。它是一個通用的傳輸層協議，可以與不同版本的IP（如IPv4或IPv6）一起使用。</p>
                        <p>IP：IP有不同的版本，目前主要有IPv4和IPv6。IPv4使用32位二進制數字來表示IP地址，而IPv6使用128位的數字和字母組合來表示IP地址。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>總結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>TCP是一個位於傳輸層的協議，提供可靠的數據傳輸，而IP是一個位於網絡層的協議，負責路由和交付數據包。它們在TCP/IP協議套件中相互協作，共同確保了數據的可靠傳輸和網絡連接的建立。</p>
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