<style scoped>

    #header-menu-switch{
        display: none;
    }
    
    .header {
        height: 80px;
        display: flex;
        justify-content: center;
        margin: auto;
        padding: 0 1rem;
        position: relative;
        z-index: 9999;
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
    
    .header-list a {
        font-size: 18px;
        font-weight: 900;
        display: block;
        padding: 0rem 1.5rem;
        color: #26273B;
        transition: all 0.5s ease;
    }
    
    .header-list a:hover {
        color: #FFFFFF;
    }
    
    .header-underline {
        width: 120px;
        height: 1px;
        display: none;
        margin: 0.5rem auto 1rem;
        background-color: #26273B;
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
            background-color: #26273B; /* 線 */
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
            top: 80px;
            left: -100%;
            /* background-image: url("../assets/images/background.webp");
            background-size: cover; */
            background-color: #D3D3D3;
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

        .header-list a {
            display: flex;
            justify-content: space-between;
        }

        .header-underline {
            width: 0%;
            display: block;
            margin: 0 0 0.5rem;
            transition: all 1s ease;
        }

        .header-list:hover .header-underline {
            width: 100%;
        }
    }

    .title {
        font-family: "Henny Penny";
        font-size: 48px;
        font-weight: 900;
        line-height: 180px;
        color: #26273B;
        text-align: center;
    }

    @media screen and (max-width: 991px) {
        .title {
            font-size: 36px;
            line-height: 80px;
            transform: translateY(-80px);
        }
    }

    @media screen and (max-width: 575px) {
        .title {
            font-size: 24px;
        }
    }

</style>

<template>
    <header>
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
                        <li class="header-list">
                            <a href="Resume">
                                <p>Resume</p>
                            </a>
                            <span class="header-underline"></span>
                        </li>
                        <li class="header-list">
                            <a href="Side-Project">
                                <p>Side Project</p>
                            </a>
                            <span class="header-underline"></span>
                        </li>
                        <li class="header-list">
                            <a href="Article">
                                <p>Article</p>
                            </a>
                            <span class="header-underline"></span>
                        </li>
                    </ul>
                 </nav>
            </div>
        </div>
        <div class="title">
            <h1><a href="/">{{ Title }}</a></h1>
        </div>
    </header>
</template>

<script>
import { ref, onMounted } from 'vue'
    export default {
        setup() {
            const Title = ref("");

            const showTitle = () => {
                const originalText = "Charmying Blog";
                let index = 0;
                const intervalId = setInterval(() => {
                    Title.value += originalText[index];
                    index++;
                    if (index === originalText.length) {
                        clearInterval(intervalId);
                    }
                }, 250) // 控制每個字出現的時間間隔，單位為毫秒
            }

            onMounted(() => {


                showTitle();

            })

            return {
                Title,
                showTitle,
            };
        }
    };
</script>