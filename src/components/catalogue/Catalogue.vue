<template>
    <div class="catalogue">
        <router-link :to="{name: 'cart', params: {cart_data:CART}}">
            <div class="catalogue__link_to_cart">
                Cart: {{CART.length}}
            </div>
        </router-link>
        <CatalogueItem
            v-for="product in PRODUCTS"
            :key="product.article"
            :product_data="product"
            @addToCart="addToCart"
        />
    </div>
</template>

<script>
    import CatalogueItem from "../catalogue/CatalogueItem"
    import {mapActions, mapGetters} from 'vuex'
    
    export default {
        name: "Catalogue",
        components: {CatalogueItem},
        data() {
            return {
            
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART'
            ])
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data);
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
                .then((response) => {
                    if(response.data){
                        console.log('Data arrived!')
                    }
                })
        }
    }
</script>

<style lang="scss">
    .catalogue{
        display: flex;
        flex-wrap: wrap;
        margin: -10px;

        &__link_to_cart{
            position: absolute;
            top: 20px;
            right: 0;
            padding: 10px;
        }
    }
</style>