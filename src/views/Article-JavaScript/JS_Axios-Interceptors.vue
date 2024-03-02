<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">Axios 攔截器(Axios Interceptors)</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-10-17</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Axios 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests (From Axios Official Website)</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ol>
                            <li>1、Axios 是由 Promise 的 Http 庫組成的套件。</li>
                            <li>2、當使用在客戶端(Client)時，是採取 XMLHttpRequests 的原生庫來進行封裝。</li>
                            <li>3、當使用在伺服器端(Server)時，則是採取 Http Module 來進行封裝。</li>
                        </ol>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>也就是說：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ol>
                            <li>1、Axios 實體是透過封裝 `XMLHttpRequest` 、 `HttpModule` 來進行實作，這些方式都是一些原生的類別，所以您可以理解成在兼容性不會有其他阿咂的問題。</li>
                            <li>2、Axios 是 Ajax 其中一個方式，在流程不外乎就是 包裝請求 (建立 Request) → 伺服器回傳相應資訊 (回傳 Response)，所以在建立 Request 的過程中需要進行相應的設定來告知 Axios 該怎麼組成請求，並針對請求回傳 Promise，在使用上可以透過 then/catch/finally 來獲取請求完成狀態，相較 XMLHttpRequest 在使用上來的更加精簡，當然因為是 Promise 物件所以可以透過 async/await 進行同步等待。</li>
                            <li>3、相較於 JQuery Ajax 方法，來說瘦的太多太多了，因為 Axios 套件僅僅只有大約 13kb 。</li>
                        </ol>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p><i class="fa-regular fa-note-sticky"></i>Axios CDN：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
&lt;script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js">
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Axios 攔截器 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>根據上面 Axios 的簡介可知，Axios 是一個非常流行的 JavaScript 函式庫，用於進行 HTTP 請求，通常用於與後端 API 進行通信。Axios 提供了一種稱為 "攔截器"(interceptors) 的功能，用於在 HTTP 請求和響應的發送和接收過程中執行特定的操作。攔截器讓你能夠攔截、修改和處理請求和響應，以實現一些通用邏輯，例如添加驗證令牌、處理錯誤或日誌記錄。</p>
                        <p>Axios 攔截器有兩種類型：請求攔截器和響應攔截器：</p>
                        <h4>1、請求攔截器：</h4>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>請求攔截器允許在發送 HTTP 請求之前對請求進行修改或添加特定處理邏輯</li>
                            <li><i class="fa-regular fa-note-sticky"></i>可以使用請求攔截器來設置通用的請求標頭，例如驗證令牌，或將某些數據添加到請求中</li>
                            <li><i class="fa-regular fa-note-sticky"></i>Axios 的請求攔截器通常使用 axios.interceptors.request.use 方法註冊，並傳遞一個函數來處理請求配置對象</li>
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
axios.interceptors.request.use(
    function (config) {
        // 在請求之前執行的操作，例如添加標頭或修改請求數據
        return config;
    },
    function (error) {
        // 請求出錯時執行的操作
        return Promise.reject(error);
    }
);
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4>2、響應攔截器：</h4>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>響應攔截器允許在接收 HTTP 響應後對響應進行修改或添加特定處理邏輯</li>
                            <li><i class="fa-regular fa-note-sticky"></i>可以使用響應攔截器來處理錯誤狀態碼、提取數據或執行其他處理操作</li>
                            <li><i class="fa-regular fa-note-sticky"></i>Axios 的響應攔截器通常使用 axios.interceptors.response.use 方法註冊，並傳遞一個函數來處理響應數據</li>
                        </ul>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
