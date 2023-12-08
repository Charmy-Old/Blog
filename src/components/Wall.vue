<style scoped>
.wall {
    font-weight: 700;
    width: 20%;
    max-width: 240px;
    height: 100%;
    padding: 0.25rem;
    order: 1;
    cursor: default;
}

.resumeTitle {
    width: 100%;
    max-width: 600px;
    margin: 0rem auto;
}

.resumeProfile {
    display: flex;
    border-radius: 15px;
    overflow: hidden;
}

.resumeProfile img {
    width: 100%;
    transform: scale(1.1);
    transition: all .3s linear;
}

.resumeProfile img:hover {
    overflow: hidden;
    transform: scale(1.2);
}

.resumeName {
    text-align: center;
    align-self: center;
}

.resumeName h2 {
    font-size: 24px;
    font-weight: 900;
    line-height: 1.5;
    margin: 1.5rem 0 1rem;
}

.resumeIntroduce {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
}

.resumeIntroduce p {
    line-height: 1.5;
    margin: 0.5rem 0;
}

.wall-tag {
    font-size: 15px;
    font-weight: 900;
    width: fit-content;
    text-align: center;
    margin: 1.5rem auto;
    transition: all 0.3s linear;
}

.wall-tag:first-child {
    margin-top: 1rem;
}

.wall-tag:last-child {
    margin-bottom: 1rem;
}

.wall-tag a:hover {
    color: #C0C0C0 !important;
}

.wall-tag a i {
    margin: 0 0.75rem;
}

.wall-tag i {
    margin: 0 0.75rem;
}

.wall-weather h2 {
    font-size: 18px;
    font-weight: 900;
    text-align: center;
    margin: 0.5rem 0;
    padding: 0 0.25rem;
}

.select-area {
    font-weight: 900;
    width: 100%;
    color: #222223;
    background-color: #FFFAFA;
    text-align: center;
    margin: 0.5rem 0 0.75rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all .3s linear;
}

.showWeather {
    line-height: 2;
    text-align: center;
    padding: 0 0.25rem;
}

