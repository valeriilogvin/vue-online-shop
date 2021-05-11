<template>
    <div class="main-wrapper">
        <div class="container">
            <Catalogue/>
            <Cart/>
        </div>
    </div>
</template>

<script>
    import Catalogue from "./Catalogue"
    import Cart from "./Cart"

    export default {
        name: "MainWrapper",
        components: {Cart, Catalogue}
    }
</script>

<style>
    .main-wrapper {
        display: flex;
        flex-direction: column;
    }

</style>