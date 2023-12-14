const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false
})

module.exports = {
    // ...
    head: {
        title: "Charmying Blog",
        meta: [
            {
                name: "description",
                content: "Charmy 的部落格",
            },
            {
                name: "keywords",
                content: "Charmy, 部落格, 部落格首頁, 前端, Front-End, 美食",
            },
        ],
    },
};