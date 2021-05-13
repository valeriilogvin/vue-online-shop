<template>
    <section class="main-wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </section>
</template>

<script>
    export default {
        name: "MainWrapper",
        computed: {

        }
    }
</script>

<style>
    * {
        box-sizing: border-box;
    }

    section {
        padding: 80px 0;
    }

    .container {
        width: 1024px;
        margin: auto;
    }
    .main-wrapper {
        display: flex;
        flex-direction: column;
    }

</style>