@media (max-width: 991px) {
    .wall {
        width: 100%;
        max-width: 100%;
        padding: 1rem;
    }

    .resume {
        display: flex;
    }

    .resumeTitle {
        width: 45%;
        display: flex;
    }

    .resumeIntroduce {
        width: 50%;
        height: fit-content;
        align-self: center;
    }

    .resumeProfile {
        width: 70%;
        line-height: 0;
        text-align: center;
        align-self: center;
    }

    .resumeProfile img {
        text-align: center;
        transform: scale(1);
        transition: all .3s linear;
    }

    .wall-typeSetting {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .wall-article,
    .wall-project {
        /* width: 49%; */
        width: 100%;
    }
}

@media (max-width: 575px) {
    .resume {
        display: block;
    }

    .resumeTitle {
        width: 100%;
        display: flex;
    }

    .resumeProfile {
        width: 40%;
    }

    .resumeName {
        width: 60%;
        margin: auto;
    }

    .resumeIntroduce {
        width: 100%;
    }

    .wall-weather-search {
        grid-template-columns: repeat(1, 1fr);
    }
}

@media (max-width: 500px) {
    .wall-typeSetting {
        display: block;
    }

    .wall-article,
    .wall-project {
        width: 100%;
    }
}

.wall-wtRecord {
    border: none;
    margin: auto;
    padding: 0;
    transition: all 0.3s linear;
}

.wall-wtRecord:hover {
    background-color: #222223;
    box-shadow: 0 0 15px #FFFAFA;
}

.wall-wtRecord a {
    width: 100%;
    display: block;
    text-align: center;
    padding: 1rem 1.5rem;
    transition: all 0.3s linear;
}

.wall-wtRecord a:hover {
    color: #FFFAFA;
}

@media (max-width: 991px) {
    .wall-wtRecord {
        width: fit-content;
    }
}

.wall-recommendedFood p {
    font-size: 18px;
    font-weight: 900;
    color: #222223;
    text-align: center;
}

.wall-recommendedFood button {
    font-size: 18px;
    font-weight: 900;
    color: #222223;
    border: 3px #222223 solid;
    border-radius: 10px;
    display: block;
    margin: 1.5rem auto 0.5rem;
    padding: 0.25rem 1.25rem;
    transition: all 0.3s linear;
}

.wall-recommendedFood button:hover {
    color: #FFFAFA;
    background-color: #222223;
    box-shadow: 0 0 15px #222223;
}
</style>

<template>
    <div class="d-none">
        <ArticleList />
    </div>
    <div class="wall">
        <div class="resume">
            <section class="resumeTitle">
                <div class="resumeProfile">
                    <a href="About">
                        <img src="../assets/images/charmy.jpg" alt="大頭貼">
                    </a>
                </div>
                <div class="resumeName">
                    <h2>曾韋翰 Charmy</h2>
                </div>
            </section>
            <section class="resumeIntroduce">
                <p>中原大學土木系畢業</p>
                <p>緯育 TiBaMe 前端工程師就業養成班結業</p>
                <p>前端、表演、穿搭、美食</p>
            </section>
        </div>
        <section class="wall-article">
            <div class="wall-tag"><a href="Article"><i class="fa-solid fa-tag"></i>All Tags ({{ allArticleCount }})</a>
            </div>
            <div class="wall-tag"><a href="Article-Git">Git ({{ gitArticleCount }})</a></div>
            <div class="wall-tag"><a href="Article-Web">Web ({{ webArticleCount }})</a></div>
            <div class="wall-tag"><a href="Article-HTML">HTML ({{ htmlArticleCount }})</a></div>
            <div class="wall-tag"><a href="Article-CSS">CSS ({{ cssArticleCount }})</a></div>
            <div class="wall-tag"><a href="Article-JavaScript">JavaScript ({{ jsArticleCount }})</a></div>
            <div class="wall-tag"><a href="Article-Vue">Vue ({{ vueArticleCount }})</a></div>
            <div class="wall-tag"><a href="Article-Database">Database ({{ databaseArticleCount }})</a></div>
            <div class="wall-tag"><a href="Article-Python">Python ({{ pythonArticleCount }})</a></div>
            <div class="wall-tag"><a href="Article-Software">Software ({{ softwareArticleCount }})</a></div>
            <div class="wall-tag"><a href="Article-Chat">雜談 ({{ chatArticleCount }})</a></div>
            <div class="wall-tag"><a href="Article-Food">美食札記 ({{ foodArticleCount }})</a></div>
        </section>
        <div class="wall-typeSetting">
            <section class="wall-project">
                <div class="wall-tag"><a href="Side-Project"><i class="fa-solid fa-tag"></i>最新作品</a></div>
                <div class="wall-tag"><a href="https://pangolin-clothing.onrender.com/">Pangolin Clothing</a></div>
                <div class="wall-tag"><a
                        href="https://charmying.github.io/Engineering-Calculator/">Engineering-Calculator</a></div>
                <div class="wall-tag"><a href="https://charmying.github.io/Todo-List/">Todo-List</a></div>
                <div class="wall-tag"><a href="https://tibamef2e.com/cgd103/g1/">緯育團體專題</a></div>
                <div class="wall-tag"><a href="https://charmying.github.io/Pangolin-Phonecase/">緯育個人專題</a></div>
            </section>
            <section class="wall-project">
                <div class="wall-tag"><i class="fa-solid fa-tag"></i>CodePen</div>
                <div class="wall-tag"><a href="https://codepen.io/Charmy_ing/pen/qBgEyMQ" target="_blank">會員登入 顯示密碼</a>
                </div>
                <div class="wall-tag"><a href="https://codepen.io/Charmy_ing/pen/WNYyeOv" target="_blank">JS for迴圈九九乘法</a>
                </div>
                <div class="wall-tag"><a href="https://codepen.io/Charmy_ing/pen/mdQMbZQ" target="_blank">限制內容字寬行數</a></div>
                <div class="wall-tag"><a href="https://codepen.io/Charmy_ing/pen/yLQBLMw" target="_blank">Engineering
                        Calculator</a></div>
                <div class="wall-tag"><a href="https://codepen.io/Charmy_ing/pen/RwBeNRz" target="_blank">Todo List
                        LocalStorage</a></div>
            </section>
        </div>
        <section class="wall-weather">
            <div v-cloak>
                <h2>天氣查詢</h2>
                <select class="select-area" v-model="locationName">
                    <option value="" selected disabled>選擇區域</option>
                    <option v-for="weatherData of weatherDatas" :key="weatherData.locationName"
                        :value="weatherData.locationName">
                        {{ weatherData.locationName }}
                    </option>
                </select>
                <div class="showWeather" v-for="weatherData of weatherDatas" :key="weatherData.locationName"
                    v-show="locationName === weatherData.locationName">
                    <!-- <p>{{ locationName }}</p> -->
                    <p>天氣狀況：{{ weatherData.weatherElement[0].time[0].parameter.parameterName }}</p>
                    <p>最高溫度：{{ weatherData.weatherElement[4].time[0].parameter.parameterName }} ℃</p>
                    <p>最低溫度：{{ weatherData.weatherElement[2].time[0].parameter.parameterName }} ℃</p>
                    <p>降雨機率：{{ weatherData.weatherElement[1].time[0].parameter.parameterName }} ％</p>
                </div>
            </div>
        </section>
        <section class="wall-wtRecord">
            <a href="Weight-Record">
                體重追蹤紀錄
            </a>
        </section>
        <section class="wall-recommendedFood">
            <div>
                <p>建議吃什麼：{{ recommendedFood }}</p>
                <button v-if="recommendedFood === ''" @click="recommend">推薦</button>
                <button v-else @click="recommend">再推薦</button>
            </div>
        </section>
    </div>
</template>

<script setup>
import sharedData from "@/assets/js/sharedData";
import ArticleList from "@/components/ArticleList.vue";
import { ref, onMounted, computed } from "vue";

// 算全部文章
const allArticleCount = ref(0);
onMounted(() => {
    CountallArticle();
});

const CountallArticle = () => {
    const Countall = document.querySelectorAll(".ALL");
    allArticleCount.value = Countall.length;
    // 更新全局變數
    sharedData.allArticleCount = allArticleCount.value;
};

// 算 git 文章
const gitArticleCount = ref(0);
onMounted(() => {
    CountgitArticle();
});

const CountgitArticle = () => {
    const Countgit = document.querySelectorAll(".GIT");
    gitArticleCount.value = Countgit.length;
    sharedData.gitArticleCount = gitArticleCount.value;
};

// 算 web 文章
const webArticleCount = ref(0);
onMounted(() => {
    CountwebArticle();
});

const CountwebArticle = () => {
    const Countweb = document.querySelectorAll(".WEB");
    webArticleCount.value = Countweb.length;
    sharedData.webArticleCount = webArticleCount.value;
};

// 算 html 文章
const htmlArticleCount = ref(0);
onMounted(() => {
    CounthtmlArticle();
});

const CounthtmlArticle = () => {
    const Counthtml = document.querySelectorAll(".HTML");
    htmlArticleCount.value = Counthtml.length;
    sharedData.htmlArticleCount = htmlArticleCount.value;
};

// 算 css 文章
const cssArticleCount = ref(0);
onMounted(() => {
    CountcssArticle();
});

const CountcssArticle = () => {
    const Countcss = document.querySelectorAll(".CSS");
    cssArticleCount.value = Countcss.length;
    sharedData.cssArticleCount = cssArticleCount.value;
};

// 算 js 文章
const jsArticleCount = ref(0);
onMounted(() => {
    CountjsArticle();
});

const CountjsArticle = () => {
    const Countjs = document.querySelectorAll(".JS");
    jsArticleCount.value = Countjs.length;
    sharedData.jsArticleCount = jsArticleCount.value;
};

// 算 vue 文章
const vueArticleCount = ref(0);
onMounted(() => {
    CountvueArticle();
});

const CountvueArticle = () => {
    const Countvue = document.querySelectorAll(".VUE");
    vueArticleCount.value = Countvue.length;
    sharedData.vueArticleCount = vueArticleCount.value;
};

// 算 database 文章
const databaseArticleCount = ref(0);
onMounted(() => {
    CountdatabaseArticle();
});

const CountdatabaseArticle = () => {
    const Countdatabase = document.querySelectorAll(".DB");
    databaseArticleCount.value = Countdatabase.length;
    sharedData.databaseArticleCount = databaseArticleCount.value;
};

// 算 python 文章
const pythonArticleCount = ref(0);
onMounted(() => {
    CountpythonArticle();
});

const CountpythonArticle = () => {
    const Countpython = document.querySelectorAll(".PYTHON");
    pythonArticleCount.value = Countpython.length;
    sharedData.pythonArticleCount = pythonArticleCount.value;
};

// 算 software 文章
const softwareArticleCount = ref(0);
onMounted(() => {
    CountsoftwareArticle();
});

const CountsoftwareArticle = () => {
    const Countsoftware = document.querySelectorAll(".SOFTWARE");
    softwareArticleCount.value = Countsoftware.length;
    sharedData.softwareArticleCount = softwareArticleCount.value;
};

// 算 雜談 文章
const chatArticleCount = ref(0);
onMounted(() => {
    CountchatArticle();
});

const CountchatArticle = () => {
    const Countchat = document.querySelectorAll(".CHAT");
    chatArticleCount.value = Countchat.length;
    sharedData.chatArticleCount = chatArticleCount.value;
};

// 算 美食札記 文章
const foodArticleCount = ref(0);
onMounted(() => {
    CountfoodArticle();
});

const CountfoodArticle = () => {
    const Countfood = document.querySelectorAll(".FOOD");
    foodArticleCount.value = Countfood.length;
    sharedData.foodArticleCount = foodArticleCount.value;
};

// 天氣 api
const weatherDatas = ref([]);
const locationName = ref("");
const getWeather = () => {
    fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AB74CE7B-2CF2-4D40-A61C-6F5D05C0DEB6&format=JSON&sort=time")
        .then((res) => res.json())
        .then((json) => {
            weatherDatas.value = json.records.location;
        })
        .catch((error) => {
            alert("系統異常，請稍後再試");
        });
};
onMounted(() => {
    getWeather();
});

// 推薦食物
const foodList = ref(["自己煮", "便當", "健康餐", "壽司", "拉麵", "牛肉麵", "烏龍麵", "烤雞", "炸雞", "水餃", "煎餃", "蒸餃", "蛋包飯", "烤肉飯", "炒飯", "燉飯", "Pizza", "義大利麵", "烤肉"]);
const recommendedFood = ref('');
const recommend = () => {
    const randomIndex = Math.floor(Math.random() * foodList.value.length);
    recommendedFood.value = foodList.value[randomIndex];
};
</script>