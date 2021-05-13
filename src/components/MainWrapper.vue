<template>
    <section class="main-wrapper">
        <div class="container">
            <Catalogue/>
            <Cart
                v-if="CART.length"
                :cart_data="CART"
            />
        </div>
    </section>
</template>

<script>
    import Catalogue from "./Catalogue"
    import Cart from "./Cart"
    import {mapGetters} from 'vuex'

    export default {
        name: "MainWrapper",
        components: {
            Cart,
            Catalogue
        },
        computed: {
            ...mapGetters([
                'CART'
            ])
        }
    }
</script>

<style>
    .main-wrapper {
        display: flex;
        flex-direction: column;
    }

</style>