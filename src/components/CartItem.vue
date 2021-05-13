<template>
    <div class="cart-item">
        <img
            class="cart-item__img"
            :src=" require('../assets/img/' + cart_item_data.image) "
            alt=""
        >
        <div class="cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="cart-item__quantity">
            <p>Qty:</p>
            {{cart_item_data.quantity}}
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
            }
        },
        mounted() {
            this.$set(this.cart_item_data, 'quantity', 1)
        }
    }
</script>

<style lang="scss">
    .cart-item {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;

        &__img{
            max-width: 100px;
        }
    }
</style>