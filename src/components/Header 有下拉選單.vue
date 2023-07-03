<style scoped>

    #header-menu-switch{
        display: none;
    }
    
    .header {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        margin: auto;
        padding: 0 1rem;
        position: fixed;
        top: 0;
        z-index: 9999;
        background-color: #26273B;
    }
    
    /* LOGO圖片 */
    .header-logo {
        width: 220px;
        height: 80px;
    }
    
    
    .header-content {
        line-height: 80px;
    }
    
    .header-hb {
            display: none;
        }
    
    .header-nav {
        width: fit-content;
        display: flex;
    }
    
    .header-nav > ul {
        display: flex;
    }
    
    .header-title, .box-distance a {
        font-size: 18px;
        font-weight: 900;
        display: block;
        padding: 0rem 1.5rem;
        color: #C4A87E;
        transition: all 0.5s ease;
    }
    
    .header-title:hover, .box-distance a:hover {
        color: #FFFFFF;
    }
    
    .header-downarrow {
        display: none;
    }
    
    .header-underline {
        width: 120px;
        height: 1px;
        display: nonek;
        margin: 0.5rem auto 1rem;
        background-color: #C4A87E;
    }
    
    .header-options li {
        cursor: pointer;
        transition: all 0.5s ease;
    }
    
    .header-options li:hover {
        color: #FFFFFF;
    }
    
    .header-member {
        display: flex;
    }
    
    .header-member i {
        width: 20px;
        height: 20px;
        align-self: center;
        margin-right: 0.5rem;
    }
    
    @media screen and (min-width: 992px) {
        .header-options {
            max-height: 0px;
            background-color: #26273B;
            text-align: center;
            overflow: hidden;
            transition: all .5s linear;
        }
    
        .box-distance:hover .header-options {
            max-height: 320px;
        }
    
    }
    
    @media screen and (max-width: 991px) {
        .header {
            padding: 0 2rem 0 1rem;
        }
    
        .header-hb {
            width: 40px;
            height: 40px;
            display: block;
            align-self: center;
            margin-left: auto;
            position: relative;
        }
    
        .header-hb-line {
            width: 32px;
            height: 2px;
            margin: auto;
            position: absolute;
            right: 0;
            left: 0;
            background-color: #C4A87E; /* 線 */
            opacity: 1;
            transform: rotate(0deg);
        }
    
        .header-hb-line:nth-child(1) {
            top: 7px;
        }
    
        .header-hb-line:nth-child(2) {
            top: 19px;
        }
    
        .header-hb-line:nth-child(3) {
            top: 31px;
        }
    
        #header-menu-switch:checked + .header .header-hb-line:nth-child(1) {
            animation: hb-line-1 1s 1s forwards;
        }
    
        /* @keyframes hb-line-1 {
            0% {
                top: 7px;
                transform: rotate(0deg);
            }
        
            50% {
                top: 19px;
                transform: rotate(0deg);
            }
        
            100% {
                top: 19px;
                transform: rotate(405deg);
            }
        
        }
         */
        @keyframes hb-line-1 {
            0% {
                top: 7px;
                transform: rotate(0deg);
            }
        
            10% {
                top: 31px;
                transform: rotate(0deg);
            }
        
            20% {
                top: 7px;
                transform: rotate(0deg);
            }
        
            30% {
                top: 31px;
                transform: rotate(0deg);
            }
        
            40% {
                top: 7px;
                transform: rotate(0deg);
            }
        
            50% {
                top: 19px;
                transform: rotate(0deg);
            }
        
            75% {
                top: 19px;
                transform: rotate(-405deg);
            }
        
            100% {
                top: 19px;
                transform: rotate(405deg);
            }
        
        }
    
        #header-menu-switch:checked + .header .header-hb-line:nth-child(2) {
            animation: hb-line-2 1s 0s forwards;
        }
    
        /* @keyframes hb-line-2 {
            0% {
                opacity: 1;
            }
        
            100% {
                opacity: 0;
            }
        
        }
         */
        @keyframes hb-line-2 {
            0% {
                opacity: 1;
            }
        
            10% {
                opacity: 0;
            }
        
            20% {
                opacity: 1;
            }
        
            30% {
                opacity: 0;
            }
        
            40% {
                opacity: 1;
            }
        
            50% {
                opacity: 0;
            }
        
            60% {
                opacity: 1;
            }
        
            70% {
                opacity: 0;
            }
            80% {
                opacity: 1;
            }
            90% {
                opacity: 0;
            }
        
            100% {
                opacity: 0;
            }
        }
        #header-menu-switch:checked + .header .header-hb-line:nth-child(3) {
            animation: hb-line-3 1s 1s forwards;
        }
        /* @keyframes hb-line-3 {
            0% {
                top: 31px;
                transform: rotate(0deg);
            }
            50% {
                top: 19px;
                transform: rotate(0deg);
            }
            100% {
                top: 19px;
                transform: rotate(675deg);
            }
        } */
        @keyframes hb-line-3 {
            0% {
                top: 31px;
                transform: rotate(0deg);
            }
            10% {
                top: 7px;
                transform: rotate(0deg);
            }
            20% {
                top: 31px;
                transform: rotate(0deg);
            }
            30% {
                top: 7px;
                transform: rotate(0deg);
            }
            40% {
                top: 31px;
                transform: rotate(0deg);
            }
            50% {
                top: 19px;
                transform: rotate(0deg);
            }
            75% {
                top: 19px;
                transform: rotate(-675deg);
            }
            100% {
                top: 19px;
                transform: rotate(675deg);
            }
        }
        #header-menu-switch:checked + .header .header-nav {
            left: 0;
            opacity: 1;
            transition: opacity 1s 2s;
        }
        .header-nav {
            width: 100%;
            position: absolute;
            top: 100%;
            left: -100%;
            /* background-image: url("../assets/images/background.webp");
            background-size: cover; */
            background-color: #26273B;
            opacity: 0;
            transition: opacity 1s 0s,
                        left    0s 1s;
        }
        .header-nav > ul {
            width: 100%;
            display: block;
            float: left;
            /* float: right; */
        }
        .header-title {
            display: flex;
            justify-content: space-between;
        }
        .box-distance a {
            display: flex;
            justify-content: space-between;
        }
        .header-downarrow {
            display: block;
            width: 30px;
            height: 15px;
            align-self: center;
            margin-bottom: 2%; /* 微調箭頭對齊 */
            transition: all 1s ease;
        }
        .header-underline {
            width: 0%;
            display: block;
            margin: 0 0 0.5rem;
            transition: all 1s ease;
        }
        .box-distance:hover .header-underline {
            width: 100%;
        }
        .header-options {
            max-height: 0;
            overflow: hidden;
            transition: all 1s ease 1s;
        }
    }

