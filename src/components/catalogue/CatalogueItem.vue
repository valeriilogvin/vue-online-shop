<template>
    <div class="catalogue-item">
        <div class="catalogue-item__img-block">
            <img
                    :src=" require('../../assets/img/' + product_data.image) "
                    alt=""
                    class="catalogue-item__img"
            >
        </div>
        <p class="catalogue-item__title">
            {{product_data.name}}
        </p>
        <p class="catalogue-item__price">
            Price: {{product_data.price}} грн.
        </p>
        <button
                class="catalogue-item__btn"
                @click="addToCart"
        >
            Add to card
        </button>
    </div>
</template>

<script>
    export default {
        name: "CatalogueItem",
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            addToCart(){
                this.$emit('addToCart',this.product_data)
            }
        }
    }
</script>

<style lang="scss">
    .catalogue-item {
        border: 1px solid $color-green;
        padding: 20px;
        width: calc(100% / 3 - 20px);
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>