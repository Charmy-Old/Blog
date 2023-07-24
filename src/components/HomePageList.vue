<style scoped>
    .pageList {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 5%;
        margin: 0.5rem 0 0;
        padding: 0.5rem 2.5rem;

        /* 超過 10 頁改用 grid */
        /* display: grid;
        grid-template-columns: repeat(10, 1fr);
        text-align: center; */
    }

    .pageList li {
        width: 35px;
        height: 35px;
        line-height: 31px;
        color: #222223;
        background-color: #FFFAFA;
        border: 2px #26273B solid;
        border-radius: 50%;
        display: block;
        text-align: center;
        margin: 0 0 1rem;
        transition: all .3s linear;
    }

    .pageList li a:hover {
        color: #FFFAFA;
        background-color: #222223;
    }


    .pageList li a {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        display: block;
    }

</style>
<template>
    <ul class="pageList">
        <li><a href="/">1</a></li>
        <li><a href="/Home2">2</a></li>
        <li><a href="/Home3">3</a></li>
        <li><a href="/Home4">4</a></li>
    </ul>
</template>
<script>
    export default {
        setup() {}
    };
</script>