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

.resumeProfile a img {
    width: 100%;
    transform: scale(1.1);
    transition: all .3s linear;
}

.resumeProfile a img:hover {
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
}

.wall-tag {
    font-weight: 900;
    width: fit-content;
    margin: 1.5rem auto;
    transition: all 0.5s linear;
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

    .resumeProfile a img {
        text-align: center;
        transform: scale(1);
        transition: all .3s linear;
    }

    .wall-article-project {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .wall-article, .wall-project {
        width: 49%;
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
    
}

@media (max-width: 500px) {
    .wall-article-project {
        display: block;
    }

    .wall-article, .wall-project {
        width: 100%;
    }
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


</style>
<template>

    <div class="d-none">
        <ArticleList />
    </div>

    <div class="wall">
        <div class="resume">
            <section class="resumeTitle">
                <div class="resumeProfile">
                    <a href="Resume">
                        <img src="../assets/images/charmy.jpg" alt="大頭貼">
                    </a>
                </div>
                <div class="resumeName">
                    <h2>曾韋翰 Charmy</h2>
                </div>
            </section>
            <section class="resumeIntroduce">
                <p>中原大學土木工程學系畢業，緯育TiBaMe的前端工程師就業養成班並完成個人專題與團體專題後成功結業。現職雲端數位有限公司前端工程師助理。</p>
            </section>
        </div>

        <section class="wall-weather">
            <div v-cloak>
                <h2>天氣查詢</h2>
                <select class="select-area" v-model="locationName">
                    <option value="" selected disabled>選擇區域</option>
                    <option v-for="weatherData of weatherDatas" :key="weatherData.locationName" :value="weatherData.locationName">
                        {{ weatherData.locationName }}
                    </option>
                </select>
                <div class="showWeather" v-for="weatherData of weatherDatas" :key="weatherData.locationName" v-show="locationName === weatherData.locationName">
                    <!-- <p>{{ locationName }}</p> -->
                    <p>天氣狀況：{{ weatherData.weatherElement[0].time[0].parameter.parameterName }}</p>
                    <p>最高溫度：{{ weatherData.weatherElement[4].time[0].parameter.parameterName }} ℃</p>
                    <p>最低溫度：{{ weatherData.weatherElement[2].time[0].parameter.parameterName }} ℃</p>
                    <p>降雨機率：{{ weatherData.weatherElement[1].time[0].parameter.parameterName }} ％</p>
                </div>
            </div>
        </section>

        <div class="wall-article-project">
            <section class="wall-article">
                <div class="wall-tag"><a href="Article"><i class="fa-solid fa-tag"></i>All Tags ({{ allArticleCount }})</a></div>
                <div class="wall-tag"><a href="Article-Web">Web ({{ webArticleCount }})</a></div>
                <div class="wall-tag"><a href="Article-HTML">HTML ({{ htmlArticleCount }})</a></div>
                <div class="wall-tag"><a href="Article-CSS">CSS ({{ cssArticleCount }})</a></div>
                <div class="wall-tag"><a href="Article-JavaScript">JavaScript ({{ jsArticleCount }})</a></div>
                <div class="wall-tag"><a href="Article-Vue">Vue ({{ vueArticleCount }})</a></div>
                <div class="wall-tag"><a href="Article-Database">Database ({{ databaseArticleCount }})</a></div>
                <div class="wall-tag"><a href="Article-Python">Python ({{ pythonArticleCount }})</a></div>
            </section>

            <section class="wall-project">
                <div class="wall-tag"><a href="Side-Project"><i class="fa-solid fa-tag"></i>最新作品</a></div>
                <div class="wall-tag"><a href="https://pangolin-clothing.onrender.com/">Pangolin Clothing</a></div>
                <div class="wall-tag"><a href="https://charmying.github.io/Engineering-Calculator/">Engineering-Calculator</a></div>
                <div class="wall-tag"><a href="https://charmying.github.io/Todo-List/">Todo-List</a></div>
                <div class="wall-tag"><a href="https://tibamef2e.com/cgd103/g1/">緯育團體專題</a></div>
                <div class="wall-tag"><a href="https://charmying.github.io/Pangolin-Phonecase/">緯育個人專題</a></div>
            </section>
        </div>
        
        <section class="wall-project">
            <div class="wall-tag"><i class="fa-solid fa-tag"></i>CodePen</div>
            <div class="wall-tag"><a href="https://codepen.io/Charmy_ing/pen/WNYyeOv" target="_blank">JS for迴圈九九乘法</a></div>
            <div class="wall-tag"><a href="https://codepen.io/Charmy_ing/pen/mdQMbZQ" target="_blank">限制內容字寬行數</a></div>
            <div class="wall-tag"><a href="https://codepen.io/Charmy_ing/pen/yLQBLMw" target="_blank">Engineering Calculator</a></div>
            <div class="wall-tag"><a href="https://codepen.io/Charmy_ing/pen/RwBeNRz" target="_blank">Todo List LocalStorage</a></div>
        </section>

    </div>
</template>
<script>
import sharedData from "@/assets/js/sharedData";
import ArticleList from "@/components/ArticleList.vue";
import { defineComponent, ref, onMounted, computed } from "vue";
export default {
    components: {
        ArticleList,
    },
    setup() {
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

        // 用 computed 抓全局變數
        const Countall = computed(() => sharedData.allArticleCount);
        const Countweb = computed(() => sharedData.webArticleCount);
        const Counthtml = computed(() => sharedData.htmlArticleCount);
        const Countcss = computed(() => sharedData.cssArticleCount);
        const Countjs = computed(() => sharedData.jsArticleCount);
        const Countvue = computed(() => sharedData.vueArticleCount);
        const Countdatabase = computed(() => sharedData.databaseArticleCount);
        const Countpython = computed(() => sharedData.pythonArticleCount);

        // 天氣 api
        const weatherDatas = ref([]);
        const locationName = ref("");
        const getWeather = () => {
            fetch(
                "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AB74CE7B-2CF2-4D40-A61C-6F5D05C0DEB6&format=JSON&sort=time"
            )
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

        return {
            // 文章數量計算
            allArticleCount: Countall,
            webArticleCount: Countweb,
            htmlArticleCount: Counthtml,
            cssArticleCount: Countcss,
            jsArticleCount: Countjs,
            vueArticleCount: Countvue,
            databaseArticleCount: Countdatabase,
            pythonArticleCount: Countpython,
            // 天氣 api
            weatherDatas,
            locationName,
            getWeather
        };
    },
};
</script>