</style>

<template>
    <header>
        <section>
            <input type="checkbox" name="" id="header-menu-switch">
            <div class="header">
                <!-- 漢堡 -->
                <label for="header-menu-switch" class="header-hb">
                    <span class="header-hb-line"></span>
                    <span class="header-hb-line"></span>
                    <span class="header-hb-line"></span>
                </label>
    
                <!-- 選單 -->
                <div class="header-content">
                    <nav class="header-nav">
                        <ul>
                            <li class="box-distance">
                                <a href="javascript:;">
                                    <p>簡介 Resume</p>
                                </a>
                                <span class="header-underline"></span>
                            </li>
                            <li class="box-distance">
                                <div class="header-title">
                                    <p>作品 Side Project</p>
                                    <img class="header-downarrow" src="../assets/images/downarrow.webp" alt="">
                                </div>
                                <span class="header-underline"></span>
                                <ul class="header-options">
                                    <li><a href="javascript:;">工程計算機</a></li>
                                    <li><a href="javascript:;">備忘錄</a></li>
                                    <li><a href="javascript:;">緯育個人專題</a></li>
                                    <li><a href="javascript:;">緯育團體專題</a></li>
                                </ul>
                            </li>
                            <li class="box-distance">
                                <div class="header-title">
                                    <p>筆記 Note</p>
                                    <img class="header-downarrow" src="../assets/images/downarrow.webp" alt="">
                                </div>
                                <span class="header-underline"></span>
                                <ul class="header-options">
                                    <li><a href="javascript:;">CSS</a></li>
                                    <li><a href="javascript:;">JavaScript</a></li>
                                    <li><a href="javascript:;">Vue</a></li>
                                </ul>
                            </li>
                        </ul>
                     </nav>
                </div>
            </div>
        </section>
    </header>
</template>

<script>
    import { onMounted } from 'vue';
    export default {
        setup() {
            onMounted(() => {
                if($(window).width() <= 991) {
                    let headerTitle = document.getElementsByClassName("header-title");

                    for(let i = 0; i < headerTitle.length; i++){
                        let headerOptions = document.getElementsByClassName("header-options");
                        let headerDownarrow = document.getElementsByClassName("header-downarrow");
                        headerTitle[i].addEventListener("click", function(){
                        
                            if(headerOptions[i].style.maxHeight == ""){
                                headerOptions[i].style.maxHeight = headerOptions[i].scrollHeight + "px"; // 設定 CSS：max-height
                                // headerDownarrow[i].style.transform = "rotate(180deg)";
                                headerDownarrow[i].style.transform = "rotate(1980deg)";
                            }else{
                                headerOptions[i].style.maxHeight = ""; // 移除 CSS： max-height
                                headerDownarrow[i].style.transform = "rotate(0deg)";
                            }
                        });
                    }
                }
            })
        },

        // Option API
        // data() { return {}; },
        // mounted() {},
        // methods: {},
        // watch: {},
        // unmounted() {},
    };
</script>