<template>
    <section class="main-wrapper">
        <div class="container">
            <Catalogue/>
            <Cart/>
        </div>
    </section>
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