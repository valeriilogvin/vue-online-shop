<template>
    <div class="cart-item">
        <img
            class="cart-item__img"
            :src=" require('../../assets/img/' + cart_item_data.image) "
            alt=""
        >
        <div class="cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}} грн.</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="cart-item__quantity">
            <p>Qty:</p>
            <span>
                <span @click="decrementItem">-</span>
                    {{cart_item_data.quantity}}
                <span @click="incrementItem">+</span>
            </span>
        </div>
        <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
    export default {
        name: "CartItem",
        props: {
            cart_item_data: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        methods: {
            deleteFromCart(){
                this.$emit('deleteFromCart')
            },

            incrementItem(){
                this.$emit('increment')
            },

            decrementItem(){
                this.$emit('decrement')
            }
        }
    }
</script>

<style lang="scss">
    .cart-item {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        border: 1px solid $color-green;
        padding: 20px;
        margin-bottom: 15px;

        &__img{
            max-width: 100px;
        }

        &__info{
            text-align: center;
            padding: 0 30px;
        }

        &__quantity{
            text-align: center;
            padding: 0 30px;
        }
    }
</style>