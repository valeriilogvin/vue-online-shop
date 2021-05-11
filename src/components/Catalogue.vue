<template>
    <div class="catalogue">
        <CatalogueItem />
    </div>
</template>

<script>
    import CatalogueItem from "./CatalogueItem"
    export default {
        name: "Catalogue",
        components: {CatalogueItem}
    }
</script>

<style>
    .catalogue{
        display: flex;
        flex-wrap: wrap;
        margin: -20px;
    }
</style>