axios.interceptors.response.use(
    function (response) {
        // 在接收響應後執行的操作，例如處理數據或錯誤
        return response;
    },
    function (error) {
        // 響應出錯時執行的操作
        return Promise.reject(error);
    }
);
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>攔截器可以按照註冊的順序連續調用，因此可以設置多個攔截器來執行不同的操作。攔截器允許在整個應用程序中實現一致的行為，同時減少程式碼的冗余。可以使用攔截器來處理身份驗證、錯誤處理、日誌記錄等任務，以確保應用程序的一致性和可維護性。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Axios 攔截器 示範</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>基礎攔截器程式碼：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// 攔截請求
axios.interceptors.request.use(config => {
    console.log(`interceptors request, url: ${config.url}`);
    return config;
}, error => {
    return Promise.reject(error);
});

// 攔截回應
axios.interceptors.response.use(response => {
    console.log(`interceptors response, url: ${response.config.url}`);
    return response;
}, error => {
    return Promise.reject(error);
});
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>假設使用者登入的 API 會回傳 Token ，且除了登入以外的所有 API 都需要附加 Token ，則可以在 response 的攔截器中增加檢查 url 是登入的 API 且呼叫成功時，自動全域設定 Token。順便在 request 的攔截器中檢查所有發出的 header ，確認是否有真的帶入 token</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// 攔截請求
axios.interceptors.request.use(config => {

    // get header
    const headers = config.headers;
    console.log(`interceptors request, url: ${config.url}, headers: ${JSON.stringify(headers)}`);

    return config;
}, error => {
    return Promise.reject(error);
});

// 攔截回應
axios.interceptors.response.use(response => {
    console.log(`interceptors response, url: ${response.config.url}`);

    // 如果是登入 API ，就將 token 放到 header
    if (response.config.url === '/api/user/login') {
        console.log(`interceptors response, url: ${response.config.url}, token: ${response.data.token}`);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    }

    return response;
}, error => {
    return Promise.reject(error);
});


async function callApi() {

    // 測試沒有 token 時攔截器會不會確實沒有 token
    await axios.get('/api/front/user', {})
        .then(
            response => {
                console.log(`response: ${JSON.stringify(response)}`);
            },
            error => {
                console.error(`error: ${JSON.stringify(error)}`);
            }
        )

    // 登入
    await axios.post(`/api/user/login`, {
            username: 'ruyut',
            password: 'ruyut',
            apiKey: '62E64F9CEF214F2635B5D9468C5D2',
        }
    );

    // 測試是否自動帶入登入時取得的 token
    await axios.get('/api/front/user', {})
        .then(
            response => {
                console.log(`response: ${JSON.stringify(response)}`);
            },
            error => {
                console.error(`error: ${JSON.stringify(error)}`);
            }
        )
}

callApi();
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>回應：</p>
                    </div>
                    <div class="article-codeNote" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// 第一個沒有 token 的測試 API
interceptors request, url: /api/front/user, headers: {"Accept":"application/json, text/plain, */*"}
interceptors response, url: /api/front/user
response: no token

// 登入 API
interceptors request, url: /api/user/login, headers: {"Accept":"application/json, text/plain, */*"}
interceptors response, url: /api/user/login
interceptors response, url: /api/user/login, token: aaa.bbb.ccc

// 已經自動帶入登入時取得的 token
interceptors request, url: /api/front/user, headers: {"Accept":"application/json, text/plain, */*","Authorization":"Bearer aaa.bbb.ccc"}
interceptors response, url: /api/front/user
response: [{"id":1,"name":"Ruyut"}]
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Axios 攔截器 練習</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以下重複出現的程式碼請寫一次，例如COMPANY_API_URL、ORGTREE_API_URL、token。</p>
                        <p>若是COMPANY_API_URL，token固定使用window.companyToken，若是ORGTREE_API_URL，token固定使用window.afToekn，不用傳入參數的方式。</p>
                        <p>格式統一，return、傳入參數…。</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
