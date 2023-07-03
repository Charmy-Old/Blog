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
    transform: scale(1);
    transition: all .3s linear;
}

.resumeProfile a img:hover {
    overflow: hidden;
    transform: scale(1.1);
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
    transition: all 0.5s ease;
}

.wall-tag:first-child {
    margin-top: 1rem;
}

.wall-tag:last-child {
    margin-bottom: 1rem;
}

.wall-tag a:hover {
    color: brown !important;
}

.wall-tag a i {
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
        width: 70%;
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

    .resumeProfile a img {
        width: 100%;
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

</style>
<template>
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

        <div class="wall-article-project">
            <section class="wall-article">
                <div class="wall-tag"><a href="Article"><i class="fa-solid fa-tag"></i>全部標籤</a></div>
                <div class="wall-tag"><a href="Article-Web">Web</a></div>
                <div class="wall-tag"><a href="Article-HTML">HTML</a></div>
                <div class="wall-tag"><a href="Article-CSS">CSS</a></div>
                <div class="wall-tag"><a href="Article-JavaScript">JavaScript</a></div>
                <div class="wall-tag"><a href="Article-Vue">Vue</a></div>
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

    </div>
</template>
<script>
    export default {
        setup() {}
    };
</script>