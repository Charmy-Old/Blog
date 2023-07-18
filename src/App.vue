<style lang="scss">
    @import "~bootstrap/scss/bootstrap";
</style>

<style lang="scss">
    @import url("https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap"); /* font */
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