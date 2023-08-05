import { reactive } from 'vue';

// 抓全局 Data
const sharedData = reactive({
    allArticleCount: 0,
    webArticleCount: 0,
    htmlArticleCount: 0,
    cssArticleCount: 0,
    jsArticleCount: 0,
    vueArticleCount: 0,
    reactArticleCount: 0,
    databaseArticleCount: 0,
    pythonArticleCount: 0,
});

export default sharedData;