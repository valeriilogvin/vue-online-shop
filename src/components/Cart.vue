<template>
    <div class="cart">
        <h1>CART</h1>
        <CartItem
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
        />
    </div>
</template>

<script>
    import CartItem from "./CartItem"
    import {mapActions} from "vuex"

    export default {
        name: "Cart",
        components: {
            CartItem
        },
        props: {
            cart_data: {
                type: Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            ...mapActions([
                'DELETE_FROM_CART'
            ]),
            deleteFromCart(index){
                this.DELETE_FROM_CART(index)
            }
        }
    }
</script>

<style>

</style>