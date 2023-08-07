<style>
.percentLoad {
    width: 100%;
    height: 100%;
    font-size: 16px;
    /* color: #ffffff; */
    display: flex;
    justify-content: center;
    align-items: center;
}

#loader {
    position: fixed;
    bottom: 120px;
    right: 35px;
    width: 60px;
    height: 60px;
}r
.progressBar .loader:before {
  display: block;
  padding-top: 100%;
}
.circleLoad {
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
}
  
  .progressBar {
    position: sticky;
    top: 0;
  }

#loadPath {
  stroke-dasharray: 0,200;
}

#loadBack {
    stroke-dasharray: 140,200;
}

  body {
    margin:0px;
  }
</style>


<template>
    <div class="progressBar">
        <div id="loader">
        <div class="percentLoad" style="color: #c99969;">
            {{loadPercent + '%'}}
        </div>
            <svg class="circleLoad" viewBox="25 25 50 50" >
            <circle id="loadBack" cx="50" cy="50" r="20" fill="none"   stroke="#222223" stroke-width="4" />
            <circle id="loadPath" cx="50" cy="50" r="20" fill="none"   stroke="#c99969" stroke-width="5" />
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
                document.getElementById("loadPath").style.strokeDasharray =
                    percent * 2.6 + "% 200";
                document.getElementById("loader").style.background = `${loadPercent.value / 100 / 2}) 40%,rgba(255, 0, 0, 0.12) 70%)`;
            };
        });
        return { loadPercent };
    },
});
</script>

