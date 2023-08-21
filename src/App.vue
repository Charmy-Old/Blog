<style lang="scss">
    @import "~bootstrap/scss/bootstrap";
</style>

<style lang="scss">
    @import url("https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap"); /* 花禮胡哨 font */
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@1,700&display=swap'); /* 中文繁體 font */
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); /* code font */
    @import "./assets/css/common/reset.css";
    @import "./assets/css/common/style.css";
</style>



<template>
    <router-view/>
</template>



<script>
    import AOS from "aos"
    import "aos/dist/aos.css"
    
    export default {

        mounted () {
            AOS.init()
        }

    }
</script>