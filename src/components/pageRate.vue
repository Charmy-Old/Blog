<style>
.pageRate {
    position: sticky;
    top: 0;
}

.pageRate-loader {
    width: 60px;
    height: 60px;
    position: fixed;
    right: 35px;
    bottom: 120px;
}

.pageRate-loader:before {
  display: block;
  padding-top: 100%;
}

.pageRate-percent-load {
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-weight: 900;
    color: #C99969;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pageRate-circle-load {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
}

.pageRate-circleBack {
    border: 1px #C99969 solid;
    stroke-dasharray: 140,200;
}

.pageRate-circlePath {
  stroke-dasharray: 0,200;
}

</style>


<template>
    <div class="pageRate">
        <div class="pageRate-loader">
            <div class="pageRate-percent-load"> {{ loadPercent + "%" }} </div>
            <svg class="pageRate-circle-load" viewBox="25 25 50 50" >
                <circle class="pageRate-circleBack" cx="50" cy="50" r="20" fill="none" stroke="#515A6E" stroke-width="4" /> <!-- 背景色 -->
                <circle class="pageRate-circlePath" cx="50" cy="50" r="20" fill="none" stroke="#C99969" stroke-width="5" /> <!-- 圓圈色 -->
            </svg>
        </div>
    </div>  
</template>


<script>
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
    setup() {
        const loadPercent = ref(0);
        onMounted(() => {
            onscroll = () => {
                let height = document.body.scrollHeight - window.innerHeight;
                let scroll = window.scrollY;
                let percent = (scroll / height) * 100;
                loadPercent.value = Math.round(percent, 2);
                document.querySelector(".pageRate-circlePath").style.strokeDasharray = percent * 2.6 + "% 200";
                document.querySelector(".pageRate-loader").style.background = `${loadPercent.value / 100 / 2}) 40%,rgba(255, 0, 0, 0.12) 70%)`;
            };
        });
        return {
            loadPercent,
        };
    },
});
</script>