// 取得組織樹
const getOrgTree = async (companyId, token) => {
    const res = await axios({
        url: ORGTREE_API_URL.value + `/dau/org-tree/info`,
        method: 'get',
        params: { companyId },
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
    return res
}

// 獲取用戶所屬公司
const getAllCompany = async (headerafToken) => {
    const res = await axios({
        url: ORGTREE_API_URL.value + `/dau/org-tree/company-info`,
        method: 'get',
        headers: {
            Authorization: `Bearer ${headerafToken}`
        }
    })
    return res
}

// 獲取組織所有人員
const getAllMember = async (id, token) => {
    const res = await axios({
        url: ORGTREE_API_URL.value + `/dau/org-tree/all-member/${id}`,
        method: 'get',
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
    return res
}

// 新增群組聊天室
const createRoom = async (dataForm, token) => {
    const res = await axios({
        url: COMPANY_API_URL.value + `/group`,
        // method: 'post',
        method: 'post',
        data: dataForm,
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
    return res
}

// 編輯群組名稱
const updateRoomName = async (dataForm, token) => {
    const res = await axios({
        url: COMPANY_API_URL.value + `/group/setting`,
        method: 'put',
        data: dataForm,
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
    return res
}

// 更新群組圖片
const updateRoomImage = async (dataForm, token) => {
    const res = await axios({
        url: COMPANY_API_URL.value + `/group/avatar`,
        method: 'put',
        data: dataForm,
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
    return res.data
}

// 訊息設為公告，header只傳token
const setAnnouncement = async (data, header) => {
    const res = await axios.post(
        COMPANY_API_URL.value + `/room/announcement`,
        data,
        {
            headers: header
        }
    )
    return res.data
}

export {
    getOrgTree, 
    getAllCompany, 
    getAllMember, 
    createRoom,
    updateRoomName,
    updateRoomImage,
    setAnnouncement
}
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>練習結果(如有錯誤歡迎指教)：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
import axios from 'axios';

const companyReq = axios.create({
	baseURL: COMPANY_API_URL,
});

companyReq.interceptors.request.use((res) => {
    res.headers.Authorization = `Bearer ${window.companyToken}`;
	return res;
});

const orgtreeReq = axios.create({
	baseURL: ORGTREE_API_URL,
});

orgtreeReq.interceptors.request.use((res) => {
    res.headers.Authorization = `Bearer ${window.afToekn}`;
	return res;
});

export const getOrgTree = (companyId) => orgtreeReq.get(`/dau/org-tree/company-info`[companyId]);
export const getAllCompany = (headerafToken) => orgtreeReq.get(`/dau/org-tree/company-info`[`Bearer ${headerafToken}`]);
export const getAllMember = (id) => orgtreeReq.get(`/dau/org-tree/all-member/${id}`);
export const createRoom = (dataForm) => companyReq.post(`/group`[dataForm]);
export const updateRoomName = (dataForm) => companyReq.put(`/group/setting`[dataForm]);
export const updateRoomImage = (dataForm) => companyReq.post(`/group/avatar`[dataForm]);
export const setAnnouncement = (data) => companyReq.post(`/room/announcement`[data[`Bearer ${window.companyToken}`]]);
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a class="article-reference" href="https://medium.com/@kikocoeric/%E7%A9%A9%E6%89%8E%E7%A9%A9%E6%89%93%E7%B3%BB%E5%88%97-ajax-%E8%AB%8B%E6%B1%82%E5%A4%A7%E8%A3%9C%E5%B8%96-axios-%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95-%E5%B0%81%E8%A3%9D-23e5687249b0" target="_blank"><i class="fa-solid fa-pen-to-square"></i>[穩扎穩打系列] AJAX 請求大補帖 — Axios 使用方法、封裝(Written by Murray)</a>
                        <a class="article-reference" href="https://www.ruyut.com/2023/03/axios-interceptors.html" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Ruyut 鹿遊 - Axios 攔截器示範</a>
                        <a class="article-reference" href="https://axios-http.com/docs/instance" target="_blank"><i class="fa-solid fa-pen-to-square"></i>The Axios Instance</a>
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