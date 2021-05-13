<template>
    <div class="catalogue">
        <CatalogueItem
            v-for="product in PRODUCTS"
            :key="product.article"
            :product_data="product"
            @addToCart="addToCart"
        />
    </div>
</template>

<script>
    import CatalogueItem from "./CatalogueItem"
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
                'PRODUCTS'
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

<style>
    .catalogue{
        display: flex;
        flex-wrap: wrap;
        margin: -10px;
    }
</style>