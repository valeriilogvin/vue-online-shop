<template>
    <div class="cart">
        <router-link :to="{name: 'catalog'}">
            <div class="catalogue__link_to_cart">
                Back to catalogue
            </div>
        </router-link>
        <h1 class="cart__title">CART</h1>
        <p v-if="!cart_data.length">There are no products in cart...</p>
        <CartItem
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
        />
        <div class="cart__total">
            <p class="cart__total-name">Total:</p>
            <p>{{cartTotalCost}} ГРН.</p>
        </div>
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
        computed: {
            cartTotalCost(){
                let result = [];

                if(this.cart_data.length){
                    for (let item of this.cart_data){
                        result.push(item.price * item.quantity)
                    }
                    result = result.reduce(function (sum, el) {
                        console.log(sum)
                        console.log(el)
                        return sum + el;
                    })
                    return result;
                } else {
                    return 0;
                }
            }
        },
        methods:{
            ...mapActions([
                'DELETE_FROM_CART',
                'INCREMENT_CART_ITEM',
                'DECREMENT_CART_ITEM'
            ]),
            increment(index){
                this.INCREMENT_CART_ITEM(index)
            },
            decrement(index){
                this.DECREMENT_CART_ITEM(index)
            },
            deleteFromCart(index){
                this.DELETE_FROM_CART(index)
            }
        },
    }
</script>

<style lang="scss">
    .cart{
        display: flex;
        flex-direction: column;
        align-items: center;

        &__title{
            font-size: 40px;
            padding-bottom: 30px;
        }
        &__total {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            padding: 20px 20px;
            display: flex;
            justify-content: center;
            background: #4FA831;
            color: #ffffff;
            font-size: 20px;
        }
        &__total-name{
            margin-right: 20px;
        }
    }
</style>