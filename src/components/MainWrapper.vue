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
    .main-wrapper {
        display: flex;
        flex-direction: column;
    }

</style>